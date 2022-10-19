import React from 'react'

const Image = (props) => {
    return (
        <div className="w-full max-w-[477px] h-[268px] relative bg-placeholder rounded-sm">
            {props && <img src={props.image} loading="lazy" alt="" className="object-contain border-solid border-[black] absolute top-0 left-0 w-full min-h-full  max-h-full rounded-sm" />}
        </div>
    )
}

export default Image