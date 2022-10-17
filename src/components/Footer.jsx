import React from 'react'

const Footer = () => {
  return (
    // HTML Entities docs (i.e ⓒ) https://www.w3schools.com/html/html_entities.asp
    <footer>
      <div className="px-6 py-5 bg-react-blue-dark text-xs font-body text-react-blue-light-2">
        &copy; 2022 Jtzuya Development. All rights reserved
        <p className="pt-2 font-body font-medium tracking-wide uppercase text-[11.5px]">Check Figma design ~ <a className="decoration-none text-blue" target="blank" href="https://www.figma.com/proto/L76SgGAglpcOmwCane0iQe/ReactFacts-(Copy)?page-id=0%3A1&node-id=0%3A4&viewport=309%2C315%2C0.75&scaling=min-zoom">here</a></p>
      </div>
    </footer>
  )
}

export default Footer