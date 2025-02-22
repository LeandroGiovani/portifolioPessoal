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

    useEffect(initActiveBox, [])
    window.addEventListener('resize', initActiveBox)

    const activeCurrentLink = (currentLink) => {
      lastActiveLink.current?.classList.remove('active')
      currentLink.target.classList.add('active')
      lastActiveLink.current = currentLink.target

      activeBox.current.style.top = currentLink.target.offsetTop + 'px';
      activeBox.current.style.left = currentLink.target.offsetLeft + 'px';
      activeBox.current.style.width = currentLink.target.offsetWidth + 'px';
      activeBox.current.style.height = currentLink.target.offsetHeight + 'px';
    }

    const navItems = [
        {
          label: 'Página Incial',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'Sobre',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Projetos',
          link: '#projects',
          className: 'nav-link'
        },
        {
          label: 'Contate-me',
          link: '#contact',
          className: 'nav-link md:!hidden'
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
                    onClick={activeCurrentLink}
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