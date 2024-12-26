export default function Navbar() {
  // Configuración centralizada
  const IconConfig = {
    size: "w-6 h-6", // Tamaño de los íconos
    hoverScale: "hover:scale-125", // Escala al pasar el cursor
    focusScale: "focus:scale-125", // Escala al seleccionar
    transition: "transition-transform duration-200", // Transición suave
    containerSize: "p-1 w-16", // Tamaño fijo del contenedor
    backgroundColor: "bg-[#0693FF]", // Fondo del navbar
    spacing: "space-x-5", // Espaciado entre los íconos
    shadow: "shadow-md", // Sombra del navbar
    iconColor: "text-gray-700", // Color base de los íconos
    hoverColor: "hover:text-blue-500", // Color al pasar el cursor
    focusColor: "focus:text-black", // Color al seleccionar
    labelStyle: "text-xs text-center mt-0.5", // Estilo del texto debajo del ícono
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center py-3 z-10">
      <div
        className={`${IconConfig.backgroundColor} ${IconConfig.shadow} rounded-full px-3 py-1 flex ${IconConfig.spacing}`}
      >
        {/* Ícono de Inicio */}
        <div
          className={`${IconConfig.containerSize} flex flex-col items-center justify-center rounded-full`}
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
          <span className={IconConfig.labelStyle}>Inicio</span>
        </div>

        {/* Ícono de Proyectos */}
        <div
          className={`${IconConfig.containerSize} flex flex-col items-center justify-center rounded-full`}
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
          <span className={IconConfig.labelStyle}>Proyectos</span>
        </div>

        {/* Ícono de Currículum */}
        <div
          className={`${IconConfig.containerSize} flex flex-col items-center justify-center rounded-full`}
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
          <span className={IconConfig.labelStyle}>Currículum</span>
        </div>

        {/* Ícono de Sobre mí */}
        <div
          className={`${IconConfig.containerSize} flex flex-col items-center justify-center rounded-full`}
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
          <span className={IconConfig.labelStyle}>Sobre mí</span>
        </div>
      </div>
    </nav>
  );
}
