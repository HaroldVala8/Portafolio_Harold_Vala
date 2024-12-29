import { projects } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section className="bg-gray-100 p-10 md:p-16 lg:p-20">
      {/* Título de la sección con margen dinámico */}
      <h2 className="text-4xl font-bold text-left mb-10 mt-20 sm:mt-24 md:mt-32">
        Proyectos
      </h2>

      <div className="flex flex-col space-y-14 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            {/* Imagen del Proyecto */}
            <div className="p-0.5 flex justify-center items-center md:w-1/3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Detalles del Proyecto */}
            <div className="p-5 flex flex-col justify-between md:w-2/3">
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p
                  className="text-black text-sm"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
              </div>

              {/* Tecnologías */}
              <div className="flex space-x-7 mt-4 pt-4 border-t border-gray-200">
                {project.technologies.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    alt="Technology"
                    className="w-8 h-8"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
