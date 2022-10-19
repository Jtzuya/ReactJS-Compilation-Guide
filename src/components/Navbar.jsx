import React from 'react'

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-col items-center justify-between sm:flex-row md:items-center gap-2 shadow-lg py-4 px-6 bg-gradient-to-r from-[#F8C4B4] to-[#E5EBB2] rounded-t-md">
        <div className="flex items-center gap-[8px]">
          <img src="https://img.icons8.com/fluency/2x/doge.png" alt="Travel Journal Official Site" className="w-[31px]" />
          <h1 className="font-body font-bold text-react-body text-lg tracking-[0.25px] flex items-center gap-sm">Meem<p className="-scale-x-100 text-[oldlace]">R</p></h1>
        </div>
        <p className="text-sm text-react-body font-body font-medium">React Course - Project 3</p>
      </div>
    </header>
  )
}

export default Navbar