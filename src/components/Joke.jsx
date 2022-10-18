import React from 'react'

const Joke = (props) => {
    const { alpha, num } = props
    return (
        <section>
            <h5>Letter: {alpha}</h5>

            {/* Ways on how to handle if else statements if we do not have a prop value */}
            {/**
             *     First Way
             *     {props.num && <p>Number: {props.num}</p>}
             * 
             *     Second Way (ternary)
             *     <p style={{display: props.num ? 'block' : 'none'}}>Number: {props.num}</p>
             * 
             *     {props.num ? 
             *      <p>Number: {props.num}</p> : 
             *      null
             *     }
             * 
             *     {props.num ? <p>Number: {props.num}</p> : <p>Number: Undefinded!</p>}
            */}

            <p>Number: {num}</p>
        </section>
    )
}

export default Joke