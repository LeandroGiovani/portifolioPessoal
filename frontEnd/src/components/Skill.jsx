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

import AnimateIn from "./AnimateIn";
import SkillCard from "./SkillCard";
import htmlL from "../assets/img/html5.svg";
import cssL from "../assets/img/css3.svg";
import jsL from "../assets/img/javascript.svg";
import reactL from "../assets/img/react.svg";
import nodejsL from "../assets/img/nodejs.svg";
import expressjsL from "../assets/img/expressjs.svg";
import pythonL from "../assets/img/python.svg";
import fastapiL from "../assets/img/fastapi.svg";
import flaskL from "../assets/img/flask.svg";
import phpL from "../assets/img/php.svg";
import mongodbL from "../assets/img/mongodb.svg";
import mysqlL from "../assets/img/mysql.svg";
import postgresqlL from "../assets/img/postgresql.svg";
import tailwindcssL from "../assets/img/tailwindcss.svg";
import bootstrapL from "../assets/img/bootstrap.svg";
import gitL from "../assets/img/git.svg";
import dockerL from "../assets/img/docker.svg";
import awsL from "../assets/img/aws.svg";
import gcpL from "../assets/img/gcp.svg";

const Skill = () => {
  const skillItem = [
    // Frontend
    {
      imgSrc: htmlL,
      label: "HTML",
      desc: "Markup Language"
    },
    {
      imgSrc: cssL,
      label: "CSS",
      desc: "Interface Styling"
    },
    {
      imgSrc: jsL,
      label: "JavaScript",
      desc: "Web Development"
    },
    {
      imgSrc: reactL,
      label: "React",
      desc: "Frontend Library"
    },
    {
      imgSrc: reactL,
      label: "React Native",
      desc: "Mobile Development"
    },

    // Backend
    {
      imgSrc: nodejsL,
      label: "Node.js",
      desc: "JavaScript Runtime"
    },
    {
      imgSrc: expressjsL,
      label: "Express.js",
      desc: "Backend Framework"
    },
    {
      imgSrc: pythonL,
      label: "Python",
      desc: "General Purpose Language"
    },
    {
      imgSrc: fastapiL,
      label: "FastAPI",
      desc: "API Framework"
    },
    {
      imgSrc: flaskL,
      label: "Flask",
      desc: "Python Web Framework"
    },
    {
      imgSrc: phpL,
      label: "PHP",
      desc: "Backend Language"
    },

    // Databases
    {
      imgSrc: mongodbL,
      label: "MongoDB",
      desc: "NoSQL Database"
    },
    {
      imgSrc: mysqlL,
      label: "MySQL",
      desc: "Relational Database"
    },
    {
      imgSrc: postgresqlL,
      label: "PostgreSQL",
      desc: "Relational Database"
    },

    // Styling / UI
    {
      imgSrc: tailwindcssL,
      label: "TailwindCSS",
      desc: "CSS Framework"
    },
    {
      imgSrc: bootstrapL,
      label: "Bootstrap",
      desc: "CSS Framework"
    },

    // Tools / DevOps
    {
      imgSrc: gitL,
      label: "Git",
      desc: "Version Control"
    },
    {
      imgSrc: dockerL,
      label: "Docker",
      desc: "Containerization"
    },
    {
      imgSrc: awsL,
      label: "AWS",
      desc: "Cloud Platform"
    },
    {
      imgSrc: gcpL,
      label: "GCP",
      desc: "Cloud Platform"
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">

        <AnimateIn delay={300}>
          <h2 className="skills-title">
            Principais Tecnologias
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Descubra as ferramentas e tecnologias poderosas que utilizo para criar sites e aplicativos excepcionais.
          </p>
        </AnimateIn>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <AnimateIn key={key} delay={key * 30}>
                <SkillCard
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                />
              </AnimateIn>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill