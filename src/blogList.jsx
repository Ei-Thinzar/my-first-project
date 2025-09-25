import React from 'react'

const BlogList = ({blog,title,handleDelete}) => {
  return (
    <div className="blog-list">
        <h2>{title}</h2>
        {
                blog.map((b) => (
                    <div className="border-b-amber-50 hover:shadow-lg mt-3" key={b.id}>
                        <h2 className="text-lg text-red-300 uppercase">{b.title}</h2>
                        <p className="mb-2">Written by {b.author}</p>
                        <button onClick={() => handleDelete(b.id)}>delete blog</button>
                    </div>
                ))
            }
    </div>
  )
}

export default BlogList
