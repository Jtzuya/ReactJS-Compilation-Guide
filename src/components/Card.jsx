import React from 'react'
import star from '../assets/images/Star.svg'

const Card = (props) => {
    const {img, tag, ratings, title, price} = props.data
    return (
        <div className="w-full min-w-[176px]">
            {/* Image Case */}
            <div className="w-full max-h-[235px] relative">
                <img loading="lazy" src={ img } alt="" className="w-full h-full object-cover max-h-[235px] min-h-[235px] bg-[#FF8588] rounded-lg"/>
                {tag ? <div className="absolute top-1.5 left-1.5 bg-white px-1.5 py-1 rounded-sm font-light text-[10.24px] uppercase">{tag}</div> : ''}
            </div>

            {/* Copies Case */}
            <div>
                {/* Rating Case */}
                <div className="flex items-center justify-start gap-[2px] pt-2.5">
                    {/* Star Icon */}
                    <img src={star} alt="star icon"/>
                    {/* Text */}
                    <p className="rating text-xs font-light">
                        {ratings.rating} 
                        <span className="ratingCount opacity-40">
                            ({ratings.count}) 
                            <span className="country">
                                • USA
                            </span>
                        </span>
                    </p>
                </div>

                {/* Title */}
                <p className="pt-2 font-light text-xs font-body">{title}</p>

                {/* Pricing */}
                <p className="pt-2 text-xs font-semibold font-body">From {price} <span className="font-light text-[#222222]">/ person</span></p>
            </div>
        </div>
    )
}

export default Card