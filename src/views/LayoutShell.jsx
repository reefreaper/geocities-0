// AppShell.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, Building2, Calendar, Users, ClipboardList, ListChecks, BarChart2, Settings } from 'lucide-react'

const navItems = [
	{ label: 'Dashboard', icon: <Home size={18} />, id: 'dashboard' },
	{ label: 'Facilities', icon: <Building2 size={18} />, id: 'facilities' },
	{ label: 'Calendar', icon: <Calendar size={18} />, id: 'calendar' },
	{ label: 'Tasks', icon: <ListChecks size={18} />, id: 'tasks' },
	{ label: 'Referrals', icon: <Users size={18} />, id: 'referrals' },
	{ label: 'Activities', icon: <ClipboardList size={18} />, id: 'activities' },
	{ label: 'Reports', icon: <BarChart2 size={18} />, id: 'reports' },
	{ label: 'Settings', icon: <Settings size={18} />, id: 'settings' }
]

export default function AppShell({ children }) {
	const [active, setActive] = useState('dashboard')

	const navigate = useNavigate()

	return (
		<div className="flex h-screen w-screen bg-gray-100 font-sans">
			{/* Sidebar */}
			<aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
				<div className="p-4 font-bold text-lg border-b border-gray-200">
					🩺 HomeHealth CRM
				</div>
				<nav className="flex-1 overflow-y-hidden">
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => {
								setActive(item.id)
								navigate(item.id)
							}}
							className={`flex items-center px-4 py-3 text-sm w-full text-left hover:bg-gray-100 ${active === item.id ? 'bg-gray-200 font-semibold' : ''
								}`}
						>
							<span className="mr-2">{item.icon}</span>
							{item.label}
						</button>
					))}
				</nav>
			</aside>

			{/* Main content */}
			<div className="flex-1 flex flex-col overflow-y-hidden">
				{/* Top Toolbar */}
				<header className="h-12 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
					<div className="text-sm text-gray-600">Today is {new Date().toLocaleDateString()}</div>
					<div className="text-sm text-gray-500">Welcome, Marketer</div>
				</header>

				{/* App content */}
				<main className="flex-1 overflow-hidden p-4 pr-0">
					{children || <div className="text-gray-500">Select a section to begin</div>}
				</main>
			</div>
		</div>
	)
}
