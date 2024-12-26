export const projects = [
    {
        id: 1,
        title: "Las canciones más escuchadas de latinoamérica en Spotify",
        description: "En este proyecto utilicé <strong>Python</strong> para conectarme a la API de Spotify y recopilar las listas Top 50 de países latinoamericanos. Procesé y estructuré los datos con pandas, y luego diseñé un dashboard interactivo en Looker Studio para visualizar tendencias musicales en la región. Este trabajo combina habilidades en extracción de datos, análisis y creación de visualizaciones impactantes.",
        image: "./images/Top50_Paises_LATAM.jpg", // Asegúrate de que esta ruta sea correcta
        technologies: [
            "./logos/python.svg",
            "./logos/looker_logo.svg",
        ],
    },
    {
        id: 2,
        title: "Analisis de accidentes de tránsito en México",
        description: "Realicé una investigación exhaustiva sobre accidentes automovilísticos en México para evaluar el riesgo por estado. Utilicé Python para manejar y procesar las bases de datos del INEGI, trabajando con más de 500,000 registros. Posteriormente, subí los datos a SQL para facilitar las consultas y, finalmente, utilicé Tableau para crear gráficos y descubrir datos importantes.",
        image: "./images/Accidentes_auto_mx_project.svg", // Asegúrate de que esta ruta sea correcta
        technologies: [
            "./logos/tableau_logo.svg",
            "./logos/mysql_logo.svg",
            "./logos/python.svg", 
        ],
    },
];
