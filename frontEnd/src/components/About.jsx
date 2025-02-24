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
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch] text-justify">
                    Bem-vindo! Meu nome é Leandro, sou um desenvolvedor web apaixonado por tecnologia e estou no início da minha jornada no mundo da programação. Possuo formação técnica em Análise e Desenvolvimento de Sistemas pelo SENAI e, em 2025, iniciei minha graduação em Sistemas de Informação no Centro Universitário da Fundação Educacional de Barretos - UNIFEB.
                    <br></br>
                    Sou uma pessoa focada e dedicada, sempre buscando aprimorar minhas habilidades e evoluir tanto pessoal quanto tecnicamente. Meu objetivo é atuar na área que tanto me fascina, enfrentando desafios com entusiasmo e determinação. Estou comprometido em crescer como profissional e contribuir para projetos inovadores no universo do desenvolvimento.
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