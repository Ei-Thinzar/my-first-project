import React from 'react';
import img1 from './images/i1.jpg';

const App = () => {
  return (
    <>
      <div className='body'>
        <div className='bg-cyan-500 h-18 m-2 p-6 text-shadow-amber-50 rounded-xl shadow-xl'>App</div>

        {/* <div className='flex flex-row  m-5 p-3'>
          <div className='bg bg-center'></div>
          <h1 className='content text-6xl '>Enjoy your Breakfast</h1>
        </div> */}
      
    
        <div className='flex justify-baseline p-20'>
          <div className='w-100 h-50 bg-blue-200 flex justify-center items-center m-5'>1</div>
          <div className='w-100 h-50 bg-red-50 flex justify-center items-center m-5'>2</div>
          <div className='w-100 h-50 bg-amber-300 flex justify-center items-center m-5'>3</div>
        < div className='w-100 h-50 bg-green-200 flex justify-center items-center m-5'>4</div>
        </div>
      </div>

      <div className='flex justify-around m-3'>
        <div className='w-120 h-100 bg-amber-50 flex justify-center items-center m-3 rounded-xl'>a</div>
        <div className='w-120 h-100 bg-blue-500 flex justify-center items-center m-3 rounded-xl'>b</div>
        <div className='w-120 h-100 bg-blue-500 flex justify-center items-center m-3 rounded-xl'>c</div>
      </div>

      
    </>
    
  )
}

export default App