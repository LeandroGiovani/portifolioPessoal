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