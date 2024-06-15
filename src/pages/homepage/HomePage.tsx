import React, { useEffect } from 'react'
import './HomePage.css'
import UserCounter from '../../utils/counter'
import MainPageContent from '../mainPageContent/MainPageContent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../loginPage/LogInPage'




export const HomePage = () => {

    return (
        <BrowserRouter>
            <UserCounter />
            <div className='background'>
                <Routes>
                    <Route path="/" element={<MainPageContent />} />
                    <Route path="/admin" element={<LoginPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default HomePage;