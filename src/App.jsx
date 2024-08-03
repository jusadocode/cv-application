import { useState } from 'react'
import CreationSection from './components/creationSection'
import './styles/App.css'
import DisplaySection from './components/displaySection';


function App() {
  
  const [isDisplaying, setIsDisplaying] = useState(false);

  const [generalInfo, setGeneralInfo] = useState({})
  const [eduInfo, setEduInfo] = useState([])
  const [practicalInfo, setPracticalInfo] = useState([])



  const handleSubmit = () => {
    setIsDisplaying(!isDisplaying);
  }

  const handleEdit = () => setIsDisplaying(!isDisplaying);
  
  return (
    <>
    {
      isDisplaying ? 
      <DisplaySection 
          generalInfo={generalInfo}
          eduInfo={eduInfo}
          practicalInfo={practicalInfo}
      />
      :
      <CreationSection 
        setGeneralInfo={setGeneralInfo} 
        setEduInfo={setEduInfo} 
        setPracticalInfo={setPracticalInfo} 
        generalInfo={generalInfo}
        eduInfo={eduInfo}
        practicalInfo={practicalInfo}
      />
    }

    {isDisplaying ? (
        <button onClick={handleEdit}>Edit CV</button>
      ) : (
        <button onClick={handleSubmit}>Submit CV</button>
      )}

    </>
  )
}

export default App
