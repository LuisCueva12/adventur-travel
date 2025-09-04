import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (user === "admin" && pass === "1234") {
      router.push("/admin");
    } else {
      setError("❌ Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-md"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-center text-3xl font-extrabold text-gray-800"
        >
          Panel de Administración
        </motion.h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
              placeholder="Ingresa tu usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
              placeholder="********"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-red-500"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 font-semibold text-white shadow-md transition"
          >
            Entrar
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-xs text-gray-600"
        >
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
}
