// Copyright 2025 LeandroGiovani

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react'
import StatCards from './components/StatCards';
import NameIntro from './components/NameIntro'
import Header from './components/Header'
import Home from './pages/Home'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-40 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 0.1,
        ease: 'power2.out'
      })
    })
  })

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
        <StatCards />
        <NameIntro />
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App
