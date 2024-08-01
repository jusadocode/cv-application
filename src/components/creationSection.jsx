import { useState } from 'react'
import '../App.css'

import GeneralSection from './generalSection'
import EducationSection from './educationSection'
import PracticalSection from './practicalSection'


function CreationSection() {
  
  return (
    <>
    <h1>
        Create your CV
    </h1>

    <div className='section-wrapper'>
    <h4>
      General
    </h4>
    <GeneralSection>
            
    </GeneralSection>
    </div>
    
    <div className='section-wrapper'>
    <h4>
      Education
    </h4>
    <EducationSection>
      
    </EducationSection>
    </div>
    <div className='section-wrapper'>
    <h4>
      Practical experience
    </h4>
    <PracticalSection>

    </PracticalSection>
    </div>

    <button className='add-button'>Submit CV</button>
    </>
  )
}

export default CreationSection