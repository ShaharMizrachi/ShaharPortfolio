import React, { useState, useEffect, useMemo } from 'react';
import './MainPageContet.css';

import EmptyButton from '../../components/ui/emptyButton/EmptyButton';
import FullButton from '../../components/ui/fullButton/FullButton';
import computerGuyGif from '../../assets/computerGuy.jpg';
import Carousel from '../../components/ui/carousel/Carousel';
import javaPic from '../../assets/signs/java1.png';
import dotNetPic from '../../assets/signs/Asp .Net Core2.png';
import cssPic from '../../assets/signs/CSS-Logo.png';
import expressJsPic from '../../assets/signs/express-js2.png';
import nodeJsPic from '../../assets/signs/nodejs1.png';
import reactPic from '../../assets/signs/react-logo.jpg';
import reactNativePic from '../../assets/signs/react-native1.png';
import sqlPic from '../../assets/signs/sql2.png';
import angularPic from '../../assets/signs/the-seo-guide-to-angular.png';
import pythonPic from '../../assets/signs/python.png';
import jsPic from '../../assets/signs/js.png';

interface MailMeButtonProps {
    email: string;
    subject?: string;
    body?: string;
}


const MainPageContet = () => {
    const [typedText, setTypedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const imagesSigns = [
        javaPic,
        dotNetPic,
        cssPic,
        expressJsPic,
        nodeJsPic,
        reactPic,
        reactNativePic,
        sqlPic,
        angularPic,
        pythonPic,
        jsPic,
    ];

    const textToType = useMemo(() => [
        "Welcome to my portfolio! As a full stack developer with 1.5 years of experience,",
        "I've built this website using React and TypeScript. Currently seeking new job opportunities,",
        "I'm eager to join a dynamic team where I can contribute my skills and expertise.",
        "With a strong work ethic, motivation, and excellent interpersonal skills honed throughout my professional journey,",
        "I'm committed to delivering high-quality code and thriving in collaborative, cross-functional environments."
    ], []);

    // Typing effect useEffect
    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (charIndex < textToType[textIndex].length) {
                setTypedText(prevText => prevText + textToType[textIndex][charIndex]);
                setCharIndex(charIndex + 1);
            } else if (textIndex < textToType.length - 1) {
                setTextIndex(textIndex + 1);
                setTypedText(prevText => prevText + '<br />');
                setCharIndex(0);
            } else {
                clearInterval(typingInterval);
            }
        }, 70);

        return () => clearInterval(typingInterval);
    }, [charIndex, textIndex, textToType]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev); // Toggle cursor 
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    const displayText = typedText + (showCursor ? '|' : '&nbsp;'); // Text with cursor

    const cvFilePath = '../../assets/CV-Shahar.pdf';


    const sendingEmail = () => {
        console.log("testttttt");

        const mailtoLink = `mailto:shaharmm22@gmail.com?${new URLSearchParams({
            subject: "Hello Shahar from portfolio",
            body: "",
        }).toString()}`;

        // Navigate to the mailto link
        // window.location.href = mailtoLink;
        window.open(mailtoLink, '_self');
        // window.open('mailto:mailto:shaharmm22@gmail.com?subject=Subject&body=Body%20goes%20here')

    };



    return (
        <div className='profileContainer'>
            <div className='headLine'>
                Shahar Mizrachi
            </div>
            <div className='seconderyHeadLine'>
                Full Stack Developer
            </div>
            <div className="descriptionText" dangerouslySetInnerHTML={{ __html: displayText }} />
            <div className='buttonsContainer'>
                <a href={cvFilePath} download={"CV-Shahar.pdf"}>
                    <EmptyButton name='Download CV' />
                </a>
                <FullButton name='Contact Me' onClick={sendingEmail} />
            </div>
            <div>
                <img src={computerGuyGif} alt="My GIF" className='gif' />
            </div>
            <div className='skills'>
                Skills
            </div>
            <Carousel images={imagesSigns} />
        </div>
    );
};

export default MainPageContet;
