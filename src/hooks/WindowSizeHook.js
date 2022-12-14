import { useState, useEffect } from "react"

// function to get windows height and width
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height} = window

    return {
        width,
        height
    }
}

// hook to get windows dimensions
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions()) // dimensions

    useEffect(() => {
        // set dimensions
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}

export default useWindowDimensions