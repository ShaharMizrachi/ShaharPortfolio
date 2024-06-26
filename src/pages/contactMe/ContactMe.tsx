import React, { ChangeEvent, useState } from 'react';
import './ContactMe.css';
import { Grid } from '@mui/material';
import CustomTextField from '../../components/ui/CustomTextField';
import { postData } from '../../components/api/api';
import TruckButton from '../../components/ui/trackButton/TruckButton';

const ContactMe = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        date: ''
    });

    const [errorFields, setErrorFields] = useState<{ [key: string]: boolean }>({
        name: false,
        phone: false,
        email: false,
        message: false,
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        let errorField = false;
        switch (name) {
            case 'name':
                const nameParts = value.trim().split(/\s+/);
                errorField = !(nameParts.length >= 2 && nameParts.every(part => part.length >= 2));
                break;
            case 'phone':
                const phoneRegex = /^0\d{9}$/;
                errorField = !phoneRegex.test(value);
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                errorField = !emailRegex.test(value);
                break;
            case 'message':
                const words = value.trim().split(/\s+/);
                errorField = !(words.length >= 3);
                break;
        }

        setErrorFields((prev) => ({
            ...prev,
            [name]: errorField,
        }));

        setContactInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submit = async () => {
        try {
            const date = new Date();
            const updatedContactInfo = {
                ...contactInfo,
                date: date.toString(),
            };

            const response = await postData('/contacts', updatedContactInfo);
            console.log('Data saved successfully:', response);
            setContactInfo({
                name: '',
                phone: '',
                email: '',
                message: '',
                date: ''
            });
        } catch (error) {
            console.error('Error saving contact info:', error);
        }
    };

    const emptyFieldsCheck = () => {
        return (
            contactInfo.email === '' ||
            contactInfo.message === '' ||
            contactInfo.name === '' ||
            contactInfo.phone === ''
        );
    };

    return (
        <>
            <h2 className='ContactTitle commenProperties'>Contact Me</h2>
            <div className='shortfieldssContainer commenProperties'>
                <CustomTextField
                    required
                    id="outlined-required"
                    label="Full Name"
                    name="name"
                    value={contactInfo.name}
                    onChange={handleInputChange}
                    error={errorFields['name']}
                    helperText={errorFields['name'] ? 'Invalid name' : ''}
                />
                <CustomTextField
                    required
                    id="outlined-required"
                    label="Phone"
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleInputChange}
                    error={errorFields['phone']}
                    helperText={errorFields['phone'] ? 'Invalid phone number' : ''}
                />
                <CustomTextField
                    required
                    id="outlined-required"
                    label="Email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleInputChange}
                    error={errorFields['email']}
                    helperText={errorFields['email'] ? 'Invalid email' : ''}
                />
            </div>
            <div className='messageTextConatiner commenProperties'>
                <CustomTextField
                    required
                    id="outlined-multiline-static"
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={contactInfo.message}
                    onChange={handleInputChange}
                    error={errorFields['message']}
                    helperText={errorFields['message'] ? 'Message must contain at least 10 words' : ''}

                />
            </div>
            <div className='submitButtonContainer commenProperties'>
                <TruckButton name='Submit' onClick={submit} disabled={emptyFieldsCheck() || (Object.values(errorFields).some(field => field))} />
            </div>
        </>
    );
};

export default ContactMe;
