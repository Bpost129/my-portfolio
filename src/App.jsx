// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'

import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
