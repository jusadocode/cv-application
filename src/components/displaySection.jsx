import { useState } from 'react'

import '../styles/DisplaySection.css'

import photo from'../assets/user.png'

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
                    <p>{generalInfo.description}</p>
                </div>

                <div className="contact-section">
                    <h3>Contact Info</h3>
                    <p>{generalInfo['e-mail']}</p>
                    <p>Tel: {generalInfo.phone}</p>
                </div>

            </div>
            <div className="right-side">

                <div className="name-section">
                    <h2>{generalInfo.name}</h2>
                    <h5>{generalInfo.title}</h5>
                </div>
                <div className="education-section">
                    <h2>Education</h2>
                    {
                        eduInfo.map((a, index) => (
                            <div className="education-block" key={index}>
                                <div className="time-section">
                                    <p style={{fontWeight: 'bold'}}>{eduInfo[index]['study-start']}</p>
                                    <p style={{fontWeight: 'bold'}}>{eduInfo[index]['study-end']}</p>
                                </div>
                                
                                <div className="info-section">
                                    <h3>{eduInfo[index].school}</h3>
                                    <h4 style={{fontWeight: 'bold'}}>{eduInfo[index].field}</h4>
                                    <p>{eduInfo[index].summary}</p>

                                </div>

                            </div>
                        ))
                    }
                    
                </div>

                <div className="practical-section">
                    <h2>Practical Experience</h2>
                    {
                        practicalInfo.map((a, index) => (
                            <div className="practical-block" key={index}>
                                <div className="time-section">
                                    <p style={{fontWeight: 'bold'}}>{practicalInfo[index]['work-start']}</p>
                                    <p style={{fontWeight: 'bold'}}>{practicalInfo[index]['work-end']}</p>
                                </div>
                                
                                <div className="info-section">
                                    <h3 >{practicalInfo[index].name}</h3>
                                    <h4 style={{fontWeight: 'bold'}}>{practicalInfo[index].position}</h4>
                                    <p>{practicalInfo[index].responsibilities}</p>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
            
        </div>

        </>
    )
}

export default DisplaySection