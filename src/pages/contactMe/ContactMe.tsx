import React, { ChangeEvent, useState } from 'react';
import './ContactMe.css';
import TextField from '@mui/material/TextField';
import FullButton from '../../components/ui/fullButton/FullButton';
import CustomTextField from '../../components/ui/CustomTextField';
import { postData } from '../../components/api/api';
import TruckButton from '../../components/ui/trackButton/TruckButton';

const ContactMe = () => {
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        date: ''
    });
    const [erorFields, setErorFields] = useState<{ [key: string]: boolean }>(
        {
            name: false,
            phone: false,
            email: false,
            message: false,
        }
    )

    // Generalized function to update state based on field name
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        console.log(name)
        console.log(value);
        // if (name === 'phone') {
        //     validatePhoneNumber(value)
        // }
        let erorFIledSingle = false;

        switch (name) {
            case 'name':
                const nameParts = value.trim().split(/\s+/);
                erorFIledSingle = !(nameParts.length >= 2 && nameParts.every(part => part.length >= 2));
                break;
            case 'phone':
                const phoneRegex = /^0\d{9}$/;
                erorFIledSingle = !phoneRegex.test(value)
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                erorFIledSingle = !emailRegex.test(value)
                break;
            case 'message':
                const words = value.trim().split(/\s+/);
                erorFIledSingle = !(words.length >= 3);
                break;
        }
        console.log('====================================');
        console.log(erorFIledSingle);
        console.log('====================================');

        setErorFields((prev) => ({
            ...prev,
            [name]: erorFIledSingle,
        }));


        setContactInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    // const validatePhoneNumber = (phoneValue: string) => {
    //     const phoneRegex = /^0\d{9}$/;
    //     setPhoneError(!phoneRegex.test(phoneValue));
    // }


    // const filedsValidate = (phoneValue: string) => {
    //     const phoneRegex = /^0\d{9}$/;
    //     setPhoneError(phoneRegex.test(phoneValue));
    // }


    const submit = async () => {
        try {
            const date = new Date;

            const updatedContactInfo = {
                ...contactInfo,
                date: date.toString(),
            };

            const response = await postData('/contacts', updatedContactInfo);
            console.log('Data saved successfully:', response);
        } catch (error) {
            console.error('Error saving contact info:', error);
        }
    };


    return (
        <>
            <h2 className='title commenProperties'>Contact Me</h2>
            <div className='shortFiledsContainer commenProperties'>
                <CustomTextField
                    required
                    id="outlined-required"
                    label="Full Name"
                    name="name"
                    value={contactInfo.name}
                    onChange={handleInputChange}
                />
                <CustomTextField
                    required
                    id="outlined-required"
                    label="Phone"
                    name="phone"
                    value={contactInfo.phone}
                    onChange={handleInputChange}
                    error={phoneError}
                    helperText={erorFields['phone'] ? 'Invalid phone number' : ''}
                />
                <CustomTextField
                    required
                    id="outlined-required"
                    label="Email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleInputChange}
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
                />
            </div>
            <div className='submitButtonContainer commenProperties'>
                {/* <FullButton name={'Submit'} onClick={submit} /> */}
                <div><TruckButton name='Submit' onClick={submit} /></div>
            </div>
        </>
    );
};

export default ContactMe;
