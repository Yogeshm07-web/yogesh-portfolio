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

const ContactLink = styled(Link)`
    color: hsla(30, 44%, 96%, 0.701); /* Set text color to a lighter gold */
    text-decoration: none;
    font-size: 3.5rem;
    &:hover {
        text-decoration: underline;
    }
`;

const HoverEffect = styled.div`
    &:hover {
        transform: translateY(-1px); /* Move the element up on hover */
    }
`;

const ContactInfo = styled.a`
    color: hsla(30, 44%, 96%, 0.701); /* Set text color to a lighter gold */
    text-decoration: none;
    display: block;
    margin-bottom: 50px;
    transition: transform 0.3s ease;
    font-size: 4em;
    text-shadow: 1px 1px 0px #b9ae70, 2px 2px 0px #000000, 3px 3px 0px #ffd700; /* Add a gold shadow effect */
`;

// Contact component
const Contact = () => {
    return (
        <Background>
            <ContactContainer>
                <h1>Contact Me</h1>
                <p>You can contact me via email, phone, Slack, or LinkedIn.</p>
                <ContactLink to="/contact">Contact Form</ContactLink>
                <>
                    <HoverEffect>
                        <ContactInfo href={`mailto:yogeshmunsa07@gmail.com`}>Email: yogeshmunsa07@gmail.com</ContactInfo>
                    </HoverEffect>
                    <HoverEffect>
                        <ContactInfo href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn: yogesh-munsah</ContactInfo>
                    </HoverEffect>
                    <HoverEffect>
                        <ContactInfo href={`tel:+23058664804`}>Phone Number: +23058664804</ContactInfo>
                    </HoverEffect>
                </>
            </ContactContainer>
        </Background>
    );
};

export default memo(Contact);
