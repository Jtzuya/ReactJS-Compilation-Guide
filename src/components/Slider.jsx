import React from 'react'
import Card from './Card'

const Slider = (props) => {
  return (
    <section>
      {/* Slider Wrapper */}
      <div className="sliderWrapper pt-12 pl-9 pb-4 mb-8 flex gap-4 overflow-x-scroll">
        {/* Each Card */}
        {props.sliderDatas.map((data, i) => (
          <Card 
            key={i} 
            data={data}
            // Other way by using spread operator instead of using 'data-{data}'
            // {...data}
          />
        ))}
      </div>
    </section>
  )
}

export default Slider