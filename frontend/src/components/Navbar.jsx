import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  isActive
    ? 'text-indigo-600 font-semibold'
    : 'text-slate-600 hover:text-indigo-600 transition-colors'

function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold text-indigo-600">LearnLoop AI</span>
        <ul className="flex gap-6">
          <li>
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
