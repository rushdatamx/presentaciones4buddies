"use client"

import { useState, useEffect } from "react"
import { Trophy, TrendingUp, TrendingDown, Star } from "lucide-react"

const data = [
  { rank: 1, producto: "Rodajitas Spicy Limón 30g", unidades: 5085, importe: 139838, porcentaje: 25.3, trend: "-21.2%", isTop: false },
  { rank: 2, producto: "Palomitas Classic White 25g", unidades: 4232, importe: 95220, porcentaje: 21.0, trend: "+16.5%", isTop: true },
  { rank: 3, producto: "Palomitas Street Elote 25g", unidades: 4003, importe: 90068, porcentaje: 19.9, trend: "-3.2%", isTop: false },
  { rank: 4, producto: "Chicharrón de Cerdo 75g", unidades: 3636, importe: 210888, porcentaje: 18.1, trend: "+29.1%", isTop: true, isBest: true },
  { rank: 5, producto: "Palomitas Street Elote 125g", unidades: 3061, importe: 143867, porcentaje: 15.2, trend: "-0.9%", isTop: false },
]

const COLORS = {
  dark: "#1A1A1A",
  gold: "#F7B500",
  gray: "#6B7280",
  green: "#27AE60",
  red: "#C0392B",
}

export default function Slide3Productos() {
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
            Productos con Mayor Crecimiento
          </h1>
          <p className="text-lg text-gray-500 mt-2">Top 5 Productos Sell-Out · <span className="text-[#F7B500] font-medium">Sep 2025 - Ene 2026</span></p>
        </div>

        {/* Total badges */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <Trophy size={24} className="text-[#F7B500]" />
            <div>
              <p className="text-2xl font-bold text-[#F7B500]">20,127</p>
              <p className="text-xs text-gray-400">Unidades</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 bg-[#27AE60] rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <div>
              <p className="text-2xl font-bold text-white">$682,355</p>
              <p className="text-xs text-green-200">Importe Est.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex gap-8">
        {/* Table */}
        <div className="flex-1">
          {/* Header row */}
          <div
            className={`flex items-center gap-4 px-4 py-3 bg-gray-50 rounded-t-xl border-b border-gray-200 transition-all duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-8 text-xs font-semibold text-gray-500">#</span>
            <span className="flex-1 text-xs font-semibold text-gray-500">PRODUCTO</span>
            <span className="w-20 text-xs font-semibold text-gray-500 text-right">UNIDADES</span>
            <span className="w-24 text-xs font-semibold text-gray-500 text-right">IMPORTE EST.</span>
            <span className="w-14 text-xs font-semibold text-gray-500 text-right">% MIX</span>
            <span className="w-20 text-xs font-semibold text-gray-500 text-right">VS AÑO ANT</span>
            <span className="w-32 text-xs font-semibold text-gray-500">DISTRIBUCIÓN</span>
          </div>

          {/* Data rows - animated */}
          {data.map((item, index) => (
            <div
              key={item.rank}
              className={`flex items-center gap-4 px-4 py-4 border-b border-gray-100 cursor-pointer transition-all duration-300 ${
                isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              } ${
                activeIndex === index
                  ? "bg-amber-50 scale-[1.01] shadow-md -mx-2 px-6 rounded-xl"
                  : selectedIndex !== null && selectedIndex !== index
                  ? "opacity-50"
                  : "hover:bg-gray-50"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(index)}
            >
              {/* Rank */}
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                  item.isTop ? "bg-[#27AE60] text-white" : "bg-gray-100 text-gray-600"
                } ${activeIndex === index ? "scale-110" : ""}`}
              >
                {item.rank}
              </span>

              {/* Product name */}
              <div className="flex-1 flex items-center gap-2">
                <span className={`font-medium transition-all duration-300 ${
                  item.isTop ? "text-[#1A1A1A] font-semibold" : "text-gray-700"
                } ${activeIndex === index ? "font-bold" : ""}`}>
                  {item.producto}
                </span>
                {item.isBest && (
                  <div className={`flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "animate-pulse" : ""
                  }`}>
                    <Trophy size={12} className="text-green-600" />
                    <span className="text-xs text-green-600 font-medium">Top Crecimiento</span>
                  </div>
                )}
                {item.rank === 2 && activeIndex === index && (
                  <Star size={16} className="text-amber-500 animate-bounce-subtle" />
                )}
              </div>

              {/* Units */}
              <span className={`w-20 text-right font-bold transition-all duration-300 ${
                item.isTop ? "text-[#27AE60]" : "text-[#1A1A1A]"
              } ${activeIndex === index ? "scale-110" : ""}`}>
                {item.unidades.toLocaleString()}
              </span>

              {/* Importe */}
              <span className={`w-24 text-right font-bold transition-all duration-300 text-[#F7B500]`}>
                ${item.importe.toLocaleString()}
              </span>

              {/* Percentage */}
              <span className={`w-14 text-right font-semibold text-gray-600`}>
                {item.porcentaje}%
              </span>

              {/* Trend */}
              <span className={`w-20 text-right text-sm font-bold flex items-center justify-end gap-1 ${
                item.trend.startsWith("+") ? "text-green-600" : "text-red-500"
              }`}>
                {item.trend.startsWith("+") ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {item.trend}
              </span>

              {/* Bar - animated */}
              <div className="w-32">
                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isLoaded ? "" : "w-0"
                    }`}
                    style={{
                      width: isLoaded ? `${(item.unidades / maxUnidades) * 100}%` : "0%",
                      backgroundColor: item.isTop ? COLORS.green : COLORS.gray,
                      transitionDelay: `${300 + index * 100}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side summary - animated */}
        <div className="w-[280px] flex flex-col gap-4">
          {/* Best Growth card */}
          <div
            className={`p-5 bg-green-50 border-2 border-green-300 rounded-2xl transition-all duration-500 hover:border-green-500 hover:shadow-lg cursor-pointer ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={20} className="text-green-600" />
              <span className="font-semibold text-green-800">Mayor Crecimiento</span>
            </div>
            <p className="text-xl font-bold text-[#1A1A1A]">Chicharrón de Cerdo</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#27AE60]">+29.1%</span>
              <span className="text-sm text-green-700">vs año anterior</span>
            </div>
            <p className="text-sm text-green-700 mt-2 font-medium">$210,888 importe est.</p>
          </div>

          {/* Second best card */}
          <div
            className={`p-5 bg-amber-50 border-2 border-amber-200 rounded-2xl transition-all duration-500 hover:border-amber-400 hover:shadow-lg hover:scale-[1.02] cursor-pointer ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Star size={16} className="text-amber-600" />
              <p className="text-sm text-amber-700 font-medium">Segundo Lugar</p>
            </div>
            <p className="text-lg font-bold text-[#1A1A1A]">Classic White 25g</p>
            <div className="mt-2 flex items-center gap-1 text-green-600">
              <TrendingUp size={14} />
              <span className="text-sm font-medium">+16.5% vs 2024</span>
            </div>
          </div>

          {/* Insight */}
          <div
            className={`p-5 bg-[#F7B500]/10 border border-[#F7B500]/30 rounded-2xl transition-all duration-500 hover:border-[#F7B500] cursor-pointer ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-sm text-amber-800 font-medium mb-2">Insight</p>
            <p className="text-sm text-gray-700">
              Los <span className="font-semibold">snacks diferenciados</span> (Chicharrón, Classic White) muestran mayor tracción que las palomitas tradicionales.
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
          Chicharrón (+29%) y Classic White (+16%) lideran el crecimiento. Oportunidad de expandir estas categorías.
        </p>
      </div>
    </div>
  )
}
