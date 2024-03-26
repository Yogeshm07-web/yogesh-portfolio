import styled, { keyframes } from 'styled-components';

/* Define keyframes for floating effect */
const floatAnimation = keyframes`
    50% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px); /* Adjust the floating height */
    }
    100% {
        transform: translateY(0);
    }
`;

const Background = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    padding: 2em 0 0; /* Adjusted padding-top to move content closer to the navbar */

    background-image: url('https://th.bing.com/th/id/OIG4.vQKsJ1tS3PPtyzchlS9X?pid=ImgGn');
    background-size: cover;
    background-position: center; /* Center the background image */
    color: #fff;
    min-height: 100vh;

    /* Overlay */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    /* Content inside the section should be above the overlay */
    > * {
        position: relative;
        z-index: 2;
        text-align: center; /* Center align text */
    }

    /* Shadow */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

    h1 {
        font-size: 6em;
        animation: ${floatAnimation} 3s infinite alternate;
    }

    h2 {
        font-size: 5em;
        animation: ${floatAnimation} 4s infinite alternate;
    }

    p {
        font-size: 2.5em;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 4em; /* Adjust font size for smaller screens */
        }

        h2 {
            font-size: 2.5em; /* Adjust font size for smaller screens */
        }

        p {
            font-size: 2em; /* Adjust font size for smaller screens */
        }
    }
`;

export default Background;
