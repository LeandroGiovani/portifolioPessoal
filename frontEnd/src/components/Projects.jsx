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

import ProjectCard from './ProjectCard'
import project1 from "../assets/img/project1.png"
import project2 from "../assets/img/project2.png"
import project3 from "../assets/img/project3.png"

const Projects = () => {
    const projects = [
        {
          imgSrc: project1,
          title: 'Copa Barretos',
          tags: ['Frontend', 'DOM Manipulation'],
          projectLink: 'https://github.com/LeandroGiovani/copaBarretos'
        },
        {
          imgSrc: project2,
          title: 'Game Barretos Experience (GBXP)',
          tags: ['Frontend', 'Aplicação Web', 'LocalStorage'],
          projectLink: 'https://github.com/LeandroGiovani/projetoSpotify'
        },
        {
          imgSrc: project3,
          title: 'Réplica Spotify',
          tags: ['Fullstack', 'API', 'Banco de Dados'],
          projectLink: 'https://github.com/LeandroGiovani/GBXP'
        },
      ];

  return (
    <section className="section" id="projects">
        <div className="container">

            <h2 className="projects-title mb-8 reveal-up">
                Destaques do meu portifólio
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Projects