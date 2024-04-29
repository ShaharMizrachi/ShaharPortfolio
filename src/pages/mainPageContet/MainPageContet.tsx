import React, { useState, useEffect, useMemo } from 'react';
import './MainPageContet.css';
import EmptyButton from '../../components/ui/emptyButton/EmptyButton';
import FullButton from '../../components/ui/fullButton/FullButton';
import computerGuyGif from '../../assets/computerGuy.jpg';
import Carousel from '../../components/ui/carousel/Carousel';
import AssetProviderPics from '../../components/ui/AssetProviderPics';

// Import all the necessary assets/images
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



const MainPageContet = () => {
    const [typedText, setTypedText] = useState<string>('');
    const [textIndex, setTextIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);



    const imagesSigns: string[] = [
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



    const textToType = useMemo<string[]>(() => [
        "Welcome to my portfolio! As a full stack developer with 1.5 years of experience,",
        "I've built this website using React and TypeScript. Currently seeking new job opportunities,",
        "I'm eager to join a dynamic team where I can contribute my skills and expertise.",
        "With a strong work ethic, motivation, and excellent interpersonal skills honed throughout my professional journey,",
        "I'm committed to delivering high-quality code and thriving in collaborative, cross-functional environments."
    ], [])



    useEffect(() => {
        const interval = setInterval(() => {
            if (charIndex < textToType[textIndex].length) {
                setTypedText(prevText => prevText + textToType[textIndex][charIndex]);
                setCharIndex(charIndex + 1);
            } else if (textIndex < textToType.length - 1) {
                setTextIndex(textIndex + 1);
                setTypedText(prevtext => prevtext + '<br />')
                setCharIndex(0);
            } else {
                clearInterval(interval);
            }
        }, 70);



        return () => clearInterval(interval);
    }, [typedText, charIndex, textIndex, textToType]);

    return (
        <div className='profileContainer'>
            <div className='headLine'>
                Shahar Mizrachi
            </div>
            <div className='seconderyHeadLine'>
                Full Stack Developer
            </div>
            <div className='descriptionText' dangerouslySetInnerHTML={{ __html: typedText }}>
            </div>
            <div className='buttonsContainer'>
                <EmptyButton name='Download CV' />
                <FullButton name='Contect Me' />
            </div>
            <div>
                <img src={computerGuyGif} alt="My GIF" className='gif' />
            </div>
            <div className='skills'>
                Skills
            </div>
            <Carousel images={imagesSigns} />

        </div>
    )
}

export default MainPageContet;
