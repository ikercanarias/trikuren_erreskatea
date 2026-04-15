/**
 * ═══════════════════════════════════════════════════════
 * CODEX OSCURO — Motor del juego
 * Elige tu propia aventura — 13 páginas
 * ═══════════════════════════════════════════════════════
 */

'use strict';

/* ══════════════════════════════════════════
   1. DATOS DEL JUEGO — Las 13 páginas
   ══════════════════════════════════════════ */

/**
 * Cada página tiene:
 *  - id:        Número único de la página
 *  - capitulo:  Nombre del capítulo (opcional)
 *  - titulo:    Título de la escena (para caption)
 *  - texto:     Narración principal
 *  - lore:      Nota de ambientación en la página derecha
 *  - escena:    Clave para el SVG de la ilustración
 *  - opciones:  Array de { texto, destino } (máx 3)
 *  - esFinal:   true si es una página de desenlace
 */
const PAGINAS = [
  // ──────────────────────────────────────
  // PÁGINA 1 — Inicio
  // ──────────────────────────────────────
  {
    id: 1,
    capitulo: 'CAPÍTULO I',
    titulo: 'EL UMBRAL DE LA OSCURIDAD',
    texto: `Despiertas en el suelo de piedra de una cámara circular. El aire huele a incienso quemado y a algo más antiguo... a polvo de siglos.\n\nTrás de ti, la puerta de hierro está sellada con tres cerrojos que no recuerdas haber cerrado. Ante ti, el pasillo se bifurca en dos direcciones: a la izquierda, una débil luz ámbar parpadea como una vela agonizante. A la derecha, el viento silba desde las profundidades de la oscuridad.\n\nEn el suelo hay un viejo grimorio abierto en una página que dice: "EL QUE LLEGA HASTA AQUÍ DEBE ELEGIR SIN ARREPENTIRSE".`,
    lore: `UBICACIÓN: Las Catacumbas de Eldrath\nNIVEL DE PELIGRO: ████░░ ALTO\n\nSe dice que estas catacumbas fueron construidas hace 900 años por el archimago Mordecaius para custodiar el Codex Oscuro, un grimorio con el poder de reescribir la realidad.`,
    escena: 'inicio',
    opciones: [
      { texto: 'Seguir la luz ámbar hacia la izquierda', destino: 2 },
      { texto: 'Adentrarse en la oscuridad de la derecha', destino: 3 },
      { texto: 'Examinar el grimorio del suelo', destino: 4 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 2 — La luz ámbar
  // ──────────────────────────────────────
  {
    id: 2,
    capitulo: 'CAPÍTULO II',
    titulo: 'LA SALA DE LAS LLAMAS',
    texto: `El pasillo te lleva a una sala donde docenas de velas flotan en el aire sin ningún soporte visible. En el centro, una figura encapuchada susurra frente a un altar de obsidiana.\n\nAl sentir tu presencia, la figura se gira. Bajo la capucha hay una mujer anciana con ojos completamente blancos. Sus labios se curvan en una sonrisa.\n\n— "Sabía que vendrías. El Codex te ha llamado, igual que a los otros. Pero tú... tú llegas diferente. No hueles a miedo. ¿Qué buscas en las entrañas de Eldrath?" —\n\nTu corazón late con fuerza mientras decides cómo responder.`,
    lore: `PERSONAJE: La Oráculo Ciega\nESTATUS: Neutral / Peligrosa\n\nLos archivos del gremio de magos la describen como "Veradis, guardiana del umbral". Lleva 200 años en estas catacumbas. Nadie sabe si es prisionera o carcelera.`,
    escena: 'sala_velas',
    opciones: [
      { texto: '"Busco el Codex Oscuro para destruirlo"', destino: 5 },
      { texto: '"Busco poder. Vine por el grimorio"', destino: 6 },
      { texto: 'Atacarla sin responder', destino: 7 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 3 — La oscuridad
  // ──────────────────────────────────────
  {
    id: 3,
    capitulo: 'CAPÍTULO II',
    titulo: 'EL ABISMO QUE RESPIRA',
    texto: `Avanzas con la mano en la pared húmeda. El viento que proviene de la oscuridad no es aire normal: tiene temperatura, tiene peso. Es como si algo respirara al final del pasillo.\n\nDespués de veinte pasos, tu pie toca el vacío. Justo a tiempo logras agarrarte a un saledizo de piedra. Bajo ti, a metros de profundidad, hay una sala iluminada por una luz azul pálida.\n\nEn las paredes del abismo hay figuras grabadas: guerreros, magos, criaturas. Todos convergiendo hacia un mismo punto. Y en ese punto hay una escalera de hierro oxidado que desciende hacia la sala azul.`,
    lore: `ANOMALÍA DETECTADA: El Pozo de Ecos\n\nCualquier sonido pronunciado en este pasillo se duplica y regresa modificado. Los exploradores del siglo XII reportaron haber escuchado sus propias voces del futuro.`,
    escena: 'abismo',
    opciones: [
      { texto: 'Descender por la escalera de hierro', destino: 8 },
      { texto: 'Gritar para explorar el abismo con el eco', destino: 9 },
      { texto: 'Regresar y tomar el pasillo de la luz', destino: 2 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 4 — El grimorio
  // ──────────────────────────────────────
  {
    id: 4,
    capitulo: 'CAPÍTULO II',
    titulo: 'EL GRIMORIO DEL SUELO',
    texto: `Te arrodillas junto al libro. Las páginas son de cuero humano —lo sabes sin que nadie te lo diga— y la tinta parece moverse, como gusanos de luz bajo el papel.\n\nLas palabras cambian mientras lees. Primero dicen tu nombre. Luego dicen cosas que aún no han ocurrido. Lees tres líneas antes de poder apartar los ojos:\n\n"El portador enfrentará a la Oráculo Ciega"\n"El portador encontrará la Llave de Hueso"\n"El portador elegirá entre el mundo y sí mismo"\n\nEl libro se cierra de golpe. Y en la oscuridad, algo se mueve.`,
    lore: `OBJETO: El Pregrimorio\nCLASIFICACIÓN: Artefacto de primer orden\n\nNo confundir con el Codex Oscuro principal. Este tomo menor actúa como índice y advertencia. Quienes lo leen quedan marcados con el Sello del Destino.`,
    escena: 'grimorio',
    opciones: [
      { texto: 'Tomar el grimorio contigo', destino: 2 },
      { texto: 'Huir hacia el pasillo de la oscuridad', destino: 3 },
      { texto: 'Esperar y no moverte', destino: 10 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 5 — "Vine a destruirlo"
  // ──────────────────────────────────────
  {
    id: 5,
    capitulo: 'CAPÍTULO III',
    titulo: 'LA PRUEBA DE LA INTENCIÓN',
    texto: `La Oráculo Ciega te observa en silencio durante un tiempo que parece eterno. Las velas fluctúan. Una de ellas cae y arde en el suelo sin quemarlo.\n\n— "Destruirlo. Qué interesante mentira te has contado a ti mismo." —\n\nSe acerca. Sus dedos, fríos como mármol, tocan tu frente. Una visión te golpea: te ves a ti mismo abriendo el Codex, leyendo las páginas prohibidas, y sonriendo con una sonrisa que no reconoces como tuya.\n\n— "El Codex ya está dentro de ti. La pregunta no es si lo destruirás. La pregunta es cuándo dejarás de fingir que no lo quieres." —\n\nTe ofrece un pequeño frasco de cristal negro. "Bebe esto si deseas ver el camino verdadero."`,
    lore: `VISIÓN PROFÉTICA: Nivel Alto\n\nLa Oráculo Ciega tiene la capacidad de leer intenciones ocultas. Su diagnóstico rara vez falla, pero su interpretación puede estar sesgada por sus propias lealtades.`,
    escena: 'oraculo',
    opciones: [
      { texto: 'Beber el líquido negro', destino: 8 },
      { texto: 'Rechazar el frasco y exigir la salida', destino: 11 },
      { texto: 'Acusarla de servirle al Codex', destino: 6 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 6 — "Vine por el poder"
  // ──────────────────────────────────────
  {
    id: 6,
    capitulo: 'CAPÍTULO III',
    titulo: 'EL PACTO DE SANGRE',
    texto: `La anciana ríe. No es una risa humana: es el sonido del granito al quebrarse, de los huesos al crujir bajo la tierra.\n\n— "¡Honestidad! Hace décadas que nadie llega aquí con honestidad." —\n\nSe sienta en el altar y saca una pluma ennegrecida. "El Codex tiene un precio. Siempre lo ha tenido. Si quieres su poder, debes dejar algo aquí para siempre."\n\nSobre el altar aparecen tres objetos: un espejo que refleja tu rostro más joven, una caja de madera que late como un corazón, y un hilo de plata que parece ser el hilo de una vida.\n\n"Elige lo que darás y el camino al Codex se abrirá ante ti."`,
    lore: `SISTEMA: El Precio del Codex\n\nTodo aquel que ha accedido al Codex Oscuro ha pagado un precio diferente. El Archimago Mordecaius entregó su nombre. La Emperatriz Vael entregó su sombra. Nadie entregó lo mismo dos veces.`,
    escena: 'pacto',
    opciones: [
      { texto: 'Entregar el espejo (tu juventud)', destino: 8 },
      { texto: 'Entregar la caja (algo que late en ti)', destino: 12 },
      { texto: 'Negarte y robarle la pluma', destino: 7 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 7 — Ataque
  // ──────────────────────────────────────
  {
    id: 7,
    capitulo: 'CAPÍTULO III',
    titulo: 'LA FURIA DEL CANDIL',
    texto: `Tu instinto te traiciona. Das un paso hacia la figura y extiendes el brazo.\n\nAntes de que tus dedos la toquen, docenas de velas se lanzan hacia ti como proyectiles de fuego viviente. El calor es insoportable. Retrocedes, tu manga arde brevemente antes de que el fuego muera solo.\n\nLa anciana no se ha movido. Sus ojos blancos te atraviesan.\n\n— "Interesante. La violencia como primer idioma. Conozco ese dialecto." —\n\nLas velas forman un círculo a tu alrededor. No hay salida visible. Pero en el suelo, donde ha caído tu sangre de una quemadura, aparece un símbolo: una llave.\n\n"La Llave de Hueso te ha reconocido. Eso... no debería ser posible."`,
    lore: `EVENTO INESPERADO: Reconocimiento Arcano\n\nEl símbolo de la Llave de Hueso solo aparece ante quienes tienen sangre de la antigua estirpe de Eldrath. Se creía que dicha estirpe estaba extinta desde el Gran Silencio.`,
    escena: 'fuego',
    opciones: [
      { texto: 'Tomar el símbolo del suelo', destino: 8 },
      { texto: 'Preguntar a la anciana qué significa', destino: 5 },
      { texto: 'Intentar escapar del círculo de velas', destino: 11 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 8 — La sala azul / El Codex
  // ──────────────────────────────────────
  {
    id: 8,
    capitulo: 'CAPÍTULO IV',
    titulo: 'EL CORAZÓN DE ELDRATH',
    texto: `La sala azul es una cámara perfectamente esférica. No hay ángulos, no hay esquinas. La luz emana de las propias paredes, que están cubiertas de escritura en un idioma que tu mente comprende sin haberlo aprendido nunca.\n\nEn el centro de la esfera, suspendido en el aire, hay un libro. No grande ni pequeño: perfectamente ordinario, excepto por el hecho de que ninguna sombra lo toca.\n\nEL CODEX OSCURO.\n\nAl acercarte, las páginas se abren solas. Cada línea que lees se borra inmediatamente, como si el conocimiento solo pudiera existir durante el instante en que lo recibes. Tu mano tiembla sobre la cubierta.\n\nEsta es la elección que define todo.`,
    lore: `EL CODEX OSCURO\nESTADO: Activo / Expectante\n\nEl Codex no es un libro. Es una entidad. Sus páginas contienen la gramática con la que fue escrito el universo. Cada vez que alguien lo lee, el universo se convierte en un borrador.`,
    escena: 'codex',
    opciones: [
      { texto: 'Leer el Codex y absorber su poder', destino: 13 },
      { texto: 'Destruirlo arrojándolo contra el suelo', destino: 12 },
      { texto: 'Cerrar el libro y dejarlo donde está', destino: 11 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 9 — El eco del abismo
  // ──────────────────────────────────────
  {
    id: 9,
    capitulo: 'CAPÍTULO III',
    titulo: 'EL ECO HABLA PRIMERO',
    texto: `Gritas en el abismo. Tu voz rebota contra las paredes y regresa... pero con otro tono. Regresa diciendo cosas que no dijiste.\n\nEl eco dice: "Baja. El libro te espera. El libro siempre te ha esperado."\n\nLuego el eco dice algo que te hiela la sangre: dice tu nombre completo, incluyendo el apellido que nadie en el mundo debería conocer aquí.\n\nEntonces el eco calla. Y en su lugar, desde las profundidades de la sala azul, surge un canto. No es música: es una ecuación. Una secuencia perfecta de tonos que describen, sin palabras, la arquitectura de una puerta que no debería existir.\n\nEn el fondo del abismo, una luz azul parpadea tres veces.`,
    lore: `FENÓMENO: Ecos Predictivos\n\nLos registros del Archivo de Valdris documentan 7 casos de exploradores que escucharon sus propios ecos futuros. De los 7, solo dos regresaron. Los otros cinco, se dice, decidieron quedarse.`,
    escena: 'abismo',
    opciones: [
      { texto: 'Descender hacia la luz azul parpadeante', destino: 8 },
      { texto: 'Responder al canto con tu propia voz', destino: 10 },
      { texto: 'Huir hacia la sala de las velas', destino: 2 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 10 — Espera / El ser en la oscuridad
  // ──────────────────────────────────────
  {
    id: 10,
    capitulo: 'CAPÍTULO III',
    titulo: 'LO QUE HABITA EN EL UMBRAL',
    texto: `Decides esperar. La quietud se vuelve densa, casi sólida.\n\nDespués de lo que podrían ser horas o segundos, algo emerge de la oscuridad. No es humano, pero tampoco es una criatura. Es una presencia que tiene la forma de aquello que más temes.\n\nNo te ataca. Se sienta frente a ti.\n\n— "Eres el primero que no huye ni ataca. Los pacientes tienen acceso a puertas que los impacientes nunca verán." —\n\nLa presencia pone algo en tu mano: una llave de hueso pulido, fría como el invierno eterno, con un símbolo grabado que reconoces del grimorio del suelo.\n\n"La sala esférica está al final del pasillo izquierdo, tercer panel de piedra verde. Pero recuerda: el Codex te dará lo que mereces, no lo que deseas."`,
    lore: `ENTIDAD: El Guardián del Umbral\nNATURALEZA: Desconocida\n\nNo hay registros de confrontaciones con esta entidad. Solo hay registros de sus regalos, encontrados en manos de exploradores que nunca regresaron a contarlo.`,
    escena: 'sombra',
    opciones: [
      { texto: 'Usar la llave para ir directo al Codex', destino: 8 },
      { texto: 'Preguntarle qué es exactamente', destino: 5 },
      { texto: 'Rechazar la llave y buscar otra salida', destino: 11 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 11 — FINAL: La Huida (final neutro)
  // ──────────────────────────────────────
  {
    id: 11,
    capitulo: 'EPÍLOGO',
    titulo: 'EL FINAL DE LA PRUDENCIA',
    texto: `Algo en ti dice que no. Que este lugar, este libro, este poder, no son para ti ni para nadie. Que hay cosas que deben permanecer enterradas.\n\nCaminas de espaldas. La Oráculo Ciega no te detiene. El abismo no te llama. Las velas parpadean una última vez y se apagan todas a la vez.\n\nEn la oscuridad total, encuentras la puerta de hierro. Los tres cerrojos se abren desde dentro, como si Eldrath mismo decidiera dejarte ir.\n\nSales a la superficie al amanecer. El sol te quema los ojos. El aire real, el aire del mundo, sabe a algo que no habías apreciado hasta ahora.\n\nNunca contarás lo que viste. Pero tampoco lo olvidarás jamás.`,
    lore: `RESULTADO: Salida Voluntaria\nCONSECUENCIAS: Ninguna visible\n\nEl gremio de magos registra que aproximadamente el 12% de los exploradores que llegan a Eldrath deciden salir sin tocar el Codex. Viven vidas largas y tranquilas. Curiosamente, todos mueren sonriendo.`,
    escena: 'salida',
    esFinal: true,
    opciones: [],
  },

  // ──────────────────────────────────────
  // PÁGINA 12 — FINAL: La Destrucción (final heroico)
  // ──────────────────────────────────────
  {
    id: 12,
    capitulo: 'EPÍLOGO',
    titulo: 'EL FINAL DEL SACRIFICIO',
    texto: `Arrancas el Codex del aire. Vibra en tus manos como un ser vivo aterrorizado.\n\nLo arrojas contra el suelo de la sala esférica. Nada. Lo golpeas contra la pared. Nada. Entonces recuerdas: en el grimorio del suelo leíste que el Codex solo puede ser destruido por algo que el propio portador ame.\n\nEntiendes lo que debes hacer.\n\nUsas el recuerdo más querido que tienes —un momento de tu vida que nunca quisiste perder— y lo concentras en tus manos. El calor que emerge no es mágico: es simplemente humano.\n\nEl Codex Oscuro, por primera vez en 900 años, arde.\n\nLa sala esférica colapsa a tu alrededor. Pero tú ya estás afuera, corriendo, con las manos vacías y el corazón lleno de algo que no tiene nombre.`,
    lore: `RESULTADO: Destrucción del Artefacto\nCONSECUENCIAS: El Mundo Reescrito\n\nLos registros del Archivo de Valdris quedaron en blanco esa noche. Al día siguiente, en el mundo exterior, nadie recordaba por qué había guerras. Muchos lo llamaron milagro. Solo tú sabes el precio.`,
    escena: 'destruccion',
    esFinal: true,
    opciones: [],
  },

  // ──────────────────────────────────────
  // PÁGINA 13 — FINAL: El Poder (final oscuro)
  // ──────────────────────────────────────
  {
    id: 13,
    capitulo: 'EPÍLOGO',
    titulo: 'EL FINAL DEL CODEX',
    texto: `Lees.\n\nNo puedes parar. Cada página devora a la siguiente. El idioma que no deberías entender lo entiendes todo: la sintaxis de la gravedad, la conjugación de la luz, la puntuación del tiempo.\n\nCuando terminas la última página, alzas la vista.\n\nLa sala esférica ha desaparecido. Las catacumbas han desaparecido. La Oráculo Ciega, el abismo, el eco, todo ha desaparecido. Solo queda el mundo, extendido ante ti como una página en blanco.\n\nEl Codex Oscuro ya no es un libro. Es tu memoria.\n\nPuedes reescribirlo todo.\n\nY eso, comprendes por fin, era exactamente lo que el Codex necesitaba que hicieras.`,
    lore: `RESULTADO: Fusión con el Artefacto\nCONSECUENCIAS: Indefinidas\n\nEl Archivo de Valdris registra una única nota sobre este desenlace, escrita en un idioma que nadie ha podido descifrar. La última línea, sin embargo, está en texto común: "Y el mundo nunca supo que era ficción."`,
    escena: 'poder',
    esFinal: true,
    opciones: [],
  },
];

/* ══════════════════════════════════════════
   2. ILUSTRACIONES SVG PIXEL ART
   ══════════════════════════════════════════ */

/**
 * Cada función devuelve una cadena SVG que representa
 * una escena pixel art en estilo retro monocromo.
 */
const ESCENAS = {

  inicio: () => `<img src="01_pagina.png" alt="MDN" />`,

  sala_velas: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#050f09"/>
    <!-- Suelo -->
    ${pixelGrid(0, 190, 320, 50, '#0d1f14', '#0a1810', 20, 25)}
    <!-- Altar de obsidiana -->
    <rect x="100" y="120" width="120" height="70" fill="#080808" stroke="#00aa55" stroke-width="2"/>
    <rect x="90" y="110" width="140" height="16" fill="#0a0a0a" stroke="#00ff88" stroke-width="1"/>
    <!-- Símbolo en altar -->
    <text x="160" y="162" text-anchor="middle" font-size="18" fill="#00ff88" opacity="0.4" font-family="monospace">⬡</text>
    <!-- Figura encapuchada -->
    <rect x="144" y="72" width="32" height="50" fill="#0a1a0c"/>
    <ellipse cx="160" cy="68" rx="14" ry="14" fill="#0f2014"/>
    <!-- Ojos blancos -->
    <ellipse cx="155" cy="66" rx="3" ry="3" fill="#e0f0e8"/>
    <ellipse cx="165" cy="66" rx="3" ry="3" fill="#e0f0e8"/>
    <!-- Velas flotantes -->
    ${velas()}
    <!-- Luz ambiental -->
    <circle cx="160" cy="130" r="80" fill="none" stroke="#ffb800" stroke-width="0" opacity="0"/>
    <rect x="0" y="0" width="320" height="240" fill="url(#amberGlow)" opacity="0.15"/>
    <defs>
      <radialGradient id="amberGlow" cx="50%" cy="60%" r="60%">
        <stop offset="0%" stop-color="#ffb800"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#ffb800" font-family="monospace">[ SALA DE LAS LLAMAS ]</text>
  </svg>`,

  abismo: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#020809"/>
    <!-- Bordes del abismo -->
    <rect x="0" y="0" width="80" height="130" fill="#091510"/>
    <rect x="240" y="0" width="80" height="130" fill="#091510"/>
    <!-- El vacío central -->
    <rect x="80" y="0" width="160" height="240" fill="#000305"/>
    <!-- Luz azul al fondo -->
    <ellipse cx="160" cy="220" rx="60" ry="20" fill="#00e5ff" opacity="0.15"/>
    <ellipse cx="160" cy="220" rx="30" ry="10" fill="#00e5ff" opacity="0.25"/>
    <ellipse cx="160" cy="220" rx="10" ry="5" fill="#00e5ff" opacity="0.5"/>
    <!-- Figuras grabadas en paredes del abismo -->
    <text x="85" y="40" font-size="8" fill="#00aa55" opacity="0.5" font-family="monospace">⚔ ✦ ☽</text>
    <text x="85" y="60" font-size="8" fill="#00aa55" opacity="0.4" font-family="monospace">▼ ▼ ▼</text>
    <text x="85" y="80" font-size="8" fill="#00aa55" opacity="0.3" font-family="monospace">⬡ ★ ⬡</text>
    <text x="240" y="40" font-size="8" fill="#00aa55" opacity="0.5" font-family="monospace">☽ ✦ ⚔</text>
    <!-- Escalera de hierro -->
    <rect x="152" y="40" width="16" height="180" fill="none" stroke="#445" stroke-width="2"/>
    ${escalones(152, 50, 16, 15, 12)}
    <!-- Personaje en el borde -->
    <rect x="56" y="98" width="16" height="28" fill="#1a3020"/>
    <ellipse cx="64" cy="95" rx="8" ry="8" fill="#1a3020"/>
    <text x="160" y="20" text-anchor="middle" font-size="7" fill="#00e5ff" font-family="monospace">[ EL ABISMO QUE RESPIRA ]</text>
  </svg>`,

  grimorio: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#050f09"/>
    <!-- Suelo -->
    ${pixelGrid(0, 180, 320, 60, '#0d2010', '#0a1a0c', 20, 20)}
    <!-- Libro grande en el suelo -->
    <rect x="80" y="110" width="160" height="120" fill="#1a0808" stroke="#00ff88" stroke-width="2"/>
    <!-- Páginas -->
    <rect x="88" y="118" width="68" height="100" fill="#0f0505"/>
    <rect x="164" y="118" width="68" height="100" fill="#0f0505"/>
    <rect x="156" y="110" width="8" height="120" fill="#060101" stroke="#00ff88" stroke-width="1"/>
    <!-- Texto que se mueve -->
    <text x="122" y="142" text-anchor="middle" font-size="6" fill="#00ff88" opacity="0.8" font-family="monospace">TU NOMBRE</text>
    <text x="122" y="158" text-anchor="middle" font-size="5" fill="#00aa55" opacity="0.6" font-family="monospace">será recordado</text>
    <text x="122" y="172" text-anchor="middle" font-size="5" fill="#00aa55" opacity="0.4" font-family="monospace">o borrado</text>
    <!-- Símbolo en página derecha -->
    <text x="198" y="165" text-anchor="middle" font-size="32" fill="#00ff88" opacity="0.3" font-family="monospace">✦</text>
    <!-- Brillo del libro -->
    <ellipse cx="160" cy="170" rx="90" ry="30" fill="url(#bookGlow)" opacity="0.3"/>
    <defs>
      <radialGradient id="bookGlow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#00ff88"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <!-- Sombra moviéndose -->
    <ellipse cx="260" cy="120" rx="20" ry="40" fill="#000" opacity="0.6"/>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#00ff88" font-family="monospace">[ EL PREGRIMORIO ]</text>
  </svg>`,

  oraculo: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#060a05"/>
    <!-- Fondo oscuro -->
    ${pixelGrid(0, 180, 320, 60, '#0d1a0c', '#0a1509', 20, 20)}
    <!-- La Oráculo, más cercana, de frente -->
    <rect x="120" y="60" width="80" height="130" fill="#0a1a0c"/>
    <ellipse cx="160" cy="55" rx="26" ry="26" fill="#0d2016"/>
    <!-- Ojos blancos brillantes -->
    <ellipse cx="150" cy="52" rx="6" ry="5" fill="#c8ffe0"/>
    <ellipse cx="170" cy="52" rx="6" ry="5" fill="#c8ffe0"/>
    <ellipse cx="150" cy="52" rx="2" ry="2" fill="#fff"/>
    <ellipse cx="170" cy="52" rx="2" ry="2" fill="#fff"/>
    <!-- Dedos tocando frente -->
    <rect x="138" y="35" width="4" height="22" fill="#0d1a0c"/>
    <rect x="145" y="33" width="4" height="22" fill="#0d1a0c"/>
    <rect x="152" y="31" width="4" height="22" fill="#0d1a0c"/>
    <!-- Frasco -->
    <rect x="186" y="140" width="20" height="34" rx="3" fill="#000" stroke="#00e5ff" stroke-width="2"/>
    <rect x="192" y="136" width="8" height="6" fill="#000" stroke="#00e5ff" stroke-width="1"/>
    <rect x="188" y="155" width="16" height="14" fill="#00e5ff" opacity="0.3"/>
    <!-- Visión superpuesta -->
    <rect x="0" y="0" width="320" height="240" fill="#00ff88" opacity="0.03"/>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#00ff88" font-family="monospace">[ LA ORÁCULO CIEGA ]</text>
  </svg>`,

  pacto: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#050f09"/>
    <!-- Altar -->
    <rect x="60" y="100" width="200" height="80" fill="#080808" stroke="#00aa55" stroke-width="2"/>
    <rect x="50" y="88" width="220" height="18" fill="#0a0a0a" stroke="#00ff88" stroke-width="1"/>
    <!-- Espejo -->
    <rect x="76" y="50" width="44" height="56" fill="#001a10" stroke="#00ff88" stroke-width="2"/>
    <rect x="80" y="54" width="36" height="48" fill="#002015"/>
    <ellipse cx="98" cy="78" rx="10" ry="14" fill="#00ff88" opacity="0.2"/>
    <!-- Caja latente -->
    <rect x="138" y="50" width="44" height="44" fill="#1a0808" stroke="#ff4444" stroke-width="2"/>
    <text x="160" y="80" text-anchor="middle" font-size="12" fill="#ff4444" font-family="monospace">♥</text>
    <!-- Hilo de plata -->
    <path d="M218 50 Q230 72 218 94" stroke="#aaa" stroke-width="2" fill="none"/>
    <circle cx="218" cy="50" r="4" fill="#ccc"/>
    <circle cx="218" cy="94" r="4" fill="#ccc"/>
    <!-- Pluma -->
    <rect x="152" y="110" width="2" height="50" fill="#0a0a0a"/>
    <path d="M154 110 Q170 130 154 160" stroke="#00aa55" stroke-width="1" fill="#001a10"/>
    <!-- Anciana en el altar -->
    <ellipse cx="160" cy="95" rx="12" ry="10" fill="#0d2016"/>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#ffb800" font-family="monospace">[ EL PACTO DE SANGRE ]</text>
  </svg>`,

  fuego: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#080200"/>
    <!-- Círculo de velas -->
    ${circuloVelas(160, 140, 90)}
    <!-- Personaje en el centro -->
    <rect x="144" y="110" width="32" height="52" fill="#0a1a10"/>
    <ellipse cx="160" cy="106" rx="14" ry="14" fill="#0d2016"/>
    <!-- Manga ardiendo -->
    <path d="M144 130 Q130 140 136 158" stroke="#ff4444" stroke-width="3" fill="none"/>
    <path d="M144 130 Q128 136 130 150" stroke="#ffb800" stroke-width="2" fill="none"/>
    <!-- Símbolo de la Llave en el suelo -->
    <text x="160" y="195" text-anchor="middle" font-size="24" fill="#00ff88" opacity="0.7" font-family="monospace">🗝</text>
    <ellipse cx="160" cy="192" rx="24" ry="8" fill="#00ff88" opacity="0.1"/>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#ff4444" font-family="monospace">[ LA FURIA DEL CANDIL ]</text>
  </svg>`,

  codex: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <!-- Sala esférica -->
    <rect width="320" height="240" fill="#030810"/>
    <ellipse cx="160" cy="120" rx="150" ry="110" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.3"/>
    <ellipse cx="160" cy="120" rx="120" ry="90" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.2"/>
    <!-- Escritura en paredes -->
    <text x="20" y="60" font-size="5" fill="#00e5ff" opacity="0.4" font-family="monospace">∑ ∆ Ω ∞ ≈ ∫ π</text>
    <text x="240" y="60" font-size="5" fill="#00e5ff" opacity="0.4" font-family="monospace">∇ ∂ √ ≤ ≥ ± ×</text>
    <text x="20" y="180" font-size="5" fill="#00e5ff" opacity="0.4" font-family="monospace">λ μ ξ ρ σ τ υ</text>
    <text x="240" y="180" font-size="5" fill="#00e5ff" opacity="0.4" font-family="monospace">φ χ ψ α β γ δ</text>
    <!-- El Codex flotando -->
    <rect x="116" y="80" width="88" height="112" fill="#0a0010" stroke="#00e5ff" stroke-width="2"/>
    <rect x="116" y="80" width="88" height="112" fill="none" stroke="#00ff88" stroke-width="1" opacity="0.5"/>
    <!-- Páginas abiertas -->
    <rect x="120" y="84" width="36" height="100" fill="#050008"/>
    <rect x="164" y="84" width="36" height="100" fill="#050008"/>
    <rect x="156" y="80" width="8" height="112" fill="#08000f" stroke="#00e5ff" stroke-width="1"/>
    <!-- Texto del Codex (ilegible) -->
    <text x="138" y="104" text-anchor="middle" font-size="4" fill="#00ff88" opacity="0.8" font-family="monospace">░░░░░░░</text>
    <text x="138" y="116" text-anchor="middle" font-size="4" fill="#00ff88" opacity="0.7" font-family="monospace">░░░░░░</text>
    <text x="138" y="128" text-anchor="middle" font-size="4" fill="#00e5ff" opacity="0.9" font-family="monospace">▓▓▓▓▓▓▓</text>
    <text x="138" y="140" text-anchor="middle" font-size="4" fill="#00ff88" opacity="0.5" font-family="monospace">░░░░░░░</text>
    <!-- Brillo / aura del libro -->
    <ellipse cx="160" cy="136" rx="70" ry="80" fill="url(#codexAura)" opacity="0.4"/>
    <defs>
      <radialGradient id="codexAura" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#00e5ff"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <!-- Partículas -->
    <circle cx="100" cy="70" r="2" fill="#00e5ff" opacity="0.6"/>
    <circle cx="220" cy="90" r="2" fill="#00ff88" opacity="0.6"/>
    <circle cx="80" cy="160" r="2" fill="#00e5ff" opacity="0.4"/>
    <circle cx="240" cy="155" r="2" fill="#00ff88" opacity="0.4"/>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#00e5ff" font-family="monospace">[ EL CODEX OSCURO ]</text>
  </svg>`,

  sombra: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#010508"/>
    <!-- La sombra como forma del miedo -->
    <ellipse cx="160" cy="120" rx="70" ry="100" fill="#000" opacity="0.9"/>
    <!-- Bordes difusos -->
    <ellipse cx="160" cy="120" rx="80" ry="110" fill="none" stroke="#00aa55" stroke-width="1" opacity="0.2"/>
    <!-- Ojos de la entidad -->
    <ellipse cx="140" cy="95" rx="12" ry="8" fill="#00ff88" opacity="0.8"/>
    <ellipse cx="180" cy="95" rx="12" ry="8" fill="#00ff88" opacity="0.8"/>
    <ellipse cx="140" cy="95" rx="5" ry="5" fill="#000"/>
    <ellipse cx="180" cy="95" rx="5" ry="5" fill="#000"/>
    <!-- La llave -->
    <rect x="136" y="154" width="50" height="12" rx="2" fill="#c8e0d0" stroke="#557766" stroke-width="1"/>
    <circle cx="144" cy="160" r="8" fill="none" stroke="#c8e0d0" stroke-width="2"/>
    <rect x="170" y="158" width="6" height="5" fill="#c8e0d0"/>
    <rect x="178" y="158" width="4" height="5" fill="#c8e0d0"/>
    <!-- Suelo sutil -->
    <rect x="0" y="200" width="320" height="40" fill="#030a06"/>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#00aa55" font-family="monospace">[ GUARDIÁN DEL UMBRAL ]</text>
  </svg>`,

  salida: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#020c05"/>
    <!-- Cielo amanecer -->
    <rect x="0" y="0" width="320" height="120" fill="url(#dawnSky)"/>
    <defs>
      <linearGradient id="dawnSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0a0505"/>
        <stop offset="60%" stop-color="#1a0808"/>
        <stop offset="100%" stop-color="#3a1a08"/>
      </linearGradient>
    </defs>
    <!-- Sol naciente -->
    <semicircle/>
    <ellipse cx="160" cy="120" rx="40" ry="20" fill="#ffb800" opacity="0.3"/>
    <ellipse cx="160" cy="120" rx="20" ry="10" fill="#ffb800" opacity="0.5"/>
    <ellipse cx="160" cy="120" rx="6" ry="3" fill="#fff" opacity="0.7"/>
    <!-- Tierra / suelo -->
    <rect x="0" y="120" width="320" height="120" fill="#0a1a0c"/>
    ${pixelGrid(0, 120, 320, 120, '#0d2010', '#0a1a0c', 20, 20)}
    <!-- Puerta de las catacumbas abierta -->
    <rect x="120" y="70" width="80" height="110" fill="#050f09" stroke="#007733" stroke-width="2"/>
    <rect x="120" y="70" width="38" height="110" fill="#030a06" stroke="#007733" stroke-width="1"/>
    <rect x="162" y="70" width="38" height="110" fill="#030a06" stroke="#007733" stroke-width="1"/>
    <!-- Silueta saliendo -->
    <rect x="148" y="115" width="24" height="40" fill="#1a3020"/>
    <ellipse cx="160" cy="112" rx="10" ry="10" fill="#1a3020"/>
    <!-- Rayos de luz -->
    <line x1="160" y1="120" x2="60" y2="20" stroke="#ffb800" stroke-width="1" opacity="0.2"/>
    <line x1="160" y1="120" x2="260" y2="20" stroke="#ffb800" stroke-width="1" opacity="0.2"/>
    <line x1="160" y1="120" x2="160" y2="0" stroke="#ffb800" stroke-width="1" opacity="0.3"/>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#ffb800" font-family="monospace">[ EL AMANECER ]</text>
  </svg>`,

  destruccion: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#0a0200"/>
    <!-- Explosión central -->
    <ellipse cx="160" cy="120" rx="100" ry="80" fill="url(#explosion)" opacity="0.8"/>
    <ellipse cx="160" cy="120" rx="60" ry="48" fill="url(#explosion2)" opacity="0.9"/>
    <defs>
      <radialGradient id="explosion" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#fff"/>
        <stop offset="30%" stop-color="#ffb800"/>
        <stop offset="70%" stop-color="#ff4444"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
      <radialGradient id="explosion2" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="#fff" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#ffb800" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="transparent"/>
      </radialGradient>
    </defs>
    <!-- Fragmentos del libro -->
    <rect x="140" y="80" width="20" height="28" fill="#0a0010" stroke="#ffb800" stroke-width="1" transform="rotate(15 150 94)"/>
    <rect x="170" y="100" width="16" height="20" fill="#0a0010" stroke="#ff4444" stroke-width="1" transform="rotate(-20 178 110)"/>
    <rect x="110" y="110" width="18" height="24" fill="#0a0010" stroke="#ffb800" stroke-width="1" transform="rotate(30 119 122)"/>
    <!-- Manos del personaje -->
    <rect x="148" y="130" width="10" height="20" fill="#1a3020" transform="rotate(-15 153 140)"/>
    <rect x="162" y="130" width="10" height="20" fill="#1a3020" transform="rotate(15 167 140)"/>
    <!-- Partículas de texto -->
    <text x="90" y="60" font-size="6" fill="#ffb800" opacity="0.6" font-family="monospace">∞</text>
    <text x="210" y="70" font-size="6" fill="#ff4444" opacity="0.6" font-family="monospace">Ω</text>
    <text x="80" y="170" font-size="6" fill="#ffb800" opacity="0.5" font-family="monospace">∆</text>
    <text x="230" y="160" font-size="6" fill="#ff4444" opacity="0.5" font-family="monospace">∑</text>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#ff4444" font-family="monospace">[ LA DESTRUCCIÓN ]</text>
  </svg>`,

  poder: () => `<svg class="pixel-scene" viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg">
    <rect width="320" height="240" fill="#000"/>
    <!-- Figura en el vacío -->
    <rect x="144" y="90" width="32" height="60" fill="#0a1a0c"/>
    <ellipse cx="160" cy="86" rx="16" ry="16" fill="#0d2016"/>
    <!-- Ojos que brillan como el Codex -->
    <ellipse cx="154" cy="84" rx="5" ry="4" fill="#00e5ff"/>
    <ellipse cx="166" cy="84" rx="5" ry="4" fill="#00e5ff"/>
    <!-- El mundo como página en blanco que se extiende -->
    <rect x="0" y="160" width="320" height="80" fill="#fff" opacity="0.03"/>
    <!-- Escritura apareciendo en el espacio -->
    <text x="30" y="50" font-size="5" fill="#00e5ff" opacity="0.3" font-family="monospace">reescribir montañas</text>
    <text x="180" y="70" font-size="5" fill="#00ff88" opacity="0.3" font-family="monospace">borrar mares</text>
    <text x="20" y="145" font-size="5" fill="#00e5ff" opacity="0.25" font-family="monospace">crear mundos</text>
    <text x="200" y="155" font-size="5" fill="#00ff88" opacity="0.25" font-family="monospace">ser el origen</text>
    <!-- Aura alrededor del personaje -->
    <ellipse cx="160" cy="120" rx="90" ry="70" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.3"/>
    <ellipse cx="160" cy="120" rx="110" ry="90" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.15"/>
    <ellipse cx="160" cy="120" rx="130" ry="110" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.08"/>
    <!-- Fondo cósmico -->
    <circle cx="40" cy="30" r="1" fill="#fff" opacity="0.5"/>
    <circle cx="280" cy="50" r="1" fill="#fff" opacity="0.5"/>
    <circle cx="60" cy="190" r="1" fill="#fff" opacity="0.5"/>
    <circle cx="290" cy="200" r="1" fill="#fff" opacity="0.5"/>
    <circle cx="180" cy="20" r="1" fill="#fff" opacity="0.5"/>
    <text x="160" y="22" text-anchor="middle" font-size="7" fill="#00e5ff" font-family="monospace">[ EL PODER ABSOLUTO ]</text>
  </svg>`,
};

/* ── Funciones auxiliares para SVG ── */

/** Genera una cuadrícula pixelada para el suelo */
function pixelGrid(x, y, w, h, c1, c2, cols, rows) {
  const cellW = w / cols;
  const cellH = h / rows;
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c1}"/>`;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if ((row + col) % 2 === 0) {
        out += `<rect x="${x + col * cellW}" y="${y + row * cellH}" width="${cellW}" height="${cellH}" fill="${c2}" opacity="0.6"/>`;
      }
    }
  }
  return out;
}

/** Genera velas flotantes aleatorias */
function velas() {
  const positions = [[60,50],[90,30],[130,45],[200,35],[240,55],[270,40],[80,80],[260,75],[150,25]];
  return positions.map(([cx, cy]) => `
    <rect x="${cx-2}" y="${cy}" width="4" height="16" fill="#c8a050"/>
    <ellipse cx="${cx}" cy="${cy}" rx="3" ry="5" fill="#ffb800" opacity="0.8"/>
    <ellipse cx="${cx}" cy="${cy-3}" rx="1.5" ry="3" fill="#fff" opacity="0.5"/>
  `).join('');
}

/** Genera un círculo de velas */
function circuloVelas(cx, cy, r) {
  let out = '';
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    out += `<rect x="${x - 2}" y="${y - 16}" width="4" height="14" fill="#c8a050"/>`;
    out += `<ellipse cx="${x}" cy="${y - 16}" rx="4" ry="6" fill="#ffb800" opacity="0.7"/>`;
    out += `<ellipse cx="${x}" cy="${y - 20}" rx="2" ry="3" fill="#fff" opacity="0.4"/>`;
  }
  return out;
}

/** Genera escalones en una escalera */
function escalones(x, startY, width, spacing, count) {
  let out = '';
  for (let i = 0; i < count; i++) {
    out += `<rect x="${x}" y="${startY + i * spacing}" width="${width}" height="3" fill="#334" opacity="0.8"/>`;
  }
  return out;
}


/* ══════════════════════════════════════════
   3. ESTADO DEL JUEGO
   ══════════════════════════════════════════ */

const Estado = {
  paginaActual: 1,
  historial: [],
  /** Guarda en localStorage */
  guardar() {
    localStorage.setItem('codex_oscuro_save', JSON.stringify({
      paginaActual: this.paginaActual,
      historial: this.historial,
    }));
  },
  /** Carga desde localStorage */
  cargar() {
    const raw = localStorage.getItem('codex_oscuro_save');
    if (!raw) return false;
    try {
      const data = JSON.parse(raw);
      this.paginaActual = data.paginaActual || 1;
      this.historial    = data.historial    || [];
      return true;
    } catch { return false; }
  },
  /** Borra el guardado */
  borrar() {
    localStorage.removeItem('codex_oscuro_save');
    this.paginaActual = 1;
    this.historial    = [];
  },
};


/* ══════════════════════════════════════════
   4. REFERENCIAS AL DOM
   ══════════════════════════════════════════ */

const DOM = {
  screenIntro:      document.getElementById('screen-intro'),
  screenTransition: document.getElementById('screen-transition'),
  screenBook:       document.getElementById('screen-book'),
  screenEnd:        document.getElementById('screen-end'),

  btnStart:         document.getElementById('btn-start'),
  btnContinue:      document.getElementById('btn-continue'),
  btnNewGame:       document.getElementById('btn-new-game'),
  btnMenu:          document.getElementById('btn-menu'),
  btnSave:          document.getElementById('btn-save'),
  btnRestart:       document.getElementById('btn-restart'),
  btnPlayAgain:     document.getElementById('btn-play-again'),
  savedNotice:      document.getElementById('saved-game-notice'),

  pageIndicator:    document.getElementById('page-indicator'),
  chapterLabel:     document.getElementById('chapter-label'),
  storyText:        document.getElementById('story-text'),
  choicesList:      document.getElementById('choices-list'),
  sceneImage:       document.getElementById('scene-image'),
  imageCaption:     document.getElementById('image-caption'),
  loreText:         document.getElementById('lore-text'),
  pageNumLeft:      document.getElementById('page-num-left'),
  pageNumRight:     document.getElementById('page-num-right'),
  saveToast:        document.getElementById('save-toast'),
  endTitle:         document.getElementById('end-title'),
  endText:          document.getElementById('end-text'),

  bookContainer:    document.getElementById('book-container'),
  pageLeft:         document.getElementById('page-left'),
  pageRight:        document.getElementById('page-right'),
};


/* ══════════════════════════════════════════
   5. MOTOR DE PANTALLAS
   ══════════════════════════════════════════ */

function mostrarPantalla(screen) {
  // Ocultar todas
  [DOM.screenIntro, DOM.screenTransition, DOM.screenBook, DOM.screenEnd]
    .forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });

  screen.style.display = 'flex';
  // Forzar reflow para que la transición funcione
  screen.offsetHeight; // eslint-disable-line
  screen.classList.add('active');
}


/* ══════════════════════════════════════════
   6. ANIMACIÓN DE TEXTO (máquina de escribir)
   ══════════════════════════════════════════ */

let typewriterTimeout = null;

function typewriter(element, texto, velocidad = 18) {
  return new Promise((resolve) => {
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    element.innerHTML = '';
    let i = 0;

    // Dividir en párrafos para respetar \n
    const parrafos = texto.split('\n');
    let parrafoActual = 0;
    let charActual = 0;

    function escribir() {
      if (parrafoActual >= parrafos.length) {
        resolve();
        return;
      }

      const parrafo = parrafos[parrafoActual];

      if (charActual < parrafo.length) {
        // Asegurar que el párrafo existe como nodo
        let pEl = element.querySelector(`p[data-p="${parrafoActual}"]`);
        if (!pEl) {
          pEl = document.createElement('p');
          pEl.dataset.p = parrafoActual;
          pEl.style.marginBottom = '0.8em';
          element.appendChild(pEl);
        }
        pEl.textContent += parrafo[charActual];
        charActual++;
        typewriterTimeout = setTimeout(escribir, velocidad);
      } else {
        // Fin del párrafo, pasar al siguiente
        parrafoActual++;
        charActual = 0;
        typewriterTimeout = setTimeout(escribir, velocidad * 4);
      }
    }

    escribir();
  });
}


/* ══════════════════════════════════════════
   7. RENDERIZAR PÁGINA
   ══════════════════════════════════════════ */

function renderizarPagina(idPagina, animacion = true) {
  const pagina = PAGINAS.find(p => p.id === idPagina);
  if (!pagina) {
    console.error(`Página ${idPagina} no encontrada.`);
    return;
  }

  // Actualizar estado
  Estado.paginaActual = idPagina;
  if (!Estado.historial.includes(idPagina)) {
    Estado.historial.push(idPagina);
  }

  // Total de páginas y página actual (según el recuento 1-13)
  const numPagina = PAGINAS.findIndex(p => p.id === idPagina) + 1;
  const totalPaginas = PAGINAS.length;

  // ── Animación de pasar página ──
  if (animacion) {
    DOM.pageLeft.classList.remove('page-fadein');
    DOM.pageRight.classList.remove('page-fadein');
    DOM.pageLeft.style.opacity  = '0';
    DOM.pageRight.style.opacity = '0';
  }

  // ── HUD ──
  DOM.pageIndicator.textContent = `PÁG. ${numPagina} / ${totalPaginas}`;
  DOM.chapterLabel.textContent  = pagina.capitulo || 'CAPÍTULO';

  // ── Números de página ──
  DOM.pageNumLeft.textContent  = `◂ ${numPagina * 2 - 1}`;
  DOM.pageNumRight.textContent = `${numPagina * 2} ▸`;

  // ── Imagen y caption ──
  const svgFn = ESCENAS[pagina.escena] || ESCENAS['inicio'];
  DOM.sceneImage.innerHTML = svgFn();
  DOM.imageCaption.textContent = `[ ${pagina.titulo} ]`;

  // ── Lore ──
  DOM.loreText.textContent = pagina.lore || '';

  // ── Opciones (limpiar primero) ──
  DOM.choicesList.innerHTML = '';

  // ── Animar entrada de páginas ──
  setTimeout(() => {
    DOM.pageLeft.style.opacity  = '1';
    DOM.pageRight.style.opacity = '1';
    DOM.pageLeft.classList.add('page-fadein');
    DOM.pageRight.classList.add('page-fadein');

    // Efecto máquina de escribir en el texto
    typewriter(DOM.storyText, pagina.texto, 15).then(() => {
      // Mostrar opciones después del texto
      if (pagina.esFinal) {
        // Pantalla de final
        setTimeout(() => mostrarFinal(pagina), 800);
      } else {
        mostrarOpciones(pagina.opciones);
      }
    });

  }, animacion ? 150 : 0);
}


/* ══════════════════════════════════════════
   8. MOSTRAR OPCIONES
   ══════════════════════════════════════════ */

function mostrarOpciones(opciones) {
  DOM.choicesList.innerHTML = '';
  opciones.forEach((opcion, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn choice-appear';
    btn.textContent = opcion.texto;
    btn.style.animationDelay = `${idx * 120}ms`;
    btn.addEventListener('click', () => elegirOpcion(opcion.destino));
    DOM.choicesList.appendChild(btn);
  });
}


/* ══════════════════════════════════════════
   9. ELEGIR OPCIÓN
   ══════════════════════════════════════════ */

function elegirOpcion(destinoId) {
  // Deshabilitar botones para evitar doble clic
  DOM.choicesList.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    b.style.opacity = '0.4';
  });

  // Pequeño delay para el efecto visual
  setTimeout(() => renderizarPagina(destinoId, true), 200);
}


/* ══════════════════════════════════════════
   10. PANTALLA DE FINAL
   ══════════════════════════════════════════ */

function mostrarFinal(pagina) {
  DOM.endTitle.textContent = pagina.titulo;
  DOM.endText.textContent  = pagina.texto.substring(0, 300) + '...';
  mostrarPantalla(DOM.screenEnd);
  // Borrar guardado al llegar al final
  Estado.borrar();
}


/* ══════════════════════════════════════════
   11. FLUJO DE INICIO
   ══════════════════════════════════════════ */

function iniciarJuego(desdePagina = 1) {
  mostrarPantalla(DOM.screenTransition);

  // Animación de apertura del libro (800ms)
  setTimeout(() => {
    mostrarPantalla(DOM.screenBook);
    renderizarPagina(desdePagina, false);
  }, 900);
}


/* ══════════════════════════════════════════
   12. STARFIELD (canvas de estrellas)
   ══════════════════════════════════════════ */

function iniciarStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Crear estrellas
  const N = 120;
  const estrellas = Array.from({ length: N }, () => ({
    x:    Math.random() * canvas.width,
    y:    Math.random() * canvas.height,
    size: Math.random() < 0.1 ? 2 : 1,
    speed: Math.random() * 0.3 + 0.05,
    blink: Math.random() * Math.PI * 2,
  }));

  function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const t = Date.now() / 1000;

    estrellas.forEach(s => {
      const alpha = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * 1.5 + s.blink));
      ctx.fillStyle = `rgba(0, 255, 136, ${alpha * 0.7})`;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), s.size, s.size);

      // Mover levemente hacia abajo
      s.y += s.speed;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(dibujar);
  }

  dibujar();
}


/* ══════════════════════════════════════════
   13. GUARDAR / TOAST
   ══════════════════════════════════════════ */

function guardarPartida() {
  Estado.guardar();
  // Mostrar toast
  DOM.saveToast.classList.remove('hidden');
  setTimeout(() => DOM.saveToast.classList.add('hidden'), 2200);
}


/* ══════════════════════════════════════════
   14. EVENTOS
   ══════════════════════════════════════════ */

// Botón "Iniciar aventura"
DOM.btnStart.addEventListener('click', () => {
  Estado.borrar();
  iniciarJuego(1);
});

// Botón "Continuar"
DOM.btnContinue?.addEventListener('click', () => {
  iniciarJuego(Estado.paginaActual);
});

// Botón "Nueva partida" (desde aviso de guardado)
DOM.btnNewGame?.addEventListener('click', () => {
  Estado.borrar();
  DOM.savedNotice.classList.add('hidden');
  iniciarJuego(1);
});

// Botón guardar (HUD)
DOM.btnSave.addEventListener('click', guardarPartida);

// Botón reiniciar (HUD)
DOM.btnRestart.addEventListener('click', () => {
  if (confirm('¿Deseas reiniciar la aventura desde el principio?')) {
    Estado.borrar();
    mostrarPantalla(DOM.screenIntro);
  }
});

// Botón "Jugar de nuevo" (pantalla final)
DOM.btnPlayAgain.addEventListener('click', () => {
  Estado.borrar();
  mostrarPantalla(DOM.screenIntro);
});

// Atajos de teclado
document.addEventListener('keydown', (e) => {
  // S = guardar
  if (e.key === 's' || e.key === 'S') {
    if (DOM.screenBook.classList.contains('active')) guardarPartida();
  }
  // ESC = menú / intro (si estamos en el libro)
  if (e.key === 'Escape') {
    if (DOM.screenBook.classList.contains('active')) {
      if (confirm('¿Volver al menú principal?')) {
        mostrarPantalla(DOM.screenIntro);
      }
    }
  }
});


/* ══════════════════════════════════════════
   15. INICIALIZACIÓN
   ══════════════════════════════════════════ */

(function init() {
  // Iniciar starfield
  iniciarStarfield();

  // Comprobar si hay partida guardada
  const haySave = Estado.cargar();
  if (haySave && Estado.paginaActual > 1) {
    DOM.savedNotice.classList.remove('hidden');
  }

  // Mostrar pantalla intro
  mostrarPantalla(DOM.screenIntro);
})();
