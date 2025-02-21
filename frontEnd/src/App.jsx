import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NameIntro from './components/NameIntro'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      {/* <NameIntro /> */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
