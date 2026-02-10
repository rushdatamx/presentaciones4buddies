"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { toPng } from "html-to-image"
import { jsPDF } from "jspdf"

import Slide1Portada from "@/components/charts/Slide1-Portada"
import Slide2ResumenEjecutivo from "@/components/charts/Slide2-ResumenEjecutivo"
import Slide3Productos from "@/components/charts/Slide3-Productos"
import Slide4DiagnosticoRodajitas from "@/components/charts/Slide4-DiagnosticoRodajitas"
import Slide5Plazas from "@/components/charts/Slide4-Plazas"
import Slide6Oportunidades from "@/components/charts/Slide5-Oportunidades"
import Slide7NuevosDesarrollos from "@/components/charts/Slide6-NuevosDesarrollos"

const slides = [
  { id: 1, name: "Portada", component: Slide1Portada },
  { id: 2, name: "Resumen Ejecutivo", component: Slide2ResumenEjecutivo },
  { id: 3, name: "Productos", component: Slide3Productos },
  { id: 4, name: "Diagnóstico Rodajitas", component: Slide4DiagnosticoRodajitas },
  { id: 5, name: "Top Plazas", component: Slide5Plazas },
  { id: 6, name: "Oportunidades", component: Slide6Oportunidades },
  { id: 7, name: "Nuevos Desarrollos", component: Slide7NuevosDesarrollos },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isExporting, setIsExporting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToSlide(currentSlide + 1)
      if (e.key === "ArrowLeft") goToSlide(currentSlide - 1)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  const exportToPDF = async () => {
    setIsExporting(true)

    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1280, 720],
      })

      const originalSlide = currentSlide

      for (let i = 0; i < slides.length; i++) {
        setCurrentSlide(i)
        await new Promise((resolve) => setTimeout(resolve, 500))

        const slideElement = document.getElementById("slide-container")
        if (!slideElement) continue

        const dataUrl = await toPng(slideElement, {
          quality: 1,
          pixelRatio: 2,
        })

        if (i > 0) {
          pdf.addPage()
        }

        pdf.addImage(dataUrl, "PNG", 0, 0, 1280, 720)
      }

      pdf.save("4BUDDIES-FDA-Presentacion.pdf")
      setCurrentSlide(originalSlide)
    } catch (error) {
      console.error("Error exporting PDF:", error)
      alert("Hubo un error al exportar el PDF. Por favor intenta de nuevo.")
    } finally {
      setIsExporting(false)
    }
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Navigation Bar */}
      <div
        className={`w-[1280px] flex items-center justify-between mb-4 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {/* Logo/Title */}
        <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-xl shadow-md">
          <div className="w-8 h-8 rounded-lg bg-[#F7B500] flex items-center justify-center">
            <span className="text-white font-bold text-xs">4B</span>
          </div>
          <span className="font-bold text-[#1A1A1A]">4BUDDIES + FDA</span>
        </div>

        {/* Slide Numbers */}
        <div className="flex items-center gap-2 bg-white rounded-xl shadow-md px-2 py-1">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#F7B500] text-[#1A1A1A] scale-105"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {slide.id}
            </button>
          ))}
        </div>

        {/* Info + Export */}
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-xl shadow-md">
            <span className="font-bold text-[#F7B500]">{currentSlide + 1}</span>
            <span> / {slides.length}</span>
            <span className="ml-2 text-gray-400">|</span>
            <span className="ml-2">{slides[currentSlide].name}</span>
          </div>

          <button
            onClick={exportToPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 bg-[#F7B500] text-[#1A1A1A] rounded-xl font-semibold hover:bg-[#E5A800] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            <Download size={18} />
            {isExporting ? "Exportando..." : "PDF"}
          </button>
        </div>
      </div>

      {/* Slide Container */}
      <div className="relative">
        <div
          id="slide-container"
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <CurrentSlideComponent key={currentSlide} />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className={`absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSlide === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white shadow-lg hover:shadow-xl hover:scale-110 text-gray-700"
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === slides.length - 1}
          className={`absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentSlide === slides.length - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-[#F7B500] shadow-lg hover:shadow-xl hover:scale-110 text-[#1A1A1A]"
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Keyboard hint */}
      <div
        className={`mt-4 text-sm text-gray-400 transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "500ms" }}
      >
        Usa las flechas ← → o haz clic en los números para navegar
      </div>
    </div>
  )
}
