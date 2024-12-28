// Define la estructura de un proyecto
export interface Project {
    title: string;
    description: string;
    image: string; // Ruta relativa al archivo en `public`
    video?: string; // Opcional: Ruta al video
    alt: string;
  }
  
  // Lista de proyectos
  export const projects: Project[] = [
    {
      title: "Deportes",
      description: "He formado parte de equipos representativos de mi escuela en deportes como fútbol, handball y tocho bandera. Estas experiencias me han permitido desarrollar habilidades clave como liderazgo, trabajo en equipo y disciplina.",
      image: "./images/about_sport.jpeg", // Ruta dentro de `public`
      alt: "Sport",
    },
    {
        title: "Misiones",
        description: "He colaborado en misiones comunitarias para apoyar a familias en situaciones vulnerables, organizando actividades educativas y recreativas para niños. Esta experiencia me enseñó el valor de la empatía y el servicio social",
        image: "./images/about_mision.jpeg", // Imagen para mostrar
        video: "", // Video opcional
        alt: "Missions",
    },
    {
      title: "Investigación",
      description: "Actualmente junto a mis compañeros estamos desarrollando una investigación enfocada en el uso de inteligencia artificial para prevenir el abandono escolar. Este proyecto busca implementar modelos predictivos que identifiquen estudiantes en riesgo y ofrezcan estrategias personalizadas de intervención.",
      image: "./images/about_investigation.jpg", // Ruta dentro de `public`
      alt: "Investigation",
    },
  ];
  