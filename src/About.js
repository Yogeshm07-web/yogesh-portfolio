// About.js
import React from 'react';
import styled from 'styled-components';
import Background from './Background'; // Import the Background component

const Image = styled.img`
  width: 25%;
  height: auto;
`;

const About = () => {
    return (
        <Background>
            <h1>About Me</h1>
            <Image src="https://ca.slack-edge.com/T02NE0241-U05SMRGS4V8-42a745f58171-512" />
            <p> Greetings!I’m Yogesh Munsah, a dedicated Full Stack Web Developer. I have a solid foundation in web development and a passion for crafting engaging user experiences. I specialize in using cutting-edge technologies like Ruby, JavaScript, and Docker to create innovative web solutions. I’m currently learning Python/Django, PHP/Symfony, and Dart/Flutter to expand my skill set. When I’m not coding, I enjoy skydiving, exploring culinary delights, and outdoor activities. I’m open to connecting with like-minded individuals and organizations for collaboration and innovation. Feel free to reach out to me on LinkedIn or GitHub. Let’s chat about how we can collaborate and create something extraordinary together! 😊</p>
        </Background>
    );
};

export default About;