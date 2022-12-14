// imports
import { useEffect, useRef } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Bachgroundline from "./Bachgroundline"
import useWindowDimensions from "../hooks/WindowSizeHook"

// function to import all images from images folder
function importAll(dir) {
    let images = {}
    dir.keys().map((item, index) => {
        images[item.replace('./', '')] = dir(item)
    })

    return images
}

function Contents(props) {
    useEffect(() => {
        // initialize animatie on scroll library
        Aos.init()

        // about sections mobile button actions
        let showMore = document.getElementById('show-more')
        let showLess = document.getElementById('show-less')
        let about = document.getElementById('about')
        let dots = document.getElementById('dots')

        showMore.addEventListener('click', () => {
            about.style.overflow = 'visible'
            showMore.style.display = 'none'
            dots.style.display = 'none'
            showLess.style.display = 'flex'
        })

        showLess.addEventListener('click', () => {
            about.style.overflow = 'hidden'
            showMore.style.display = 'flex'
            dots.style.display = 'flex'
            showLess.style.display = 'none'
        })
    }, [])

    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))
    const { height, width } = useWindowDimensions()

    function viewRepo(page) {
        if (width < 976) {
            window.open(page, '_blank')
        } else {
            // do nothing
        }
    }

    const welcomePosition = useRef(null)

    return (
        <>
            <Bachgroundline lineHeight={props.formPosition} lineStart={welcomePosition} />

            {/* Welcome section */}
            <div className="image mt-44" ref={welcomePosition}>
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos='zoom-in' data-Aos-delay="150" />
                <img src={images['home.png']} alt="home"width={30} height={30} className="absolute" data-Aos='zoom-in' />
            </div>
            <section className="home-container h-80">
                <div className="section-header" data-Aos="fade-right">
                    <h1>Welcome to my page</h1>
                </div>
                <p data-Aos="fade-right" data-Aos-delay="200">
                    Learn about me
                    <br />
                    and see all of my projects<span className="text-limeGreen">.</span>
                </p>
            </section>

            {/* About me section */}
            <div className="image">
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos="zoom-in" data-Aos-delay="150" />
                <img src={images['about.png']} alt="about" width={30} height={30} className="absolute" data-Aos="zoom-in" />
            </div>

            <section className="about-container" id="about">
                <div className="section-header" data-Aos="fade-right">
                    <h1>About me</h1>
                </div>
                <p className="show-more" id="show-more" data-Aos="fade-right" data-Aos-delay="200">View more</p>
                <p className="show-more mt-[33.5rem] w-[3.9rem] hidden" id="show-less">View less</p>
                <p className="mt-[19.5rem] ml-[12rem] absolute md:hidden" id="dots" data-Aos="fade-right">...</p>

                <p data-Aos="fade-right" data-Aos-delay="200">
                    Hello<span className="text-limeGreen">!</span> My name is Aleksi I'm 17 years old and I've been studying
                    computer science at Helsinki Business College for roughly 2 years.
                    <br />
                    I'm interested in software engineering, video games, music and fashion.
                    <br />
                    The thing I like about programming and working with computers, is that you can basically do anything and there are no limits.
                    <br />
                    I love souls games. The first one I played was Elden Ring and I fell in love with them instantly.
                    Now I've palyed all of the ones you can get on PC.
                    <br />
                    Some of my favorite artists are Tyler, The Creator and A$AP Rocky. My favorite albums from them are
                    Igor and Testing<span className="text-limeGreen">.</span>
                </p>
            </section>

            {/* Projects section */}
            <div className="image">
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos='zoom-in' data-Aos-delay="150" />
                <img src={images['projects.png']} alt="projects" width={30} height={30} className="absolute" data-Aos='zoom-in' />
            </div>

            <section className="project-container" id="projects">
                <div className="text-limeGreen xl:pb-8 pb-4 xxxl:text-4xl xl:text-3xl" data-Aos="fade-right">
                    <h1>Projects</h1>
                </div>

                {/* first project */}
                <div className="project-cards">

                    <div className="card-container xl:mb-0 mb-2" onClick={() => viewRepo("https://github.com/Aleksi1212/cardatabase")}>

                        <div className="databaseCard" id="card1" data-Aos="fade-right" data-Aos-delay="200">
                            <div className="contentBox">
                                <h2 className="xxxl:text-2xl lg:text-lg absolute bottom-2 xl:relative">Car database</h2>
                                <p className="contentInfo xxxl:-mt-8">
                                    Server and routes built with Node.JS and express,
                                    frontend with ejs and database uses MariaDB
                                </p>

                                <div className="source-button xxxl:-mt-5 xl:-mt-2"> 
                                    <a className="alt-source-button w-[100px] ml-8" href="https://github.com/Aleksi1212/cardatabase" target="_blank">
                                        <img src={images['github.png']} alt="databaseSource" className="xxxl:w-[30px] xl:w-[25px]" />
                                        <span className="-ml-[2.3rem] xxxl:text-base lg:text-sm">Source</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second project */}
                    <div className="card-container xl:mb-0 mb-2" onClick={() => viewRepo('https://github.com/Aleksi1212/rest_api')}>

                        <div className="apiCard" id="card2" data-Aos="fade-right" data-Aos-delay="400">
                            <div className="contentBox">
                                <h2 className="xxxl:text-2xl lg:text-lg absolute bottom-2 xl:relative">RESTful api</h2>
                                <p className="contentInfo">
                                    Built with Node.JS and Express
                                </p>

                                <div className="source-button">
                                    <a className="alt-source-button w-[100px] ml-8" href="https://github.com/Aleksi1212/rest_api" target="_blank">
                                        <img src={images['github.png']} alt="databaseSource" className="xxxl:w-[30px] xl:w-[25px]" />
                                        <span className="-ml-[2.3rem] xxxl:text-base lg:text-sm">Source</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* third project */}
                    <div className="card-container" onClick={() => viewRepo('https://github.com/Aleksi1212/Python-space-simulation')}>

                        <div className="spaceCard" id="card3" data-Aos="fade-right" data-Aos-delay="600">
                            <div className="contentBox">
                                <h2 className="xxxl:text-2xl lg:text-lg absolute bottom-2 xl:relative">Python space simulation</h2>
                                <p className="contentInfo">
                                    Built with using Python and PyGame
                                </p>

                                <div className="source-button"> 
                                    <a className="alt-source-button w-[100px] ml-8" href="https://github.com/Aleksi1212/Python-space-simulation" target="_blank">
                                        <img src={images['github.png']} alt="databaseSource" className="xxxl:w-[30px] xl:w-[25px]" />
                                        <span className="-ml-[2.3rem] xxxl:text-base xl:text-sm">Source</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thank you section */}
            <div className="image">
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos="zoom-in" data-Aos-delay="150" />
                <img src={images['heart.png']} alt="heart" width={30} height={30} className="absolute" data-Aos="zoom-in" />
            </div>
            <section className="thankYou-container">
                <div className="section-header" data-Aos="fade-right">
                    <h1>Thank you for checking out my website!</h1>
                </div>
                <p data-Aos="fade-right" data-Aos-delay="200">
                    I built this website to learn the basics of react and
                    <br />
                    to make myself a protfolio site<span className="text-limeGreen">.</span>
                </p>
                <div className="buttons">
                    <a className="alt-button" href="https://github.com/Aleksi1212/home-page" target="_blank">
                        <img src={images['github.png']} alt="source" className="xxxl:ml-[8px] ml-[10px] xxxl:w-[30px] xl:w-[25px] w-[20px]" data-Aos="fade-right" data-Aos-delay="400" />
                        <span className="view-text" data-Aos="fade-right" data-Aos-delay="400">Source</span>
                    </a>

                    <a className="alt-button" href="#root">
                        <img src={images['top.png']} alt="back-to-top" width={25} height={25} className="ml-[20px] xl:mt-[.15rem] xxxl:w-[30px] xl:w-[25px] w-[20px]" data-Aos="fade-right" data-Aos-delay="600" />
                        <span className="view-text xl:pt-[3px]" data-Aos="fade-right" data-Aos-delay="600">Back to top</span>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contents