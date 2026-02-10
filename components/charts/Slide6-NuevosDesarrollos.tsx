"use client"

import { useEffect, useState } from "react"
import { FlaskConical } from "lucide-react"

const productos = [
  {
    nombre: "Papas Estilo Kettle",
    imagen: "/producto-caramelo.jpeg",
  },
  {
    nombre: "Pinwheels",
    imagen: "/producto-chicharron.jpeg",
  },
]

export default function Slide6NuevosDesarrollos() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[1280px] h-[720px] bg-white p-12 font-sans flex flex-col relative overflow-hidden">
      {/* Background accent */}
      <div
        className={`absolute top-0 right-0 w-[600px] h-[600px] transition-opacity duration-1000 ${
          isLoaded ? "opacity-10" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(circle at top right, #F7B500 0%, transparent 70%)"
        }}
      />

      {/* Header */}
      <div
        className={`mb-6 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <FlaskConical size={32} className="text-[#F7B500]" />
          <h1 className="text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Nuevos Desarrollos en Proceso
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1 flex gap-8 items-center justify-center">
        {productos.map((producto, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${200 + index * 200}ms` }}
          >
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="h-[480px] w-auto object-contain"
              />
            </div>

            {/* Product name */}
            <h3 className="text-2xl font-bold text-[#1A1A1A] mt-4 text-center">
              {producto.nombre}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}
