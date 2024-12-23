export default function Navbar() {
    
    // Configuración centralizada
    const IconConfig = {
      size: "w-6 h-6", // Tamaño de los íconos
      hoverScale: "hover:scale-125", // Escala al pasar el cursor
      focusScale: "focus:scale-125", // Escala al seleccionar
      transition: "transition-transform duration-200", // Transición suave
      containerSize: "w-10 h-10", // Tamaño fijo del contenedor
      backgroundColor: "bg", // Fondo del navbar
      spacing: "space-x-5", // Espaciado entre los íconos
      shadow: "shadow-md", // Sombra del navbar
      iconColor: "text-gray-700", // Color base de los íconos
      hoverColor: "hover:text-blue-500", // Color al pasar el cursor
      focusColor: "focus:text-blue-700", // Color al seleccionar
    };
  
    return (
      <nav className="fixed top-0 left-0 w-full flex justify-center py-3 z-10">
        <div
          className={`${IconConfig.backgroundColor} ${IconConfig.shadow} rounded-full px-3 py-1 flex ${IconConfig.spacing}`}
        >
          {/* Ícono de Inicio */}
          <div
            className={`${IconConfig.containerSize} flex items-center justify-center rounded-full`}
          >
            <a
              href="#home"
              className={`${IconConfig.hoverScale} ${IconConfig.focusScale} ${IconConfig.transition}`}
            >
              <img
                src="./icons/home.svg"
                alt="Inicio"
                className={`${IconConfig.size} ${IconConfig.iconColor} ${IconConfig.hoverColor} ${IconConfig.focusColor}`}
              />
            </a>
          </div>
  
          {/* Ícono de Proyectos */}
          <div
            className={`${IconConfig.containerSize} flex items-center justify-center rounded-full`}
          >
            <a
              href="#projects"
              className={`${IconConfig.hoverScale} ${IconConfig.focusScale} ${IconConfig.transition}`}
            >
              <img
                src="./icons/projects.svg"
                alt="Proyectos"
                className={`${IconConfig.size} ${IconConfig.iconColor} ${IconConfig.hoverColor} ${IconConfig.focusColor}`}
              />
            </a>
          </div>
  
          {/* Ícono de Currículum */}
          <div
            className={`${IconConfig.containerSize} flex items-center justify-center rounded-full`}
          >
            <a
              href="#resume"
              className={`${IconConfig.hoverScale} ${IconConfig.focusScale} ${IconConfig.transition}`}
            >
              <img
                src="./icons/resume.svg"
                alt="Currículum"
                className={`${IconConfig.size} ${IconConfig.iconColor} ${IconConfig.hoverColor} ${IconConfig.focusColor}`}
              />
            </a>
          </div>
  
          {/* Ícono de Sobre mí */}
          <div
            className={`${IconConfig.containerSize} flex items-center justify-center rounded-full`}
          >
            <a
              href="#about"
              className={`${IconConfig.hoverScale} ${IconConfig.focusScale} ${IconConfig.transition}`}
            >
              <img
                src="./icons/about.svg"
                alt="Sobre mí"
                className={`${IconConfig.size} ${IconConfig.iconColor} ${IconConfig.hoverColor} ${IconConfig.focusColor}`}
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
