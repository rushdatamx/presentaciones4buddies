"use client"

import { useState, useEffect } from "react"
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle, Target } from "lucide-react"

const diagnostico = {
  producto: "Rodajitas Spicy Limón 30g",
  actual: 5085,
  anterior: 6452,
  variacion: -21.2,
  diferencia: -1367,
}

const plazasCaida = [
  { plaza: "Chihuahua", anterior: 354, actual: 231, dif: -123, var: -34.7 },
  { plaza: "Mazatlán", anterior: 220, actual: 114, dif: -106, var: -48.2 },
  { plaza: "Monterrey Poniente", anterior: 221, actual: 131, dif: -90, var: -40.7 },
  { plaza: "Cancún", anterior: 291, actual: 208, dif: -83, var: -28.5 },
  { plaza: "Pachuca", anterior: 110, actual: 32, dif: -78, var: -70.9 },
  { plaza: "Tampico", anterior: 148, actual: 72, dif: -76, var: -51.4 },
  { plaza: "Puebla", anterior: 221, actual: 159, dif: -62, var: -28.1 },
]

const positivo = {
  plaza: "Monterrey Oriente",
  anterior: 778,
  actual: 829,
  dif: 51,
  var: 6.6,
  nota: "Plaza #1 sigue creciendo"
}

const COLORS = {
  red: "#C0392B",
  green: "#27AE60",
  gold: "#F7B500",
}

export default function Slide4DiagnosticoRodajitas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const maxDif = Math.max(...plazasCaida.map(p => Math.abs(p.dif)))

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[1280px] h-[720px] bg-white p-12 font-sans flex flex-col">
      {/* Header */}
      <div
        className={`mb-6 flex justify-between items-start transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle size={32} className="text-[#C0392B]" />
            <h1 className="text-4xl font-bold text-[#1A1A1A] tracking-tight">
              Diagnóstico: Rodajitas Spicy Limón
            </h1>
          </div>
          <p className="text-lg text-gray-500">Análisis de la Caída · <span className="text-[#F7B500] font-medium">Sep 2025 - Ene 2026 vs Año Anterior</span></p>
        </div>

        {/* Badge de caída */}
        <div
          className={`px-6 py-3 rounded-2xl bg-red-50 border-2 border-red-200 transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex items-center gap-2">
            <TrendingDown size={24} className="text-[#C0392B]" />
            <span className="text-3xl font-bold text-[#C0392B]">{diagnostico.variacion}%</span>
          </div>
          <p className="text-sm text-red-700 mt-1">vs año anterior</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex gap-6">
        {/* Left: Problem numbers + Bars */}
        <div className="flex-1 flex flex-col">
          {/* Numbers summary */}
          <div
            className={`flex gap-4 mb-6 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex-1 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Año Anterior</p>
              <p className="text-2xl font-bold text-gray-700">{diagnostico.anterior.toLocaleString()}</p>
              <p className="text-xs text-gray-400">unidades</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 font-bold">→</span>
              </div>
            </div>
            <div className="flex-1 p-4 bg-red-50 rounded-xl border-2 border-red-200">
              <p className="text-sm text-red-600 mb-1">Actual</p>
              <p className="text-2xl font-bold text-[#C0392B]">{diagnostico.actual.toLocaleString()}</p>
              <p className="text-xs text-red-400">unidades</p>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white font-bold">=</span>
              </div>
            </div>
            <div className="flex-1 p-4 bg-red-100 rounded-xl border-2 border-red-300">
              <p className="text-sm text-red-700 mb-1">Pérdida</p>
              <p className="text-2xl font-bold text-[#C0392B]">{diagnostico.diferencia.toLocaleString()}</p>
              <p className="text-xs text-red-500">unidades perdidas</p>
            </div>
          </div>

          {/* Bars - Plazas con mayor caída */}
          <div
            className={`flex-1 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
              <TrendingDown size={18} className="text-[#C0392B]" />
              Plazas con Mayor Caída
            </h3>

            <div className="space-y-2">
              {plazasCaida.map((item, index) => (
                <div
                  key={item.plaza}
                  className={`flex items-center gap-3 py-2 px-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  } ${
                    hoveredIndex === index
                      ? "bg-red-50 scale-[1.02] shadow-md"
                      : "hover:bg-gray-50"
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Plaza name */}
                  <span className="w-36 text-sm font-medium text-gray-700 truncate">
                    {item.plaza}
                  </span>

                  {/* Bar */}
                  <div className="flex-1 h-6 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className="h-full rounded-lg transition-all duration-700 flex items-center justify-end pr-2"
                      style={{
                        width: isLoaded ? `${(Math.abs(item.dif) / maxDif) * 100}%` : "0%",
                        backgroundColor: COLORS.red,
                        transitionDelay: `${600 + index * 50}ms`
                      }}
                    >
                      <span className="text-xs font-bold text-white">
                        {item.dif}
                      </span>
                    </div>
                  </div>

                  {/* Percentage */}
                  <span className="w-16 text-right text-sm font-bold text-[#C0392B]">
                    {item.var}%
                  </span>
                </div>
              ))}
            </div>

            {/* Nota de acciones puntuales */}
            <div
              className={`mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <p className="text-sm text-red-800 font-semibold mb-2">
                Acciones puntuales en plazas con caída:
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                  Revisión de Inventarios
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                  Planes Promocionales
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                  Capacitación virtual a líderes de plaza
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Cards */}
        <div className="w-[300px] flex flex-col gap-4">
          {/* Positive card - Monterrey Oriente */}
          <div
            className={`p-5 bg-green-50 border-2 border-green-300 rounded-2xl transition-all duration-500 hover:border-green-500 hover:shadow-lg cursor-pointer ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle size={20} className="text-green-600" />
              <span className="font-semibold text-green-800">Lo Positivo</span>
            </div>
            <p className="text-xl font-bold text-[#1A1A1A]">{positivo.plaza}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#27AE60]">+{positivo.var}%</span>
              <span className="text-sm text-green-700">crecimiento</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
              <TrendingUp size={14} />
              <span>{positivo.anterior} → {positivo.actual} unidades</span>
            </div>
            <p className="text-sm text-green-600 mt-2 font-medium">{positivo.nota}</p>
          </div>

          {/* Insight card */}
          <div
            className={`p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl transition-all duration-500 hover:border-amber-400 hover:shadow-lg cursor-pointer ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={20} className="text-amber-600" />
              <span className="font-semibold text-amber-800">Insight</span>
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-bold">71 de 95 plazas</span> tuvieron caída. El problema está <span className="font-bold">disperso</span>, no concentrado en pocas plazas.
            </p>
            <p className="text-xs text-amber-700 mt-2">
              Top 5 plazas = solo 29% de la pérdida total
            </p>
          </div>

          {/* Recommendation card */}
          <div
            className={`p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl transition-all duration-500 hover:border-blue-400 hover:shadow-lg cursor-pointer flex-1 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Target size={20} className="text-blue-600" />
              <span className="font-semibold text-blue-800">Recomendación</span>
            </div>
            <p className="text-sm text-blue-900 leading-relaxed">
              Revisar <span className="font-bold">inventarios</span> y complementar con <span className="font-bold">plan promocional 2x$</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`mt-4 pt-4 border-t border-gray-100 transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <p className="text-sm text-gray-500 text-center">
          Rodajitas sigue siendo el <span className="font-semibold text-[#F7B500]">#1 en volumen</span>, pero requiere atención en plazas con caída significativa.
        </p>
      </div>
    </div>
  )
}
