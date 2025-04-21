export default function Contacto() {
  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-lg p-6">
        {/* Sección izquierda: Información de contacto */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contáctenos:</h2>
          <p className="text-gray-700">
            Nuestra dirección postal es:
          </p>
          <p className="text-gray-700 font-semibold">
            Jr. 5 esquinas 723 piso 2
          </p>
          <p className="text-gray-700 mt-2">Teléfono: <span className="font-semibold">+51 958 101 721</span></p>
        </div>

        {/* Sección derecha: Formulario */}
        <div>
          <p className="text-base text-gray-800 mb-4">
            Déjenos saber sus consultas llenando el formulario
          </p>
          <form method="POST" className="flex flex-col gap-4">
            {/* Campo: Nombre */}
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold text-gray-700"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>

            {/* Campo: Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Ingresa tu e-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="example@email.com"
                required
              />
            </div>

            {/* Campo: Celular */}
            <div>
              <label
                htmlFor="celular"
                className="block text-sm font-semibold text-gray-700"
              >
                Celular:
              </label>
              <input
                type="tel"
                id="celular"
                name="celular"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Ingresa tu número"
              />
            </div>

            {/* Campo: Mensaje */}
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-semibold text-gray-700"
              >
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-yellow-500"
                placeholder="Escribe aquí tu mensaje"
                required
              ></textarea>
            </div>

            {/* Botón de Enviar */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}