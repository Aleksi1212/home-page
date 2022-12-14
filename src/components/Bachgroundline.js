// imports
import React, { useEffect, useRef } from "react"
import useDivPosition from "../hooks/DivPositionHoook";
import useDivDimensions from "../hooks/DivDimensionsHook";

// component start
function Background(props) {
    const lineHeight = useDivPosition(props.lineHeight) // set line height as form positon
    const lineStart = useDivPosition(props.lineStart) // set line start as welcome image position
    const divRef = useRef(null)
    const svgRef = useRef(null)

    const topLinesRef = useRef(null)
    const divDimnesions = useDivDimensions(topLinesRef)

    if(divRef.current === null) {
        // do nothing
    } else {
        divRef.current.style.height = `${lineHeight - divDimnesions.height}px`
        divRef.current.style.marginTop = `${lineStart}px`
        svgRef.current.style.height = `${lineHeight}px`
    }

    // draw background svg on scroll
    useEffect(() => {
        let path = document.getElementById('linePath')
        let pathLength = path.getTotalLength()
        
        path.style.strokeDasharray = `${pathLength} ${pathLength}`
        path.style.strokeDashoffset = pathLength

        window.addEventListener('scroll', () => {
            let scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
            let draw = (pathLength*0.4) * scrollPercent
            
            path.style.strokeDashoffset = pathLength - draw
        })
    }, [])


    return (
        <>
            <div className="top-lines" ref={topLinesRef}>
                <svg width="172" height="277" viewBox="0 0 172 277" fill="none" xmlns="http://www.w3.org/2000/svg" id="line1">
                    <path d="M171 0C171 277 1 0 1 277" stroke="#77D75E" strokeWidth={3}/>
                </svg>

                <svg width="207" height="178" viewBox="0 0 207 178" fill="none" xmlns="http://www.w3.org/2000/svg" id="line2">
                    <path d="M0 1C206 1 206 1 206 178" stroke="#77D75E" strokeWidth={3}/>
                </svg>
            </div>

            <div className="line hidden xl:flex mt-[275px] w-[5px]" ref={divRef}>
                <svg viewBox="0 0 2 1667" className="absolute top-0" ref={svgRef} fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path id="linePath" d="M 1.2745 -0.0091 V 6117" stroke="#77D75E" strokeWidth={1.5}/>
                </svg>
            </div>
        </>
    )
}

export default Background