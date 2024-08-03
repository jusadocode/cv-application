import { useState } from 'react'
import '../App.css'

import GeneralSection from './generalSection'
import EducationSection from './educationSection'
import PracticalSection from './practicalSection'

function CreationSection() {

  const [eduAmount, setEduAmount] = useState(1);
  const [practicalAmount, setPracticalAmount] = useState(1);

  const addEduSection = () => {
    setEduAmount(eduAmount + 1);
  };

  const addPracticalSection = () => {
    setPracticalAmount(practicalAmount + 1);
  };

  const removeEduSection = () => {
    setEduAmount(eduAmount - 1);
  };

  const removePracticalSection = () => {
    setPracticalAmount(practicalAmount - 1);
  };

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
      <div className="section">
      {
        Array.from({length: eduAmount}).map((a, index) => 
          <EducationSection key={index}/>
        )
        
      }
      {
        <div className="button-section">
          <button onClick={addEduSection} className="add-button">Add another</button>
          {
            eduAmount > 1 ? <button onClick={removeEduSection} className="add-button">Remove</button> : ''
          }
        </div>
      }
      </div>
      
      
    
    </div>

    <div className='section-wrapper'>
      <h4>
        Practical experience
      </h4>
      <div className='section'>
      {
        Array.from({length: practicalAmount}).map((a, index) => 
          <PracticalSection key={index}/>
        )
      }
      {
        <div className="button-section">
        <button onClick={addPracticalSection} className="add-button">Add another</button>
        {
          practicalAmount > 1 ? <button onClick={removePracticalSection} className="add-button">Remove</button> : ''
        }
      </div>
      }
      </div>
    
    </div>

    </>
  )
}

export default CreationSection