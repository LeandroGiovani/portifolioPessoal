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

import { useRef } from "react";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const navItems = [
    {
      label: 'Página Inicial',
      link: '#home',
      className: 'nav-link active revealNav6 hid',
      ref: lastActiveLink
    },
    {
      label: 'Sobre',
      link: '#about',
      className: 'nav-link revealNav3 hid'
    },
    {
      label: 'Tecnologias',
      link: '#skills',
      className: 'nav-link revealNav hid'
    },
    {
      label: 'Projetos',
      link: '#projects',
      className: 'nav-link revealNav3 hid'
    },
    {
      label: 'Contate-me',
      link: '#contact',
      className: 'nav-link revealNav6 hid'
    },
    {
      label: 'GitHub',
      link: 'https://github.com/LeandroGiovani',
      className: 'nav-link min-[920px]:!hidden'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/leandro-maciel-giovani-2874501b3/',
      className: 'nav-link min-[920px]:!hidden'
    },
  ];

  const scrollTop = (current) => {
    current.target.text === 'Página Inicial' ? window.scroll(0, 0) : undefined
  }
  
  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ label, link, className, ref }, key) => (
        label === 'GitHub' || label === 'LinkedIn' ? (
          <a 
            href={link}
            target="_blank"
            key={key}
            ref={ref}
            className={className}
          >
            <div className="flex items-center justify-between hover:text-zinc-50 transition-colors">
              {label}
              <div className="material-symbols-rounded text-[20px]">
                arrow_outward
              </div>
            </div>
          </a>
        ) : (
          <a 
            href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={scrollTop}
          >
            {label}
          </a>
        )
        
      ))}
        <div 
            className="active__box"
            ref={activeBox}
        ></div>
    </nav>
  )
}

export default Navbar