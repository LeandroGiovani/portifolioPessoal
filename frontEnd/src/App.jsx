import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

      // const activeCurrentLink = (currentLink) => {
      //   lastActiveLink.current?.classList.remove('active')
      //   currentLink.target.classList.add('active')
      //   lastActiveLink.current = currentLink.target
  
      //   activeBox.current.style.top = currentLink.target.offsetTop + 'px';
      //   activeBox.current.style.left = currentLink.target.offsetLeft + 'px';
      //   activeBox.current.style.width = currentLink.target.offsetWidth + 'px';
      //   activeBox.current.style.height = currentLink.target.offsetHeight + 'px';
  
      //   currentLink.target.text === 'Página Inicial' ? window.scroll(0, 0) : undefined
      // }

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
