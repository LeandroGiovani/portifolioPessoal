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

import logo from '../assets/img/logoLW.png'

const About = () => {
    const aboutItems = [
        {
          label: 'Projetos contribuidos',
          number: 10
        },
        {
          label: 'Anos de experiência',
          number: 3
        }
    ];
    
  return (
    <section className="section" id="about">
        <div className="container">
            <div className="bg-zinc-900 border-glow p-7 md:p-12 flex-col revealLandPage4 hidd">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch] text-justify">
                Olá! Meu nome é Leandro Giovani. Sou estudante de Sistemas de Informação na UNIFEB e técnico em Análise e Desenvolvimento de Sistemas pelo SENAI.

                Tenho interesse no desenvolvimento de soluções completas, atuando desde a construção de APIs e backend até interfaces web e aplicações mobile. Ao longo da minha jornada venho trabalhando com tecnologias como React, React Native, Node.js e Python para desenvolver projetos e explorar diferentes abordagens de arquitetura de software.

                Sou apaixonado por tecnologia e estou sempre buscando aprender novas ferramentas, aprimorar minhas habilidades e participar de projetos que utilizem software para resolver problemas reais.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img 
                        src={logo} 
                        alt="Logo"
                        width={40}
                        height={40}
                        className="ml-auto md:w-[50px] md:h-[50px]"
                    />
                </div>
            </div>
        </div>

    </section>
  )
}

export default About