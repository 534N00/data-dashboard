import React from 'react';
import { Link } from 'react-router-dom';

const Oops = () => {
    return (
        <>
            <h1>Oops!</h1>
            <h3>Looks like you&apos;ve stumbled upon a page that doesn&apos;t exist.</h3>
            <h3>Try going back to the home page.</h3>
            <Link to="/"><button>Home</button></Link>
        </>
    );

};

export default Oops;