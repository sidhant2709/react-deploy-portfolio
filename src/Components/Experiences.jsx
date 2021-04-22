import React from 'react'

const Experiences = () => {
    return (
        <div id="experience" className="experiences">
            <div className="d-flex justify-content-center">
                <h1>Experiences</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020-Present</h3>
                        <h4>AMAZON-ROC</h4>
                        <p>Transportation Specialist - I</p>
                    </div>
                </div>
{/* ========================================================================================================= */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2017-2020</h3>
                        <h4>CIMS-BHUBANESWAR</h4>
                        <p>Online Marketing Executive</p>
                    </div>
                </div>
{/* ========================================================================================================= */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016-2017</h3>
                        <h4>COGNIZANT TECHNOLOGY SOLUTIONS-KOLKATA</h4>
                        <p>Program Analyst</p>
                    </div>
                </div>
{/* ========================================================================================================= */}
            </div>
        </div>
    )
}

export default Experiences
