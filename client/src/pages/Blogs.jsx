import React, { useEffect, useState } from 'react'
import Blogcard from './components/Blogcard'
import { useBlogs } from './components/BlogContext'

function Blogs() {
  const { blogs, loadBlogs, isloading } = useBlogs()
  

  useEffect(() => {
    loadBlogs()
  }, [])

  function renderMain(){
    if (blogs.length == 0) return isloading ? null : <h1>¡No hay nada!</h1>
    return blogs.map(e => (<Blogcard e={e} key={e.id}/>))
  }

  return (
    <>
        <h1>Blogs publicados</h1>
        {isloading ? <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> : null}
        <div className="blogList">
          {renderMain()}
        </div>
    </>
  )
}

export default Blogs