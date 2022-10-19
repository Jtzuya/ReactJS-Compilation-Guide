import React, {useEffect, useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    function increase() {
        // Not best practice
        // setCount(count + 1)

        // Best Practice
        /**
         * prevCount param is the old/previous value of our state. If we refer current state which is set to '0' then our prevCount param is equal to '0'
         * but if we toggle run our function, then it triggers and updates our state, then the updated state is now our prevCount 
        */
        setCount((prevCount) => {
            return prevCount + 1
        })
    }

    function decrease() {
        if(count <= 0) return
        setCount((prevCount) => {
            return prevCount - 1
        })
    }

    const [iArr, setIArr] = useState(['str1 ', 'str2 '])

    function ourArr() {
        setIArr(prevArr => {
            // return [...prevArr, `str${prevArr.length + 1} `]
            let newArr = []
            for(let i = 0; i < prevArr.length; i++) {
                newArr.push(prevArr[i])
            }
            newArr.push(`str${newArr.length + 1} `)
            return newArr
        })
    }
   
    useEffect(() => {
        ourArr()
    }, [])

    return (
        <div className="py-10 flex items-center justify-center gap-4">
            <span onClick={decrease} className="cursor-pointer hover:text-highlight duration-500">-</span>
            <p className="p-4 bg-card-dark text-white rounded-full h-10 w-10 flex justify-center items-center pointer-events-none">{count}</p>
            <span onClick={increase} className="cursor-pointer hover:text-highlight duration-500">+</span>
            <button onClick={ourArr}>add</button>
            <br />
            <p>{iArr}</p>
        </div>
    )
}

export default Counter