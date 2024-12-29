export default function HeroSection() {
  return (
    <section
      className="
        h-screen               {// Ocupa toda la altura de la pantalla}
        bg-gray-100          {// Fondo gris claro para la sección}
        flex items-center      {// Alinea verticalmente los elementos}
        justify-center         {// Centra horizontalmente los elementos}
      "
    >
      {/* Caja principal --------------------------------------------------- */}
      <div
        className="
          bg-white            {// Fondo blanco para la tarjeta}
          rounded-lg            {// Bordes redondeados para la tarjeta}
          shadow-lg             {// Sombra para darle profundidad}
          relative              {// Necesario para posicionar el círculo de manera absoluta}
          max-w-lg              {// Ancho máximo de la tarjeta (tamaño mediano)}
          w-full                {// Ancho completo en pantallas pequeñas}
          p-6                {// Padding interno de la tarjeta}
          text-center          {// Centra el contenido de texto}
        "
      >
        {/* Imagen circular sobre la tarjeta ------------------------------------------------ */}
        <div
          className="
            absolute            {// Posición absoluta en relación a la tarjeta}
            -top-28             {// Eleva el círculo hacia fuera de la tarjeta (10 unidades)}
            left-1/2            {// Coloca el círculo en el centro horizontal}
            transform -translate-x-1/2 {// Ajusta el círculo para que esté perfectamente centrado}
            w-40               {// Ancho del círculo}
            h-40               {// Altura del círculo, igual al ancho para mantenerlo circular}
            rounded-full         {// Hace que el contenedor sea circular}
            border-4 border-black {// Borde negro alrededor del círculo}
            flex items-center justify-center {// Centra cualquier contenido dentro del círculo}
          "
        >
          <img
            src="./images/hAROLD ALIEN.jpeg"
            className="
              aspect-square   {// }
              rounded-full
              object-cover    {// Ajusta la imagen}
            "
          />
        </div>

        {/* Contenido ----------------------------------------------------------- */}
        <article className="mt-10">
          <h1 className="text-2xl font-bold mb-2">Harold Valadez</h1>
          <h3 className="text-lg font-medium mb-4">
            Ingeniero Económico y Financiero
          </h3>
          <p className="text-sm leading-relaxed">
            Orientado al análisis de datos y creador de modelos de Machine
            Learning, enfocado en transformar datos en decisiones estratégicas.
          </p>
        </article>
      </div>
    </section>
  );
}
