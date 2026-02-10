"use client"

import { useState, useEffect } from "react"
import { MapPin, TrendingUp, TrendingDown, Crown, Target } from "lucide-react"

const data = [
  { rank: 1, plaza: "Monterrey Oriente", unidades: 3402, importe: 107251, growth: -6.3, isTop: true },
  { rank: 2, plaza: "Guadalajara", unidades: 1488, importe: 51495, growth: 10.4, isGrowing: true },
  { rank: 3, plaza: "Culiacán", unidades: 1065, importe: 34977, growth: 6.4, isGrowing: true },
  { rank: 4, plaza: "Hermosillo", unidades: 1052, importe: 35675, growth: -11.4 },
  { rank: 5, plaza: "Chihuahua", unidades: 1044, importe: 39695, growth: -10.6 },
  { rank: 6, plaza: "Cancún", unidades: 981, importe: 34772, growth: 3.5, isGrowing: true },
  { rank: 7, plaza: "Baja California Norte", unidades: 852, importe: 29411, growth: 20.5, isGrowing: true, isHighGrowth: true },
  { rank: 8, plaza: "Mérida", unidades: 727, importe: 23733, growth: 38.5, isGrowing: true, isHighGrowth: true },
  { rank: 9, plaza: "Mazatlán", unidades: 725, importe: 24966, growth: -18.2 },
  { rank: 10, plaza: "Monterrey Poniente", unidades: 541, importe: 17689, growth: -16.1 },
]

const COLORS = {
  dark: "#1A1A1A",
  gold: "#F7B500",
  gray: "#6B7280",
  green: "#27AE60",
  red: "#C0392B",
  blue: "#3B82F6",
}

export default function Slide4Plazas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const maxUnidades = Math.max(...data.map(d => d.unidades))

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index)
  }

  const activeIndex = selectedIndex !== null ? selectedIndex : hoveredIndex

  const getBarColor = (item: typeof data[0]) => {
    if (item.isHighGrowth) return COLORS.green
    if (item.isGrowing) return COLORS.blue
    if (item.growth > -10) return "#F59E0B"
    return COLORS.red
  }

  return (
    <div className="w-[1280px] h-[720px] bg-white p-12 font-sans flex flex-col">
      {/* Header - animated */}
      <div
        className={`mb-4 flex justify-between items-start transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div>
          <h1 className="text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Desempeño por Plaza
          </h1>
          <p className="text-lg text-gray-500 mt-2">Top 10 Plazas por Volumen · <span className="text-[#F7B500] font-medium">Sep 2025 - Ene 2026</span></p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 px-4 py-2 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#27AE60]" />
            <span className="text-xs text-gray-600">Crecimiento &gt;10%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
            <span className="text-xs text-gray-600">Crecimiento 0-10%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <span className="text-xs text-gray-600">Caída leve</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#C0392B]" />
            <span className="text-xs text-gray-600">Caída &gt;10%</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex gap-6">
        {/* Bars */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          {data.map((item, index) => (
            <div
              key={item.rank}
              className={`flex items-center gap-3 py-2 px-3 rounded-xl cursor-pointer transition-all duration-300 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              } ${
                activeIndex === index
                  ? "bg-amber-50 scale-[1.02] shadow-md"
                  : selectedIndex !== null && selectedIndex !== index
                  ? "opacity-40"
                  : "hover:bg-gray-50"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(index)}
            >
              {/* Rank */}
              <span
                className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  item.isTop ? "bg-[#F7B500] text-[#1A1A1A]" : item.isHighGrowth ? "bg-green-500 text-white" : "bg-gray-100 text-gray-600"
                } ${activeIndex === index ? "scale-110" : ""}`}
              >
                {item.rank}
              </span>

              {/* Plaza name */}
              <span className={`w-40 text-sm font-medium truncate transition-all duration-300 ${
                item.isTop || item.isHighGrowth ? "text-[#1A1A1A] font-semibold" : "text-gray-700"
              }`}>
                {item.plaza}
                {item.isTop && <Crown size={12} className="inline ml-1 text-amber-500" />}
              </span>

              {/* Bar */}
              <div className="flex-1 h-7 bg-gray-100 rounded-lg overflow-hidden">
                <div
                  className="h-full rounded-lg transition-all duration-700 flex items-center justify-end pr-3"
                  style={{
                    width: isLoaded ? `${(item.unidades / maxUnidades) * 100}%` : "0%",
                    backgroundColor: getBarColor(item),
                    transitionDelay: `${200 + index * 50}ms`
                  }}
                >
                  <span className="text-xs font-bold text-white">
                    {item.unidades.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Importe */}
              <span className="w-20 text-right text-xs font-bold text-[#F7B500]">
                ${item.importe.toLocaleString()}
              </span>

              {/* Growth */}
              <span className={`w-20 text-right text-sm font-bold flex items-center justify-end gap-1 ${
                item.growth > 0 ? "text-green-600" : "text-red-500"
              }`}>
                {item.growth > 0 ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {item.growth > 0 ? "+" : ""}{item.growth}%
              </span>
            </div>
          ))}
        </div>

        {/* Side cards */}
        <div className="w-[260px] flex flex-col gap-4">
          {/* #1 Plaza */}
          <div
            className={`p-5 bg-amber-50 border-2 border-amber-300 rounded-2xl transition-all duration-500 hover:border-amber-500 hover:shadow-lg cursor-pointer ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Crown size={20} className="text-amber-600" />
              <span className="font-semibold text-amber-800">Plaza #1</span>
            </div>
            <p className="text-xl font-bold text-[#1A1A1A]">Monterrey Oriente</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#F7B500]">3,402</span>
              <span className="text-sm text-amber-700">unidades</span>
            </div>
            <p className="text-sm text-amber-700 mt-1 font-medium">$107,251 importe est.</p>
          </div>

          {/* Mayor crecimiento */}
          <div
            className={`p-5 bg-green-50 border-2 border-green-300 rounded-2xl transition-all duration-500 hover:border-green-500 hover:shadow-lg cursor-pointer ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-green-600" />
              <span className="font-semibold text-green-800">Mayor Crecimiento</span>
            </div>
            <p className="text-xl font-bold text-[#1A1A1A]">Mérida</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#27AE60]">+38.5%</span>
              <span className="text-sm text-green-700">vs año anterior</span>
            </div>
            <p className="text-sm text-green-700 mt-1 font-medium">$23,733 importe est.</p>
          </div>

          {/* Oportunidad */}
          <div
            className={`p-5 bg-blue-50 border-2 border-blue-200 rounded-2xl transition-all duration-500 hover:border-blue-400 hover:shadow-lg cursor-pointer ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Target size={20} className="text-blue-600" />
              <span className="font-semibold text-blue-800">Oportunidad</span>
            </div>
            <p className="text-sm text-blue-700">
              <span className="font-semibold">Baja California Norte</span> crece +20.5%. Ideal para expandir portafolio.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`mt-4 pt-4 border-t border-gray-100 transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        <p className="text-sm text-gray-500 text-center">
          Monterrey es la plaza #1 en volumen. Mérida (+38.5%) y Baja California Norte (+20.5%) muestran el mayor crecimiento.
        </p>
      </div>
    </div>
  )
}
