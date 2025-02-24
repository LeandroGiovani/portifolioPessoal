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