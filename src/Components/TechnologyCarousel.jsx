import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import react1 from "../Images/react.png";
import frontend from "../Images/frontend.svg"
import backend from "../Images/backend.png"
import ds from "../Images/ds.png";

const TechnologyCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <div>
                <img src={react1} alt="react1" />
                <div className="myCarousel">
                    <h3>REACT APP</h3>
                </div>
            </div>
            <div>
                <img src={frontend} alt="frontend" />
                <div className="myCarousel">
                    <h3>FRONTEND</h3>
                </div>
            </div>
            <div>
                <img src={backend} alt="backend"/>
                <div className="myCarousel">
                    <h3>BACKEND</h3>
                </div>
            </div>
            <div>
                <img src={ds} alt="ds" />
                <div className="myCarousel">
                    <h3>DATA-STRUCTURES</h3>
                </div>
            </div>
        </Carousel>
    )
}

export default TechnologyCarousel
