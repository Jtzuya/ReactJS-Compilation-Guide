import React, {useState} from 'react'
import axios from 'axios'
import Image from './Image'

const Form = () => {
    const [variaUrl, setVariaUrl] = useState(null)
    
    const generateNewMemeImage = (e) => {
        e.preventDefault()
        setTimeout(() => {
            fetchMeme()
        }, 300)
    }

    async function fetchMeme() {
        /**
         *  ~ Using fetch
         * 
         *  const response = await fetch(process.env.REACT_APP_MEME_API_SECRET)
         *  const datas = await response.json()
         *  const dataObj = datas.data
         *  const memeArr = dataObj.memes
         *  const anonymousNum = Math.floor(Math.random() * memeArr.length + 1)
         *  if(!anonymousNum) return;
         *  setVaria(memeArr[anonymousNum].url)
         */

        // Using Axios
        axios.get('https://api.imgflip.com/get_memes')
        .then(response => {
            const datas = response.data
            const dataObj = datas.data
            const memeObj = dataObj.memes
            const anonymousNum = Math.floor(Math.random() * memeObj.length)
    
            if(!anonymousNum) return;
            setVariaUrl(memeObj[anonymousNum].url)

            // Write your console.logs here
            console.log(anonymousNum)
        })
        .catch(err => console.log('something went wrong!', err))

        // console.log(anonymousNum, dataObj)
    }

    return (
        <section className="__wrapper pt-9 px-9 pb-14 flex flex-col gap-9">
            <form>
                <fieldset className="w-full flex items-center justify-between gap-[17px] mb-[15px]">
                    <input type="text" placeholder='text 1...' className="w-1/2 px-[11px] py-[10px] capitalize text-[12px]"/>
                    <input type="text" placeholder='text 2...' className="w-1/2 px-[11px] py-[10px] capitalize text-[12px]"/>
                </fieldset>
                <button 
                    className="w-full font-bold font-body bg-gradient-to-r from-[#F8C4B4] to-[#E5EBB2] bg-[200%] transition-all duration-100 rounded-[5px] p-2.5 text-[12px] uppercase text-white tracking-[0.25px] hover:text-[#000]" 
                    type="button"
                    onClick={generateNewMemeImage}
                >Generate New Meme Image</button>
            </form>

            <Image image={variaUrl} />
        </section>
    )
}

export default Form