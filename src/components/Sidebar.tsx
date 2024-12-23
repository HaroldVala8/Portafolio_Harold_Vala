export default function Sidebar() {
    // Configuración centralizada
    const IconConfig = {
      containerSize: "w-10 h-10", // Tamaño fijo del contenedor
      iconSize: "w-4 h-4", // Tamaño del ícono
      transition: "transition-transform duration-200", // Transición suave
      hoverBackground: "hover:bg-gray-300", // Fondo al pasar el cursor
      spacing: "space-y-4", // Espaciado entre los íconos
      position: "fixed right-0 top-1/2 transform -translate-y-1/2", // Posición fija de la barra lateral
      iconColor: "text-gray-700", // Color base de los íconos
      hoverColor: "hover:text-blue-500", // Color al pasar el cursor
    };
  
    return (
      <aside className={`${IconConfig.position} ${IconConfig.spacing}`}>
        {/* Teléfono */}
        <a
          href="tel:+52 55 6223 0625"
          className={`group flex items-center justify-center ${IconConfig.containerSize} ${IconConfig.hoverBackground} ${IconConfig.transition}`}
        >
          <img
            src="./icons/phone.svg"
            alt="Teléfono"
            className={`group-hover:scale-110 ${IconConfig.iconSize} ${IconConfig.iconColor}`}
          />
        </a>
  
        {/* Correo */}
        <a
          href="mailto:valadezmoralesharold@gmail.com"
          className={`group flex items-center justify-center ${IconConfig.containerSize} ${IconConfig.hoverBackground} ${IconConfig.transition}`}
        >
          <img
            src="./icons/email.svg"
            alt="Correo"
            className={`group-hover:scale-110 ${IconConfig.iconSize} ${IconConfig.iconColor}`}
          />
        </a>
  
        {/* GitHub */}
        <a
          href="https://github.com/HaroldVala8"
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-center ${IconConfig.containerSize} ${IconConfig.hoverBackground} ${IconConfig.transition}`}
        >
          <img
            src="./icons/github.svg"
            alt="GitHub"
            className={`group-hover:scale-110 ${IconConfig.iconSize} ${IconConfig.iconColor}`}
          />
        </a>
  
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/harold-valadez/"
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-center ${IconConfig.containerSize} ${IconConfig.hoverBackground} ${IconConfig.transition}`}
        >
          <img
            src="./icons/linkedin.svg"
            alt="LinkedIn"
            className={`group-hover:scale-110 ${IconConfig.iconSize} ${IconConfig.iconColor}`}
          />
        </a>
      </aside>
    );
  }
