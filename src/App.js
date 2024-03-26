import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import Home from './Home'; // Import the Home component
import About from './About'; // Import the About component
import Projects from './Projects'; // Import the Projects component
import Contact from './Contact'; // Import the Contact component
import './App.css'; // Import the CSS for the App


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Render the Navbar component */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Define other routes */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
