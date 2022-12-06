import React, { useEffect } from "react"

function setBackground(Background) {
    return (props) => {
        
        useEffect(() => {
            let path = document.getElementById('linePath')
            let pathLength = path.getTotalLength()
    
            path.style.strokeDasharray = `${pathLength} ${pathLength}`
            path.style.strokeDashoffset = pathLength
    
            window.addEventListener('scroll', () => {
                let scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
                let draw = (pathLength*0.7) * scrollPercent
                
                path.style.strokeDashoffset = pathLength - draw
            })
        })

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
                        <path d="M171 0C171 277 1 0 1 277" stroke="#77D75E" strokeWidth={3}/>
                    </svg>

                    <svg width="207" height="178" viewBox="0 0 207 178" fill="none" xmlns="http://www.w3.org/2000/svg" id="line2">
                        <path d="M0 1C206 1 206 1 206 178" stroke="#77D75E" strokeWidth={3}/>
                    </svg>
                </div>

                <div className="line hidden xl:flex">
                    <svg className="w-[5px] xxxl:h-[3375px] xl:h-[3275px]" viewBox="0 0 2 1667" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="linePath" d="M 1.2745 -0.0091 V 3589" stroke="#77D75E" strokeWidth={2.5}/>
                    </svg>
                </div>
            </>
        )
    }
}


export default setBackground(Background)