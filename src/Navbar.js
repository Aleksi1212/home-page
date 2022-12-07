import Progressbar from 'react-progressbar-on-scroll'

function Navbar() {

    function rotateMenu() {
        let menubars = document.getElementById('menubars')
        let menu = document.getElementById('menu')

        if (menubars.style.transform === 'rotate(90deg)') {
            menubars.style.transform = 'rotate(0deg)'
            menu.style.marginLeft = '-30rem'
        } else {
            menubars.style.transform = 'rotate(90deg)'
            menu.style.marginLeft = '0rem'
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
                        <button className="navbar-button">
                            <a href='#contact-form'>Contact</a>
                        </button>
                    </div>
                </div>
                    
                <div className='menu' id='menu'>
                    <ul className='flex justify-between w-[50%]'>
                        <li><a href='#about' onClick={rotateMenu}>About</a></li>
                        <li><a href='#projects' onClick={rotateMenu}>Projects</a></li>
                        <li><a href='#contact-form' onClick={rotateMenu}>Contact</a></li>
                    </ul>
                </div>

                <div className='menubars' id='menubars' onClick={rotateMenu}>
                    <span className='menu-line line1'></span>
                    <span className='menu-line line2'></span>
                    <span className='menu-line line3'></span>
                </div>
            </header>

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