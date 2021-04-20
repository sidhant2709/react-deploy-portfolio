/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import p1 from "../Images/Projects Images/p1.jpg";
import aljazeera from "../Images/Projects Images/aljazeera.png";
import nykaa from "../Images/Projects Images/nykaa.png";
import loom from "../Images/Projects Images/loom.png";
import p4 from "../Images/Projects Images/p4.jpg";
import cssIcon from "../Images/Icon Images/css.svg";
import jsIcon from "../Images/Icon Images/js.svg"
import reactIcon from "../Images/Icon Images/react.svg"
import htmlIcon from "../Images/Icon Images/html.svg";
import { FaSearchPlus } from 'react-icons/fa';

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
    const openProjectAlzajeera = () => {
        const content = (
            <div className="popup-box">
                <h2>PROJECT-1</h2>
                <img src={aljazeera} alt="aljazeera" className="portfolio-image-popupbox" />
                
                <p>ALJAZEERA CLONE</p>
               
                <div className="link-button">
                    <button onClick={() => window.open("https://github.com/rohanranjan25061996/hexane-aljeera-clone")} className="github">GitHub Link</button>
                    <button className="demo">DEMO</button>
                </div>
                <h3>Technologies used</h3>
                <div className="technology-used">
                    <img src={cssIcon} alt="cssIcon" className="tech-icon"/>
                    <img src={jsIcon} alt="cssIcon" className="tech-icon" />
                    <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
                    <img src={reactIcon} alt="cssIcon" className="tech-icon"/>
                </div>
            </div>
        )
        PopupboxManager.open({ content });
    }
   const openProjectNykaa = () => {
        const content = (
            <div className="popup-box">
                <h2>PROJECT-2</h2>
                <img src={nykaa} alt="p2" className="portfolio-image-popupbox"/>
                <p>NYKAA CLONE</p>
                <div className="link-button">
                    <button onClick={() => window.open("https://github.com/divy25/lithiumProject")} className="github">GitHub Link</button>
                    <button className="demo">DEMO</button>
                </div>
                <h3>Technologies used</h3>
                <div className="technology-used">
                    <img src={cssIcon} alt="cssIcon" className="tech-icon"/>
                    <img src={jsIcon} alt="cssIcon" className="tech-icon" />
                    <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
                    <img src={reactIcon} alt="cssIcon" className="tech-icon"/>
                </div>
            </div>
        )
        PopupboxManager.open({content})
    }

    const openProjectLoom = () => {
        const content = (
            <div className="popup-box">
                <h2>PROJECT-3</h2>
                <img src={loom} alt="loom" className="portfolio-image-popupbox"/>
                <p>LOOM CLONE</p>
                <div className="link-button">
                    <button onClick={() => window.open("https://github.com/aman73650/Bromine")} className="github">GitHub Link</button>
                    <button className="demo">DEMO</button>
                </div>
                <h3>Technologies used</h3>
                <div className="technology-used">
                    <img src={cssIcon} alt="cssIcon" className="tech-icon"/>
                    <img src={jsIcon} alt="cssIcon" className="tech-icon" />
                    <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
                    <img src={reactIcon} alt="cssIcon" className="tech-icon"/>
                </div>
            </div>
        )
        PopupboxManager.open({content})
    }
    const openP4 = () => {
        const content = (
            <div className="popup-box">
                <img src={p1} alt="p1" className="portfolio-image-popupbox"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae temporibus deserunt eius autem corporis eveniet consequatur, mollitia accusantium quam quos omnis nulla quas impedit.</p>
                <div className="link-button">
                    <button onClick={() => window.open("https://github.com/divy25/lithiumProject")} className="github">GitHub Link</button>
                    <button className="demo">DEMO</button>
                </div>
                <h3>Technologies used</h3>
                <div className="technology-used">
                    <img src={cssIcon} alt="cssIcon" className="tech-icon"/>
                    <img src={jsIcon} alt="cssIcon" className="tech-icon" />
                    <img src={htmlIcon} alt="cssIcon" className="tech-icon" />
                    <img src={reactIcon} alt="cssIcon" className="tech-icon"/>
                </div>
            </div>
        )
        PopupboxManager.open({content})
    }
    return (
        <div id="projects" className="portfolio-wrapper">
            <h1 className="text-uppercase text-center heading">Projects</h1>
            <div className="container-fluid">
                <div className="image-box-wrapper row justify-content-center">


                    <div className="portfolio-image-box" onClick={openProjectAlzajeera}>
                        <img src={aljazeera} className="portfolio-image" alt="p1" />
                        <div className="overflow">
                            <h3>Aljazeera Clone</h3>
                        </div>
                        <FaSearchPlus className="portfolio-icon"/>
                    </div>
                
{/* ====================================================================================================== */}
                
                    <div className="portfolio-image-box" onClick={openProjectNykaa}>
                        <img src={nykaa} className="portfolio-image" alt="nykaa" />
                        <div className="overflow">
                            <h3>Nykaa Clone</h3>
                        </div>
                        <FaSearchPlus className="portfolio-icon"/>
                    </div>
                
{/* ====================================================================================================== */}
                
                    <div className="portfolio-image-box" onClick={openProjectLoom}>
                        <img src={loom} className="portfolio-image" alt="loom" />
                        <div className="overflow">
                            <h3>Loom Clone</h3>
                        </div>
                        <FaSearchPlus className="portfolio-icon"/>
                    </div>
                
{/* ====================================================================================================== */}
                
                   <div className="portfolio-image-box" onClick={openP4}>
                        <img src={p4} className="portfolio-image" alt="p4" />
                        <div className="overflow"></div>
                        <FaSearchPlus className="portfolio-icon"/>
                    </div>
                </div>
            </div>
            <PopupboxContainer/>
        </div>
    )
}

export default Projects
