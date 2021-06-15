import React,{useState} from 'react'

import ModalVideo from 'react-modal-video'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from '../ModalVideo/1.jpeg'
import image2 from '../ModalVideo/2.jpg'
import image3 from '../ModalVideo/3.jpg'
import { SRLWrapper } from "simple-react-lightbox"

import './main.scss'
const Modalss = () => {
    const [isOpen, setOpen]=useState(false);


    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img src={image1} onDragStart={handleDragStart} />,
        <img src={image2} onDragStart={handleDragStart} />,       
        <img src={image3} onDragStart={handleDragStart} />,
     ];
    return (<>
        <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="z8m_Vy_9FIs" onClose={() => setOpen(false)} />

        <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
   
   
    </React.Fragment>
    <AliceCarousel autoPlay={true} autoPlayInterval={100} mouseTracking items={items} />

    <SRLWrapper>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
        <img src={image1} alt="salom1"/>
    </SRLWrapper>
    </>
    
    
    );
};


export default Modalss;