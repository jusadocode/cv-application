import { useState } from 'react'

import '../styles/DisplaySection.css'

import photo from'../assets/react.svg'

function DisplaySection({generalInfo, eduInfo, practicalInfo}) {
    return (
        <>
        <div className="main-grid-container">
            <div className="left-side">

                <div className="photo-section">
                    <img src={photo} alt="Avatar"></img>
                </div>

                <div className="about-section">
                <h2>About</h2>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like readable English.
                </div>

                <div className="contact-section">
                    <h3>Contact Info</h3>
                    <p>justas.ado@gmail.com</p>
                    <p>+37063614989</p>
                </div>

            </div>
            <div className="right-side">

                <div className="name-section">
                    <h2>Justas Adomaitis</h2>
                    <h3>Front End Developer</h3>
                </div>
                <div className="education-section">
                    <h2>Education</h2>

                    <div className="education-block">
                        <div className="time-section">
                            <p style={{fontWeight: 'bold'}}>2021-04</p>
                            <p style={{fontWeight: 'bold'}}>2022-03</p>
                        </div>
                        
                        <div className="info-section">
                            <p style={{fontWeight: 'bold'}}>Kaunas university Of Technology</p>
                            <p>Computer Science</p>
                        </div>

                        
                    </div>
                </div>

                <div className="practical-section">

                    <h2>Practical Experience</h2>

                    <div className="practical-block">
                        <div className="time-section">
                            <p style={{fontWeight: 'bold'}}>2021-04</p>
                            <p style={{fontWeight: 'bold'}}>2022-03</p>
                        </div>
                        
                        <div className="info-section">
                            <p style={{fontWeight: 'bold'}}>Telia Lithuania</p>
                            <p>Customer Support Specialist</p>
                        </div>

                        
                    </div>

                    
                    
                </div>
            </div>
            

            

        </div>

        </>
    )
}

export default DisplaySection