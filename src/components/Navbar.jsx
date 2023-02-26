import React , {useState} from 'react'

import { close , logo , menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
       <img src = {logo} alt = "Hoobank" className='w-[124px] h-[32px]' />
       <ul className='list-none sm:flex hidden'>
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className = {`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a src = {`#${link.id}`}>
              {link.title}
            </a>
          </li>
        ))}
       </ul>
       <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu}
            className = 'w-[24px] h-[24px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className = {`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar absolute`}  >
            <ul className='list-none flex flex-col justify-end items-center '>
            {navLinks.map((link, index) => (
            <li
              key={link.id}
              className = {`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white ml-[11px]`}
            >
              <a src = {`#${link.id}`}>
                {link.title}
              </a>
            </li>
            ))}
            </ul>
          </div>
       </div>
    </nav>
  )
}

export default Navbar