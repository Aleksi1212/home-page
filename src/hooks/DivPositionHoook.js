import { useState, useEffect } from "react";

// hook to get divs position on screen
function useDivPosition(ref) {
    const [y_pos, setY_pos] = useState() // y dimensions
    // x dimensions aren't needed for my case

    const getPosition = () => {
        let y = ref.current.offsetTop
        setY_pos(y)
    }

    useEffect(() => {
        window.addEventListener('resize', getPosition()) // set divs position
    })

    return y_pos
}

export default useDivPosition