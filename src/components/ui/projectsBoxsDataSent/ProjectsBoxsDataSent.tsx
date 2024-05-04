import React from 'react'
import ProjectBox from '../projectBox/ProjectBox'
import './ProjectsBoxsDataSent.css'

const ProjectsBoxsDataSent = () => {

    const projectsArray: string[][] = [
        ['projectTitle', '//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos id perferendis aut neque reiciendis similique maiores nihil ad blanditiis. Maxime nemo aperiam praesentium cum enim! Nam vel quaerat facere.', 'KJNS,JHBH,JHBJH', 'https://www.linkedin.com/']
        , ['projectTitle', '//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos id perferendis aut neque reiciendis similique maiores nihil ad blanditiis. Maxime nemo aperiam praesentium cum enim! Nam vel quaerat facere.', 'KJNS,JHBH,JHBJH', 'https://www.linkedin.com/']
        , ['projectTitle', '//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos id perferendis aut neque reiciendis similique maiores nihil ad blanditiis. Maxime nemo aperiam praesentium cum enim! Nam vel quaerat facere.', 'KJNS,JHBH,JHBJH', 'https://www.linkedin.com/']
        , ['projectTitle', '//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos id perferendis aut neque reiciendis similique maiores nihil ad blanditiis. Maxime nemo aperiam praesentium cum enim! Nam vel quaerat facere.', 'KJNS,JHBH,JHBJH', 'https://www.linkedin.com/']
        , ['projectTitle', '//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos id perferendis aut neque reiciendis similique maiores nihil ad blanditiis. Maxime nemo aperiam praesentium cum enim! Nam vel quaerat facere.', 'KJNS,JHBH,JHBJH', 'https://www.linkedin.com/']
        , ['projectTitle', '//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos id perferendis aut neque reiciendis similique maiores nihil ad blanditiis. Maxime nemo aperiam praesentium cum enim! Nam vel quaerat facere.', 'KJNS,JHBH,JHBJH', 'https://www.linkedin.com/']
        , ['projectTitle', '//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos id perferendis aut neque reiciendis similique maiores nihil ad blanditiis. Maxime nemo aperiam praesentium cum enim! Nam vel quaerat facere.', 'KJNS,JHBH,JHBJH', 'https://www.linkedin.com/']

        , ['projectTitle', '//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dignissimos id perferendis aut neque reiciendis similique maiores nihil ad blanditiis. Maxime nemo aperiam praesentium cum enim! Nam vel quaerat facere.', 'KJNS,JHBH,JHBJH', 'https://www.linkedin.com/']
    ]

    const projectBoxes = projectsArray.map((arrayData, index) => (
        <ProjectBox
            key={index}
            projectTitle={arrayData[0]} // First item
            description={arrayData[1]} // Second item
            technologiesUsed={arrayData[2]} // Third item
            projectLink={arrayData[3]} // Fourth item
        />
    ));

    return <div className='projectsContainer'>{projectBoxes}</div>;
}

export default ProjectsBoxsDataSent