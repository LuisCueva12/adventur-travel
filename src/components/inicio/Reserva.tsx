import React, { useEffect, useState } from "react";

export default function Reserva() {
  const [habitacion, setHabitacion] = useState({
    nombre: "",
    precio: "",
    imagen: "",
    descripcion: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setHabitacion({
      nombre: params.get("nombre") || "",
      precio: params.get("precio") || "",
      imagen: params.get("imagen") || "",
      descripcion: params.get("descripcion") || "",
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Reserva enviada (ejemplo). Aquí irá la lógica real.");
  };

  return (
    <section id="reserva" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 shadow-lg rounded-xl p-8 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0F3057] mb-6">
          Reserva tu estadía
        </h2>

        {/* Datos de la habitación */}
        {habitacion.nombre && (
          <div className="mb-6 p-4 bg-white rounded-lg shadow-md flex flex-col sm:flex-row gap-4">
            <img
              src={habitacion.imagen}
              alt={habitacion.nombre}
              className="w-full sm:w-48 h-32 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-bold text-[#0F3057]">{habitacion.nombre}</h3>
              <p className="text-gray-600">{habitacion.descripcion}</p>
              <p className="mt-2 text-xl font-bold text-[#556B2F]">{habitacion.precio}</p>
            </div>
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F3057]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F3057]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de habitación
            </label>
            <input
              type="text"
              name="habitacion"
              value={habitacion.nombre}
              readOnly
              className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha de entrada
            </label>
            <input
              type="date"
              name="entrada"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F3057]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fecha de salida
            </label>
            <input
              type="date"
              name="salida"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0F3057]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#0F3057] text-white py-3 rounded-lg font-medium hover:bg-[#082437] transition"
          >
            Confirmar Reserva
          </button>
        </form>
      </div>
    </section>
  );
}
