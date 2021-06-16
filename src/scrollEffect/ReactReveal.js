import React from 'react';
import Fade from 'react-reveal/Fade'
import './main.css'
import './animate.css'
import Reveal from 'react-reveal/Reveal';

const ReactReveal = () => {
    return (
        <div>
            <Fade left>
            <h1>React Reveal examle n1</h1>
            </Fade>
            <Fade top>
            <h1>React Reveal examle n1</h1>
            </Fade>
            <Fade right>
            <h1>React Reveal examle n1</h1>
            </Fade>
            <Fade bottom>
            <h1>React Reveal examle n1</h1>
            </Fade>
            <Reveal effect="animText" duration="700">
                <h1>Special Custom Style</h1>
            </Reveal>
        </div>
    );
};


export default ReactReveal;