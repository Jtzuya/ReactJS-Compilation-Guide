import React, {useState} from 'react'

const Array = () => {
    const [strArr, setStrArr] = useState(['string 1', 'string 2', 'string 3'])

    function stringAdder() {

        // Using old way of looping
        setStrArr(prevStrArr => {
            let newSetOfArr = []
            for(let i = 0; i < prevStrArr.length; i++) {
                newSetOfArr.push(prevStrArr[i])
            }
            newStateOfStrArr.push(`string ${newSetOfArr.length + 1} `)
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
         *      newSetOfArr.push(`string ${newSetOfArr.length + 1} `)
         *      return newSetOfArr
         *  })
         * 
        */

        //  Using spread operator [...spread] (PREFERRED WAY!!!!)
        /**
         * 
         * setStrArr(prevStrArr => [...prevStrArr, `string ${prevStrArr.length + 1} `])
         * 
        */
    }

    return (
        <div>
            <button onClick={stringAdder}>Add New String to Our Array</button>
            <div>
                [
                    {strArr}
                ]
            </div>
        </div>
    )
}

export default Array