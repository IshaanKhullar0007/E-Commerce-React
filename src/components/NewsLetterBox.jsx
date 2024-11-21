import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='mt-3 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, doloribus.</p>
      <form onClick={onSubmitHandler} className='w-1/2 flex items-center mx-auto my-6 border pl-3'>
        <input className='w-full outline-none' type='email' placeholder='Enter your e-mail' required></input>
        <button type="submit" className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
