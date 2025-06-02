import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

export default function Contacto() {
  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/api/enviarCorreo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        alert('Mensaje enviado correctamente');
    } else {
        alert('Hubo un error al enviar el mensaje');
    }
};
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-xl rounded-2xl p-10">
        
        {/* Izquierda */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
            <FiMail className="text-yellow-500" /> Contáctanos
          </h2>
          <p className="text-gray-600 text-lg">
            ¿Tienes preguntas o deseas más información? ¡Estamos aquí para ayudarte!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <FiMapPin className="text-yellow-500" />
              Jr. 5 esquinas 723 piso 2
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FiPhone className="text-yellow-500" />
              +51 958 101 721
            </div>
          </div>
        </div>

        {/* Derecha */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="example@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="celular" className="block text-sm font-semibold text-gray-700 mb-1">
                Celular:
              </label>
              <input
                type="tel"
                id="celular"
                name="celular"
                pattern="[0-9]{9}"
                title="Debe tener 9 dígitos"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Ingresa tu número"
                required
              />
            </div>
            
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-1">
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Escribe tu mensaje aquí"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}