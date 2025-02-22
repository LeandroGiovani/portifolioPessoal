import SkillCard from "./SkillCard";
import cssL from "../assets/img/css3.svg"
import pythonL from "../assets/img/python.svg"
import jsL from "../assets/img/javascript.svg"
import nodejsL from "../assets/img/nodejs.svg"
import expressjsL from "../assets/img/expressjs.svg"
import mongodbL from "../assets/img/mongodb.svg"
import reactL from "../assets/img/react.svg"
import tailwindcssL from "../assets/img/tailwindcss.svg"

const Skill = () => {
    const skillItem = [
        {
          imgSrc: cssL,
          label: 'CSS',
          desc: 'Estilização de Interface'
        },
        {
            imgSrc: pythonL,
            label: 'Python',
            desc: 'Linguagem Versátil'
        },
        {
          imgSrc: jsL,
          label: 'JavaScript',
          desc: 'Interatividade Web'
        },
        {
          imgSrc: nodejsL,
          label: 'NodeJS',
          desc: 'Web Server'
        },
        {
          imgSrc: expressjsL,
          label: 'ExpressJS',
          desc: 'Node Framework'
        },
        {
          imgSrc: mongodbL,
          label: 'MongoDB',
          desc: 'Banco de Dados'
        },
        {
          imgSrc: reactL,
          label: 'React',
          desc: 'Framework'
        },
        {
          imgSrc: tailwindcssL,
          label: 'TailwindCSS',
          desc: 'Framework de Estilização'
        },
    ];

  return (
    <section className="section">
        <div className="container">

            <h2 className="skills-title">
                Principais Tecnologias que Utilizo
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Descubra as ferramentas e tecnologias poderosas que utilizo para criar sites e aplicativos excepcionais.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill