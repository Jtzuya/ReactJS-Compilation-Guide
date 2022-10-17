const App = () => {
    return (
        <div className="max-w-screen-2xl mr-auto ml-auto px-6 pt-10">
            <img src={require('./assets/images/logo192.png')} width="100" height="100" alt="" className="logo" />
            <h1 className="text-4xl font-bold mt-20">Fun facts about React</h1>
            <ul className="list-disc text-2xl font-medium mt-5 pl-10">
                <li>Trash (said by Anonymous Pro Dev)</li>
                <li>First released in 2013</li>
                <li>Originally created by Jordan Walke</li>
                <li>Has over 196+K Stars on <a href="https://github.com/facebook/react">Github</a></li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export { App }