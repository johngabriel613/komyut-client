import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { navLinks } from '../../constants';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false)

  return (
    <header className='fixed top-0 w-full bg-gradient-to-b from-[#10151D] via-[#10151D]/50 to-transparent py-4 md:py-6 z-50'>
      <nav className='container flex-center justify-between'>
        <img className='w-[100px] md:w-[125px]' src={logo} alt="komyut" />
        <Icon onClick={() => setIsNavActive(prev => !prev)} icon={isNavActive ? 'tabler:x' : 'tabler:menu-2'} className='block text-white md:hidden' width={24}/>
        <ul className={`grid gap-2 text-sm text-slate-400 absolute top-12 right-4 bg-[#161E29] py-4 px-8 rounded border border-[#2E3C51] md:static md:flex-center md:gap-6 md:p-0 md:text-base md:bg-transparent md:border-none md:visible md:opacity-1 ${isNavActive ? 'visible opacity-1' : 'invisible opacity-'}`}>
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
