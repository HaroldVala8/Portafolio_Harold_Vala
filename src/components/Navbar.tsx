import { useState, useEffect } from 'react';
import HomeIcon from './icons/HomeIcon';
import ProjectsIcon from './icons/projectsIcon';
import ResumeIcon from './icons/resumeIcon';
import AboutIcon from './icons/aboutIcon';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrollingDown, setIsScrollingDown] = useState(false); // Para controlar el tamaño del navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Para rastrear la posición previa de scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Verificar si el usuario está desplazándose hacia abajo
      setIsScrollingDown(currentScrollPos > prevScrollPos);
      setPrevScrollPos(currentScrollPos);

      // Detectar la sección activa
      const sections = ['home', 'projects', 'resume', 'about'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const IconConfig = {
    size: "w-7 h-7", // Tamaño de los íconos
    hoverScale: "hover:scale-110", // Efecto de hover
    focusScale: "focus:scale-150", // Efecto de focus
    transition: "transition-transform duration-300 ease-in-out", // Transición suave
    containerSize: "w-max", // Ajuste del tamaño del contenedor
    backgroundColor: "bg-white", // Fondo del navbar
    spacing: "space-x-7", // Espaciado entre los íconos
    shadow: "shadow-lg", // Sombra del navbar
    iconColor: "text-purple-700", // Color de los íconos
    hoverColor: "hover:text-black", // Color al pasar el cursor
    focusColor: "focus:text-black", // Color al seleccionar
    labelStyle: `text-xs ${
      isScrollingDown ? 'hidden' : 'block'
    } text-purple-700 mt-1`, // Ocultar texto al hacer scroll hacia abajo
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-center ${
        isScrollingDown ? 'py-2' : 'py-3'
      } z-50 transition-all duration-300`}
    >
      <div
        className={`${IconConfig.backgroundColor} ${IconConfig.shadow} rounded-full px-5 py-2 flex ${IconConfig.spacing}`}
      >
        {/* Ícono de Inicio */}
        <div
          className={`${IconConfig.containerSize} flex flex-col items-center justify-center`}
        >
          <a
            href="#home"
            className={`${IconConfig.hoverScale} ${IconConfig.focusScale} ${IconConfig.transition} ${
              activeSection === 'home' ? 'scale-125' : ''
            }`}
          >
            <HomeIcon
              className={`${IconConfig.size} ${IconConfig.iconColor} ${IconConfig.hoverColor} ${IconConfig.focusColor}`}
            />
          </a>
          <span className={IconConfig.labelStyle}>Inicio</span>
        </div>

        {/* Ícono de Proyectos */}
        <div
          className={`${IconConfig.containerSize} flex flex-col items-center justify-center`}
        >
          <a
            href="#projects"
            className={`${IconConfig.hoverScale} ${IconConfig.focusScale} ${IconConfig.transition} ${
              activeSection === 'projects' ? 'scale-125' : ''
            }`}
          >
            <ProjectsIcon
              className={`${IconConfig.size} ${IconConfig.iconColor} ${IconConfig.hoverColor} ${IconConfig.focusColor}`}
            />
          </a>
          <span className={IconConfig.labelStyle}>Proyectos</span>
        </div>

        {/* Ícono de Currículum */}
        <div
          className={`${IconConfig.containerSize} flex flex-col items-center justify-center`}
        >
          <a
            href="#resume"
            className={`${IconConfig.hoverScale} ${IconConfig.focusScale} ${IconConfig.transition} ${
              activeSection === 'resume' ? 'scale-125' : ''
            }`}
          >
            <ResumeIcon
              className={`${IconConfig.size} ${IconConfig.iconColor} ${IconConfig.hoverColor} ${IconConfig.focusColor}`}
            />
          </a>
          <span className={IconConfig.labelStyle}>Certificados</span>
        </div>

        {/* Ícono de Sobre mí */}
        <div
          className={`${IconConfig.containerSize} flex flex-col items-center justify-center`}
        >
          <a
            href="#about"
            className={`${IconConfig.hoverScale} ${IconConfig.focusScale} ${IconConfig.transition} ${
              activeSection === 'about' ? 'scale-125' : ''
            }`}
          >
            <AboutIcon
              className={`${IconConfig.size} ${IconConfig.iconColor} ${IconConfig.hoverColor} ${IconConfig.focusColor}`}
            />
          </a>
          <span className={IconConfig.labelStyle}>Sobre mí</span>
        </div>
      </div>
    </nav>
  );
}
