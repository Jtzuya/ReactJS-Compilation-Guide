import React from 'react';
import { Navbar, MainContent, Footer } from './components/index'

const App = () => {
    return (
        <div className="max-w-screen-2xl mr-auto ml-auto">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    )
}

export { App }