import '../styles/App.css'


function EducationSection({index, eduInfo, setEduInfo}) {

  const handleChange = (e) => {
    const {name, value} = e.target;

    const newEduInfo = [...eduInfo];

    newEduInfo[index] = {
      ...newEduInfo[index],
      [name]: value
    }
    setEduInfo(newEduInfo);
  };

    return (
        <>
        <div className='section-input-card'>
          <label htmlFor="school">School name:</label>
          <input type="text" name='school' onChange={handleChange}/>

          <label htmlFor="field">Field:</label>
          <input type="email" name='field' onChange={handleChange}/>

          <label htmlFor="start-date">Started on:</label>
          <input type="date" name='study-start' onChange={handleChange}/>

          <label htmlFor="end-date">Finished on:</label>
          <input type="date" name='study-end' onChange={handleChange}/>

          
        </div>
        </>
      )
}

export default EducationSection