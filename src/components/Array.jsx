import React, {useState} from 'react'

const Array = () => {
    const [strArr, setStrArr] = useState(['string 1 ~ ', 'string 2 ~ ', 'string 3 ~ '])

    function stringAdder() {

        // Using old way of looping
        setStrArr(prevStrArr => {
            let newSetOfArr = []
            for(let i = 0; i < prevStrArr.length; i++) {
                newSetOfArr.push(prevStrArr[i])
            }
            newSetOfArr.push(`string ${newSetOfArr.length + 1} ~ `)
            return newSetOfArr
        })

        // Using Higher order functions i.e forEach or map method (NOT TESTED!!! but should work just like the for loop)
        /**
         * 
         *  setStrArr(prevStrArr => {
         *      let newSetOfArr = []
         *      prevStrArr.map(i => {
         *          newSetOfArr.push(i)
         *      })
         *      newSetOfArr.push(`string ${newSetOfArr.length + 1} ~ `)
         *      return newSetOfArr
         *  })
         * 
        */

        //  Using spread operator [...spread] (PREFERRED WAY!!!!)
        /**
         * 
         * setStrArr(prevStrArr => [...prevStrArr, `string ${prevStrArr.length + 1} ~ `])
         * 
        */
    }

    return (
        <div className="flex justify-center items-center flex-col gap-5 py-8">
            <button onClick={stringAdder} className="w-full my-4 bg-palegreen max-w-fit py-3 px-5 mx-auto rounded-md font-bold">Add New String to Our Array</button>
            <div className="max-w-[80%] mx-auto">
                [
                    {strArr}
                ]
            </div>
        </div>
    )
}

export default Array