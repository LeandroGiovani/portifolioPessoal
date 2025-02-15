import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NameIntro from './pages/NameIntro'
import Navbar from './pages/Navnar'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <NameIntro />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
