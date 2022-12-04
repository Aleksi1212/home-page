import { useRef } from 'react'
import Progressbar from 'react-progressbar-on-scroll'
import Contactform from './Contactform'

function Navbar() {
    const contactRef = useRef(null)

    function rotateMenu() {
        let menubars = document.getElementById('menubars')
        let menu = document.getElementById('menu')

        if (menubars.style.transform === 'rotate(90deg)') {
            menubars.style.transform = 'rotate(0deg)'
            menu.style.marginTop = '-20rem'
        } else {
            menubars.style.transform = 'rotate(90deg)'
            menu.style.marginTop = '0rem'
        }
    }

    return (
        <>
            <header className="navbar">
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
                        <button className="navbar-button" ref={contactRef}>
                            <a>Contact</a>
                        </button>
                    </div>
                </div>
                    
                <div className='menu' id='menu'>
                    <ul className='ml-4 mt-20'>
                        <li className='pb-4'><a href='#about'>About</a></li>
                        <li ><a href='#projects'>Projects</a></li>
                        <li className='pt-4' ><a>Contact</a></li>
                    </ul>
                </div>

                <div className='menubars' id='menubars' onClick={rotateMenu}>
                    <span className='menu-line line1'></span>
                    <span className='menu-line line2'></span>
                    <span className='menu-line line3'></span>
                </div>
            </header>
            <Contactform test={contactRef} />

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