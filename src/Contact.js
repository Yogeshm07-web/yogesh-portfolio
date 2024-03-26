import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from './Background';
import './Contact.css'; // Import the CSS file

// Define the LinkedIn profile URL
const LINKEDIN = 'https://linkedin.com/in/yogesh-munsah-05b31618a';

// Styled components
const ContactContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 4em;
    color: #fff;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 1.5em;
    color: #fff;
    margin-bottom: 30px;
`;

const ContactLink = styled(Link)`
    color: #ffe600;
    text-decoration: none;
    font-size: 2.5em;
    margin-bottom: 30px;
    display: block;
    &:hover {
        text-decoration: underline;
    }
`;

const ContactInfo = styled.a`
    color: #ffe600;
    text-decoration: none;
    font-size: 2em;
    display: block;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-3px); /* Add a slight hover effect */
    }
`;

// Contact component
const Contact = () => {
    return (
        <Background>
            <ContactContainer>
                <Title>Contact Me</Title>
                <Description>You can reach out to me via email, phone, Slack, or LinkedIn.</Description>
                <ContactLink to="/contact">Contact Form</ContactLink>
                <ContactInfo href={`mailto:yogeshmunsa07@gmail.com`}>Email: yogeshmunsa07@gmail.com</ContactInfo>
                <ContactInfo href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn: yogesh-munsah</ContactInfo>
                <ContactInfo href={`tel:+23058664804`}>Phone Number: +23058664804</ContactInfo>
            </ContactContainer>
        </Background>
    );
};

export default memo(Contact);
