'use client';

import { useState } from 'react';
import { FiPhone, FiMapPin, FiMail, FiClock, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Contacto() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/enviarCorreo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-100 to-white relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10">
        
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-[#556B2F] flex items-center gap-3">
            <FiMail className="text-[#556B2F]" /> Contáctanos
          </h2>
          <p className="text-gray-600 text-lg">
            ¿Tienes preguntas o deseas más información? ¡Estamos aquí para ayudarte!
          </p>

          <div className="space-y-4 text-gray-700">
            {[
              { icon: <FiMapPin />, text: "Jr. 5 Esquinas 723, Cajamarca, Perú" },
              { icon: <FiPhone />, text: "+51 951 427 420", link: "tel:+51951427420" },
              { icon: <FiMail />, text: "ventas@adventur.pe", link: "mailto:ventas@adventur.pe" },
              { icon: <FiClock />, text: "Lun - Dom: 7:00 AM - 10:00 PM" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-3 text-lg"
              >
                <span className="text-[#556B2F]">{item.icon}</span>
                {item.link ? (
                  <a href={item.link} className="hover:underline">{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg mt-8"
          >
            <iframe
              title="Ubicación Hotel Recreo"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d416.1052019681842!2d-78.51771967798622!3d-7.162697593685584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1755129244814!5m2!1ses-419!2spe"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50/70 rounded-2xl p-8 shadow-inner relative"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {['nombre','email','celular'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                  {field}:
                </label>
                <input
                  type={field === 'email' ? 'email' : field === 'celular' ? 'tel' : 'text'}
                  id={field}
                  name={field}
                  pattern={field === 'celular' ? "[0-9]{9}" : undefined}
                  title={field === 'celular' ? "Debe tener 9 dígitos" : undefined}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#556B2F] transition"
                  placeholder={`Ingresa tu ${field}`}
                  required
                />
              </div>
            ))}

            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-1">
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#556B2F] transition"
                placeholder="Escribe tu mensaje aquí"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative w-full bg-[#556B2F] text-white font-bold py-3 rounded-lg hover:bg-[#445723] transition-colors flex justify-center items-center"
            >
              {loading ? (
                <FiLoader className="animate-spin text-xl" />
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </form>

          {/* Mensajes de estado */}
          {status === 'success' && (
            <div className="mt-4 flex items-center gap-2 text-green-600 font-semibold">
              <FiCheckCircle /> ¡Mensaje enviado correctamente!
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 flex items-center gap-2 text-red-600 font-semibold">
              <FiAlertCircle /> Hubo un error al enviar el mensaje.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
