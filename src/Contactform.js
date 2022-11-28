import React, { useEffect } from "react";

function setContact(Test) {
    return (props) => {
        // useEffect(() => {
        //     let contact = props.test.current
        //     let rootDiv = document.getElementById('root')
            
        //     contact.addEventListener('click', () => {
        //         rootDiv.style.filter = 'blur(8px)'
        //     })


        // }, [props])

        return (
            <Test />
        )
    }
}

class Contact extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {value: ''}

        // this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(event) {
    //     this.setState({value: event.target.value})
    // }

    render() {
        return (
            <>
                <div id="form-container">
                    <h1 className="absolute mt-24 text-3xl">Contact me</h1>
                    <form id="contact-form">
                        <div>
                            <input type="text"   /*value={this.state.value} onChange={this.handleChange}*/ />
                            <input type="text" />
                            <textarea name="text" />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default setContact(Contact)