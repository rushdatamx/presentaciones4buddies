"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Rocket, Lightbulb, Target, Sparkles, ArrowRight } from "lucide-react"

const topGrowth = [
  { plaza: "Tabasco", growth: 117, units: 217, importe: 7769, color: "#10B981" },
  { plaza: "Mérida", growth: 38.5, units: 727, importe: 23733, color: "#22C55E" },
  { plaza: "Baja California Norte", growth: 20.5, units: 852, importe: 29411, color: "#14B8A6" },
  { plaza: "México Centro", growth: 13.0, units: 504, importe: 18382, color: "#06B6D4" },
  { plaza: "Guadalajara", growth: 10.4, units: 1488, importe: 51495, color: "#3B82F6" },
]

const insights = [
  { text: "Chicharrón y Classic White crecen +20% → demanda por innovación", icon: TrendingUp },
  { text: "Sureste y Occidente muestran la mayor tracción", icon: Target },
  { text: "Plazas en crecimiento son ideales para nuevos lanzamientos", icon: Rocket },
]

export default function Slide5Oportunidades() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-[1280px] h-[720px] bg-white p-12 font-sans flex flex-col">
      {/* Header - animated */}
      <div
        className={`mb-6 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <h1 className="text-4xl font-bold text-[#1A1A1A] tracking-tight">
          Plazas con Mayor Potencial
        </h1>
        <p className="text-lg text-gray-500 mt-2">Oportunidades de Crecimiento · <span className="text-[#F7B500] font-medium">Sep 2025 - Ene 2026 vs Año Anterior</span></p>
      </div>

      {/* Growth Cards */}
      <div className="flex gap-4 mb-8">
        {topGrowth.map((item, index) => {
          const isHovered = hoveredIndex === index

          return (
            <div
              key={index}
              className={`flex-1 p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                isHovered
                  ? "scale-105 shadow-xl border-green-400"
                  : "border-gray-200 shadow-md hover:shadow-lg"
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                backgroundColor: isHovered ? `${item.color}10` : "white"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isHovered ? "scale-110" : ""
                }`}
                style={{ backgroundColor: item.color }}
              >
                <TrendingUp size={24} className="text-white" />
              </div>

              {/* Growth */}
              <div
                className={`text-3xl font-bold mb-2 transition-all duration-300 ${
                  isHovered ? "scale-105" : ""
                }`}
                style={{ color: item.color }}
              >
                +{item.growth}%
              </div>

              {/* Plaza */}
              <div className={`text-sm font-semibold text-[#1A1A1A] mb-1 transition-all duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}>
                {item.plaza}
              </div>

              {/* Units & Importe */}
              <div className="text-xs text-gray-500">
                {item.units.toLocaleString()} unidades
              </div>
              <div className="text-xs font-semibold text-[#F7B500] mt-1">
                ${item.importe.toLocaleString()} est.
              </div>

              {/* Hover indicator */}
              {isHovered && (
                <div className="mt-3 flex items-center gap-1 text-xs font-medium" style={{ color: item.color }}>
                  <Sparkles size={12} />
                  <span>Alto potencial</span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Insights Section */}
      <div
        className={`flex-1 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb size={24} className="text-[#F7B500]" />
          <h3 className="text-2xl font-bold text-[#1A1A1A]">Conclusiones Clave</h3>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {insights.map((insight, idx) => {
            const Icon = insight.icon
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl bg-gray-50 border border-gray-200 cursor-pointer transition-all duration-500 hover:bg-amber-50 hover:border-amber-300 hover:shadow-lg hover:scale-[1.02] ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${700 + idx * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F7B500] text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>
                  <Icon size={20} className="text-[#F7B500]" />
                </div>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  {insight.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Call to Action - animated */}
      <div
        className={`mt-6 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "1000ms" }}
      >
        <div className="bg-gradient-to-r from-[#F7B500] to-[#FFD700] px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] cursor-pointer group">
          <div className="flex items-center justify-center gap-4">
            <Rocket size={28} className="text-[#1A1A1A] group-hover:animate-bounce-subtle" />
            <p className="text-xl font-bold text-[#1A1A1A]">
              Traemos nuevas líneas de producto diseñadas para capitalizar estas oportunidades
            </p>
            <ArrowRight size={24} className="text-[#1A1A1A] group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  )
}
