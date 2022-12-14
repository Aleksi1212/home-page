import { useLayoutEffect, useState } from "react";

// hook to get divs dimensions
function useDivDimensions(ref) {
    const [height, setHeight] = useState(0) // height
    const [width, setWidth] = useState(0) // width

    useLayoutEffect(() => {
        setHeight(ref.current.clientHeight) // set divs height
        setWidth(ref.current.clientWidth) // set divs width
    }, [])

    return {height, width}
}

export default useDivDimensions