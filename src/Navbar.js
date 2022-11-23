import background from './images/background.png'
import home from './images/home.png'
import Progressbar from 'react-progressbar-on-scroll'

function Navbar() {
    function mouseout() {
        let background = document.getElementById('background')
        background.style.filter = 'blur(1rem)'
        background.style.display = 'flex'
    }

    function mousein() {
        let background = document.getElementById('background')
        background.style.filter = 'none'
    }

    return (
        <>
            <div className="navbar">
                <div className="flex justify-center items-center w-48 mt-14 ml-10">
                    <img id="background" src={background} alt="background" width={35} height={35}/>
                    <img id="home" src={home} alt="home" width={35} height={35} onMouseOver={mouseout} onMouseOut={mousein} 
                    className="absolute cursor-pointer active:opacity-50 active:w-8 active:h-8" onClick={() => {window.location.href = '#home'}}/>
                </div>

                <div className="flex justify-evenly w-2/5 mr-10">
                    <div className="svg-wrapper">
                        <svg height={70} width={200} xmlns="http://www.w3.org/2000/svg">
                            <rect className="animation" height={60} width={100} rx={30} x={2} y={2}/>
                        </svg>
                        <button className="navbar-button">
                            <a href="#about">About</a>
                        </button>
                    </div>
                    
                    <div className="svg-wrapper">
                        <svg height={70} width={200} xmlns="http://www.w3.org/2000/svg">
                            <rect className="animation" height={60} width={100} rx={30} x={2} y={2}/>
                        </svg>
                        <button className="navbar-button">
                            <a href="#projects">Projects</a>
                        </button>
                    </div>

                    <div className="svg-wrapper">
                        <svg height={70} width={200} xmlns="http://www.w3.org/2000/svg">
                            <rect className="animation" height={60} width={100} rx={30} x={2} y={2}/>
                        </svg>
                        <button className="navbar-button">
                            <a href="#contact">Contact</a>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Progressbar 
                    color="#75d77e"
                    height={5}
                    direction="right"
                    position="top"
                />
            </div>
        </>
    )
}

export default Navbar