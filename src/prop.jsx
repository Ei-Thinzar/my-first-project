import {useState} from 'react'
import Card from './card.jsx'
import { subjects,subject1,subject2,allSubjects} from './card.jsx'

const Prop = () => {
  const [username, setUsername] = useState('')
  const [dob, setDob] = useState(null)
  const [age, setAge] = useState(0)
  const [color, setColor] = useState('')
  const [subjects, setSubjects] = useState([])
  const [allStudents, setAllStudents] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [id, setId] =useState()
  const clearOnSuccess = () => {
    setUsername('')
    setDob(null)
    setAge(0)
    setColor('')
    setSubjects([])
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    console.log(username,dob,age,color,subjects)

    try{
      if(username.trim() === '') return alert("username is required!")
      else if(!dob) return alert("dob is required!")
      else if(age<=0 || typeof age !== 'number') return alert("age is required!")
      else if(color.trim() === '' || !color) return alert("color is required!")
      else if(subjects.length === 0) return alert("select at least one subject")

      if (isEditing) {
        const newStudents = allStudents.map(student => (
          student.id === id ? {
            id,
            username,
            dob,
            age,
            color,
            subjects,
          } : student
        ))

        setAllStudents(newStudents)
      } else {
        setAllStudents([...allStudents, {
          id: new Date().toLocaleTimeString(),
          username,
          dob,
          age,
          color,
          subjects: subjects
        }])
      }
      
      clearOnSuccess()
    } catch (error) {
      console.log('Error submitting student!')
    }
  }

  const deleteStudent = (id) => {
    setAllStudents(allStudents.filter(student => student.id !== id))
  }

  const editStudent = (id, username, dob, age, color, subjects) => {
    setId(id)
    setUsername(username)
    setDob(dob)
    setAge(age)
    setColor(color)
    setSubjects(subjects)
  }
  return (
    <>
      <div className='w-screen h-screen overflow-auto flex justify-center items-center'>
        <form action="#" className='flex justify-center items-center flex-col gap-4 w-full' onSubmit={(e) => handleSubmit(e)}>
          <div className='flex gap-2 w-[300px]'>
            <label htmlFor="username" className='w-1/3'>
              Username
            </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id='username' className='bg-slate-200 border-2 border-slate-300 p-2 rounded-lg outline-0 w-2/3'/>
          </div>
          <div className='flex gap-2 w-[300px]'>
            <label htmlFor="dob" className='w-1/3'>
              Date of Birth
            </label>
            <input value={dob} onChange={(e) => setDob(e.target.value)} type="date" id='dob' className='bg-slate-200 border-2 border-slate-300 p-2 rounded-lg outline-0 w-2/3'/>
          </div>
          <div className='flex gap-2 w-[300px]'>
            <label htmlFor="age" className='w-1/3'>
              Age
            </label>
            <input value={age} onChange={(e) => setAge(parseInt(e.target.value))} type="number" id='age' className='bg-slate-200 border-2 border-slate-300 p-2 rounded-lg outline-0 w-2/3'/>
          </div>
          <div className='flex gap-2 w-[300px]'>
            <label htmlFor="color" className='w-1/3'>
              Color
            </label>
            <input value={color} onChange={(e) => setColor(e.target.value)} type="color" id='username' className='bg-slate-200 border-2 border-slate-300 p-2 rounded-lg outline-0  w-2/3'/>
          </div>
          <h1 className='text-2xl mt-6 mb-2'>Available Subjects</h1>
          <div className='grid grid-cols-3 gap-2'>
            {
              allSubjects.map((subject,index) => (
                <div className='w-full flex items-center justify-around gap-2'>
                  <label htmlFor={subject}>{subject}</label>
                  <input checked={subjects.includes(subject)} type="checkbox" id={subject} onChange={() => {
                    if(subjects.includes(subject))
                    {
                      console.log("consition1")
                      setSubjects(subjects.filter(sub => sub !== subject))
                    }else {
                      console.log("condition2")
                      setSubjects([...subjects, subject])
                    }
                  }}/>
                </div>
              ))
            }
          </div>

          <button type='submit' className={`${isEditing ? 'bg-blue-500' : 'bg-teal-300' } text-white cursor-pointer rounded-lg p-2 px-5 mt-3 active:bg-blue-300`}>
            {
              isEditing ?
                'Update'
                :
                'Submit'
            }
          </button>

        </form>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {
          allStudents.map((student, index) => (
            <Card
              rollNo={index + 1}
              id={student.id}
              username={student.username}
              dob={student.dob}
              age={student.age}
              color={student.color}
              subjects={student.subjects}
              deleteStudent={deleteStudent}
              editStudent={editStudent}
              setIsEditing={setIsEditing}
            />
          ))
        }
      </div>
    </>
  )
}

export default Prop
