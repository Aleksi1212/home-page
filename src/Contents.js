import { useEffect, useRef, useState, useMemo } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Bachgroundline from "./Bachgroundline"

//images
import background from './images/background.png'
import home from './images/home.png'
import about from './images/about.png'
import projects from './images/projects.png'

function Contents() {
    useEffect(() => {
        Aos.init()
    }, [])
    
    const loadContent = (firstLine, secondLine) => {
        if (firstLine == borders.homeBorder1) {
            firstLine.style.strokeDashoffset = '0'
        
            secondLine.style.strokeDashoffset = '0'

        // } else if (firstLine == borders.aboutBorder1) {
        //     firstLine.style.strokeDashoffset = '0'
        
        //     secondLine.style.strokeDashoffset = '0'

        } else if (firstLine == borders.projectBorder1) {
            firstLine.style.strokeDashoffset = '0'
        
            secondLine.style.strokeDashoffset = '0'
        }

    }
    
    const removeContent = (firstLine, secondLine) => {
        if (firstLine != null && firstLine == borders.homeBorder1) {
            firstLine.style.strokeDashoffset = '1461'

            secondLine.style.strokeDashoffset = '-1461'

        // } else if (firstLine != null && firstLine == borders.aboutBorder1) {
        //     firstLine.style.strokeDashoffset = '2000'

        //     secondLine.style.strokeDashoffset = '-1750'

        } else if (firstLine != null && firstLine == borders.projectBorder1) {
            firstLine.style.strokeDashoffset = '1461'

            secondLine.style.strokeDashoffset = '-1461'

        } else {
            // error
        }
    }
    
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const projectRef = useRef(null)
    
    const homeInview = useIsInViewport(homeRef)
    //const aboutInview = useIsInViewport(aboutRef)
    const projectInview = useIsInViewport(projectRef)
    
    const borders = {
        homeBorder1: document.getElementById('homeBorder1'),
        homeBorder2: document.getElementById('homeBorder2'),
        
        // aboutBorder1: document.getElementById('aboutBorder1'),
        // aboutBorder2: document.getElementById('aboutBorder2'),
        
        projectBorder1: document.getElementById('projectBorder1'),
        projectBorder2: document.getElementById('projectBorder2')
    }
    
    if (homeInview) {
        loadContent(borders.homeBorder1, borders.homeBorder2)
    } else if (!homeInview) {
        removeContent(borders.homeBorder1, borders.homeBorder2)
    }
    
    // if (!aboutInview) {
    //     removeContent(borders.aboutBorder1, borders.aboutBorder2)
    // }
    
    if (!projectInview) {
        removeContent(borders.projectBorder1, borders.projectBorder2)
    }
    

    return (
        <>
            <Bachgroundline borders={borders} /*aboutInview={aboutInview}*/ projectInview={projectInview} loadContent={loadContent} removeContent={removeContent} />
            {/* Welcome section */}
            <div id="home" className="content-wrapper mt-44" ref={homeRef}>
                <svg height={260} width={510} xmlns="http://www.w3.org/2000/svg">
                    <rect id="homeBorder1" height={256} width={500} rx={30} x={2} y={2} />
                    <rect id="homeBorder2" height={256} width={500} rx={30} x={2} y={2} />
                </svg>
                <div className="homeinfo" data-Aos="fade-in">
                    <h1>Welcome to my page</h1>
                    <br/>
                    <p>Learn about me and</p>
                    <p>see all of my projects</p>
                </div>
            </div>
            <div id="homeImage" className="image">
                <img src={background} alt="background" width={30} height={30} className="blur-lg" data-Aos='zoom-in' data-Aos-delay="150" />
                <img src={home} alt="home"width={30} height={30} className="absolute" data-Aos='zoom-in' />
            </div>

            {/* About me section */}
            <div id="aboutImage" className="image w-8">
                <img src={background} alt="background" width={30} height={30} className="blur-lg" data-Aos="zoom-in" data-Aos-delay="150" />
                <img src={about} alt="about" width={30} height={30} className="absolute" data-Aos="zoom-in" />
            </div>

            <div className="aboutinfo" id="about">
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
            <div id="projects" className="content-wrapper" ref={projectRef}>
                <svg height={260} width={510} xmlns="http://www.w3.org/2000/svg">
                    <rect id="projectBorder1" height={256} width={500} rx={30} x={2} y={2} />
                    <rect id="projectBorder2" height={256} width={500} rx={30} x={2} y={2} />
                </svg>
            </div>
            <div id="projectImage" className="image">
                <img src={background} alt="background" width={30} height={30} className="blur-lg" data-Aos='zoom-in' data-Aos-delay="150" />
                <img src={projects} alt="projects" width={30} height={30} className="absolute" data-Aos='zoom-in' />
            </div>

            <footer className="w-full bg-darkGey h-44"></footer>
        </>
    )
}

function useIsInViewport(ref) {
    const [isIn, setIsin] = useState(false)

    const obs = useMemo(
        () => 
            new IntersectionObserver(([entry]) => 
                setIsin(entry.isIntersecting)
            ),
        [],
    )

    useEffect(() => {
        obs.observe(ref.current)

        return () => {
            obs.disconnect()
        }
    }, [ref, obs])

    return isIn
}

export default Contents