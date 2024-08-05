import { useState } from 'react'
import CreationSection from './components/creationSection'
import './styles/App.css'
import DisplaySection from './components/displaySection';


function App() {

  const initialGeneralInfo = {
    name: 'John Johnson',
    title: 'Sales Assistant',
    'e-mail': 'johson@gmail.com',
    phone: '+345978543',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }

  const initialEduInfo = {
    school: 'Cambridge University',
    field: 'Computer Science',
    summary: 'HTML,CSS and all kinds of other stuff',
    'study-start': '2022-09-10',
    'study-end': '2025-10-10',
  }

  const initialPracticalInfo = {
    name: 'SpaceX Industries',
    position: 'Lead Engineer',
    responsibilities: 'Helping 5 teams work on Tesla Roadster',
    'work-start': '2025-10-10',
    'work-end': '2027-10-10',
  }
  
  const [isDisplaying, setIsDisplaying] = useState(false);

  const [generalInfo, setGeneralInfo] = useState(initialGeneralInfo)
  const [eduInfo, setEduInfo] = useState([initialEduInfo])
  const [practicalInfo, setPracticalInfo] = useState([initialPracticalInfo])



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
