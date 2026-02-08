import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    // If already on homepage, reload to reset the stage
    if (location.pathname === '/') {
      e.preventDefault();
      window.location.reload();
    }
    // Otherwise, let the NavLink navigate normally
  };

  return (
    <header className='header'>
      <NavLink to='/' onClick={handleLogoClick}>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-4 sm:gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          Contact
        </NavLink>
        {/* Temporarily hidden until projects are ready
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        */}
      </nav>
    </header>
  );
};

export default Navbar;
