import logo from '../assets/img/logoLW.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex justify-center items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full flex justify-between items-center md:grid md:grid-cols-[1fr_3fr_1fr] max-2xl:!p-6">

        <h1>
          <Link to="/" className="logo">
            <img 
              src={logo} 
              width={50} 
              height={50} 
              alt="Leandro Giovani logo" 
            />
          </Link>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className='menu-btn md:!hidden'
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>

          <Navbar navOpen={navOpen}/>
        </div>

        <a 
          href="#contact" 
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contate-me
        </a>

      </div>
    </header>
  )
}

export default Header