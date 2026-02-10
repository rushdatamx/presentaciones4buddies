"use client"

import { useState, useEffect } from "react"
import { Store, Package, TrendingUp, MapPin, Sparkles, DollarSign } from "lucide-react"

// Hook para animacion count-up
const useCountUp = (end: number, duration = 2000, startAnimation = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.round(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, startAnimation])

  return count
}

const COLORS = {
  dark: "#1A1A1A",
  gold: "#F7B500",
  gray: "#6B7280",
  green: "#27AE60",
}

export default function Slide2ResumenEjecutivo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Animaciones count-up
  const countSucursales = useCountUp(728, 1500, isLoaded)
  const countSKUs = useCountUp(6, 800, isLoaded)
  const countUnidades = useCountUp(20127, 2000, isLoaded)
  const countPlazas = useCountUp(46, 1200, isLoaded)
  const countImporte = useCountUp(682355, 2500, isLoaded)

  const kpis = [
    {
      icon: Store,
      value: countSucursales,
      label: "Sucursales Activas",
      color: "#3B82F6",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBg: "hover:bg-blue-100",
    },
    {
      icon: Package,
      value: countSKUs,
      label: "SKUs en Anaquel",
      color: "#8B5CF6",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverBg: "hover:bg-purple-100",
    },
    {
      icon: TrendingUp,
      value: countUnidades,
      label: "Unidades Vendidas",
      color: COLORS.green,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverBg: "hover:bg-green-100",
      highlight: true,
    },
    {
      icon: MapPin,
      value: countPlazas,
      label: "Plazas con Presencia",
      color: "#F97316",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-100",
    },
    {
      icon: DollarSign,
      value: countImporte,
      label: "Importe Estimado (MXN)",
      color: "#F7B500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      hoverBg: "hover:bg-amber-100",
      isCurrency: true,
    },
  ]

  return (
    <div className="w-[1280px] h-[720px] bg-white p-12 font-sans flex flex-col">
      {/* Header - animated */}
      <div
        className={`mb-8 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <h1 className="text-4xl font-bold text-[#1A1A1A] tracking-tight">
          Nuestra Presencia en FDA
        </h1>
        <p className="text-lg text-gray-500 mt-2">Resumen Ejecutivo · <span className="text-[#F7B500] font-medium">Sep 2025 - Ene 2026</span></p>
      </div>

      {/* KPIs Grid - animated */}
      <div className="grid grid-cols-3 gap-5 flex-1">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon
          const isHovered = hoveredIndex === index

          return (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${kpi.bgColor} ${kpi.borderColor} ${kpi.hoverBg} ${
                isHovered ? "scale-[1.02] shadow-xl" : "shadow-md"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isHovered ? "scale-110" : ""
                }`}
                style={{ backgroundColor: `${kpi.color}20` }}
              >
                <Icon
                  size={32}
                  style={{ color: kpi.color }}
                  className={isHovered ? "animate-bounce-subtle" : ""}
                />
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-2">
                <span
                  className={`text-5xl font-bold transition-all duration-300 ${
                    isHovered ? "scale-105" : ""
                  }`}
                  style={{ color: kpi.color }}
                >
                  {kpi.isCurrency ? `$${kpi.value.toLocaleString()}` : kpi.value.toLocaleString()}
                </span>
                {kpi.highlight && (
                  <Sparkles
                    size={24}
                    className="text-amber-500 animate-pulse-slow"
                  />
                )}
              </div>

              {/* Label */}
              <p
                className={`text-xl text-gray-600 mt-3 font-medium transition-all duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
              >
                {kpi.label}
              </p>
            </div>
          )
        })}
      </div>

      {/* Footer - animated */}
      <div
        className={`mt-6 pt-4 border-t border-gray-100 transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <p className="text-sm text-gray-500 text-center">
          Período: Septiembre 2025 - Enero 2026 | Comparativo vs mismo período año anterior
        </p>
      </div>
    </div>
  )
}
