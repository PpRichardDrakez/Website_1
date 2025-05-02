import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
            : 'text-gray-700 hover:text-blue-500 transition'
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
            : 'text-gray-700 hover:text-blue-500 transition'
        }
      >
        Acerca
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
            : 'text-gray-700 hover:text-blue-500 transition'
        }
      >
        Contacto
      </NavLink>
    </nav>
  )
}

export default Navbar
