import React, { useEffect } from "react"

function setBackground(Background) {
    return (props) => {
        
        useEffect(() => {
            let path = document.getElementById('linePath')
            let pathLength = path.getTotalLength()
            let scrollSet = 0
    
            path.style.strokeDasharray = `${pathLength} ${pathLength}`
            path.style.strokeDashoffset = pathLength
    
            window.addEventListener('scroll', () => {
                let scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
                let scrollDir = window.pageYOffset || document.documentElement.scrollTop
                let draw = (pathLength*2) * scrollPercent
                
                path.style.strokeDashoffset = pathLength - draw
                let pathPos = path.style.strokeDashoffset.slice(0, -2)

                if (scrollDir > scrollSet) {
                    // if (Number(pathPos) <= 1000 && Number(pathPos) >= 900 && props.borders.aboutBorder1 != null) {
                    //     props.loadContent(props.borders.aboutBorder1, props.borders.aboutBorder2)
                    if (Number(pathPos) <= -10 && Number(pathPos) >= -50) {
                        props.loadContent(props.borders.projectBorder1, props.borders.projectBorder2)
                    }

                } else {
                    // if (props.aboutInview) {
                    //     props.loadContent(props.borders.aboutBorder1, props.borders.aboutBorder2)
                    // } else if (!props.aboutInview) {
                    //     props.removeContent(props.borders.aboutBorder1, props.borders.aboutBorder2)
                    // }

                    if (props.projectInview) {
                        props.loadContent(props.borders.projectBorder1, props.borders.projectBorder2)
                    } else if (!props.projectInview) {
                        props.removeContent(props.borders.projectBorder1, props.borders.projectBorder2)
                    }
                }
                scrollSet = scrollDir <= 0 ? 0 : scrollDir
            })

        }, [props])

        return <Background />
    }
}

class Background extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
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
                    <svg width="5" height="1750" viewBox="0 0 2 1667" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="linePath" d="M1.27454 -0.00909424V1667" stroke="#77D75E" strokeWidth={2.5}/>
                    </svg>
                </div>
            </>
        )
    }
}


export default setBackground(Background)