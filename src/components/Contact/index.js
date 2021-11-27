import React, { useState, useRef } from 'react';
import emailjs from "emailjs-com";
import { validateEmail } from '../../utils/helpers';
import { motion } from "framer-motion"

function ContactForm() {
  const form = useRef();
  const [result, setResult] = useState(false);

  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     setFormState({ [e.target.name]: e.target.value });
  //     console.log('Form', formState);
  //   }
  // };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_USER_ID        
      )
      .then(
        (result) => {
          console.log(result);
          setResult(result);
        },
        (error) => {
          console.log(error);
          setResult(error);

        // if (!errorMessage) {
        //   setFormState({ [e.target.name]: e.target.value });
        //   console.log('Form', formState);
        //   }
        }
      );
    form.current.reset();
  };

  return (
    <section class="justify-content-center" id="contact-section">
      <h1 data-testid="h1tag">Contact Me:</h1><hr></hr>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name:</label><br></br>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label><br></br>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label><br></br>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        <div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        </div>
        <motion.div className='btn' initial={{ x: -50 }} animate={{ x: 0 }}>
        <button data-testid="button" type="submit">Submit</button>
        </motion.div>
      </form>
    </section>
  );
}

export default ContactForm;
