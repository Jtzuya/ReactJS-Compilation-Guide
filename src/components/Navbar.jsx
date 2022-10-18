import React from 'react'
import logo from '../assets/images/airbnb.svg'

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-col items-start sm:flex-row md:items-center justify-between gap-2 shadow-lg py-6 px-8">
          <img src={ logo } alt="React Logo" className="" />
      </div>
    </header>
  )
}

export default Navbar