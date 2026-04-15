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
    capitulo: 'I. KAPITULUA',
    titulo: 'TRIKU DESAGERTU DA',
    texto: `Goiz lasaia zen Alonsotegiko eskolan. Haurrak beren geletan zeuden irratia entzuten, eta bat-batean oihu batzuk entzun zituzten patiotik zetozela:\n\n— TRIKU DESAGERTU DA!!\n\nDenak isilik geratu ziren. Xabi Trikuren bila joan zen eskola osoan zehar, baina ez zuen aurkitu. Triku, gure eskolako maskota, ez zegoen bere ohiko txokoan.\n\nZuzendaritzatik, Irantzuk Bartolini deitu zion, Alonsotegiko detektibeari. Minutu batzuk barru, bere txapela eta bere irribarre bihurria jantzita agertu zen. Arrastoak jaso eta susmagarriak izan zitezkeenak galdekatu ondoren, oso seguru esan zuen:\n\n— Lasai, ni arduratuko naiz!\n\nBartolinek ohar bat aurkitu zuen gimnasioko zoruan, honela zioena:\n\n"Triku berriz ikusi nahi baduzue, jarraitu pistei. — E. Sinatua"\n\nBartolinek hasperen egin zuen eta bere buruari galdetu zion ea nortzuk izan zitezkeen "E" eta zergatik bahitu zuen Triku, eta orduan esan zuen:\n\n— Abentura ona izango da hau...\n\n`,
    lore: `Eskolako ohiko isiltasuna hautsi egin zen irratiak musika emititzeari utzi eta albisterik txarrenari bide eman zionean. Trikuko txokoan hutsunea baino ez da geratzen, Alonsotegi osoa kolokan jarri duen misterioaren hasiera markatzen duena. Orain, gure maskotaren patua Bartolinen maltzurkeriaren eta 'E' misteriotsuak herrian utzi dituen pisten araberakoa da.`,
    escena: 'inicio',
    opciones: [
      { texto: 'Larramendi futbol zelaira joan', destino: 2 },
      { texto: 'Udaletxeko plazan ikertzea', destino: 3 },
      { texto: 'Liburutegian pistak bilatu', destino: 4 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 2 — Campo de fútbol
  // ──────────────────────────────────────
  {
    id: 2,
    capitulo: 'II. KAPITULUA',
    titulo: 'LARRAMENDI FUTBOL ZELAIA',
    texto: `Bartolin Basteitara iritsi zenean, zelaia isilik zegoen. Landako tabernan galdetu zuen ea norbaitek zerbait arraroa ikusi zuen, baina inork ez zuen ezer ikusi. Harmailetan begiratu zuen eta ez zuen ezer aurkitu. Aldagelak arakatu zituen eta ez zuen arrastorik aurkitu. Baina bat-batean, zerbaitek atentzioa eman zion berdegunean. Bartolinen ama zelai erdian zegoen baloi baten ondoan.\n\nBartolin! Bartolin! – oihukatu zuen amak. Eskerrak iritsi zaren. Basteitan paseatzen ari nintzen eta futbol zelaiaren erdian baloi bat zegoela ikusi dut. Eta harrapatzera hurbildu naizenean, ohar bat zegoen baloiaren azpian.`,
    lore: `En el desierto campo de Larramendi, la madre de Bartolín le guió hasta el círculo central, donde un balón solitario custodiaba un mensaje enigmático. Lo que parecía un simple descuido en Basteita se reveló como el primer acertijo de un juego macabro ideado por 'E'.`,
    desafio: {
      galdera: `Bartolinek ohar bat aurkitu du, baina hitz bat falta da:\n\n"Triku berriz ikusi nahi baduzue, _____ pistei."\n\nZein da hitz falta dena?`,
      erantzuna: 'jarraitu',
      okerMezua: `Hori ez da... Saiatu berriro. Oharrak zer egiteko esaten du pisteekin?`,
    },
	escena: 'larramendi_campo',
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
    capitulo: 'III. KAPITULUA',
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
    capitulo: 'IV. KAPITULUA',
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
    capitulo: 'V. KAPITULUA',
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
    capitulo: 'VI. KAPITULUA',
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
    capitulo: 'VII. KAPITULUA',
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
    capitulo: 'VIII. KAPITULUA',
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
    capitulo: 'IX. KAPITULUA',
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
    capitulo: 'X. KAPITULUA',
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
    capitulo: 'XI. KAPITULUA',
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
    capitulo: 'XII. KAPITULUA',
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
    capitulo: 'XIII. KAPITULUA',
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

  inicio: () => `<img src="01_pagina.png" alt="1KAPITULUA" />`,

  larramendi_campo: () => `<img src="02_pagina.png" alt="2KAPITULUA" />`,

  abismo: () => `<img src="03_pagina.png" alt="3KAPITULUA" />`,

  grimorio: () => `<img src="04_pagina.png" alt="4KAPITULUA" />`,

  oraculo: () => `<img src="05_pagina.png" alt="5KAPITULUA" />`,

  pacto: () => `<img src="06_pagina.png" alt="6KAPITULUA" />`,

  fuego: () => `<img src="07_pagina.png" alt="7KAPITULUA" />`,

  codex: () => `<img src="08_pagina.png" alt="8KAPITULUA" />`,

  sombra: () => `<img src="09_pagina.png" alt="9KAPITULUA" />`,

  salida: () => `<img src="10_pagina.png" alt="10KAPITULUA" />`,

  destruccion: () => `<img src="12_pagina.png" alt="11KAPITULUA" />`,

  poder: () => `<img src="11_pagina.png" alt="11KAPITULUA" />`,
};

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

let DOM = {
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

  // ── Desafío ──
  loreBox:          document.getElementById('lore-box'),
  loreText:         document.getElementById('lore-text'),
  challengeBox:     document.getElementById('challenge-box'),
  challengeQuestion:document.getElementById('challenge-question'),
  challengeInput:   document.getElementById('challenge-input'),
  challengeSubmit:  document.getElementById('challenge-submit'),
  challengeErrDiv:  document.getElementById('challenge-feedback-error'),
  challengeErrMsg:  document.getElementById('challenge-error-msg'),
  challengeOkDiv:   document.getElementById('challenge-feedback-ok'),
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

  // ── Lore / Desafío ──
  if (pagina.desafio) {
    // Mostrar el widget de desafío, ocultar lore normal
    DOM.loreBox.classList.add('hidden');
    DOM.challengeBox.classList.remove('hidden');
    activarDesafio(pagina.desafio, pagina.opciones, pagina.esFinal);
  } else {
    // Mostrar lore normal, ocultar widget de desafío
    DOM.loreBox.classList.remove('hidden');
    DOM.challengeBox.classList.add('hidden');
    DOM.loreText.textContent = pagina.lore || '';
  }

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
      // Si la página tiene desafío, las opciones ya están gestionadas
      // por activarDesafio() — solo mostramos si NO hay desafío
      if (!pagina.desafio) {
        if (pagina.esFinal) {
          setTimeout(() => mostrarFinal(pagina), 800);
        } else {
          mostrarOpciones(pagina.opciones);
        }
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
   8b. LÓGICA DEL DESAFÍO
   ══════════════════════════════════════════ */

/**
 * Activa el widget de desafío.
 * Mientras no se responda correctamente, choices-area permanece oculto.
 * @param {object} desafio  - { galdera, erantzuna, okerMezua }
 * @param {Array}  opciones - opciones de la página (para mostrar tras éxito)
 * @param {boolean} esFinal - si la página es final
 */
function activarDesafio(desafio, opciones, esFinal) {
  let intentos = 0;

  // Resetear widget
  DOM.challengeQuestion.textContent = desafio.galdera;
  DOM.challengeInput.value = '';
  DOM.challengeInput.classList.remove('input-error');
  DOM.challengeErrDiv.classList.add('hidden');
  DOM.challengeOkDiv.classList.add('hidden');
  DOM.challengeInput.disabled = false;
  DOM.challengeSubmit.disabled = false;

  // Ocultar choices hasta resolver
  DOM.choicesList.innerHTML = '';
  const choicesArea = document.getElementById('choices-area');
  choicesArea.style.display = 'none';

  // Foco en el input
  setTimeout(() => DOM.challengeInput.focus(), 100);

  // ── Función de comprobación ──
  function comprobarRespuesta() {
    const respuestaUsuario = DOM.challengeInput.value.trim().toLowerCase();
    const respuestaCorrecta = desafio.erantzuna.trim().toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
      // ✔ CORRECTO
      DOM.challengeInput.disabled = true;
      DOM.challengeSubmit.disabled = true;
      DOM.challengeInput.classList.remove('input-error');
      DOM.challengeErrDiv.classList.add('hidden');
      DOM.challengeOkDiv.classList.remove('hidden');

      // Esperar un momento y luego mostrar las opciones
      setTimeout(() => {
        choicesArea.style.display = '';   // restaurar display
        if (esFinal) {
          mostrarFinal(PAGINAS.find(p => p.opciones === opciones || p.esFinal));
        } else {
          mostrarOpciones(opciones);
        }
      }, 900);

    } else {
      // ✕ INCORRECTO
      intentos++;
      DOM.challengeInput.classList.remove('input-error');
      // Forzar re-trigger de la animación de shake
      void DOM.challengeInput.offsetWidth;
      DOM.challengeInput.classList.add('input-error');

      // Mensaje de error
      const msgBase = desafio.okerMezua || 'Erantzun okerra. Saiatu berriro.';
      DOM.challengeErrMsg.textContent =
        intentos > 2
          ? `${msgBase} (${intentos}. saiakera)`
          : msgBase;

      DOM.challengeErrDiv.classList.remove('hidden');
      DOM.challengeOkDiv.classList.add('hidden');

      // Quitar clase de error del input después de la animación
      setTimeout(() => {
        DOM.challengeInput.classList.remove('input-error');
      }, 400);

      // Seleccionar el texto para facilitar corrección
      DOM.challengeInput.select();
    }
  }

  // ── Eventos ──
  // Limpiar listeners anteriores clonando el botón
  const nuevoBtn = DOM.challengeSubmit.cloneNode(true);
  DOM.challengeSubmit.parentNode.replaceChild(nuevoBtn, DOM.challengeSubmit);
  DOM.challengeSubmit = nuevoBtn;   // actualizar referencia en DOM (nota: DOM es un objeto literal, se puede reasignar)

  // También clonar el input para limpiar listeners
  const nuevoInput = DOM.challengeInput.cloneNode(true);
  DOM.challengeInput.parentNode.replaceChild(nuevoInput, DOM.challengeInput);
  DOM.challengeInput = nuevoInput;

  DOM.challengeSubmit.addEventListener('click', comprobarRespuesta);

  DOM.challengeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') comprobarRespuesta();
  });

  // Limpiar clase de error al escribir
  DOM.challengeInput.addEventListener('input', () => {
    DOM.challengeInput.classList.remove('input-error');
    DOM.challengeErrDiv.classList.add('hidden');
  });
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
