import React, { ChangeEvent, useMemo, useState } from 'react'
import CustomTextField from '../../components/ui/CustomTextField'
import GlowingButton from '../../components/ui/glowingButton/GlowingButton'
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../adminDashboard/AdminDashboard';
import './LogInPage.css'


const LogInPage = () => {
    const navigate = useNavigate();
    const [passApprove, setpassApprove] = useState<boolean>(false)



    const initialLoginValues = useMemo(() => ({
        user: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD
    }), []);

    const [loginValues, setLoginInValues] = useState<{ [key: string]: string }>({
        user: '',
        password: ''
    })

    const [errorLoginValues, setErrorLoginValues] = useState<{ [key: string]: boolean }>({
        userError: false,
        passwordError: false
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setLoginInValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const LogInHandle = () => {
        const { user, password } = loginValues;
        console.log(loginValues.user, loginValues.password)
        if (user === initialLoginValues.user && password === initialLoginValues.password) {
            console.log("Login successful, move to admin page");
            setpassApprove(true)
        } else {
            setErrorLoginValues({
                userError: user !== initialLoginValues.user,
                passwordError: password !== initialLoginValues.password
            });
        }
    }


    return (
        <>
            {passApprove ? <AdminDashboard /> :
                <div className='loginContainer'>
                    <div className='loginFileds'>
                        <CustomTextField
                            required
                            id="outlined-required"
                            label="User"
                            name="user"
                            value={loginValues.user}
                            onChange={handleInputChange}
                            error={errorLoginValues['userError']}
                            helperText={errorLoginValues['userError'] ? 'Invalid user name ' : ''}
                        />

                        <CustomTextField
                            required
                            id="outlined-required"
                            label="Password"
                            name="password"
                            value={loginValues.password}
                            onChange={handleInputChange}
                            error={errorLoginValues['passwordError']}
                            helperText={errorLoginValues['passwordError'] ? 'Invalid password' : ''}
                        />

                    </div>
                    <div className='onClickLogin'>
                        <GlowingButton onClickLogin={LogInHandle} />
                    </div>
                </div>
            }

        </>

    )
}

export default LogInPage