import { useState, useEffect } from "react";

function useDivPosition(ref) {
    const [y_pos, setY_pos] = useState()

    const getPosition = () => {
        let y = ref.current.offsetTop
        setY_pos(y)
    }

    useEffect(() => {
        window.addEventListener('resize', getPosition())
    })

    return y_pos
}

export default useDivPosition