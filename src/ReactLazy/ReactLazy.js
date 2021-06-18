import React from 'react'
import img1 from '../scrollEffect/images/1.jpg'
import img2 from '../scrollEffect/images/4.jpg'
import img3 from '../scrollEffect/images/22.jpg'
import img4 from '../scrollEffect/images/8.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Card, CardImg } from 'reactstrap'
import 'react-lazy-load-image-component/src/effects/opacity.css'
const ReactLazy=()=>{
    const styleImage={
        width:'75%'
    }
    return(
        <>
        
        <LazyLoadImage
        src={img1} 
        style={styleImage}
        effect="opacity"
        delayTime="1000"
        placeholderSrc={<h1>Loading...</h1>}

        />
        <span>lorem ipsum</span>

        </>
    )
}
export default ReactLazy;