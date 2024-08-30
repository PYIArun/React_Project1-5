import React, { useState } from 'react'
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";

const ContactForm = () => {
    
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [text, settext] = useState("");
    const onSubmit = (event) =>{
        event.preventDefault();
        setname(event.target[0].value)
        setemail(event.target[1].value)
        settext(event.target[2].value)

        alert(`Name: ${name}, Email: ${email}, Text: ${text} `)
    }
  return (
    <section className={styles.container}>

        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text = "VIA SUPPORT CHAT" icon= {<MdMessage fontSize='24px'/>}/>
                <Button text = "VIA CALL" icon= {<FaPhoneAlt fontSize='24px'/>}/>
            </div>
                <Button isOutline={true} text = "VIA EMAIL FORM" icon= {<HiMail fontSize='24px'/>}/>

        <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name'></input>
            </div>            
            <div className={styles.form_control}>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email'></input>
            </div>            
            <div className={styles.form_control}>
                <label htmlFor='name'>Text</label>
                <textarea rows='4' name='name'></textarea>
            </div>

            <div className={styles.submit_btn}>
            <Button text='Submit'/>

            </div>
        </form>

        </div>

        <div className={styles.contact_image}>
            <img className={styles.hero_image} src='./images/hero-image.svg' alt='hero-image logo'></img>
        </div>

    </section>
  )
}

export default ContactForm