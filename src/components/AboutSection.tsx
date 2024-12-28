import { projects } from "../data/about_data"; // Importa la lista de proyectos

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-10">
      {/* Banner principal */}
      <div className="w-full">
        <img
          src="./images/Banner_Harold.jpeg" // Ruta del banner en `public/images`
          alt="Banner"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Contenido de las cajas */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              {/* Mostrar Video o Imagen */}
              {project.video ? (
                <video
                  className="w-full h-40 object-cover"
                  controls
                  src={project.video}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-40 object-cover"
                />
              )}

              {/* Botón de Play si es un video */}
              {project.video && (
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                  Play
                </button>
              )}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
