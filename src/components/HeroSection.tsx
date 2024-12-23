export default function HeroSection() {
    // Configuración centralizada
    const SectionConfig = {
      sectionStyles: "flex items-center justify-center w-full h-screen bg-gray-100 px-12", // Estilos de la sección
      containerStyles: "bg-white shadow-lg rounded-lg p-10 max-w-3xl w-full flex items-center space-x-8 mx-auto", // Estilos del contenedor
      photoStyles: "w-32 h-32 bg-gray-400 rounded-full", // Estilos de la foto
      headingStyles: "text-3xl font-bold", // Estilos del encabezado
      paragraphStyles: "mt-2 text-1xl", // Estilos del texto
    };
  
    return (
      <section
        id="home"
        className={SectionConfig.sectionStyles} // Estilos de la sección
      >
        {/* Contenedor centrado */}
        <div className={SectionConfig.containerStyles}>
          {/* Foto */}
          <div className={SectionConfig.photoStyles}></div>
          
  
          {/* Texto */}
          <div>
            <h1 className={SectionConfig.headingStyles}>¡Hola! Soy Harold</h1>
            <p className={SectionConfig.paragraphStyles}>
              Ingeniero Económico y Financiero. Orientado al análisis de datos y
              creación de modelos de Machine Learning.
            </p>
          </div>
        </div>
      </section>
    );
  }
  