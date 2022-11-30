import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser'

import plane from './images/paperplane.png'
import close from './images/close.png'
import check from './images/check.png'

function Contact(props) {
    const formRef = useRef()
    const alertRefs = {
        alertBox: useRef(),
        header: useRef(),
        success: useRef(),
        error: useRef(),
        status: useRef()
    }

    const sendEmail = (exp) => {
        exp.preventDefault()

        emailjs.sendForm('service_te6k1gm', 'template_qgqfqcg', formRef.current, 'Boi87gFFHORJ-a-si')
            .then((res) => {
                formRef.current.reset()
                alertRefs.alertBox.current.style.marginLeft = '10rem'
                alertRefs.success.current.style.display = 'flex'
                alertRefs.status.current.innerHTML = 'Succesfully sent'

                clearAlert()

                console.log(res);

            }, (err) => {
                formRef.current.reset()
                alertRefs.alertBox.current.style.marginLeft = '10rem'
                alertRefs.header.current.style.backgroundColor = 'red'
                alertRefs.error.current.style.display = 'flex'
                alertRefs.status.current.innerHTML = 'An error occurred'

                clearAlert()

                console.log(err);
            })

        const clearAlert = () => {
            const clear = setTimeout(() => {
                alertRefs.alertBox.current.style.marginLeft = '55rem'
            }, 3000)
        }
    }

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
        <>
            <div id="form-container">

                <button id="close-form">
                    <div className="alt-close-form">
                        <img src={close} alt="close" />
                        <span className="close-text">Close</span>
                    </div>
                </button>

                <h1 className="absolute mt-28 text-3xl">Contact me</h1>

                <div id="form-wrapper">
                    <form id="contact-form" ref={formRef} onSubmit={sendEmail} >
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

                        <textarea className="form-input" rows={7} placeholder="Message" name="message" required >
                        </textarea>

                        <button className="form-submit" type="submit">
                            <div className="alt-send-button">
                                <img src={plane} alt="plane" width={20} height={20} />
                                <span className="send-text">Send</span>
                            </div>
                        </button>

                    </form>
                </div>
                <div className="alert" ref={alertRefs.alertBox}>
                    <div className="alertheader" ref={alertRefs.header}>
                        <img src={check} alt="success" className="hidden" ref={alertRefs.success} />
                        <img src={close} alt="denial" className="hidden" ref={alertRefs.error} />
                    </div>
                    <h1 ref={alertRefs.status} className="mt-6 ml-2"></h1>
                </div>
            </div>
        </>
    )
}

export default Contact