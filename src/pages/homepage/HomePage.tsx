import React, { useEffect } from 'react'
import './HomePage.css'
import MainPageContet from '../mainPageContet/MainPageContet'
import UserCounter from '../../utils/counter'

export const HomePage = () => {


    return (
        <div className='background'>
            <UserCounter />
            <MainPageContet />
        </div>
    )
}

export default HomePage;