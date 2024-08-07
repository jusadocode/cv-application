import { useState } from 'react'



function GeneralSection({ generalInfo, setGeneralInfo }) {
  
  const handleChange = (e) => {
    const {name, value} = e.target;

    setGeneralInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  }

  return (
    <>
    <div className='section-input-card'>
      <label htmlFor="name">Name:</label>
      <input type="text" name='name' onChange={handleChange} value={generalInfo.name}/>

      <label htmlFor="title">Title:</label>
      <input type="text" name='title' onChange={handleChange} value={generalInfo.title}/>
      
      <label htmlFor="e-mail">Email:</label>
      <input type="email" name='e-mail' onChange={handleChange} value={generalInfo['e-mail']}/>

      <label htmlFor="phone">Phone:</label>
      <input type="tel" name='phone' onChange={handleChange} value={generalInfo.phone}/>

      <label htmlFor="description">Description:</label>
      <textarea  name='description' rows="4" cols="50" onChange={handleChange} value={generalInfo.description}/>
    </div>
    </>
  )
}

export default GeneralSection