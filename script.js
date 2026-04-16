/**
 * ═══════════════════════════════════════════════════════
 * eroski OSCURO — Motor del juego
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
    lore: `...`,
    desafio: {
      galdera: `Zenbat pertsona daude futboleko 2 partida aldi berean jokatzen diren jokalekuan?`,
      erantzuna: '30',
      okerMezua: `Hori ez da... Saiatu berriro. Pista: Zelaiaren barruan jokalariak eta beste norbait daude.`,
    },
	escena: 'larramendi_campo',
    opciones: [
      { texto: 'Zubi berrira joan', destino: 5 },
      { texto: 'Frontoira joan', destino: 6 },
      { texto: 'Eskolara itzuli', destino: 7 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 3 — El Ayuntamiento
  // ──────────────────────────────────────
  {
    id: 3,
    capitulo: 'III. KAPITULUA',
    titulo: 'UDALETXEA',
    texto: `Egun hartan Udaletxeko plaza bare zegoen. Bartolin arrastoen bila hasi zen. Arake tabernan galdetu zuen, baina Danik esan zion ez zuela ezer arrarorik ikusi. Gero, Posta Bulegoko langileak galdekatu zituen, baina ez zekiten ezer.\n\nUdaletxe atzetik zetorren soinu gogor bat entzun zuen. Plaza garbitzera zetorren eskobatzeko makina zen. Andonik ekortzeko makina gidatzen zuen. Bartolinek galdetu zion ea haur talde bat ikusi zuen handik korrika, baina ez zuen ezer ikusi.\n\nAzkenean, jarlekuak eta jardinerak aztertu ondoren, harrizko iturri txikira hurbildu eta kutxa itxi bat ikusi zuen.`,
    lore: `...`,
    desafio: {
      galdera: `Kutxak 3 zenbakiko kodea eta ohar bat zituen, pista hauekin:<br>6-8-2: Zenbaki bat zuzena da eta posizio egokian dago.<br>6-1-4: Zenbaki bat zuzena da, baina posizio okerrean dago.<br>2-0-6: Bi zenbaki dira zuzenak, baina biak daude posizio okerrean.<br>7-3-8: Ezer ez da zuzena. Zenbaki horietako bat ere ez da kodearen parte.<br>8-7-0: Zenbaki bat zuzena da, baina posizio okerrean dago.`,
      erantzuna: '0-4-2',
      okerMezua: `Hori ez da... Saiatu berriro.\nPista: 4. pistako zenbakiak baztertuz hasten da.`,
    },	
	escena: 'ayuntamiento',
    opciones: [
      { texto: 'Daniren dendara joan', destino: 8 },
      { texto: 'Joan Eroskira', destino: 9 },
      { texto: 'Joan Gaztegunera', destino: 2 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 4 — Biblioteca
  // ──────────────────────────────────────
  {
    id: 4,
    capitulo: 'IV. KAPITULUA',
    titulo: 'LIBURUTEGIA',
    texto: `Dena isilik dago... isiltasun gehiegi, baita liburutegi baterako ere. Eguna oso arraroa izaten ari da. Bartolin liburutegian sartu zenean, Arrate bere mahaian lanean baino ez zuen ikusi. Harrigarria bada ere, Arratek bazuen liburu bat berarentzat prestatua:\n\n- Arrate: Lehen orduan nik ezagutzen ez nuen haur talde bat etorri da eta liburu hau utzi didate. Interesgarria irudituko litzaizukeela esan dute:\n\n- Bartolin: Eskerrik asko Arrate. Baina nor lirateke ume misteriotsu horiek?\n\n- Arrate: Ez dakit, ez ziren herrikoak. Xandals batzuk zeramatzaten, "E" letradun ezkutu batekin.`,
    lore: `...`,
    desafio: {
      galdera: `Bartolinek liburua ireki zuenean, barruan mezu bat zegoela ikusi zuen:<br>Denek ezagutzen dute Udaletxeko plaza, baina ezagutzen al duzue plaza horren benetako izena?.`,
      erantzuna: 'Doctor Madinabeitia',
      okerMezua: `Hori ez da... Saiatu berriro. Google Maps-en bila dezakezue.`,
    },
	escena: 'biblioteca',
    opciones: [
      { texto: 'Tomar el biblioteca contigo', destino: 2 },
      { texto: 'Huir hacia el pasillo de la oscuridad', destino: 3 },
      { texto: 'Esperar y no moverte', destino: 10 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 5 — Puente nuevo
  // ──────────────────────────────────────
  {
    id: 5,
    capitulo: 'V. KAPITULUA',
    titulo: 'ZUBI BERRIA',
    texto: `Ibaiko ura indar handiz jaisten zen. Euri asko egin zuen, eta urak harkaitzen kontra jotzen zuen eta enborrak eta adarrak herrestan eramaten zituen. Pasealekuan ez zegoen inor.\n\nBartolin Loibeko parkera jaitsi zen. Zabu, txirrista eta jarleku guztiak arakatu zituen, baina ez zuen arrastorik aurkitu. Mutil bat zebilen txakurra paseatzen, eta galdetu zion ea zerbait arraroa ikusi zuen, baina mutilak ezetz esan zion.\n\nBat-batean, Bartolinek zubira begiratu zuen eta txandalez jantzitako haur talde bat ikusi zuen, denak kolore berekoak. Zubia azkar zeharkatu eta Koskojalesera zihoazen korrika. Bartolin haiengana korrika zihoala, zerbaitek atentzioa eman zion\n\n`,
    lore: `...`,
    desafio: {
      galdera: `Zubi berriaren erdian ohar bat zegoen, honela zioena:<br>Espioiaren alfabetoan, letra bakoitza hiru posizio aurrerantz mugitzen da (A = D, B = E, C = F...). Zein hitz ezkutatzen da 'LOOFX' kodearen atzean?`,
      erantzuna: 'Orria',
      okerMezua: `Hori ez da... Saiatu berriro.`,
    },
	escena: 'puente_nuevo',
    opciones: [
      { texto: 'Urrearen Iturrirantz jarraitu', destino: 8 },
      { texto: 'Futbol zelaira itzuli', destino: 11 },
      { texto: 'Joan Gaztegunera', destino: 6 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 6 — Fonton
  // ──────────────────────────────────────
  {
    id: 6,
    capitulo: 'VI. KAPITULUA',
    titulo: 'FRONTOIA',
    texto: `Frontoian zarata handia entzuten zen eta jendea oihuka eta animoka. Larrobeltzeko saskibaloi taldea Escolapiosen aurkako partida jokatzen ari zen. Partida zirraragarria zen. Larrobeltz 2 puntu galtzen ari zen eta 5 segundo bakarrik geratzen ziren. Azken segundoan Larrobeltzeko jokalari batek jaurtiketa urrun bat jaurti eta hirukoa sartu zuen. Azkenean, Larrobeltzek 61-60 irabazi zuen. Zaleak oso pozik zeuden, denak oihuka eta txaloka.\n\nBaina bat-batean mundu guztia gelditu egin zen Bartolin frontoira sartzen ikusi zuenean. Une horretan, Larrobeltzeko entrenatzailea Bartolinengana hurbildu zen eta saskietako batean itsatsita aurkitu zuen ohar bat eman zion.\n\n"`,
    lore: `"Abenturarekin jarraitu nahi baduzu, saski bat sartu beharko duzu."`,
    escena: 'fronton',
    opciones: [
      { texto: 'Pilotalekuko ate sekretu batetik jaistea', destino: 8 },
      { texto: 'Daniren dendara joan', destino: 12 },
      { texto: 'Zubi zaharrera joan', destino: 7 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 7 — Tienda de Dani
  // ──────────────────────────────────────
  {
    id: 7,
    capitulo: 'VII. KAPITULUA',
    titulo: 'DANIREN DENDA',
    texto: `Bartolin Daniren dendan sartu zenean, gominolak eta gozokiak usaintzen zituen denak. Dani, salmahaiaren atzean, Takis pakete batzuk ordenatzen ari zen, kezka-aurpegiz.\n\n— Aupa, Bartolin! — oihu egin zuen Danik —. Eskerrak agertzen zaren. Duela gutxi gazte batzuk sartu dira txandala jantzita, eta barre egiten zuten etengabe. Txikle bat ere ez dute erosi, baina kristalezko poto hau koloretako gozokiz beteta utzi didate eta eskolako ikasleentzat "opari" bat zela esan dute.\n\nBartolinek potoa aztertu zuen. Ezin zen ireki, zenbakizko giltzarrapo bat zuelako. Gozokiak geruza oso zehatzetan jarrita zeudela ikusi zuen. Ohar bat zegoen kristalezko potoari itsatsita."`,
    lore: `...`,
    desafio: {
      galdera: `"Bide gozoa logikaz irekitzen da, ez gosez". Azpian jarraibide batzuk zeuden: gorria = 1, horia = 2, urdina = 3.<br>Bartolinek gozokiek sekuentzia bat osatzen zutela ikusi zuen: gorria, urdina, berdea eta morea.<br>Zer kode sartu beharko da giltzarrapoan irekitzeko?`,
      erantzuna: '1334',
      okerMezua: `Hori ez da... Saiatu berriro.`,
    },
	escena: 'tienda_dani',
    opciones: [
      { texto: 'Joan Gaztegunera', destino: 8 },
      { texto: 'Joan Eroskira', destino: 5 },
      { texto: 'Zubi berrira joan', destino: 11 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 8 — Eroski
  // ──────────────────────────────────────
  {
    id: 8,
    capitulo: 'VIII. KAPITULUA',
    titulo: 'EROSKI',
    texto: `Eroskin sartu zenean, aire girotuak Bartolin freskatu zuen. Supermerkatuan gauza asko zeuden: kafea, galletak, jogurtak, frutak, barazkiak, etab. Denak oso itxura ona zuen. Bartolinek supermerkatua zeharkatu zuen harategira iritsi arte. Han zegoen Charles harategian hanburgesak prestatzen.\n\n— Bartolin, pozten naiz zu ikusteaz! — esan zuen bazter batean zegoen erosketa-gurdi bat seinalatuz —. Jertsean "E" bateko ezkutua duten haur batzuek kutxa hutsez betetako orga utzi dute, baina esan didate Alonsotegiko detektibe azkarrenak bakarrik jakingo lukeela falta den "produktua" aurkitzen.\n\nBartolin gurdira hurbildu zen. Esne kaxen eta galleta paketeen artean, kartazal bat aurkitu zuen, barra-kode bitxi baten marrazkia zuena.`,
    lore: `...`,
	desafio: {
      galdera: `"Ez naiz bizi, baina hitzak gordetzen ditut.<br>Ez dut ahoa, baina istorioak kontatzen ditut.<br>Isilik nago beti, baina asko irakasten dut.<br>Zer naiz?`,
      erantzuna: 'Liburua',
      okerMezua: `Hori ez da... Saiatu berriro.`,
    },
    escena: 'eroski',
    opciones: [
      { texto: 'Liburutegira joan', destino: 13 },
      { texto: 'Joan gaztegunera', destino: 12 },
      { texto: 'Joan Urrezko Iturrira', destino: 11 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 9 — Gaztegune
  // ──────────────────────────────────────
  {
    id: 9,
    capitulo: 'IX. KAPITULUA',
    titulo: 'GAZTEGUNE',
    texto: `Gaztegunean gazte batzuk ping-pongean jokatzen ari ziren, beste batzuk Play jokoan ari ziren eta beste batzuk Larrobeltz eta Larramendiren kromoak aldatzen ari ziren. Giroa alaia zen, baina zerbait ez zetorren bat. Neska-mutil batzuk Gazteguneko gune batean pilatu ziren.\n\nBartolin hurbildu zenean, kaxa handi itxi bat ikusi zuen. Julene oso kezkatuta zegoen, ez zekielako zergatik utzi zuten kutxa hori hor. Julenek Bartolin ikusi zuenean, esan zion:\n\n— Bartolin, begira honi! Kanpoko neska-mutil batzuek kutxa hau utzi eta korrika alde egin dute. Ez nituen ezagutzen, baina denak kirol-arropaz jantzita zeuden. Gainera, dena lokatzezko oinatzez beteta utzi dute, Urrearen iturritik zetozela esaten zuten.`,
    lore: `...`,
    desafio: {
      galdera: `Kutxak teklatu bat zeukan zenbakiekin, eta ohar bat, honela zioena: "Zenbat dakizu Alonsotegiri buruz?"<br><br>Nola du izena Alonsotegitik igarotzen den ibaiak? Bere letrak kontatzen badituzu, lehen zenbakia izango duzu.<br><br>Nola du izena eskolara igotzen den kaleak? Kontatu bere letrak eta bigarren zenbakia izango duzu.<br><br>Zein da Alonsotegiko mendirik garaiena? Kontatu bere letrak eta bigarren zenbakia izango duzu.`,
      erantzuna: '7611',
      okerMezua: `Hori ez da... Saiatu berriro.`,
    },
	escena: 'gaztegune',
	opciones: [
      { texto: 'Bunkerrera joan.', destino: 8 },
      { texto: 'Urrearen iturrira joan', destino: 10 },
      { texto: 'Kobazulo sekretura joan', destino: 2 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 10 — Bunker
  // ──────────────────────────────────────
  {
    id: 10,
    capitulo: 'X. KAPITULUA',
    titulo: 'BUNKER',
    texto: `Bartolin Alonsotegiko bunkerreko ate astunaren parera iritsi zen. Babesleku hau, Gerra Zibilean harkaitzean zulatua biztanleria zibila bonbardaketetatik babesteko, leku ikaragarria eta iluna izaten jarraitzen zuen. Sartzean, bere urratsen oihartzunak durundi egiten zuen beldurraren aurrean ezkutu gisa erabili ziren hormigoizko galerietan. Tunelak zeharkatzen ari zela, Bartolinek ulertu zuen zergatik zegoen han: bunkerrak, herriaren oroimena ez ezik, Trikuren desagerpenaren misterioa argitzeko azken pista ere gordetzen zuen.\nGaleria nagusian, hormek oraindik erresistentzia istorioak xuxurlatzen dituztela dirudien lekuan, Bartolinek ez zuen maskota aurkitu, inguruko mapa zahar bat baizik. Paperaren gainean, marka gorri batek bunkerretik irten eta Leize Sekreturantz igotzen zen ibilbide ahaztu bat seinalatzen zuen. Maparen oinean, ikatzez idatzitako mezu batek honela zioen: "Historiak honaino ekarri zaitu, baina amaiera mendia zabaltzen den lekuan duzu zain". Bartolinek mapa gorde eta lupa estutu zuen; bunkerra azken urratsa baino ez zen, kobaren iluntasunari aurre egin eta laguna erreskatatu aurretik."`,
    lore: `Alonsotegiko erraietan zulatutako hormigoizko babesleku honek, gerra garaian herria babesteko, historiaz beteriko isiltasuna gordetzen du gaur egun. Garai batean bonbardaketetatik babesteko lekua izan zena, mendiaren iluntasunerantz ezinbestean daraman arrasto baten azken lekuko bihurtzen da orain.`,
    escena: 'bunker',
    opciones: [
      { texto: 'Kobazulo sekretura joan', destino: 8 },
      { texto: 'Joan Gaztegunera', destino: 5 },
      { texto: 'Udaletxeko plazara joan', destino: 11 },
    ],
  },

  // ──────────────────────────────────────
  // PÁGINA 11 — FINAL: La Huida (final neutro)
  // ──────────────────────────────────────
  {
    id: 11,
    capitulo: 'XI. KAPITULUA',
    titulo: 'EL FINAL DE LA PRUDENCIA',
    texto: `Algo en ti dice que no. Que este lugar, este libro, este poder, no son para ti ni para nadie. Que hay cosas que deben permanecer enterradas.\n\nCaminas de espaldas. La Oráculo Ciega no te detiene. El ayuntamiento no te llama. Las velas parpadean una última vez y se apagan todas a la vez.\n\nEn la oscuridad total, encuentras la puerta de hierro. Los tres cerrojos se abren desde dentro, como si Eldrath mismo decidiera dejarte ir.\n\nSales a la superficie al amanecer. El sol te quema los ojos. El aire real, el aire del mundo, sabe a algo que no habías apreciado hasta ahora.\n\nNunca contarás lo que viste. Pero tampoco lo olvidarás jamás.`,
    lore: `RESULTADO: Salida Voluntaria\nCONSECUENCIAS: Ninguna visible\n\nEl gremio de magos registra que aproximadamente el 12% de los exploradores que llegan a Eldrath deciden salir sin tocar el eroski. Viven vidas largas y tranquilas. Curiosamente, todos mueren sonriendo.`,
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
    texto: `Arrancas el eroski del aire. Vibra en tus manos como un ser vivo aterrorizado.\n\nLo arrojas contra el suelo de la sala esférica. Nada. Lo golpeas contra la pared. Nada. Entonces recuerdas: en el biblioteca del suelo leíste que el eroski solo puede ser destruido por algo que el propio portador ame.\n\nEntiendes lo que debes hacer.\n\nUsas el recuerdo más querido que tienes —un momento de tu vida que nunca quisiste perder— y lo concentras en tus manos. El calor que emerge no es mágico: es simplemente humano.\n\nEl eroski Oscuro, por primera vez en 900 años, arde.\n\nLa sala esférica colapsa a tu alrededor. Pero tú ya estás afuera, corriendo, con las manos vacías y el corazón lleno de algo que no tiene nombre.`,
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
    titulo: 'EL FINAL DEL eroski',
    texto: `Lees.\n\nNo puedes parar. Cada página devora a la siguiente. El idioma que no deberías entender lo entiendes todo: la sintaxis de la gravedad, la conjugación de la luz, la puntuación del tiempo.\n\nCuando terminas la última página, alzas la vista.\n\nLa sala esférica ha desaparecido. Las catacumbas han desaparecido. La Oráculo Ciega, el ayuntamiento, el eco, todo ha desaparecido. Solo queda el mundo, extendido ante ti como una página en blanco.\n\nEl eroski Oscuro ya no es un libro. Es tu memoria.\n\nPuedes reescribirlo todo.\n\nY eso, comprendes por fin, era exactamente lo que el eroski necesitaba que hicieras.`,
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
  
  ayuntamiento: () => `<img src="03_pagina.png" alt="2KAPITULUA" />`,

  biblioteca: () => `<img src="04_pagina.png" alt="4KAPITULUA" />`,

  puente_nuevo: () => `<img src="05_pagina.png" alt="5KAPITULUA" />`,

  fronton: () => `<img src="06_pagina.png" alt="6KAPITULUA" />`,

  tienda_dani: () => `<img src="07_pagina.png" alt="7KAPITULUA" />`,

  eroski: () => `<img src="08_pagina.png" alt="8KAPITULUA" />`,
  
  gaztegune: () => `<img src="09_pagina.png" alt="9KAPITULUA" />`,

  bunker: () => `<img src="10_pagina.png" alt="10KAPITULUA" />`,

  salida: () => `<img src="11_pagina.png" alt="11KAPITULUA" />`,

  destruccion: () => `<img src="12_pagina.png" alt="12KAPITULUA" />`,

  poder: () => `<img src="13_pagina.png" alt="13KAPITULUA" />`,
};

/* ══════════════════════════════════════════
   3. ESTADO DEL JUEGO
   ══════════════════════════════════════════ */

const Estado = {
  paginaActual: 1,
  historial: [],
  /** Guarda en localStorage */
  guardar() {
    localStorage.setItem('triku_save', JSON.stringify({
      paginaActual: this.paginaActual,
      historial: this.historial,
    }));
  },
  /** Carga desde localStorage */
  cargar() {
    const raw = localStorage.getItem('triku_save');
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
    localStorage.removeItem('triku_save');
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
  DOM.challengeQuestion.innerHTML = desafio.galdera;
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
let bgMusic = null;

// Función para inicializar la música
function initMusic() {
  if (bgMusic) return; // Ya inicializada
  
  bgMusic = document.getElementById('background-music');
  if (!bgMusic) {
    // Crear el elemento si no existe
    bgMusic = document.createElement('audio');
    bgMusic.id = 'background-music';
    bgMusic.loop = true;
    bgMusic.volume = 0.3;
    bgMusic.src = 'music/background.mp3';
    document.body.appendChild(bgMusic);
  }
  
  bgMusic.volume = 0.3;
  bgMusic.play().catch(err => console.log('No se pudo reproducir:', err));
}

// Activar música con el primer clic del usuario
document.addEventListener('click', initMusic, { once: true });


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
