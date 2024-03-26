import React from 'react';
import styled from 'styled-components';
import Background from './Background'; // Import the Background component
import { FaHtml5, FaCss3Alt, FaGit, FaReact, FaJsSquare, FaGem, FaDatabase, FaPython } from 'react-icons/fa'; // Import the icons
import { DiDjango, DiPhp, DiSymfony, DiDart } from 'react-icons/di'; // Import the icons

const Image = styled.img`
  width: 25%;
  height: auto;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const About = () => {
    return (
        <Background>
            <h1>About Me</h1>
            <Image src="https://ca.slack-edge.com/T02NE0241-U05SMRGS4V8-42a745f58171-512" />
            <IconContainer>
                <FaHtml5 size={50} />
                <FaCss3Alt size={50} />
                <FaGit size={50} />
                <img src="data:image/png;base64,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" alt="Heroku" style={{width: '30px', height: '30px'}} />
                <FaReact size={50} />
                <FaJsSquare size={50} />
                <FaGem size={50} />
                <FaDatabase size={50} />
                <FaPython size={50} />
                <DiDjango size={50} />
                <DiPhp size={50} />
                <DiSymfony size={50} />
                <DiDart size={50} />
            </IconContainer>
            <p> Greetings! I’m Yogesh Munsah, a dedicated Full Stack Web Developer. I have a solid foundation in web development and a passion for crafting engaging user experiences. I specialize in using cutting-edge technologies like Ruby, JavaScript, and Docker to create innovative web solutions. I’m currently learning Python/Django, PHP/Symfony, and Dart/Flutter to expand my skill set. When I’m not coding, I enjoy skydiving, exploring culinary delights, and outdoor activities. I’m open to connecting with like-minded individuals and organizations for collaboration and innovation. Feel free to reach out to me on LinkedIn or GitHub. Let’s chat about how we can collaborate and create something extraordinary together! 😊</p>
        </Background>
    );
};

export default About;
