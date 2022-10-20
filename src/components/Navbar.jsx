import React from 'react'
import { Link } from 'react-router-dom'
 

function Navbar({toggle}) {
    return (
    <div className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'>
       <Link to='/' className='pl-8 '>EGG</Link>
        
        <div className='px-2 cursor-pointer md:hidden ' onClick={toggle}>
            <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor" height='30px' width='30px'>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </div>

        <div className='pr-8 md:block hidden'> 
            <Link to='/' className='p-4'> Home </Link>
            <Link to='/menu' className='p-4'> Menu </Link>
            <Link to='/about' className='p-4'> About </Link>
            <Link to='/contact' className='p-4'>Contact </Link>
        </div>
    </div>
  )
}

export default Navbar
