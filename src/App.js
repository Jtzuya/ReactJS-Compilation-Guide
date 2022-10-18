import React from 'react';
import { Navbar, Masonry, RichText, Slider, Footer } from './components/index'

const App = () => {

    const sliderDatas = [
        {
            img: 'https://t.ly/Pnun',
            tag: 'Soldout',
            ratings: {
                rating: 5.0,
                count: 6
            },
            title: 'Life lessons with Katie Zaferes',
            price: '$136'
        },
        {
            img: 'https://t.ly/O0VK',
            tag: 'Online',
            ratings: {
                rating: 5.0,
                count: 30
            },
            title: 'Learn wedding photography',
            price: '$125'
        },
        {
            img: 'https://t.ly/xJCV',
            tag: '',
            ratings: {
                rating: 4.8,
                count: 2
            },
            title: 'Group Mountain Biking',
            price: '$50'
        },
        {
            img: 'https://t.ly/-Y5K',
            tag: 'Best Value',
            ratings: {
                rating: 4.4,
                count: 202
            },
            title: 'Casa Mira Hotel',
            price: '$500'
        },
        {
            img: 'https://t.ly/m0fV',
            tag: 'Hot deals',
            ratings: {
                rating: 4.9,
                count: 10
            },
            title: 'Studio',
            price: '$170'
        },
    ]

    return (
        <div className="max-w-screen-2xl mr-auto ml-auto">
            <Navbar />
            <Masonry />
            <RichText />
            <Slider sliderDatas={sliderDatas} />
            <Footer />
        </div>
    )
}

export { App }