import LandPage from "../components/LandPage"
import About from "../components/About"
import Skill from "../components/Skill"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <LandPage />

      <main>
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}

export default Home