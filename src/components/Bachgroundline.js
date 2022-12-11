import React, { useEffect, useRef } from "react"
import useDivPosition from "../hooks/DivPositionHoook";

function Background(props) {
    const divPosition = useDivPosition(props.lineHeight)
    const svgRef = useRef(null)

    if (svgRef.current === null) {
        // do nothing
    } else {
        svgRef.current.style.height = `${divPosition}px`
    }

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
    }, [props])


    return (
        <>
            <div className="top-lines">
                <svg width="172" height="277" viewBox="0 0 172 277" fill="none" xmlns="http://www.w3.org/2000/svg" id="line1">
                    <path d="M171 0C171 277 1 0 1 277" stroke="#77D75E" strokeWidth={3}/>
                </svg>

                <svg width="207" height="178" viewBox="0 0 207 178" fill="none" xmlns="http://www.w3.org/2000/svg" id="line2">
                    <path d="M0 1C206 1 206 1 206 178" stroke="#77D75E" strokeWidth={3}/>
                </svg>
            </div>

            <div className="line hidden xl:flex -mt-[5rem]">
                <svg className="w-[5px]" ref={svgRef} viewBox="0 0 2 1667" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path id="linePath" d="M 1.2745 -0.0091 V 6117" stroke="#77D75E" strokeWidth={2.5}/>
                </svg>
            </div>
        </>
    )
}

export default Background