import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({isOpen,toggle}) {
  return (
    <div className={isOpen ? 'dropdown-menu':'hidden'} onClick={toggle}>
            <Link to='/' className='p-4'> Home </Link>
            <Link to='/menu' className='p-4'> Menu </Link>
            <Link to='/about' className='p-4'> About </Link>
            <Link to='/contact' className='p-4'>Contact </Link>
    </div>
  )
}

export default Dropdown
