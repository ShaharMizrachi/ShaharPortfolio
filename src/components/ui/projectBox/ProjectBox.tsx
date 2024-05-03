import React, { useEffect } from 'react'
import './ProjectBox.css'



const ProjectBox = ({ projectTitle, description, technologiesUsed, projectLink }:
    { projectTitle: string, description: string, technologiesUsed: string, projectLink: string }) => {


    return (

        <div className='projectBox'>
            <a href={`${projectLink}`} target="_blank" rel="noopener noreferrer">
                <div className='title'>{projectTitle}</div>
                <div className='description'>{description}</div>
                <div className='technologiesUsed'>{technologiesUsed}</div>
            </a>
        </div>
    )
}

export default ProjectBox


