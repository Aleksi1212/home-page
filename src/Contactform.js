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

                alertRefs.alertBox.current.style.marginLeft = '7rem'
                alertRefs.success.current.style.display = 'flex'
                alertRefs.status.current.innerHTML = 'Succesfully sent'
                document.getElementById('load').style.display = 'none'

                clearAlert()

                console.log(res);

            }, (err) => {
                formRef.current.reset()

                alertRefs.alertBox.current.style.marginLeft = '7rem'
                alertRefs.header.current.style.backgroundColor = 'red'
                alertRefs.error.current.style.display = 'flex'
                alertRefs.status.current.innerHTML = 'An error occurred'
                document.getElementById('load').style.display = 'none'

                clearAlert()

                console.log(err);
            })

        const clearAlert = () => {
            const clear = setTimeout(() => {
                alertRefs.alertBox.current.style.marginLeft = '55rem'
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
                    <div className="alt-close-form w-[50px] h-[35px]">
                        <img src={close} alt="close" className="ml-[8px]" />
                        <span className="block mt-[5px]">Close</span>
                    </div>
                </button>

                <h1 className="absolute xxxl:mt-28 xl:mt-20 xxxl:text-3xl xl:text-2xl">Contact me</h1>

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

                        <button className="form-submit" type="submit" onClick={showLoad}>
                            <div className="alt-send-button w-[20rem] h-[30px] pt-[5px]">
                                <img src={plane} alt="plane" className="ml-[9.5rem] w-[20px] h-[20px]" />
                                <span className="block mt-[8px]">Send</span>
                            </div>
                        </button>

                    </form>
                </div>

                <div className="loader" id="load"></div>

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