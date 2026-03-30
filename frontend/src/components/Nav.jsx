import { NavLink, Link} from 'react-router'
import { useState } from 'react'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <nav className='flex justify-between px-4 sm:px-7 py-5 bg-[#FFF4F0] relative'>
          <div className='flex items-center gap-3'>
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              className="animate-pulse"
            >
              <circle cx="20" cy="20" r="18" fill="#EC1B00" opacity="0.1"/>
              <path 
                d="M20 8 C12 8 8 12 8 20 C8 28 12 32 20 32 C28 32 32 28 32 20 C32 12 28 8 20 8 Z" 
                fill="#EC1B00" 
                opacity="0.8"
              />
              <path 
                d="M15 15 L25 15 L25 25 L15 25 Z" 
                fill="white"
                opacity="0.9"
              />
              <circle cx="20" cy="20" r="3" fill="#EC1B00"/>
              <path 
                d="M12 12 Q20 8 28 12" 
                stroke="#EC1B00" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>
            <span className='text-xl sm:text-2xl font-bold uppercase cursor-pointer text-[#EC1B00]'>Flavor</span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex gap-5 items-center'>
            <NavLink className={(e)=>{return e.isActive?"text-[#EC1B00]":"text-black"}} to="/">Home</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-[#EC1B00] ":"text-black"}} to="/about">About</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-[#EC1B00] ":"text-black"}} to="/create">Create</NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className='hidden md:flex gap-3 lg:gap-5'>
            <Link to='/login'><button className='px-3 lg:px-5 py-2 border text-[#EC1B00] border-[#EC1B00] rounded-[10px] hover:bg-[#EC1B00] hover:text-white transition-all ease-in-out duration-300 cursor-pointer text-sm lg:text-base'> Login </button> </Link>
            <Link to='/signup'><button className='px-3 lg:px-5 py-2 border text-[#EC1B00] border-[#EC1B00] rounded-[10px] hover:bg-[#EC1B00] hover:text-white transition-all ease-in-out duration-300 cursor-pointer text-sm lg:text-base'> Signup </button> </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button 
            onClick={toggleMenu}
            className='md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none'
          >
            <span className={`block w-6 h-0.5 bg-[#EC1B00] transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#EC1B00] my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#EC1B00] transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-[#FFF4F0] shadow-lg transition-all duration-300 z-50 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className='flex flex-col p-4 space-y-4'>
              <NavLink 
                className={(e)=>{return e.isActive?"text-[#EC1B00]":"text-black"}} 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                className={(e)=>{return e.isActive?"text-[#EC1B00] ":"text-black"}} 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                className={(e)=>{return e.isActive?"text-[#EC1B00] ":"text-black"}} 
                to="/create" 
                onClick={() => setIsMenuOpen(false)}
              >
                Create
              </NavLink>
              <div className='flex gap-3 pt-2 border-t border-gray-200'>
                <Link to='/login' onClick={() => setIsMenuOpen(false)}>
                  <button className='flex-1 px-4 py-2 border text-[#EC1B00] border-[#EC1B00] rounded-[10px] hover:bg-[#EC1B00] hover:text-white transition-all ease-in-out duration-300 cursor-pointer text-sm'> Login </button>
                </Link>
                <Link to='/signup' onClick={() => setIsMenuOpen(false)}>
                  <button className='flex-1 px-4 py-2 border text-[#EC1B00] border-[#EC1B00] rounded-[10px] hover:bg-[#EC1B00] hover:text-white transition-all ease-in-out duration-300 cursor-pointer text-sm'> Signup </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Nav