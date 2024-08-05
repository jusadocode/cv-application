
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
          <input type="text" name='name' onChange={handleChange} value={practicalInfo[index].name}/>
    
          <label htmlFor="position">Position:</label>
          <input type="email" name='position' onChange={handleChange} value={practicalInfo[index].position}/>

          <label htmlFor="responsibilities">Responsibilities:</label>
          <input type="text" name='responsibilities' onChange={handleChange} value={practicalInfo[index].responsibilities}/>

          <label htmlFor="work-start">Started on:</label>
          <input type="date" name='work-start' onChange={handleChange} value={practicalInfo[index]['work-start']}/>

          <label htmlFor="work-end">Finished on:</label>
          <input type="date" name='work-end' onChange={handleChange}  value={practicalInfo[index]['work-end']}/>
        </div>
        </>
      )
  }
  
  export default PracticalSection