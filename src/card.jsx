import React from 'react'

const Card = ({rollNo, id, username, dob, age, color, subjects = [], deleteStudent, editStudent, setIsEditing}) => {
  return (
    <div className='shadow-xl shadow-black/30 p-4 rounded-xl border-2 border-slate-200 '>
        <div className='p-2 rounded-2xl'  style={{backgroundColor:color}}>Roll No - {rollNo}</div>
        <div>Username - {username}</div>
        <div>Date of Birth  - {dob}</div>
        <div>Age - {age}</div>
        <div className='bg-slate-200 flex p-2 mt-2 rounded-2xl gap-2'>
            <div>Subjects - </div>
            {
                subjects.map((subject, index) => (
                    <div key={subject}>
                        {subject}{index === subjects.length-1 ? "" : ","}
                    </div>
                ))
            }
        </div>
        <button
            className='bg-red-500 p-2 cursor-pointer active:bg-red-300 text-white mt-2 py-1 rounded-md'
            onClick={() => deleteStudent(id)}
        >delete</button>
        <button
            className='bg-blue-500 cursor-pointer ml-2 active:bg-blue-300 text-white mt-2 py-1 px-3 rounded-md'
            onClick={() => {
                setIsEditing(true)
                editStudent(id, username, dob, age, color, subjects)
            }}
        >edit</button>
    </div>
  )
}

export default Card

export const allSubjects = [
    "Myanmar", "English", "Mathematics", "Science", "Physics" 
]
export const subjects = [
    "Myanmar", "English", "Mathematics", "Science"
]
export const subject1 = [
    "Myanmar", "English", "Mathematics"
]
export const subject2 = [
    "Myanmar", "English"
]