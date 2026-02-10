# 4BUDDIES en FDA - Presentación Ejecutiva Interactiva

## Descripción

Presentación ejecutiva interactiva con estilo shadcn/Notion para mostrar el desempeño de 4BUDDIES en Farmacias del Ahorro (FDA). Incluye 5 slides con datos, gráficas y análisis, con capacidad de exportación a PDF.

## Stack Tecnológico

- **Next.js 16+** con App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Recharts** - Gráficas interactivas
- **html-to-image + jsPDF** - Exportación a PDF
- **Lucide React** - Iconos
- **Google Fonts: Inter**

## Estructura del Proyecto

```
fda-charts/
├── app/
│   ├── page.tsx          # Navegación principal + exportación PDF
│   ├── layout.tsx        # Root layout con Inter font
│   └── globals.css       # Estilos Tailwind + animaciones
├── components/
│   └── charts/
│       ├── Slide1-Portada.tsx
│       ├── Slide2-ResumenEjecutivo.tsx
│       ├── Slide3-Productos.tsx
│       ├── Slide4-Plazas.tsx
│       └── Slide5-Oportunidades.tsx
└── package.json
```

## Slides Incluidos

### Slide 1: Portada
- Título y subtítulo de la presentación
- Logo de 4BUDDIES
- Diseño limpio y profesional

### Slide 2: Resumen Ejecutivo
- 4 KPIs principales con iconos:
  - 728 Sucursales Activas
  - 6 SKUs en Anaquel
  - 20,127 Unidades Vendidas
  - 46 Plazas con Presencia
- Período: Sep 2025 - Ene 2026

### Slide 3: Productos
- Gráfica de barras horizontales
- Top 5 productos por ventas
- Tabla resumen con participación y crecimiento
- Destaca productos con mayor crecimiento (+29% y +16%)

### Slide 4: Top Plazas
- Gráfica de barras del Top 10 plazas
- Ventas y crecimiento por plaza
- Monterrey como plaza #1
- Destaca Mérida y BC Norte

### Slide 5: Oportunidades de Crecimiento
- Top 5 plazas con mayor crecimiento
- 3 conclusiones clave
- Call to action para nuevas líneas de producto

## Colores de Marca

- **Primary/Accent**: #F7B500 (amarillo/dorado - palomitas)
- **Dark**: #1A1A1A
- **Green**: #27AE60 (positivo)
- **Red**: #C0392B (negativo)

## Características

### Navegación
- Flechas laterales para navegar
- Flechas del teclado (←/→)
- Indicadores de slide en la parte inferior
- Contador de slides

### Exportación PDF
- Botón "Exportar PDF" en la esquina superior derecha
- Genera PDF en formato landscape 1280x720px
- Exporta todos los slides en alta calidad
- Nombre del archivo: `4BUDDIES-FDA-Presentacion.pdf`

### Diseño
- Tamaño fijo: 1280x720px (16:9)
- Estilo minimalista inspirado en shadcn/Notion
- Mucho espacio en blanco
- Bordes sutiles y sombras suaves
- Transiciones suaves
- Todas las gráficas muestran valores sin necesidad de hover

## Instalación y Uso

### Instalar dependencias
```bash
cd /Users/jmariopgarcia/Desktop/2026/RushData/4BUDDIES/KAM/fda-charts
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

Abre http://localhost:3001 en tu navegador (o el puerto que se indique).

### Build para producción
```bash
npm run build
npm start
```

## Navegación

- **Botones laterales**: Haz clic en las flechas izquierda/derecha
- **Teclado**: Usa las flechas ← y → para navegar
- **Indicadores**: Haz clic en los puntos en la parte inferior para ir directamente a un slide
- **Exportar**: Haz clic en "Exportar PDF" para descargar la presentación completa

## Datos Incluidos

### Productos
- Rodajitas Spicy Limón 30g: 5,085 unidades (25.3%, -21.2%)
- Palomitas Classic White 25g: 4,232 unidades (21.0%, +16.5%)
- Palomitas Street Elote 25g: 4,003 unidades (19.9%, -3.2%)
- Chicharrón de Cerdo 75g: 3,636 unidades (18.1%, +29.1%)
- Palomitas Street Elote 125g: 3,061 unidades (15.2%, -0.9%)

### Top 10 Plazas
1. Monterrey Oriente: 3,402 unidades (-6.3%)
2. Guadalajara: 1,488 unidades (+10.4%)
3. Culiacán: 1,065 unidades (+6.4%)
4. Hermosillo: 1,052 unidades (-11.4%)
5. Chihuahua: 1,044 unidades (-10.6%)
6. Cancún: 981 unidades (+3.5%)
7. Baja California Norte: 852 unidades (+20.5%)
8. Mérida: 727 unidades (+38.5%)
9. Mazatlán: 725 unidades (-18.2%)
10. Monterrey Poniente: 541 unidades (-16.1%)

### Plazas con Mayor Crecimiento
- Tabasco: +117% (217 unidades)
- Mérida: +38.5% (727 unidades)
- Baja California Norte: +20.5% (852 unidades)
- México Centro: +13.0% (504 unidades)
- Guadalajara: +10.4% (1,488 unidades)

## Notas Técnicas

- Todos los valores se muestran directamente en las gráficas (no requieren hover)
- Las tablas resumen acompañan a las gráficas para mejor legibilidad en PDF
- Cada slide incluye un footer con insights/conclusiones clave
- La exportación PDF captura los slides en alta resolución (pixelRatio: 2)
- Las animaciones se aplican solo en la vista web, no afectan la exportación PDF

## Servidor de Desarrollo

El proyecto está configurado para correr en **http://localhost:3001** (puerto 3001 porque el 3000 estaba en uso).

## Próximos Pasos

Para personalizar la presentación:
1. Modifica los datos en los componentes de slides
2. Ajusta colores en `app/globals.css`
3. Cambia el tamaño del slide modificando las dimensiones en `.slide` (globals.css) y en la configuración de PDF (page.tsx)
4. Agrega más slides creando nuevos componentes en `components/charts/`
