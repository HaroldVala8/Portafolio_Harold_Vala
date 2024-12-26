export default function HeroSection() {
  return (
    <section className="flex items-center justify-center w-full h-screen bg-gray-100 px-5">
      
      {/* Contenedor principal */}
      <div className="bg-white shadow-lg rounded-lg p-5 max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-8">
        {/* Foto */}
        <div className="w-52 h-52 md:w-72 md:h-72 bg-gray-400 rounded-full overflow-hidden">
          <img
            src="./images/hAROLD ALIEN.jpeg" // Asegúrate de que esta ruta sea correcta
            alt="Foto de Harold"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold">Soy Harold</h1>
          <p className="mt-4 text-base md:text-lg">
            Ingeniero Económico y Financiero. Orientado al análisis de datos y
            creación de modelos de Machine Learning.
          </p>
        </div>
      </div>
    </section>
  );
}
