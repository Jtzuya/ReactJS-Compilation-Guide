import React from 'react';
import { Navbar, Form, Counter, Footer } from './components/index'

const App = () => {
    return (
        <div className="max-w-[550px] mx-auto p-5">
            <Counter />
            
            <div className="shadow-lg">
                <Navbar />
                <Form />
                <Footer />
            </div>
        </div>
    )
}

export { App }