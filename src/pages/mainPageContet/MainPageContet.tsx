import React from 'react'
import './MainPageContet.css'
import EmptyButton from '../../components/ui/emptyButton/EmptyButton'
import FullButton from '../../components/ui/fullButton/FullButton'
import computerGuyGif from '../../assets/computerGuy.gif'





const MainPageContet = () => {
    return (
        <div className='profileContainer'>
            <div className='headLine'>
                Shahar Mizrachi
            </div>
            <div className='seconderyHeadLine'>
                Full Stack Developer
            </div>
            <div className='descriptionText'>
                "Welcome to my portfolio! As a full stack developer with 1.5 years of experience,<br />
                I've built this website using React and TypeScript. Currently seeking new job opportunities,<br />
                I'm eager to join a dynamic team where I can contribute my skills and expertise.<br />
                With a strong work ethic, motivation, and excellent interpersonal skills honed throughout my professional journey,<br />
                I'm committed to delivering high-quality code and thriving in collaborative, cross-functional environments."
            </div>
            <div>
                <EmptyButton name='Download CV' />
                <FullButton name='Contect Me' />
            </div>
            <div>
                <img src={computerGuyGif} alt="My GIF" className='gif' />
            </div>
        </div>
    )
}

export default MainPageContet