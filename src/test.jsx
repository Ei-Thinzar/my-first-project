import { useState } from "react"
import BlogList from "./blogList.jsx"

const Test = () => {

    const [number , setNumber] = useState(0)

    const increaseBy1 = () => {
    setNumber(number+1)
    }
    
    const [name , setName] = useState('mario')
    const [age , setAge] = useState(25)

    const changeName = () => {
        setName('luigi');
        setAge(30);
    }

    const [blog , setBlog] = useState([
        {title : "my new useState", body : 'lorem ipsum...', author: 'mario', id:1},
        {title : "my first useState", body : 'lorem ipsum...', author: 'orima', id:2},
        {title : "my second useState", body : 'lorem ipsum...', author: 'rimao', id:3},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blog.filter(b => b.id !== id);
        setBlog(newBlogs);
    }

  return (
    <>
        <div>Click{number}</div>
        <button onClick={increaseBy1} className="bg-slate-300">Increase</button>

        <p>{name} is {age}</p>
        <button onClick={changeName} className="bg-red-100 rounded-3">Click Me</button>

        <div>
            <BlogList blog={blog} title="All blogs" handleDelete={handleDelete}/>
            <BlogList blog={blog.filter((b) => b.author === 'mario')} title="Mario's blog"/>
            <BlogList blog={blog.filter((v) => v.author === 'orima')} title="Orima's blogs"/>
        </div>

        {/*
         Titok button hover
        <button className="relative px-6 py-3 font-semibold border-2 border-black overflow-hidden
        group rounded-full cursor-pointer">
            <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-ful transition-transform duration-400"></span>
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">Hover Me</span>
        </button>
        */}

    </>
  )
}

export default Test