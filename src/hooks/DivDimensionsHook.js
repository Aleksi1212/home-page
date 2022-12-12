import { useLayoutEffect, useState } from "react";

function useDivDimensions(ref) {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        setHeight(ref.current.clientHeight)
        setWidth(ref.current.clientWidth)
    }, [])

    return {height, width}
}

export default useDivDimensions