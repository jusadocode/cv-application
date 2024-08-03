
function PracticalSection() {
  
    return (
        <>
        <div className='section-input-card'style={{display: 'flex', flexDirection:'column'}}>
          <label htmlFor="name">Company name:</label>
          <input type="text" name='name' />
    
          <label htmlFor="e-mail">Position:</label>
          <input type="email" name='e-mail'/>
          <label htmlFor="resp">Responsibilities:</label>
          <input type="text" name='resp' />

          <label htmlFor="start-date">Started on:</label>
          <input type="date" name='study-date'/>

          <label htmlFor="end-date">Finished on:</label>
          <input type="date" name='study-date'/>

        </div>
        </>
      )
  }
  
  export default PracticalSection