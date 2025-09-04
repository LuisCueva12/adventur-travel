import { useState, useEffect } from "react";

export default function Precios() {
  const [precios, setPrecios] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/precios")
      .then((res) => res.json())
      .then((data) => setPrecios(data));
  }, []);

  const actualizarPrecio = async (id: number, nuevoPrecio: number) => {
    await fetch(`http://localhost:4000/api/precios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ precio: nuevoPrecio }),
    });

    setPrecios((prev) =>
      prev.map((p) => (p.id === id ? { ...p, precio: nuevoPrecio } : p))
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Gestión de Precios</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Habitación</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {precios.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.nombre}</td>
              <td className="p-2">
                <input
                  type="number"
                  defaultValue={p.precio}
                  onBlur={(e) =>
                    actualizarPrecio(p.id, Number(e.target.value))
                  }
                  className="border p-1 w-24"
                />
              </td>
              <td className="p-2">
                <button
                  onClick={() => actualizarPrecio(p.id, p.precio)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Guardar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
