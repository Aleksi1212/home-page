
function Contents() {
    const animation = () => {
        let line1 = document.getElementById('line1')
        let line2 = document.getElementById('line2')
        line1.style.strokeDashoffset = '0'
        line1.style.strokeDasharray = '1461'

        line2.style.strokeDashoffset = '0'
        line2.style.strokeDasharray = '1461'
    }
    window.onload = animation

    return (
        <>
            <div id="home" className="content-wrapper">
                <svg height={260} width={510} xmlns="http://www.w3.org/2000/svg">
                    <rect id="line1" height={256} width={500} rx={30} x={2} y={2} />
                    <rect id="line2" height={256} width={500} rx={30} x={2} y={2} />
                </svg>
                <div className="absolute flex w-2/6 h-64 justify-center text-3xl pt-12 test">
                    <h1>Welcome to my page!</h1>
                </div>
            </div>
        </>
    )
}

export default Contents