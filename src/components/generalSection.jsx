import { useState } from 'react'



function GeneralSection() {
  
  return (
    <>
    <div className='section'style={{display: 'flex', flexDirection:'column'}}>
      <label htmlFor="name">Name:</label>
      <input type="text" name='name' />

      <label htmlFor="e-mail">Email:</label>
      <input type="email" name='e-mail'/>
      <label htmlFor="phone">Phone:</label>
      <input type="tel" name='phone'/>
      <label htmlFor="description">Description:</label>
      <textarea  name='description' rows="4" cols="50"/>
    </div>
    </>
  )
}

export default GeneralSection