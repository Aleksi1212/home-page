import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Bachgroundline from "./Bachgroundline"

//images
import background from './images/background.png'
import home from './images/home.png'
import about from './images/about.png'
import projects from './images/projects.png'

import database from './images/database.png'
import api from './images/api.png'
import space from './images/space.png'

function Contents() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <>
            <Bachgroundline />

            {/* Welcome section */}
            <div id="homeImage" className="image mt-44 w-8">
                <img src={background} alt="background" width={30} height={30} className="blur-lg" data-Aos='zoom-in' data-Aos-delay="150" />
                <img src={home} alt="home"width={30} height={30} className="absolute" data-Aos='zoom-in' />
            </div>
            <div className="home-container">
                <div className="text-limeGreen pb-4 text-4xl" data-Aos="fade-right">
                    <h1>Welcome to my page</h1>
                </div>
                <p data-Aos="fade-right" data-Aos-delay="300">
                    Learn about me
                    <br />
                    and see all of my projects<span className="text-limeGreen">.</span>
                </p>
            </div>

            {/* About me section */}
            <div id="aboutImage" className="image w-8">
                <img src={background} alt="background" width={30} height={30} className="blur-lg" data-Aos="zoom-in" data-Aos-delay="150" />
                <img src={about} alt="about" width={30} height={30} className="absolute" data-Aos="zoom-in" />
            </div>

            <div className="about-container" id="about">
                <div className="text-limeGreen pb-4 text-4xl" data-Aos="fade-right">
                    <h1>About me</h1>
                </div>
                <p data-Aos="fade-right" data-Aos-delay="300">
                    Hello<span className="text-limeGreen">!</span> My name is Aleksi I'm 17 years old and I've been studying
                    computer science at Helsinki Business College for roughly 2 years.
                    <br />
                    I'm interested in software engineering, video games music and fashion.
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
            <div id="projectImage" className="image w-8">
                <img src={background} alt="background" width={30} height={30} className="blur-lg" data-Aos='zoom-in' data-Aos-delay="150" />
                <img src={projects} alt="projects" width={30} height={30} className="absolute" data-Aos='zoom-in' />
            </div>

            <div className="ml-60 w-[75rem] h-[40rem] -mt-16" id="projects">
                <div className="text-limeGreen pb-8 text-4xl" data-Aos="fade-right">
                    <h1>Projects</h1>
                </div>

                <div className="project-container">
                    <div className="project" data-Aos="fade-right" data-Aos-delay="200">
                        <img src={database} alt="database" />
                        <div className="projectinfo">
                            <h1>Car database</h1>
                            <p>View reposetory on GitHub</p>
                        </div>
                    </div>

                    <div className="project" data-Aos="fade-right" data-Aos-delay="400">
                        <img src={api} alt="api" />
                        <div className="projectinfo">
                            <h1>RESTful api</h1>
                            <p>View reposetory on GitHub</p>
                        </div>

                    </div>

                    <div className="project" data-Aos="fade-right" data-Aos-delay="600">
                        <img src={space} alt="space" />
                        <div className="projectinfo">
                            <h1>Python space simulation</h1>
                            <p>View reposetory on GitHub</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="w-full bg-darkGey h-44"></footer>
        </>
    )
}

export default Contents