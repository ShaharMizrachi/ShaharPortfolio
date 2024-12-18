import React, { useState, useEffect, useMemo, useRef } from 'react';
import './MainPageContent.css';
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
import ProjectsBoxsDataSent from '../../components/ui/projectsBoxsDataSent/ProjectsBoxsDataSent';
import ContactMe from '../contactMe/ContactMe';
import UseIntersectionObserverSlide from '../../components/hooks/UseIntersectionObserverSlide';




const MainPageContent = () => {
    const [typedText, setTypedText] = useState<string>('');
    const [textIndex, setTextIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [showCursor, setShowCursor] = useState<boolean>(true);
    const [isProjectsInView, setIsProjectsInView] = useState(false);
    const [isContactInView, setIsContactInView] = useState(false);
    const projectsContainerRef = useRef<HTMLDivElement | null>(null);
    const contactMeRef = useRef<HTMLDivElement | null>(null);

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
        "Welcome to my portfolio! As a full stack developer with 2 years of experience,",
        "I've built this website using React and TypeScript. Currently seeking new job opportunities,",
        "I'm eager to join a dynamic team where I can contribute my skills and expertise.",
        "With a strong work ethic, motivation, and excellent interpersonal skills honed throughout my professional journey,",
        "I'm committed to delivering high-quality code and thriving in collaborative, cross-functional environments."
    ], []);

    // Typing effect 
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


    //cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev); // Toggle cursor 
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    const displayText = typedText + (showCursor ? '|' : '&nbsp;'); // Text with cursor

    // Use the custom hook for both elements
    UseIntersectionObserverSlide(projectsContainerRef, setIsProjectsInView, { threshold: 0.1 });
    UseIntersectionObserverSlide(contactMeRef, setIsContactInView, { threshold: 0.1 });

    // Scroll to ContactMe section
    const scrollToContactMe = () => {
        if (contactMeRef.current) {
            contactMeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
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
                <a href={"/CV-Shahar.pdf"} download={"CV-Shahar.pdf"}>
                    <EmptyButton name='Download CV' />
                </a>
                <FullButton name='Contact Me' onClick={scrollToContactMe} />
            </div>
            <div>
                <img src={computerGuyGif} alt="My GIF" className='computerGuyPic' />
            </div>
            <div className='skills'>
                Skills
            </div>
            <Carousel images={imagesSigns} />
            <div
                className={`projectsContainer ${isProjectsInView ? 'slide-in' : ''}`}
                ref={projectsContainerRef}
            >
                <ProjectsBoxsDataSent />
            </div>
            <div className={`ContactMeContainer ${isContactInView ? 'slide-inContactMe' : ''}`} ref={contactMeRef}>
                <ContactMe />
            </div>
        </div>
    );
};

export default MainPageContent;
