import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';
import Background from './Background'; // Import the Background component

// Styled components for styling the Projects page
const ProjectTitle = styled.h2`
    margin-bottom: 10px;
`;

const ProjectLink = styled(Link)` // Use Link instead of a
    color: #007bff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const ProjectDescription = styled.p`
    margin-bottom: 20px;
`;

const Projects = () => {
    // Sample data for projects
    const projects = [
        {
            name: 'Econocuisine',
            description: 'Econocuisine is a web application for managing recipes and shopping lists. It allows users to search for recipes, save their favorites, and generate shopping lists based on selected recipes.',
            link: 'https://econocuisine-ceeba081e957.herokuapp.com'
        },
        {
            name: 'Project 2',
            description: 'A brief description of Project 2.',
            link: '/project2' // Update the link to match your routing setup
        },
        // Add more projects here...
    ];

    return (
        <Background>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div key={index}>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    {/* Use to instead of href */}
                    <ProjectLink to={project.link} target="_blank" rel="noopener noreferrer">View Project</ProjectLink>
                </div>
            ))}
        </Background>
    );
};

export default Projects;
