import Progressbar from 'react-progressbar-on-scroll'

function Navbar() {

    function rotateMenu() {
        let menubars = document.getElementById('menubars')
        let lines = [document.getElementById('line1'), document.getElementById('line2'), document.getElementById('line3')]
        let links = {
            aboutLink: document.getElementById('aboutLink'),
            projectLink: document.getElementById('projectLink'),
            contactLink: document.getElementById('contactLink')
        }

        if (menubars.style.transform === 'rotate(90deg)') {
            menubars.style.transform = 'rotate(0)'
            changeColors(lines, 'white')   

            links.contactLink.style.marginTop = '-6rem'
            setTimeout(showOrHideLinks, 200, links.projectLink, '-6rem')
            setTimeout(showOrHideLinks, 400, links.aboutLink, '-6rem')

        } else {
            menubars.style.transform = 'rotate(90deg)'
            changeColors(lines, '#75d77e')

            links.aboutLink.style.marginTop = '0'
            setTimeout(showOrHideLinks, 200, links.projectLink, '0')
            setTimeout(showOrHideLinks, 400, links.contactLink, '0')
        }

        function showOrHideLinks(element, marginTop) {
            element.style.marginTop = marginTop
        }

        function changeColors(items, color) {
            for (let i = 0; i < items.length; i++) {
                items[i].style.backgroundColor = color
            }
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
                            <a href="#about">
                                <span className='text-limeGreen'>.</span>about<span className='text-limeGreen'>()</span>
                            </a>
                        </button>
                    </div>
                    
                    <div className="svg-wrapper">
                        <svg height={70} width={200} xmlns="http://www.w3.org/2000/svg">
                            <rect className="animation" height={60} width={100} rx={30} x={2} y={2}/>
                        </svg>
                        <button className="navbar-button">
                            <a href="#projects">
                                <span className='text-limeGreen'>.</span>projects<span className='text-limeGreen'>()</span>
                            </a>
                        </button>
                    </div>

                    <div className="svg-wrapper">
                        <svg height={70} width={200} xmlns="http://www.w3.org/2000/svg">
                            <rect className="animation" height={60} width={100} rx={30} x={2} y={2}/>
                        </svg>
                        <button className="navbar-button">
                            <a href='#contact-form'>
                                <span className='text-limeGreen'>.</span>contact<span className='text-limeGreen'>()</span>
                            </a>
                        </button>
                    </div>
                </div>
                    
                <div className='menu' id='menu'>
                    <ul className='flex justify-between w-[50%]'>
                        <li className='link' id='aboutLink'>
                            <a href='#about'>
                                <span className='text-limeGreen'>.</span>about<span className='text-limeGreen'>()</span>
                            </a>

                        </li>

                        <li className='link' id='projectLink'>
                            <a href='#projects'>
                                <span className='text-limeGreen'>.</span>projects<span className='text-limeGreen'>()</span>
                            </a>
                        </li>

                        <li className='link' id='contactLink'>
                            <a href='#contact-form'>
                                <span className='text-limeGreen'>.</span>contact<span className='text-limeGreen'>()</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='menubars' id='menubars' onClick={rotateMenu}>
                    <span className='menu-line' id='line1'></span>
                    <span className='menu-line' id='line2'></span>
                    <span className='menu-line' id='line3'></span>
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