import { useState } from 'react'
import '../styles/App.css'

import GeneralSection from './generalSection'
import EducationSection from './educationSection'
import PracticalSection from './practicalSection'

function CreationSection({setGeneralInfo, setEduInfo, setPracticalInfo, generalInfo, eduInfo, practicalInfo}) {

  const [eduAmount, setEduAmount] = useState(eduInfo.length || 1);
  const [practicalAmount, setPracticalAmount] = useState(practicalInfo.length || 1);

  const addEduSection = () => {
    const newEduInfo = [...eduInfo, {}];

    setEduInfo(newEduInfo);
    setEduAmount(newEduInfo.length);

  };

  const addPracticalSection = () => {
    const newPracticalInfo = [...practicalInfo, {}];
    setPracticalInfo(newPracticalInfo);
    setPracticalAmount(newPracticalInfo.length);
  };

  const removeEduSection = () => {
    if (eduAmount > 1) {
      const newEduInfo = eduInfo.slice(0, -1); 
      setEduInfo(newEduInfo);
      setEduAmount(newEduInfo.length);
    }
  };

  const removePracticalSection = () => {
    if (practicalAmount > 1) {
      const newPracticalInfo = practicalInfo.slice(0, -1);
      setPracticalInfo(newPracticalInfo);
      setPracticalAmount(newPracticalInfo.length);
    }
  };

  return (
    <>

    <div className='editor-wrapper'>

    <div className='section-wrapper'>

<h4>
  General
</h4>
<div className="section">
<GeneralSection generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} >
          
</GeneralSection>

</div>
  
</div>

<div className='section-wrapper'>
<h4>
  Education
</h4>
<div className="section">
{
  Array.from({length: eduAmount}).map((a, index) => 
    <EducationSection key={index} index={index} eduInfo={eduInfo} setEduInfo={setEduInfo}/>
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
    <PracticalSection key={index} index={index} practicalInfo={practicalInfo} setPracticalInfo={setPracticalInfo}/>
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

    </div>

    

    </>
  )
}

export default CreationSection