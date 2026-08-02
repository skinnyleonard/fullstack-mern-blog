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
        <h1>Blogs publicados {isloading ? <small>(puede tardar, API alojada en un plan gratuito)</small> : null}</h1>
        {isloading ? <div class="lds-spinner">
          {/* <div></div>
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
          <div></div> */}
          {Array.from({length:10}).map((v, i) => (
            <div className="skull">
              <div className="imageExample"></div>
              <div className="titleExample"></div>
              <div className="userExample"></div>
            </div>
          ))}
        </div> : null}
        <div className="blogList">
          {renderMain()}
        </div>
    </>
  )
}

export default Blogs