import React, { useEffect, useState } from 'react'
import Blogcard from './components/Blogcard'
import { useBlogs } from './components/BlogContext'

function Blogs() {
  const { blogs, loadBlogs } = useBlogs()

  useEffect(() => {
    loadBlogs()
  }, [])

  function renderMain(){
    if (blogs.length == 0) return <h1>¡No hay nada!</h1>
    return blogs.map(e => (<Blogcard e={e} key={e.id}/>))
  }

  return (
    <>
        <h1>Blogs publicados</h1>
        <div className="blogList">
          {renderMain()}
        </div>
    </>
  )
}

export default Blogs