import React, { useState, useEffect, useMemo } from 'react';
import './MainPageContet.css';
import EmptyButton from '../../components/ui/emptyButton/EmptyButton';
import FullButton from '../../components/ui/fullButton/FullButton';
import computerGuyGif from '../../assets/computerGuy.gif';

const MainPageContet = () => {
    const [typedText, setTypedText] = useState<string>('');
    const [textIndex, setTextIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);


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

export default MainPageContet;
