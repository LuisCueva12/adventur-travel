import { motion } from "framer-motion";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-800">
          📊 Panel de Administración
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Bienvenido al dashboard, aquí podrás gestionar tu página.
        </p>
      </motion.div>

      {/* Botones en Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-2xl bg-white p-6 shadow-xl transition"
        >
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            ✏️ Editar Textos
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            Modifica títulos, descripciones y demás contenido de la página.
          </p>
          <button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 font-semibold text-white shadow-md transition hover:opacity-90">
            Entrar
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-2xl bg-white p-6 shadow-xl transition"
        >
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            💲 Editar Precios
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            Cambia precios de productos y servicios fácilmente.
          </p>
          <button className="w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 font-semibold text-white shadow-md transition hover:opacity-90">
            Entrar
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-2xl bg-white p-6 shadow-xl transition"
        >
          <h2 className="mb-4 text-xl font-semibold text-gray-700">
            🖼️ Editar Imágenes
          </h2>
          <p className="mb-6 text-sm text-gray-500">
            Sube, elimina o actualiza imágenes del sitio web.
          </p>
          <button className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 font-semibold text-white shadow-md transition hover:opacity-90">
            Entrar
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
      </motion.p>
    </div>
  );
}
