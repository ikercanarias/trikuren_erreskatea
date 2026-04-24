# 🦔 TRIKUREN ERRESKATEA
### *El rescate de Triku — Una aventura interactiva en Alonsotegi*

> Videojuego de tipo "elige tu propia aventura" ambientado en el municipio vizcaíno de Alonsotegi. El detective Bartolin debe resolver el misterio de la desaparición de Triku, la mascota de la escuela, siguiendo pistas repartidas por los lugares más emblemáticos del pueblo.

---

## 📖 Descripción

*Trikuren Erreskatea* es una aplicación web interactiva con estética **retro 8-bit** desarrollada íntegramente con HTML, CSS y JavaScript vanilla, sin ningún framework ni dependencia externa. La historia se presenta en formato de **libro abierto**: la página izquierda muestra la narración y las decisiones, mientras que la página derecha muestra la ilustración de la escena y, en muchos capítulos, un **desafío o acertijo** que el jugador debe resolver antes de poder avanzar.

El juego consta de **13 capítulos** que recorren lugares reales de Alonsotegi —el frontón, la biblioteca, el Gaztegune, el bunker, la Fuente del Oro…— y está diseñado para que ningún camino llegue al final sin haber visitado al menos 6 páginas.

---

## ✨ Características principales

- **Sin dependencias externas.** Solo HTML, CSS y JavaScript. Ejecutable directamente abriendo `index.html` en cualquier navegador moderno.
- **Estética retro CRT.** Tipografía pixel (*Press Start 2P*), scanlines animadas, efecto de brillo (*glow*) y starfield generado por canvas.
- **Diseño de libro abierto.** Dos páginas enfrentadas con lomo central, esquinas decorativas y efecto de paso de página.
- **Efecto máquina de escribir.** El texto de cada capítulo aparece carácter a carácter antes de mostrar las opciones.
- **Sistema de desafíos.** En la mayoría de capítulos, el jugador debe resolver un acertijo, un enigma matemático o una pregunta sobre Alonsotegi antes de poder elegir su siguiente destino. Permite reintentos ilimitados con mensajes de pista personalizados.
- **Menú de capítulos.** Panel lateral desplegable (botón ☰) que permite saltar directamente a cualquier capítulo, con indicador visual del capítulo activo.
- **Guardado de partida.** El progreso se guarda automáticamente en `localStorage`. Al volver al juego se detecta la partida guardada y se ofrece continuar o empezar de nuevo.
- **Pantalla de carga.** Barra de progreso animada con pasos irregulares que simula una carga real. Al completarse aparece un botón que, además de pasar a la pantalla de inicio, desbloquea el audio y el vídeo respetando las políticas de autoplay de los navegadores móviles (iOS/Safari incluido).
- **Música de fondo y vídeo.** Soporte para audio en bucle (`mp3`/`ogg`) y vídeo en la pantalla de inicio (`webm`/`mp4`).
- **Imagen de final personalizable.** Cada página marcada como `esFinal` puede incluir una imagen que se muestra centrada en la pantalla de desenlace.
- **Diseño responsive.** Adaptado para escritorio, tablet y móvil.
- **Atajos de teclado.** `S` para guardar la partida, `ESC` para cerrar el menú de capítulos o volver al menú principal.

---

## 🗂️ Estructura del proyecto

```
trikuren-erreskatea/
│
├── index.html          # Estructura de todas las pantallas
├── styles.css          # Estilos completos (variables, pantallas, libro, desafíos, menú, loader)
├── script.js           # Lógica del juego (datos, motor, eventos)
│
├── favicon/
│   └── favicon.ico
│
├── music/
│   ├── background.mp3
│   └── background.ogg
│
├── main-page.webm      # Vídeo de la pantalla de inicio
├── main-page.mp4
└── main_background.png # Imagen de fallback si el vídeo no carga
```

---

## 🚀 Instalación y uso

No se requiere ningún servidor ni proceso de build. Basta con clonar el repositorio y abrir el archivo principal en el navegador:

```bash
git clone https://github.com/tu-usuario/trikuren-erreskatea.git
cd trikuren-erreskatea
# Abrir index.html en el navegador
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

> **Nota:** Para que el audio y el vídeo funcionen correctamente en local con Chrome, puede ser necesario servir los archivos a través de un servidor local sencillo, como la extensión *Live Server* de VS Code o `python3 -m http.server`.

---

## 🧩 Cómo añadir o modificar capítulos

Todos los datos del juego están en el array `PAGINAS` al inicio de `script.js`. Cada capítulo sigue esta estructura:

```javascript
{
  id: 1,                          // Identificador único
  capitulo: 'I. KAPITULUA - ...',  // Nombre del capítulo (aparece en el menú y en el HUD)
  titulo: 'TITULO DE LA ESCENA',  // Título corto (aparece en el caption de la imagen)
  texto: `Texto de la historia...`, // Narración completa (soporta \n para párrafos)
  lore: `Texto informativo...`,   // Texto del panel derecho (si no hay desafío)
  escena: 'clave_ilustracion',    // Clave para la ilustración SVG (ver objeto ESCENAS en script.js)
  imagenFinal: 'ruta/imagen.png', // Solo en páginas finales: imagen mostrada en la pantalla de fin
  esFinal: true,                  // Marcar si es un capítulo de desenlace
  desafio: {                      // Opcional: bloquea las opciones hasta resolver el reto
    galdera: 'Texto de la pregunta o acertijo...',
    erantzuna: 'respuesta exacta',
    okerMezua: 'Mensaje que aparece al fallar.',
  },
  opciones: [                     // Array de hasta 3 opciones de navegación
    { texto: 'Texto del botón', destino: 2 },
    { texto: 'Texto del botón', destino: 3 },
    { texto: 'Texto del botón', destino: 4 },
  ],
}
```

Para añadir una ilustración nueva, basta con incluir una función en el objeto `ESCENAS` de `script.js` que devuelva una cadena SVG:

```javascript
const ESCENAS = {
  mi_escena_nueva: () => `<svg viewBox="0 0 320 240" ...>...</svg>`,
  // ...
};
```

---

## 🗺️ Mapa de navegación

El juego garantiza que todos los caminos hacia el final (capítulo 13) pasan por un mínimo de **6 capítulos**. Los únicos nodos con acceso directo al final son el **Pasabide Sekretua (P10)** y la **Urrearen Iturria (P12)**, que actúan como antesalas obligatorias. El camino más corto posible es:

```
P1 → P4 → P9 → P11 → P10 → P12 → P13   (6 saltos)
```

El grafo ofrece **53 caminos únicos** distintos hacia el final, con longitudes entre 6 y 12 saltos.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura, `<canvas>`, `<audio>`, `<video>` |
| CSS3 | Variables, animaciones, grid/flex, responsive |
| JavaScript ES6+ | Lógica del juego, DOM, localStorage, Canvas API |
| Google Fonts | Tipografía *Press Start 2P* |

---

## 📄 Licencia

Este proyecto ha sido desarrollado con fines educativos para la comunidad de Alonsotegi. Puedes usarlo, adaptarlo y distribuirlo libremente mencionando su origen.

---

*Eginda Alonsotegiko eskolako haurrentzat. 🦔*
