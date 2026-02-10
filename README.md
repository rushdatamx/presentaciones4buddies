# Presentación 4BUDDIES + FDA

**URL Producción:** https://presentaciones4buddies.vercel.app/
**Repositorio:** https://github.com/rushdatamx/presentaciones4buddies
**Fecha de creación:** Febrero 2026
**Período de datos:** Sep 2025 - Ene 2026 vs Año Anterior

---

## Resumen Ejecutivo

Presentación interactiva para junta con Farmacias del Ahorro (FDA) mostrando resultados de ventas de 4BUDDIES.

### KPIs Principales
| Métrica | Valor |
|---------|-------|
| Unidades Totales | 20,017 |
| Importe Estimado | $682,355 |
| Plazas con Presencia | 86 |
| Variación vs Año Anterior | -4.7% |

### Precios de Venta (para cálculo de importe)
| Producto | Precio |
|----------|--------|
| Palomitas 25g (Classic White, Street Elote 25g) | $22.50 |
| Palomitas 125g (Street Elote 125g) | $47.00 |
| Chicharrón 75g | $58.00 |
| Rodajitas 30g | $27.50 |

---

## Estructura de Slides (7 en total)

### Slide 1: Portada
- Logo 4BUDDIES
- Título: "Resultados y Oportunidades"
- Período: Sep 2025 - Ene 2026

### Slide 2: Resumen Ejecutivo
- 4 KPIs con animación count-up
- Unidades, Importe, Plazas, Variación

### Slide 3: Top 5 Productos
| # | Producto | Unidades | Importe | Var % |
|---|----------|----------|---------|-------|
| 1 | Rodajitas Spicy Limón 30g | 5,085 | $139,838 | -21.2% |
| 2 | Classic White 25g | 4,232 | $95,220 | +19.8% |
| 3 | Street Elote 25g | 4,003 | $90,068 | +7.9% |
| 4 | Chicharrón de Cerdo 75g | 3,636 | $210,888 | +20.7% |
| 5 | Street Elote 125g | 3,061 | $143,867 | -8.9% |

### Slide 4: Diagnóstico Rodajitas (-21.2%)
**Problema:** Rodajitas es #1 en volumen pero cayó -21.2% (6,452 → 5,085 = -1,367 unidades perdidas)

**Hallazgos:**
- 71 de 95 plazas bajaron (caída dispersa, no concentrada)
- Top 5 plazas con mayor caída = solo 29% de la pérdida total

**Plazas con Mayor Caída:**
| Plaza | Anterior | Actual | Dif | Var % |
|-------|----------|--------|-----|-------|
| Chihuahua | 354 | 231 | -123 | -34.7% |
| Mazatlán | 220 | 114 | -106 | -48.2% |
| Monterrey Poniente | 221 | 131 | -90 | -40.7% |
| Cancún | 291 | 208 | -83 | -28.5% |
| Pachuca | 110 | 32 | -78 | -70.9% |
| Tampico | 148 | 72 | -76 | -51.4% |
| Puebla | 221 | 159 | -62 | -28.1% |

**Lo Positivo:** Monterrey Oriente (plaza #1) creció +6.6% en Rodajitas (778 → 829)

**Recomendaciones:**
- Revisar disponibilidad en plazas con mayor caída
- Evaluar exhibición y visibilidad del producto
- 71 plazas = oportunidad de recuperación

### Slide 5: Top 10 Plazas
| # | Plaza | Unidades | Importe | Var % |
|---|-------|----------|---------|-------|
| 1 | Monterrey Oriente | 3,402 | $107,251 | -6.3% |
| 2 | Guadalajara | 1,488 | $51,495 | +10.4% |
| 3 | Culiacán | 1,065 | $34,977 | +6.4% |
| 4 | Hermosillo | 1,052 | $35,675 | -11.4% |
| 5 | Chihuahua | 1,044 | $39,695 | -10.6% |
| 6 | Cancún | 981 | $34,772 | +3.5% |
| 7 | Baja California Norte | 852 | $29,411 | +20.5% |
| 8 | Mérida | 727 | $23,733 | +38.5% |
| 9 | Mazatlán | 725 | $24,966 | -18.2% |
| 10 | Monterrey Poniente | 541 | $17,689 | -16.1% |

### Slide 6: Oportunidades de Crecimiento
**Plazas con Mayor Potencial:**
| Plaza | Crecimiento | Unidades | Importe |
|-------|-------------|----------|---------|
| Tabasco | +117% | 217 | $7,769 |
| Mérida | +38.5% | 727 | $23,733 |
| Baja California Norte | +20.5% | 852 | $29,411 |
| México Centro | +13.0% | 504 | $18,382 |
| Guadalajara | +10.4% | 1,488 | $51,495 |

**Conclusiones Clave:**
1. Chicharrón y Classic White crecen +20% → demanda por innovación
2. Sureste y Occidente muestran la mayor tracción
3. Plazas en crecimiento son ideales para nuevos lanzamientos

### Slide 7: Nuevos Desarrollos en Proceso
- Papas Estilo Kettle
- Pinwheels

---

## Tecnología

- **Framework:** Next.js 16 con App Router
- **Styling:** Tailwind CSS
- **Animaciones:** CSS transitions + useState/useEffect
- **Iconos:** Lucide React
- **Export PDF:** html-to-image + jsPDF
- **Deploy:** Vercel

---

## Archivos Principales

```
fda-charts/
├── app/page.tsx                              # Navegación principal
├── components/charts/
│   ├── Slide1-Portada.tsx
│   ├── Slide2-ResumenEjecutivo.tsx
│   ├── Slide3-Productos.tsx
│   ├── Slide4-DiagnosticoRodajitas.tsx       # Análisis caída Rodajitas
│   ├── Slide4-Plazas.tsx                     # (ahora es Slide 5)
│   ├── Slide5-Oportunidades.tsx              # (ahora es Slide 6)
│   └── Slide6-NuevosDesarrollos.tsx          # (ahora es Slide 7)
├── public/
│   ├── 4buddies-logo.webp
│   ├── producto-caramelo.jpeg                # Papas Kettle
│   └── producto-chicharron.jpeg              # Pinwheels
└── README.md                                 # Este archivo
```

---

## Fuente de Datos

Los datos provienen del archivo de sell-out de FDA:
`/Users/jmariopgarcia/Desktop/2026/RushData/4BUDDIES/KAM/data/raw/sellout/fda/venta-fda.csv`

---

## Historial de Cambios

| Fecha | Cambio |
|-------|--------|
| Feb 2026 | Creación inicial con 5 slides |
| Feb 2026 | Agregado importe estimado (precio venta) |
| Feb 2026 | Agregado Slide 6: Nuevos Desarrollos |
| Feb 2026 | Agregado Slide 4: Diagnóstico Rodajitas |

---

## Desarrollo Local

```bash
npm install
npm run dev
```

Abrir http://localhost:3000
