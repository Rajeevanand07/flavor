import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <>
        <nav className='flex justify-between px-7 py-5 bg-[#FFF4F0]'>
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
            <span className='text-2xl font-bold uppercase cursor-pointer text-[#EC1B00]'>Flavor</span>
          </div>
          <div className='flex gap-5 items-center'>
            <NavLink className={(e)=>{return e.isActive?"text-[#EC1B00]":"text-black"}} to="/">Home</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-[#EC1B00] ":"text-black"}} to="/about">About</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-[#EC1B00] ":"text-black"}} to="/create">Create</NavLink>
          </div>
          <div className='flex gap-5 '>
            <button className='px-5 py-2 border text-[#EC1B00] border-[#EC1B00] rounded-[10px] hover:bg-[#EC1B00] hover:text-white transition-all ease-in-out duration-300 cursor-pointer'>Login</button>
            <button className='px-5 py-2 border text-[#EC1B00] border-[#EC1B00] rounded-[10px] hover:bg-[#EC1B00] hover:text-white transition-all ease-in-out duration-300 cursor-pointer'>Sign Up</button>
          </div>
        </nav>
    </>
  )
}

export default Nav