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
    <section className="section" id="skills">
        <div className="container">

            <h2 className="skills-title reveal-up">
                Principais Tecnologias que Utilizo
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
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
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill