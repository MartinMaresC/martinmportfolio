import '../Css/Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

function Contact () {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_bbzacpu', 'template_doyfvbq', form.current, 'Rh_dzfVVKjT3CiUZz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

        const {t} = useTranslation("Contact");
    return (
        <section className='contenedor-principal'>
        <h1 className="Titulo">Contact</h1>

            <div className='contenedor-divisor'>
                <form ref={form} onSubmit={sendEmail} className='formulario'>
                    <label>{t('name')}</label><br />
                    <input type="text" name="user_name" className='nombre' /><br />
                    <label>Email</label><br />
                    <input type="email" name="user_email" className='email'/><br />
                    <label>Message</label><br />
                    <textarea name="message" className='mensaje'/>
                    <input type="submit" value={t('send')} className='enviar'/>
                </form>
                <div className='mapa'>
                    <iframe title='my-frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59238.390073179944!2d-102.36241136874999!3d21.880691400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef5f7177ad93%3A0xee8d3c7c61099a88!2sCentro%20Aguascalientes!5e0!3m2!1ses!2smx!4v1679186027560!5m2!1ses!2smx" width="300" height="300" style={{border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                </div>
            </div>

        </section>
    );
}

export default Contact;