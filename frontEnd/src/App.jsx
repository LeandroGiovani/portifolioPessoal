import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import NameIntro from './components/NameIntro'
import Header from './components/Header'
import Home from './pages/Home'

const App = () => {
  const highlightNav = () => {
    const sections = document.querySelectorAll('.section')
    const navLinks = document.querySelectorAll('.navbar a')
    const activeBox = document.querySelector('.active__box')
    let scrollPosition = window.scrollY

    sections.forEach((sec) => {
      let secTop = sec.offsetTop - 150
      let secBottom = secTop + sec.offsetHeight
      let id = sec.getAttribute('id')

      if (scrollPosition <= 300){
        navLinks.forEach((navLink) => {
          navLink.classList.remove('active')
          if (navLink.getAttribute("href") === `#home`){
            navLink.classList.add("active")
            activeBox.style.top = navLink.offsetTop + 'px'
            activeBox.style.left = navLink.offsetLeft + 'px'
            activeBox.style.width = navLink.offsetWidth + 'px'
            activeBox.style.height = navLink.offsetHeight + 'px'
          }
        })
      }
      if (scrollPosition >= secTop && scrollPosition < secBottom){
        navLinks.forEach((navLink) => {
          navLink.classList.remove('active')
          if (navLink.getAttribute("href") === `#${id}`){
            navLink.classList.add("active")
            activeBox.style.top = navLink.offsetTop + 'px'
            activeBox.style.left = navLink.offsetLeft + 'px'
            activeBox.style.width = navLink.offsetWidth + 'px'
            activeBox.style.height = navLink.offsetHeight + 'px'
          }
        })
      }
    })
  }

  window.addEventListener('scroll', highlightNav)

  return (
    <ReactLenis root>
      <BrowserRouter>
        {/* <NameIntro /> */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App
