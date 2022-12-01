import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Bachgroundline from "./Bachgroundline"

// function to import all images from images directory
function importAll(dir) {
    let images = {}
    dir.keys().map((item, index) => {
        images[item.replace('./', '')] = dir(item)
    })

    return images
}

function Contents() {
    useEffect(() => {
        Aos.init()
    }, [])

    const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/))

    return (
        <>
            <Bachgroundline />

            {/* Welcome section */}
            <div id="homeImage" className="image mt-44">
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos='zoom-in' data-Aos-delay="150" />
                <img src={images['home.png']} alt="home"width={30} height={30} className="absolute" data-Aos='zoom-in' />
            </div>
            <div className="home-container">
                <div className="text-limeGreen pb-4 text-4xl" data-Aos="fade-right">
                    <h1>Welcome to my page</h1>
                </div>
                <p data-Aos="fade-right" data-Aos-delay="200">
                    Learn about me
                    <br />
                    and see all of my projects<span className="text-limeGreen">.</span>
                </p>
            </div>

            {/* About me section */}
            <div id="aboutImage" className="image">
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos="zoom-in" data-Aos-delay="150" />
                <img src={images['about.png']} alt="about" width={30} height={30} className="absolute" data-Aos="zoom-in" />
            </div>

            <div className="about-container" id="about">
                <div className="text-limeGreen pb-4 text-4xl" data-Aos="fade-right">
                    <h1>About me</h1>
                </div>
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
            </div>

            {/* Projects section */}
            <div id="projectImage" className="image">
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos='zoom-in' data-Aos-delay="150" />
                <img src={images['projects.png']} alt="projects" width={30} height={30} className="absolute" data-Aos='zoom-in' />
            </div>

            <div className="ml-60 w-[75rem] h-[40rem] -mt-16" id="projects">
                <div className="text-limeGreen pb-8 text-4xl" data-Aos="fade-right">
                    <h1>Projects</h1>
                </div>

                <div className="project-container">
                    <div className="project" data-Aos="fade-right" data-Aos-delay="200">
                        <img src={images['database.png']} alt="database" />
                        <div className="projectinfo">
                            <h1>Car database</h1>
                            <p>View GitHub repository</p>
                        </div>
                    </div>

                    <div className="project" data-Aos="fade-right" data-Aos-delay="400">
                        <img src={images['api.png']} alt="api" />
                        <div className="projectinfo">
                            <h1>RESTful api</h1>
                            <p>View GitHub repository</p>
                        </div>

                    </div>

                    <div className="project" data-Aos="fade-right" data-Aos-delay="600">
                        <img src={images['space.png']} alt="space" />
                        <div className="projectinfo">
                            <h1>Python space simulation</h1>
                            <p>View GitHub repository</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thank you section */}
            <div id="thankImage" className="image">
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos="zoom-in" data-Aos-delay="150" />
                <img src={images['heart.png']} alt="heart" width={30} height={30} className="absolute" data-Aos="zoom-in" />
            </div>
            <div className="thankYou-container">
                <div className="text-limeGreen pb-4 text-4xl" data-Aos="fade-right">
                    <h1>Thank you for checking out my website!</h1>
                </div>
                <p data-Aos="fade-right" data-Aos-delay="200">
                    I built this website to learn the basics of react and
                    <br />
                    to make myself a protfolio site<span className="text-limeGreen">.</span>
                </p>
                <div className="buttons">
                    <a className="alt-button">
                        <img src={images['github.png']} alt="source" className="ml-[8px]" data-Aos="fade-right" data-Aos-delay="400" />
                        <span className="view-text">Source</span>
                    </a>

                    <a className="alt-button" href="#root">
                        <img src={images['top.png']} alt="back-to-top" width={25} height={25} className="ml-[20px]" data-Aos="fade-right" data-Aos-delay="600" />
                        <span className="view-text">Back to top</span>
                    </a>
                </div>
            </div>

            <footer className="w-full bg-darkGey h-44"></footer>
        </>
    )
}

export default Contents