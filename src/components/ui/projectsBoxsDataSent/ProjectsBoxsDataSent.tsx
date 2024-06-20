import React from 'react'
import ProjectBox from '../projectBox/ProjectBox'
import './ProjectsBoxsDataSent.css'

const ProjectsBoxsDataSent = () => {
    const projectsArray: string[][] = [
        ['Portfolio', 'Showcasing my projects, skills, and journey as a developer, this personal portfolio reflects my passion for coding and technology.', 'React and TypeScrip', 'https://github.com/ShaharMizrachi/ShaharPortfolio']
        , ['GoGood', 'Application designed to bridge the gap between professionals and individuals seeking assistance in real-time, based on proximity. Whether you are looking for a plumber, a tutor, or any other type of expert, GoGood connects you with a trusted professional within your vicinity.', 'react native,TypeScript, asp .net core, mysql', 'https://github.com/ShaharMizrachi/GoGood']
        , ['Hotel Management', 'A convenient website for booking rooms at a specific hotel chain. Explore our hotels, select your preferred room, and make a secure reservation with just a few clicks.', 'React,TypeScript, Asp .net Core,SQL', 'https://github.com/ShaharMizrachi/HotelManagement/tree/master']
        , ['StarWars', 'A Star Wars-themed website featuring a wealth of information and visuals from the iconic movie series. Explore a comprehensive list of characters, films, planets, starships, and vehicles. Use our SearchBar to find your favorite Star Wars details, and immerse yourself in the galaxy far, far away.', 'React', 'https://github.com/ShaharMizrachi/StarWars/tree/main/withoutredux']
        , ['Shopping-Site', 'A shopping site application designed for easy online purchasing, with a back office for comprehensive product management and sales statistics. Customers can browse products, add items to their cart, and complete purchases seamlessly, while administrators can manage inventory, track sales, and gain insights from detailed analytics.', 'React,ExpressJS,MySQL', 'https://github.com/ShaharMizrachi/shopping-site']
        , ['Ping-System-Web', 'A web-based ping system command tool that allows users to configure and execute ping commands through an intuitive web form. Users can set parameters such as packet count, sending and receiving options, and view statistics for the top 5 most pinged destinations. The app provides real-time results and detailed feedback to help monitor network connections.', 'React,Node JS (Express.js), MySQL', 'https://github.com/ShaharMizrachi/ping-system-web/tree/main/PingAssignment']
        , ['OrderEat', 'A comprehensive software platform built with Java for restaurant employees and managers to streamline organization and planning. It offers tools for scheduling shifts, managing staff, coordinating tasks, and overseeing daily operations. With an intuitive interface, restaurant teams can improve communication, enhance efficiency, and optimize workflow.', 'Java', 'https://github.com/ShaharMizrachi/OrderEat/tree/master/OrderEat']

        , ['Face-Recognition', 'A face-recognition project using Python to identify faces by name and pinpoint their coordinates in real-time video', 'Python', 'https://github.com/ShaharMizrachi/Face-recognition/tree/master']
    ]

    const projectBoxes = projectsArray.map((arrayData, index) => (
        <ProjectBox
            key={index}
            projectTitle={arrayData[0]}
            description={arrayData[1]}
            technologiesUsed={arrayData[2]}
            projectLink={arrayData[3]}
        />
    ));

    return <div className='projectsContainerBoxes'>{projectBoxes}</div>;
}

export default ProjectsBoxsDataSent