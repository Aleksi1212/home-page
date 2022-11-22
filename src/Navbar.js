import home from './images/home.png'


function Navbar() {
    return (
        <>
            <div className="flex justify-between h-28 fixed w-screen">
                <div className="flex justify-center items-center w-48 mt-14 ml-10">
                    <img className="shadow" src={home} alt="home" width={35} height={35}/>
                    <h1>hello whats good</h1>
                </div>

                <div className="flex justify-evenly w-2/5 mr-10">
                    <div className="svg-wrapper">
                        <svg height={60} width={200} xmlns="http://www.w3.org/2000/svg">
                            <rect className="animation" height={60} width={100} rx={30} x={2}/>
                        </svg>
                        <button className="navbar-button">
                            <a href="#about">About</a>
                        </button>
                    </div>
                    
                    <div className="svg-wrapper">
                        <svg height={60} width={200} xmlns="http://www.w3.org/2000/svg">
                            <rect className="animation" height={60} width={100} rx={30} x={2}/>
                        </svg>
                        <button className="navbar-button">
                            <a href="#projects">Projects</a>
                        </button>
                    </div>

                    <div className="svg-wrapper">
                        <svg height={60} width={200} xmlns="http://www.w3.org/2000/svg">
                            <rect className="animation" height={60} width={100} rx={30} x={2}/>
                        </svg>
                        <button className="navbar-button">
                            <a href="#contact">Contact</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar