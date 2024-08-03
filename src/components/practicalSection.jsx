
function PracticalSection({index, practicalInfo, setPracticalInfo}) {

  const handleChange = (e) => {
    const {name, value} = e.target;

    const newPracticalInfo = [...practicalInfo];

    newPracticalInfo[index] = {
      ...newPracticalInfo[index],
      [name]: value
    }
    setPracticalInfo(newPracticalInfo);
  };
  
    return (
        <>
        <div className='section-input-card'>
          <label htmlFor="name">Company name:</label>
          <input type="text" name='name' onChange={handleChange}/>
    
          <label htmlFor="e-mail">Position:</label>
          <input type="email" name='e-mail' onChange={handleChange}/>

          <label htmlFor="resp">Responsibilities:</label>
          <input type="text" name='resp' onChange={handleChange}/>

          <label htmlFor="start-date">Started on:</label>
          <input type="date" name='work-start' onChange={handleChange}/>

          <label htmlFor="end-date">Finished on:</label>
          <input type="date" name='work-end' onChange={handleChange}/>
        </div>
        </>
      )
  }
  
  export default PracticalSection