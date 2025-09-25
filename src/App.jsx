import React from 'react';
import img1 from './images/i2.jpg';
import Home from './page/home';


const App = () => {
  return (
    <>
    <div className='bg-cyan-500 h-18 flex justify-center items-center shadow-xl tracking-wider font-bold uppercase'>App</div>
      <div className='body h-212 w-full  content-end bg-center'>
      
    
        <div className='flex justify-center items-center flex-wrap mb-5'>
          <div className='w-100 h-50 bg-blue-200 flex justify-center items-center'>1</div>
          <div className='w-100 h-50 bg-red-50 flex justify-center items-center'>2</div>
          <div className='w-100 h-50 bg-amber-300 flex justify-center items-center'>3</div>
        < div className='w-100 h-50 bg-green-200 flex justify-center items-center'>4</div>
        </div>
      </div>

      <div className='flex justify-center items-center flex-wrap'>
        <div className='w-100 h-100 bg-yellow-200 shadow-xl/30 cursor-pointer rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue-500 drop-shadow-xl/50 m-10'></div>
        <div className='w-100 h-100 bg-green-400 shadow-xl/30 cursor-pointer rounded-xl drop-shadow-xl/50 m-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-orange-500'></div>
        <div className='w-100 h-100 bg-red-600 shadow-xl/30 cursor-pointer rounded-xl drop-shadow-xl/50 m-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-violet-500'></div>
      </div>
      <div className='flex justify-center items-center flex-wrap'>
        <div className='w-100 h-100 bg-black shadow-xl/30 cursor-pointer rounded-xl drop-shadow-xl/50  m-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:skew-6 hover:bg-gray-600'></div>
        <div className='w-100 h-100 bg-amber-950 shadow-xl/30 cursor-pointer rounded-xl drop-shadow-xl/50 du75ration- m-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:-skew-6 hover:bg-cyan-600'></div>
        <div className='w-100 h-100 bg-blue-500 shadow-xl/30 cursor-pointer rounded-xl drop-shadow-xl/50 m-10 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:origin-center rotate-45 hover:bg-cyan-600'></div>
      </div>


      {/* <div className='w-200 h-150 object-fit mt-4 bg-center bg-contain bg-black content float-left flex'>
        <img src={img1} alt=""/>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita animi fugit suscipit assumenda dignissimos facilis magni esse quas incidunt ipsum tenetur, nam impedit, ea odio sit quos. Adipisci, error magnam?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam corrupti voluptate amet at odit harum. Modi, ipsa quae. Ipsum nesciunt facere minus quo deleniti fugiat perferendis repellat. Eveniet, officia ipsum.
        </p>
      </div> */}

      <article className='pt-2'>
        <img className="float-left rounded-xl" src={img1} />
        <p className='tracking-wide text-2xl whitespace-normal indent-10 text-balance text-justify pt-20'>Maybe we can live without libraries, people like you and me. ...
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis laborum, laboriosam nostrum suscipit voluptate ut dolores aspernatur, mollitia nam voluptates ipsam maxime quisquam tempore facilis ratione et alias maiores? Ad.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam facilis iusto eos praesentium nostrum obcaecati nesciunt facere ut, porro necessitatibus incidunt modi atque. Hic molestias facere sapiente voluptatum!
        </p>
      </article>
      <article className='pt-2'>
        <img className="float-right rounded-xl" src={img1} />
        <p className='tracking-wide text-2xl whitespace-normal indent-10 text-balance text-justify pt-20'>Maybe we can live without libraries, people like you and me. ...
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis laborum, laboriosam nostrum suscipit voluptate ut dolores aspernatur, mollitia nam voluptates ipsam maxime quisquam tempore facilis ratione et alias maiores? Ad.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam facilis iusto eos praesentium nostrum obcaecati nesciunt facere ut, porro necessitatibus incidunt modi atque. Hic molestias facere sapiente voluptatum!
        </p>
      </article>

      <div className='place-items-center pt-35'>
      <div className='w-200 h-200 flex justify-center items-center bg-[url(./images/i1.jpg)] bg-cover bg-center rounded-xl'>
        <div className='h-100 w-100 border-black bg-white/30 backdrop-blur-sm rounded-xs'></div>
      </div>
      </div>

      <div className='flex justify-center items-center p-10'>
        <button className='h-10 w-20 bg-blue-600 p-3 m-4 rounded-2xl'>button1</button>
        <button className='h-10 w-30 bg-blue-600 p-3 m-4 rounded-2xl'>button2</button>
        <button className='h-10 w-45 bg-blue-600 p-3 m-4 rounded-2xl'>button3</button>
        <button className='h-10 w-50 bg-blue-600 p-3 m-4 rounded-2xl'>button4</button>
      </div>

      
      
    </>
    
  )
}

export default App