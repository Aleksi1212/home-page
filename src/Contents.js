import { useEffect, useRef, useState, useMemo } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'


function Contents() {
    useEffect(() => {
        Aos.init()
    }, [])

    const loadBorder = (firstLine, secondLine) => {
        firstLine.style.strokeDashoffset = '0'
        firstLine.style.strokeDasharray = '1461'

        secondLine.style.strokeDashoffset = '0'
        secondLine.style.strokeDasharray = '1461'
    }

    const removeBorder = (firstLine, secondLine) => {
        if (firstLine != null) {
            firstLine.style.strokeDashoffset = '1461'
            firstLine.style.strokeDasharray = '1461'
            
            secondLine.style.strokeDashoffset = '-1461'
            secondLine.style.strokeDasharray = '1461'
        } else {
            console.log('line is null');
        }
    }

    const homeRef = useRef(null)
    const aboutRef = useRef(null)

    const homeInview = useIsInViewport(homeRef)
    const aboutInview = useIsInViewport(aboutRef)

    const borders = {
        homeBorder1: document.getElementById('homeBorder1'),
        homeBorder2: document.getElementById('homeBorder2'),

        aboutBorder1: document.getElementById('aboutBorder1'),
        aboutBorder2: document.getElementById('aboutBorder2')
    }

    if (homeInview) {
        loadBorder(borders.homeBorder1, borders.homeBorder2)
    } else if (!homeInview) {
        removeBorder(borders.homeBorder1, borders.homeBorder2)
    }

    if (aboutInview) {
        loadBorder(borders.aboutBorder1, borders.aboutBorder2)
    } else if (!aboutInview) {
        removeBorder(borders.aboutBorder1, borders.aboutBorder2)
    }



    return (
        <>
            <div id="home" className="content-wrapper mt-48" ref={homeRef}>
                <svg height={260} width={510} xmlns="http://www.w3.org/2000/svg">
                    <rect id="homeBorder1" height={256} width={500} rx={30} x={2} y={2} />
                    <rect id="homeBorder2" height={256} width={500} rx={30} x={2} y={2} />
                </svg>
                <div className="absolute inline w-auto h-64 text-center py-16 homeinfo">
                    <h1>Welcome to my page</h1>
                    <br/>
                    <p>Learn about me and</p>
                    <p>see all of my projects</p>
                </div>
            </div>

            <div id="about" className="content-wrapper" ref={aboutRef} data-Aos='fade-up'>
                <svg height={260} width={510} xmlns="http://www.w3.org/2000/svg">
                    <rect id="aboutBorder1" height={256} width={500} rx={30} x={2} y={2} />
                    <rect id="aboutBorder2" height={256} width={500} rx={30} x={2} y={2} />
                </svg>
            </div>
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