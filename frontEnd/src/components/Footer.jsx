import { BtnPrimary } from "./Buttons";
import { Link } from 'react-router-dom'
import logo from "../assets/img/logoLW.png"

const sitemap = [
    {
      label: 'Página Inicial',
      href: '#home'
    },
    {
      label: 'Sobre',
      href: '#about'
    },
    {
      label: 'Tecnologias',
      href: '#skills'
    },
    {
      label: 'Projetos',
      href: '#projects'
    },
    {
      label: 'Contate-me',
      href: '#contact'
    }
];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/LeandroGiovani'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/leandro-maciel-giovani-2874501b3/'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/leandro__giovani'
    },
];

const scrollTop = (current) => {
    current.target.text === 'Página Inicial' ? window.scroll(0, 0) : undefined
}

const Footer = () => {
  return (
    <footer className="sectionF border-t-1 border-zinc-50/5">
        <div className="container">

          <div className="lg:grid grid-cols-2">

            <div className="mb-10">
                <h2 className="footer-title text-5xl leading-tight font-semibold mt-5 mb-8 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[12ch] lg:text-[55px] lg:mb-10 reveal-up">
                    Obrigado por visitar!
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:pl-20">

                <div>
                    <p className="mb-2 reveal-up">Mapa do site</p>

                    <ul>
                        {sitemap.map(({ label, href }, key) => (
                            <li key={key}>
                                <a 
                                    href={href}
                                    className="block text-sm text-zinc-400 py-1 hover:text-zinc-200 reveal-up"
                                    onClick={scrollTop}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-2 reveal-up">Redes sociais</p>

                    <ul>
                        {socials.map(({ label, href }, key) => (
                            <li key={key}>
                                <a 
                                    href={href}
                                    target="_blank"
                                    className="block text-sm text-zinc-400 py-1 hover:text-zinc-200 reveal-up"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

          </div>

          <div className="flex items-center justify-between pt-10 mb-8">
            <Link 
                to="/" 
                className="logo reveal-up"
            >
                <img 
                    src={logo}
                    width={40}
                    height={40}
                    alt="Logo" 
                />
            </Link>

            <p className="text-zinc-500 text-sm reveal-up">
                &copy; 2025 <span className="text-zinc-200">LeandroGiovani</span>
            </p>
          </div>

        </div>
    </footer>
  )
}

export default Footer