import React from 'react';
import { Navbar, Array, Footer } from './components/index'

const App = () => {
    return (
        <div className="max-w-[550px] mx-auto p-5">
            <div className="shadow-lg">
                <Navbar />
                <Array />
                <Footer />
            </div>
        </div>
    )
}

export { App }