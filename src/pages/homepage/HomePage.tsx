import React, { useEffect } from 'react'
import './HomePage.css'
import UserCounter from '../../utils/counter'
import MainPageContent from '../mainPageContent/MainPageContent'



export const HomePage = () => {


    return (
        <div className='background'>
            <UserCounter />
            <MainPageContent />
        </div>
    )
}

export default HomePage;