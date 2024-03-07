import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Poster from './pages/Poster'
import NotFound from './pages/NotFound'
import Navbar from './pages/components/Navbar'
import { BlogContextProvider } from './pages/components/BlogContext'
import Fullpost from './pages/Fullpost'

function App() {
  return (
    <BlogContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Blogs />}/>
        <Route path='/new' element={<Poster />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path='/post/:id' element={<Fullpost />}/>
      </Routes>
    </BlogContextProvider>
  )
}

export default App
