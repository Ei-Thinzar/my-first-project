import React, { useState } from 'react'

const Test3 = () => {

  const [username , setUsername] = useState("");
  const [age ,setAge] = useState(0);
  const [users ,setUsers] = useState([]);

  return (
    <div className='flex w-screen flex-col gap-2 h-screen justify-center items-center'>

      <div className='h-[300px] bg-slate-300 p-4 flex flex-col gap-2 overflow-auto rounded-2xl w-[300px] items-center'>
        {
          users?.map((item,index) => (
            <div key={index} className='bg-slate-200 p-2 rounded-xl w-[200px]'>
              <div>{item?.username}</div>
              <div>{item?.age}</div>
            </div>
          ))
        }
      </div>

      <form onSubmit={(e) => {
        e.preventDefault()
        setUsers([...users,{
          username: username,
          age: age
        }])
        console.log("flag")
        setUsername("");
        setAge(0);
      }}>
        <div className=''>
          <label htmlFor="username" className='block p-2' >Username</label>
          <input value={username} id="username" autoFocus type="text" onChange={(e) => setUsername(e.target.value)}
          className='bg-slate-100 border-2 border-slate-500 p-2 rounded-lg outline-none focus:border-slate-800'
          placeholder='Enter username' />
        </div>
        <div className=''>
          <label htmlFor="age" className='block p-2' >Age</label>
          <input value={age} id="age" autoFocus type="text" onChange={(e) => setAge(e.target.value)}
          className='bg-slate-100 border-2 border-slate-500 p-2 rounded-lg outline-none focus:border-slate-800'
          placeholder='Enter Age' />
        </div>
        <button className='bg-blue-500 p-2 w-full mt-2 text-white rounded-xl active:bg-blue-300'>Submit</button>
      </form>
    </div>
  )
}

export default Test3