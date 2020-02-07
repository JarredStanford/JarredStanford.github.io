import React, { useState } from 'react'

import { Button, Input, message } from 'antd'
import styled from 'styled-components'
import emailjs from 'emailjs-com';

const { TextArea } = Input;

const Footer = () => {

    const [values, setValues] = useState({})

    const handleChange = e => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const success = () => {
        message.success('Your message has been sent!')
    }

    const sendEmail = e => {
        e.preventDefault()
        console.log('hi')
        emailjs.send('default_service', 'template_rxBLuD03', values, 'user_Wb3obz7zel7zFLGgOSJBi')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                success()
            }, (err) => {
                console.log('FAILED...', err);
            });
        setValues({})
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Contact Info</h1>
            <Button icon='github' shape='circle' href='https://github.com/JarredStanford' style={{ margin: '1%' }} />
            <Button icon='linkedin' shape='circle' href='https://www.linkedin.com/in/jarred-stanford/' style={{ margin: '1%' }} />
            <ContactForm onSubmit={sendEmail}>
                <Input type='name' onChange={handleChange} placeholder='Name' value={values.name || ""} name={'name'} style={{ margin: '1%' }} />
                <Input type='email' onChange={handleChange} placeholder='Email' value={values.email || ""} name={'email'} style={{ margin: '1%' }} />
                <TextArea name='message' onChange={handleChange} value={values.message || ""} placeholder='Enter your message...' autoSize={{ minRows: 3, maxRows: 5 }} style={{ margin: '1%' }} />
                <Button htmlType='submit'>Submit</Button>
            </ContactForm>
        </div>
    )
}

const ContactForm = styled.form`
width: 500px;
margin: auto;
@media (max-width: 500px) {
    width: 90%;
    margin-top: 5%;
}`

export default Footer