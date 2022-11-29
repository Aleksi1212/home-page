import React, { useEffect, useRef } from "react";
import plane from './images/paperplane.png'
import close from './images/close.png'

function setContact(Test) {
    return (props) => {

        useEffect(() => {
            let formContent = {
                contact: props.test.current,
                formContainer: document.getElementById('form-container'),
                closeBtn: document.getElementById('close-form'),
            }
            
            formContent.contact.addEventListener('click', () => {
                formContent.formContainer.style.right = '0'
            })

            formContent.closeBtn.addEventListener('click', () => {
                formContent.formContainer.style.right = '-35rem'
            })

        }, [props])

        return (
            <Test  />
        )
    }
}

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.formRef = React.createRef(null)
        //this.focusFormRef = this.focusFormRef.bind(this)
        // this.state = {value: ''}

        // this.handleChange = this.handleChange.bind(this)
    }

    focusFormRef() {
        const test = this.formRef.current
        console.log(test);
    }

    // test() {
    //     console.log(this.focusFormRef());
    // }

    // handleChange(event) {
    //     this.setState({value: event.target.value})
    // }

    render() {
        return (
            <>
                <div id="form-container">

                    <button id="close-form">
                        <div className="alt-close-form">
                            <img src={close} alt="close" />
                            <span className="close-text">Close</span>
                        </div>
                    </button>

                    <h1 className="absolute mt-24 text-3xl">Contact me</h1>

                    <div id="form-wrapper">
                        <form id="contact-form" ref={this.formRef} >
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="text" className="form-input" id="name" placeholder="Name" name="name" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="text" className="form-input" id="email" placeholder="Email" name="email" required />
                                </div>
                            </div>

                            <textarea className="form-input" rows={5} placeholder="Message" name="message" required >
                            </textarea>

                            <button className="form-submit" type="submit">
                                <div className="alt-send-button">
                                    <img src={plane} alt="plane" width={20} height={20} />
                                    <span className="send-text">Send</span>
                                </div>
                            </button>


                        </form>
                    </div>
                    <button onClick={this.focusFormRef}>test</button>
                </div>
            </>
        )
    }
}

export default setContact(Contact)