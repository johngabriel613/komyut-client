import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { navLinks } from '../../constants';

const Navbar = () => {
  return (
    <header className='fixed top-0 w-full bg-white py-4 shadow z-10'>
      <nav className='container flex-center justify-between'>
        <img src={logo} alt="komyut" />
        <ul className='flex-center gap-6 text-slate-500'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} className='navlink'>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
