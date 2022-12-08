import { useRef } from "react";
import useWindowDimensions from "./WindowSizeHook";
import emailjs from '@emailjs/browser'

import form from './images/form.png'
import background from './images/background.png'
import plane from './images/paperplane.png'
import close from './images/close.png'
import check from './images/check.png'

function Contact() {
    const formRef = useRef()
    const alertRefs = {
        alertBox: useRef(),
        header: useRef(),
        success: useRef(),
        error: useRef(),
        status: useRef()
    }
    const { height, width } = useWindowDimensions() 

    const sendEmail = (exp) => {
        exp.preventDefault()

        emailjs.sendForm('service_te6k1gm', 'template_qgqfqcg', formRef.current, 'Boi87gFFHORJ-a-si')
            .then((res) => {
                formRef.current.reset()

                if (width < 1080) {
                    alertRefs.alertBox.current.style.marginLeft = '3rem'
                } else {
                    alertRefs.alertBox.current.style.marginLeft = '10rem'
                }

                alertRefs.success.current.style.display = 'flex'
                alertRefs.status.current.innerHTML = 'Succesfully sent'
                document.getElementById('load').style.display = 'none'

                clearAlert()

                console.log(res);

            }, (err) => {
                formRef.current.reset()

                alertRefs.alertBox.current.style.marginLeft = '10rem'
                alertRefs.header.current.style.backgroundColor = 'red'
                alertRefs.error.current.style.display = 'flex'
                alertRefs.status.current.innerHTML = 'An error occurred'
                document.getElementById('load').style.display = 'none'

                clearAlert()

                console.log(err);
            })

        const clearAlert = () => {
            const clear = setTimeout(() => {
                alertRefs.alertBox.current.style.marginLeft = '-20rem'
            }, 3000)
        }
    }

    function showLoad() {
        let values = formRef.current
        if (values.name.value !== '' && values.email.value !== '' && values.message.value !== '') {
            document.getElementById('load').style.display = 'inline-block'
        } else {
            console.log('form not filled');
        }
    }

    return (
        <>
            <div className="image">
                <img src={background} alt="background" width={30} height={30} className="blur-lg" data-Aos="zoom-in" data-Aos-delay="150" />
                <img src={form} alt="heart" width={30} height={30} className="absolute" data-Aos="zoom-in" />
            </div>

            <div className="form-container" id="contact-form">
                <div className="section-header" data-Aos="fade-right">
                    <h1>Contact me</h1>
                </div>
                <div id="form-wrapper" data-Aos="fade-right" data-Aos-delay="200">
                    <form id="contact-form" ref={formRef} onSubmit={sendEmail} >
                        <div className="col-sm-12 input-container">
                            <input type="text" className="form-input" id="name" name="name" placeholder=" " required />
                            <label htmlFor="name" className="placeholder">Name</label>
                        </div>

                        <div className="col-sm-12 input-container">
                            <input type="text" className="form-input" id="email" name="email" placeholder=" " required />
                            <label htmlFor="email" className="placeholder">Email</label>
                        </div>
                        
                        <div className="input-container">
                            <textarea className="form-input h-16 resize-none" id="message" name="message" placeholder=" " required />
                            <label htmlFor="message" className="message-placeholder pt-[4rem]">Message</label>
                        </div>

                        <button className="xl:form-submit hidden" type="submit" onClick={showLoad}>
                            <div className="alt-send-button w-[20rem] h-[30px] pt-[5px]">
                                <img src={plane} alt="plane" className="ml-[9.5rem] w-[20px] h-[20px] hidden xl:block" />
                                <span className="block xl:mt-[8px]">Send</span>
                            </div>
                        </button>

                        <button className="mobile-submit xl:hidden" type="submit" onClick={showLoad}>
                            <span>Send</span>
                        </button>
                    </form>

                </div>

            </div>
            <div className="loader" id="load"></div>

            <div className="alert" ref={alertRefs.alertBox}>
                <div className="alertheader" ref={alertRefs.header}>
                    <img src={check} alt="success" className="alert-image" ref={alertRefs.success} />
                    <img src={close} alt="denial" className="alert-image" ref={alertRefs.error} />
                </div>
                <h1 ref={alertRefs.status} className="xl:mt-6 mt-3 ml-2 xl:text-base text-sm">Succesfully sent</h1>
            </div>
        </>
    )
}

export default Contact