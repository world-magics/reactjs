import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos'
import "aos/dist/aos.css"
import Image1 from './images/1.jpg'
import Image2 from './images/22.jpg'
import Image3 from './images/4.jpg'
import Image4 from './images/8.jpg'
import './main.css';
const AnimationAOSdanfoydalanish = () => {
    useEffect(()=>{
        AOS.init();
    })
    return (
        <div>
            <div className="imageSection">
                <img data-aos="fade-zoom-in" data-aos-duration="1000" src={Image1}/>
                <img data-aos="fade-up" data-aos-duration="1000" src={Image2}/>
                <img data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear" src={Image3}/>
                <img data-aos="fade-right" data-aos-duration="1000" src={Image4}/>
            </div>
        </div>
    );
};

AnimationAOSdanfoydalanish.propTypes = {};

export default AnimationAOSdanfoydalanish;