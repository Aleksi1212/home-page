import { useEffect, useRef } from "react"

function Background() {
    const Line = useRef(null)

    useEffect(() => {
        let path = Line.current
        let pathLength = path.getTotalLength()

        path.style.strokeDasharray = `${pathLength} ${pathLength}`
        path.style.strokeDashoffset = pathLength
        
        window.addEventListener('scroll', () => {
            let scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
            let drawMid = (pathLength*2) * scrollPercent

            path.style.strokeDashoffset = pathLength - drawMid
            
            /*if (path.style.strokeDashoffset <= '0px'){
                path.style.strokeDashoffset = path.style.stroke
            }*/
        })
    }, [])

    return (
        <>
            <div className="top-lines">
                <svg width="172" height="277" viewBox="0 0 172 277" fill="none" xmlns="http://www.w3.org/2000/svg" id="line1">
                    <path d="M171 0C171 277 1 0 1 277" stroke="#77D75E" strokeWidth={2.5}/>
                </svg>

                <svg width="207" height="178" viewBox="0 0 207 178" fill="none" xmlns="http://www.w3.org/2000/svg" id="line2">
                    <path d="M0 1C206 1 206 1 206 178" stroke="#77D75E" strokeWidth={2.5}/>
                </svg>
            </div>

            <div className="line">
                <svg width="5" height="1667" viewBox="0 0 2 1667" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={Line} d="M1.27454 -0.00909424V1667" stroke="#77D75E" strokeWidth={2.5}/>
                </svg>
            </div>
        </>
    )
}

export default Background