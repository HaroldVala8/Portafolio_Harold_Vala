import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  return (
    <div>
      {/* Barra de Navegación */}
      <Navbar />

      <div className="flex">
        <div className="w-full">
          {/* Sección Home */}
          <div id="home">
            <HeroSection />
          </div>

          {/* Sección Proyectos */}
          <div id="projects">
            <ProjectsSection />
          </div>

          {/* Sección Currículum */}
          <div id="resume">
            {/* Componente de Currículum */}
          </div>

          {/* Sección Sobre mí */}
          <div id="about">
            {/* Componente de Sobre mí */}
            <AboutSection />
          </div>
        </div>

      </div>
    </div>
  );
}
