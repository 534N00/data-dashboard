import React from 'react';
import { Link } from 'react-router-dom';
import thing from '../assets/sean-craig.png';

const About = () => {

    return (
        <>
            <h1>About Me</h1>
            <h3>Thank you for taking an interest in me. I my sites might be a bit rough around the edges, or very rough, but I try my best with the time I&apos;ve got.</h3>
            <img src={thing} alt="Sean Craig"/>
            <Link to="/"><button>Exit</button></Link>
        </>
    );
};

export default About;