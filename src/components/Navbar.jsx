import React from 'react'
import logo from '../assets/images/logo192.png'

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-col items-start sm:flex-row md:items-center justify-between gap-2 shadow-lg py-5 px-6 bg-react-blue-dark">
        <div className="flex gap-1.5 items-center">
          <img src={ logo } alt="React Logo" className="logo w-6 h-6" />
          <h1 className="text-react-blue-light text-xl font-body font-bold">ReactFacts</h1>
        </div>
        <div className="text-react-blue-light-2 font-body font-semibold">React Course - Project 1</div>
      </div>  
    </header>
  )
}

export default Navbar