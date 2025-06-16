import React from 'react';
import img1 from './images/i1.jpg';

const App = () => {
  return (
    <>
      
      <div className='bg-cyan-500 h-18 m-2 p-6 text-shadow-amber-50 rounded-xl shadow-xl'>App</div>

      <div className='bg bg-center'></div>
      
      <div className='flex justify-baseline pt-2'>
        <div className='w-full h-50 bg-blue-200 flex justify-center items-center rounded-xl'>1</div>
        <div className='w-full h-50 bg-red-50 flex justify-center items-center rounded-xl'>2</div>
        <div className='w-full h-50 bg-amber-300 flex justify-center items-center rounded-xl'>3</div>
        <div className='w-full h-50 bg-green-200 flex justify-center items-center rounded-xl'>4</div>
      </div>

      
    </>
    
  )
}

export default App