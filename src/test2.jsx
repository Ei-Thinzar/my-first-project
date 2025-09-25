import { useState } from "react"

const Test2 = () => {
    const [username , setUsername] = useState()
    const [usernameCopy , setUsernameCopy] = useState()
  return (
    <div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
        <div className="textinput">{username}</div>
        <label htmlFor="username">Enter Your Name</label>

        <input 
        value={username}
        type="text"
        id="username"
        className="bg-slate-200 p-2 rounded-xl border-2 border-slate-500" 
        onChange={(e) => setUsername(e.target.value)} />

        <button
        className="bg-blue-400 p-2 rounded-xl cursor-pointer active:bg-blue-300"
        onClick={() => setUsernameCopy(username)}
        >Copy</button>
        <div className="textinput">{usernameCopy}</div>
    </div>
  )
}

export default Test2