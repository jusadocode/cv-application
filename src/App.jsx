import { useState } from 'react'
import CreationSection from './components/creationSection'
import './styles/App.css'
import DisplaySection from './components/displaySection';


function App() {

  const initialGeneralInfo = {
    name: 'John Johnson',
    title: 'Sales Assistant',
    'e-mail': 'johnson@example.com',
    phone: '+1-345-978-5432',
    description: "Experienced Sales Assistant with over 5 years of experience in providing excellent customer service and managing sales operations. Proven track record of increasing sales and improving customer satisfaction. Skilled in inventory management, merchandising, and maintaining a positive store environment."
  };

  const initialEduInfo = {
    school: 'University of Cambridge',
    field: 'Computer Science',
    summary: 'Completed coursework in algorithms, data structures, software engineering, and artificial intelligence. Gained hands-on experience in coding, debugging, and project management.',
    'study-start': '2018-09-01',
    'study-end': '2022-06-30',
  };

  const initialPracticalInfo = {
    name: 'SpaceX',
    position: 'Lead Engineer',
    responsibilities: 'Led engineering teams in the development of propulsion systems for the Falcon and Starship rockets. Coordinated cross-functional teams to ensure project milestones were met on time and within budget. Conducted research and development to improve system efficiency and reliability.',
    'work-start': '2023-01-01',
    'work-end': '2027-12-31',
  };
  
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
    <h1>Create your CV</h1>
      <div className='main-content-wrapper' >

      <CreationSection 
        setGeneralInfo={setGeneralInfo} 
        setEduInfo={setEduInfo} 
        setPracticalInfo={setPracticalInfo} 
        generalInfo={generalInfo}
        eduInfo={eduInfo}
        practicalInfo={practicalInfo}
      />


      <DisplaySection 
          generalInfo={generalInfo}
          eduInfo={eduInfo}
          practicalInfo={practicalInfo}
      />
      
      
    </div>


    </>
  )
}

export default App
