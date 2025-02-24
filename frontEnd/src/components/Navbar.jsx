import { useRef, useEffect } from "react";

const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        initActiveBox();
      }, 6301);
  
      return () => clearTimeout(timer);
    }, []);

    const scrollTop = (current) => {
      current.target.text === 'Página Inicial' ? window.scroll(0, 0) : undefined
    }

    const navItems = [
        {
          label: 'Página Inicial',
          link: '#home',
          className: 'nav-link active revealNav6 hid',
          ref: lastActiveLink
        },
        {
          label: 'Sobre',
          link: '#about',
          className: 'nav-link revealNav3 hid'
        },
        {
          label: 'Tecnologias',
          link: '#skills',
          className: 'nav-link revealNav hid'
        },
        {
          label: 'Projetos',
          link: '#projects',
          className: 'nav-link revealNav3 hid'
        },
        {
          label: 'Contate-me',
          link: '#contact',
          className: 'nav-link revealNav6 hid'
        }
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a 
                    href={link}
                    key={key}
                    ref={ref}
                    className={className}
                    onClick={scrollTop}
                >
                    {label}
                </a>
            ))}
            <div 
                className="active__box"
                ref={activeBox}
            ></div>
        </nav>
    )
}

export default Navbar