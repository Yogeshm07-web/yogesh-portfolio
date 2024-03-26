import React from 'react';
import Background from './Background'; // Import the Background component
import './Home.css'; // Import the CSS for the Home component

const Home = () => {
    return (
        <Background>
            <div className="home-content">
                <h1>Yogesh Munsah</h1>
                <h2>Full Stack Engineer</h2>
                <p>Welcome to my portfolio! Here you can learn more about me, see my works, and get in touch with me.</p>
            </div>
        </Background>
    );
};

export default Home;
