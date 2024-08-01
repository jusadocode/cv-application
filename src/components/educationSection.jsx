import '../App.css'


function EducationSection() {
    return (
        <>
        <div className='section'style={{display: 'flex', flexDirection:'column'}}>
          <label htmlFor="school">School name:</label>
          <input type="text" name='school' />
    
          <label htmlFor="field">Field:</label>
          <input type="email" name='field'/>
          <label htmlFor="start-date">Started on:</label>
          <input type="date" name='study-date'/>

          <label htmlFor="end-date">Finished on:</label>
          <input type="date" name='study-date'/>

          <button className="add-button">Add another</button>
          
        </div>
        </>
      )
}

export default EducationSection