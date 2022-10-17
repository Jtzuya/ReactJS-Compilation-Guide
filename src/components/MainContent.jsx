import React from 'react'
import logo from '../assets/images/logo512.png'

const MainContent = () => {
  return (
    <section>
      <div className="px-6 min-h-custom bg-react-body relative overflow-x-hidden py-14">
        <h1 className="text-4xl body font-body font-bold text-white">Fun facts about React</h1>
        <ul className="list-disc text-base text-white font-body font-normal mt-12 ml-6 mr-20 sm:ml-12 sm:mr-[86px]">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has over 196+K Stars on <a href="https://github.com/facebook/react">Github</a></li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>

        <img src={ logo } alt="React Logo" className="h-64 w-64 opacity-5 absolute -right-32 top-1/2 -translate-y-1/2" />
      </div>
    </section>
  )
}

export default MainContent