import React from 'react'
import photoGrid from '../assets/images/photo-grid.png'

const Masonry = () => {
  return (
    <section>
      <div className="grid place-content-center px-4 pt-6">
        <img src={photoGrid} alt="" className="max-w-sm w-full" />
      </div>
    </section>
  )
}

export default Masonry