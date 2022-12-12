import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../hooks/WindowSizeHook";
import emailjs from '@emailjs/browser'
import Contents from "./Contents";

function importAll(dir) {
    let images = {}
    dir.keys().map((item, index) => {
        images[item.replace('./', '')] = dir(item)
    })

    return images
}

function Contact() {
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/))

    const formRef = useRef()
    const alertRefs = {
        alertBox: useRef(),
        header: useRef(),
        success: useRef(),
        error: useRef(),
        status: useRef()
    }

    const { height, width } = useWindowDimensions() 

    const imageRef = useRef()

    const sendEmail = (exp) => {
        exp.preventDefault()

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPELATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
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

                if (width < 1080) {
                    alertRefs.alertBox.current.style.marginLeft = '3rem'
                } else {
                    alertRefs.alertBox.current.style.marginLeft = '10rem'
                }

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
            <Contents formPosition={imageRef} />

            {/* Contact form */}
            <div className="image" ref={imageRef}>
                <img src={images['background.png']} alt="background" width={30} height={30} className="blur-lg" data-Aos="zoom-in" data-Aos-delay="150" />
                <img src={images['form.png']} alt="heart" width={30} height={30} className="absolute" data-Aos="zoom-in" />
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
                                <img src={images['paperplane.png']} alt="plane" className="ml-[9.5rem] w-[20px] h-[20px] hidden xl:block" />
                                <span className="block xl:mt-[8px]">Send</span>
                            </div>
                        </button>

                        <button className="mobile-submit xl:hidden" type="submit" onClick={showLoad}>
                            <span>Send</span>
                        </button>

                        <div className="load-container">
                            <div className="loader" id="load"></div>
                        </div>
                    </form>

                </div>
            </div>

            <div className="alert" ref={alertRefs.alertBox}>
                <div className="alertheader" ref={alertRefs.header}>
                    <img src={images['check.png']} alt="success" className="alert-image" ref={alertRefs.success} />
                    <img src={images['close.png']} alt="denial" className="alert-image" ref={alertRefs.error} />
                </div>
                <h1 ref={alertRefs.status} className="xl:mt-6 mt-3 ml-2 xl:text-base text-sm"></h1>
            </div>

            {/* footer sectionn */}
            <footer className="footer">
                <div className="inline text-center xl:text-2xl text-xl xl:ml-0 ml-10">
                    <h1>Socials</h1>
                    <div className="flex w-20 justify-between pt-2">
                        <a href="https://github.com/Aleksi1212">
                            <img src={images['github.png']} alt="github" id="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/aleksi-noro-8ba447249/">
                            <img src={images['linkedin.png']} alt="linkedin" id="linkedin" />
                        </a>
                    </div>
                </div>
                <p className="opacity-50 mt-40 -ml-[7rem] text-sm">Copyright © Aleksi Noro</p>
            </footer>
        </>
    )
}

export default Contact