// =========================================================================
// MULTIVERSE LEARNING PORTAL: PHILOSOPHY & MATHEMATICS IV
// Core Javascript Engine (NATIVE ZERO DEPENDENCY SINGLE-PAGE APPLICATION)
// =========================================================================

// ==========================================
// 1. DATA LAYER (Syllabus, Exercises & Codex)
// ==========================================

const lessonsData = [
  {
    id: 1,
    title: "El Despertar del Logos",
    subtitle: "Módulo 1",
    description: "Explora la transición del mito a la razón, el origen de todas las cosas (Arché) y la sabiduría radical de Sócrates.",
    badge: "🏛️",
    difficulty: "Iniciado",
    lessons: [
      {
        id: "l1_1",
        name: "El Origen del Cosmos",
        xpAward: 15,
        questions: [
          {
            id: "q1_1_1",
            type: "multiple-choice",
            question: "¿Cuál es el concepto griego que define el principio u origen de todas las cosas en el universo?",
            options: ["Logos", "Arché", "Ápeiron", "Physis"],
            answer: "Arché",
            explanation: "El 'Arché' (o Arjé) representa el elemento original o primer principio constitutivo de la realidad para los filósofos presocráticos."
          },
          {
            id: "q1_1_2",
            type: "multiple-choice",
            question: "Tales de Mileto, considerado el primer filósofo de la historia, propuso que el Arché era:",
            options: ["El aire", "El fuego", "El agua", "Los átomos"],
            answer: "El agua",
            explanation: "Tales observó que el agua es fundamental para la vida, la humedad está presente en todas las cosas y el agua puede cambiar de estado físico."
          },
          {
            id: "q1_1_3",
            type: "match",
            question: "Empareja a cada filósofo presocrático con su propuesta de Arché (primer principio):",
            pairs: [
              { left: "Tales de Mileto", right: "El Agua" },
              { left: "Anaxímenes", right: "El Aire" },
              { left: "Heráclito", right: "El Fuego (Cambio)" },
              { left: "Demócrito", right: "Los Átomos" }
            ]
          },
          {
            id: "q1_1_4",
            type: "fill-in-the-blank",
            question: "Completa el fragmento célebre de Heráclito sobre el fluir constante de la realidad:",
            text: "No podemos bañarnos dos veces en el mismo ________.",
            options: ["río", "mar", "fuego", "tiempo"],
            answer: "río",
            explanation: "Para Heráclito, todo cambia constantemente ('Panta rei'). El río representa este flujo eterno: sus aguas ya no son las mismas, ni nosotros tampoco."
          },
          {
            id: "q1_1_5",
            type: "true-false",
            question: "Parménides sostenía que el movimiento y el cambio son ilusiones de nuestros sentidos, y que el 'Ser' es único, eterno e inmóvil.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "Frente al continuo devenir de Heráclito, Parménides argumentaba que 'el Ser es y el no-Ser no es'; el verdadero ser es inmutable."
          }
        ]
      },
      {
        id: "l1_2",
        name: "Sócrates y el Método",
        xpAward: 20,
        questions: [
          {
            id: "q1_2_1",
            type: "sentence-builder",
            question: "Ordena los elementos para construir la frase más famosa atribuida a Sócrates:",
            words: ["sé", "nada", "que", "Solo", "no"],
            correctOrder: ["Solo", "sé", "que", "no", "sé", "nada"],
            explanation: "Esta declaración representa la 'docta ignorancia' socrática: el reconocimiento de las propias limitaciones como el primer paso hacia el verdadero saber."
          },
          {
            id: "q1_2_2",
            type: "multiple-choice",
            question: "¿Cómo llamaba Sócrates a su método de indagación basado en hacer preguntas para que el interlocutor dé a luz a sus propias ideas?",
            options: ["Escolástica", "Retórica", "Mayéutica", "Dialéctica"],
            answer: "Mayéutica",
            explanation: "Sócrates consideraba que su labor no era enseñar, sino ayudar a dar a luz al conocimiento que ya habita en el alma socrática."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "El Mundo del Pensamiento",
    subtitle: "Módulo 2",
    description: "Adéntrate en el idealismo metafísico de Platón y el realismo empirista de Aristóteles, las dos columnas de Occidente.",
    badge: "🦉",
    difficulty: "Intermedio",
    lessons: [
      {
        id: "l2_1",
        name: "Platón y las Sombras",
        xpAward: 20,
        questions: [
          {
            id: "q2_1_1",
            type: "multiple-choice",
            question: "En la filosofía platónica, ¿dónde se encuentra la verdad absoluta, inmutable y perfecta de las cosas?",
            options: ["En el Mundo Sensible", "En el Mundo de las Ideas", "En la Tierra", "En el Olimpo"],
            answer: "En el Mundo de las Ideas",
            explanation: "Para Platón, las cosas físicas son solo sombras o copias imperfectas de las Formas o Ideas perfectas y eternas del Mundo Inteligible."
          },
          {
            id: "q2_1_2",
            type: "fill-in-the-blank",
            question: "En el famoso mito de Platón, los prisioneros confunden las ________ proyectadas en la pared con la auténtica realidad.",
            text: "sombras",
            options: ["sombras", "luces", "figuras", "visiones"],
            answer: "sombras",
            explanation: "En la Alegoría de la Caverna, las sombras representan el nivel más bajo de conocimiento basado solo en percepciones sensibles."
          }
        ]
      }
    ]
  }
];

const codexData = [
  {
    id: "socrates",
    name: "Sócrates",
    period: "Grecia Clásica (470 – 399 a.C.)",
    concept: "La Mayéutica & Docta Ignorancia",
    avatar: "🏛️",
    moduleRequired: 1,
    quote: "Solo sé que no sé nada.",
    bio: "El tábano de Atenas. Sócrates transformó la filosofía al enfocarla en la ética y la conducta humana. No dejó nada escrito; prefería caminar descalzo por el ágora incitando a cuestionar certezas.",
    curiosity: "Fue condenado a muerte acusado de introducir nuevos dioses y beber cicuta."
  },
  {
    id: "platon",
    name: "Platón",
    period: "Grecia Clásica (427 – 347 a.C.)",
    concept: "El Mundo de las Ideas",
    avatar: "🦉",
    moduleRequired: 2,
    quote: "La dirección de la educación determinará su vida futura.",
    bio: "Discípulo estelar de Sócrates. Fundó la Academia de Atenas. Formuló el idealismo metafísico al separar el mundo sensible del inteligible.",
    curiosity: "Su nombre real era Aristocles; Platón significa el de anchas espaldas."
  }
];

const mathLessonsData = [
  {
    id: 1,
    title: "Los Números Reales",
    subtitle: "Temporada 1",
    description: "Estudia las medidas estadísticas de tendencia central, simplifica con leyes de exponentes y domina la notación científica.",
    badge: "🔢",
    difficulty: "Iniciado",
    lessons: [
      {
        id: "m1_1",
        name: "Medidas de Tendencia Central",
        xpAward: 20,
        questions: [
          {
            id: "qm1_1_1",
            type: "multiple-choice",
            question: "Ana obtuvo las siguientes calificaciones en 5 exámenes de matemáticas: 8.5, 9.0, 7.5, 8.0 y 9.5. ¿Cuál es su promedio (media aritmética)?",
            options: ["8.0", "8.5", "8.7", "9.0"],
            answer: "8.5",
            explanation: "Para calcular el promedio, sumamos todas las calificaciones: 8.5 + 9.0 + 7.5 + 8.0 + 9.5 = 42.5. Luego dividimos por el número de exámenes: 42.5 / 5 = 8.5."
          },
          {
            id: "qm1_1_2",
            type: "multiple-choice",
            question: "Los libros leídos por 7 estudiantes fueron: 3, 1, 4, 2, 5, 1, 6. ¿Cuál es la mediana de libros leídos?",
            options: ["2", "3", "4", "1"],
            answer: "3",
            explanation: "Primero ordenamos los datos de menor a mayor: 1, 1, 2, 3, 4, 5, 6. Como hay 7 datos (número impar), la mediana es el dato central, el número 3."
          },
          {
            id: "qm1_1_3",
            type: "fill-in-the-blank",
            question: "En una encuesta sobre el medio de transporte de 15 alumnos, se obtuvo: Metro (7 veces), Camión (4), Bicicleta (2) y Auto (2). ¿Cuál es la moda?",
            options: ["Metro", "Camión", "Bicicleta", "Auto"],
            answer: "Metro",
            explanation: "La moda es el dato con mayor frecuencia absoluta (el que más se repite). En este caso, el Metro se repite 7 veces."
          }
        ]
      },
      {
        id: "m1_2",
        name: "Leyes de los Exponentes",
        xpAward: 25,
        questions: [
          {
            id: "qm1_2_1",
            type: "multiple-choice",
            question: "Aplica las leyes de exponentes para simplificar: a^(-9)",
            options: ["-9a", "1 / a^9", "a^9", "-a^9"],
            answer: "1 / a^9",
            explanation: "La ley del exponente negativo establece que x^(-n) = 1 / x^n para cualquier base x diferente de cero."
          },
          {
            id: "qm1_2_2",
            type: "multiple-choice",
            question: "Resuelve y simplifica aplicando las leyes de exponentes: (y^2)^4",
            options: ["y^6", "y^8", "2y^4", "y^16"],
            answer: "y^8",
            explanation: "La ley de potencia de una potencia establece que (x^m)^n = x^(m*n). Multiplicamos los exponentes: 2 * 4 = 8, obteniendo y^8."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Expresiones Algebraicas",
    subtitle: "Temporada 2",
    description: "Realiza sumas, restas y multiplicaciones polinomiales, resuelve productos notables y aplica métodos de factorización.",
    badge: "📐",
    difficulty: "Intermedio",
    lessons: [
      {
        id: "m2_1",
        name: "Productos Notables y Factorización",
        xpAward: 25,
        questions: [
          {
            id: "qm2_1_1",
            type: "multiple-choice",
            question: "Desarrolla el binomio al cuadrado: (2x + 3y)^2",
            options: ["4x^2 + 9y^2", "4x^2 + 12xy + 9y^2", "4x^2 + 6xy + 9y^2", "2x^2 + 12xy + 3y^2"],
            answer: "4x^2 + 12xy + 9y^2",
            explanation: "Fórmula: (a+b)² = a² + 2ab + b². Obtenemos (2x)² + 2(2x)(3y) + (3y)² = 4x² + 12xy + 9y²."
          },
          {
            id: "qm2_1_2",
            type: "multiple-choice",
            question: "Factoriza por término común: 14x^2y^2 - 28x^3y^4 + 56x^5y^3",
            options: [
              "14x^2y^2 (1 - 2xy^2 + 4x^3y)",
              "7x^2y^2 (2 - 4xy^2 + 8x^3y)",
              "14xy (x y - 2x^2y^3 + 4x^4y^2)",
              "14x^2y^2 (1 + 2xy^2 - 4x^3y)"
            ],
            answer: "14x^2y^2 (1 - 2xy^2 + 4x^3y)",
            explanation: "Extraemos el MCD numérico 14 y las potencias menores comunes x^2 y y^2."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Ecuaciones y Modelos",
    subtitle: "Temporada 3",
    description: "Aprende a resolver ecuaciones lineales, resolver problemas verbales de la vida real y dominar la fórmula general cuadrática.",
    badge: "⚖️",
    difficulty: "Intermedio",
    lessons: [
      {
        id: "m3_1",
        name: "Ecuaciones y Problemas",
        xpAward: 25,
        questions: [
          {
            id: "qm3_1_1",
            type: "multiple-choice",
            question: "Si al doble de un número se le resta su mitad, resulta 54. ¿Cuál es ese número?",
            options: ["24", "36", "48", "18"],
            answer: "36",
            explanation: "Ecuación: 2x - x/2 = 54 => 3x/2 = 54 => 3x = 108 => x = 36."
          },
          {
            id: "qm3_1_2",
            type: "multiple-choice",
            question: "Una granja tiene cerdos y gallinas. Hay un total de 35 cabezas y 116 patas. ¿Cuántos cerdos y gallinas hay?",
            options: ["20 cerdos y 15 gallinas", "23 cerdos y 12 gallinas", "15 cerdos y 20 gallinas", "25 cerdos y 10 gallinas"],
            answer: "23 cerdos y 12 gallinas",
            explanation: "Resolviendo el sistema: c + g = 35 y 4c + 2g = 116. Restando obtenemos c = 23 y g = 12."
          }
        ]
      }
    ]
  }
];

const mathCodexData = [
  {
    id: "pitagoras",
    name: "Pitágoras de Samos",
    period: "Grecia Antigua (570 – 495 a.C.)",
    concept: "Teorema de Pitágoras & Armonía",
    avatar: "📐",
    moduleRequired: 1,
    quote: "Los números gobiernan el universo.",
    bio: "Líder de la mística escuela pitagórica. Concibió al número como la esencia de todas las cosas y formuló su teorema sobre triángulos rectángulos.",
    curiosity: "La secta prohibía estrictamente comer habas."
  },
  {
    id: "euclides",
    name: "Euclides de Alejandría",
    period: "Grecia Clásica (325 – 265 a.C.)",
    concept: "Axiomas & Geometría",
    avatar: "📏",
    moduleRequired: 2,
    quote: "No hay un camino real hacia la geometría.",
    bio: "El Padre de la Geometría. Estructuró todo el conocimiento geométrico a partir de sus Elementos con 5 postulados esenciales.",
    curiosity: "Respondio a Ptolomeo que la geometría exige esfuerzo y dedicación."
  }
];

// ==========================================
// 2. AUDIO SYNTHESIZER ENGINE (Web Audio API)
// ==========================================

let audioCtx = null;
let ambientOsc = null;
let ambientGain = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

const playSound = {
  click: () => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) { console.warn("Audio Context blocked", e); }
  },

  correct: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + index * 0.06);
        gain.gain.setValueAtTime(0.15, now + index * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.06 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + index * 0.06);
        osc.stop(now + index * 0.06 + 0.3);
      });
    } catch (e) { console.warn("Audio blocked", e); }
  },

  incorrect: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.25);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, now);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 0.25);
    } catch (e) { console.warn("Audio blocked", e); }
  },

  victory: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [
        { f: 349.23, d: 0.15 },
        { f: 440.00, d: 0.15 },
        { f: 523.25, d: 0.15 },
        { f: 587.33, d: 0.3 },
        { f: 659.25, d: 0.3 },
        { f: 783.99, d: 0.6 }
      ];
      let accumulatedTime = 0;
      notes.forEach((note) => {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(note.f, now + accumulatedTime);
        osc2.frequency.setValueAtTime(note.f * 1.005, now + accumulatedTime);
        gain.gain.setValueAtTime(0.12, now + accumulatedTime);
        gain.gain.exponentialRampToValueAtTime(0.001, now + accumulatedTime + note.d);
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);
        osc1.start(now + accumulatedTime);
        osc1.stop(now + accumulatedTime + note.d);
        osc2.start(now + accumulatedTime);
        osc2.stop(now + accumulatedTime + note.d);
        accumulatedTime += note.d * 0.75;
      });
    } catch (e) { console.warn("Audio blocked", e); }
  },

  startAmbient: () => {
    try {
      const ctx = getAudioContext();
      if (ambientOsc) return;
      const now = ctx.currentTime;
      ambientGain = ctx.createGain();
      ambientGain.gain.setValueAtTime(0.0, now);
      ambientGain.gain.linearRampToValueAtTime(0.03, now + 2);
      ambientGain.connect(ctx.destination);
      let step = 0;
      const chords = [
        [220, 261.63, 329.63, 392],
        [174.61, 261.63, 349.23, 392],
        [261.63, 329.63, 392, 493.88],
        [196, 293.66, 392, 440]
      ];
      const playAmbientArpeggio = () => {
        if (!ambientGain) return;
        const chord = chords[step % chords.length];
        const noteFreq = chord[Math.floor(Math.random() * chord.length)];
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);
        noteGain.gain.setValueAtTime(1.0, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, ctx.currentTime);
        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(ambientGain);
        osc.start();
        osc.stop(ctx.currentTime + 1.3);
        step++;
        const delay = 500 + Math.random() * 200;
        ambientOsc = setTimeout(playAmbientArpeggio, delay);
      };
      playAmbientArpeggio();
    } catch (e) { console.warn("Ambient blocked", e); }
  },

  stopAmbient: () => {
    try {
      if (ambientOsc) { clearTimeout(ambientOsc); ambientOsc = null; }
      if (ambientGain) {
        const ctx = getAudioContext();
        ambientGain.gain.setValueAtTime(ambientGain.gain.value, ctx.currentTime);
        ambientGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
        setTimeout(() => {
          if (ambientGain) { ambientGain.disconnect(); ambientGain = null; }
        }, 600);
      }
    } catch (e) { console.warn("Ambient stop failed", e); }
  }
};

// ==========================================
// 3. APPLICATION STATE CONTROLLER
// ==========================================

const state = {
  activeUniverse: localStorage.getItem('active_universe') || 'portal',
  activeTab: 'dashboard',
  userXP: parseInt(localStorage.getItem('philo_xp'), 10) || 0,
  userGems: parseInt(localStorage.getItem('philo_gems'), 10) || 100,
  userHearts: parseInt(localStorage.getItem('philo_hearts'), 10) || 5,
  userStreak: parseInt(localStorage.getItem('philo_streak'), 10) || 1,
  completedLessons: JSON.parse(localStorage.getItem('philo_completed_lessons')) || [],
  mathCompletedLessons: JSON.parse(localStorage.getItem('math_completed_lessons')) || [],
  hasStreakShield: localStorage.getItem('philo_shield') === 'true',
  currentTheme: localStorage.getItem('philo_theme') || 'dark-deep',
  musicEnabled: false,
  effectsEnabled: true,

  // Active Lesson variables
  activeLesson: null,
  questionIndex: 0,
  selectedOption: null,
  sentenceWords: [],
  matchLeftSelected: null,
  matchRightSelected: null,
  matchedPairs: [],
  isAnswerChecked: false,
  isCorrect: false,
  lessonFinished: false,
  wrongAnswersCount: 0,
  mentorText: "¡Saludos, joven pensador! Busquemos hoy la sabiduría."
};

// Synchronize all variables to localStorage
function saveState() {
  localStorage.setItem('active_universe', state.activeUniverse);
  localStorage.setItem('philo_xp', state.userXP);
  localStorage.setItem('philo_gems', state.userGems);
  localStorage.setItem('philo_hearts', state.userHearts);
  localStorage.setItem('philo_streak', state.userStreak);
  localStorage.setItem('philo_completed_lessons', JSON.stringify(state.completedLessons));
  localStorage.setItem('math_completed_lessons', JSON.stringify(state.mathCompletedLessons));
  localStorage.setItem('philo_shield', state.hasStreakShield);
  localStorage.setItem('philo_theme', state.currentTheme);
}

// ==========================================
// 4. UI RENDER ENGINE (PORTAL & APP SCREENS)
// ==========================================

// Global DOM references
const portalScreen = document.getElementById('portal-screen');
const appScreen = document.getElementById('app-screen');
const lessonOverlay = document.getElementById('lesson-overlay');

function updateGlobalStats() {
  // Sync text stats
  document.getElementById('portal-xp').innerText = state.userXP;
  document.getElementById('portal-gems').innerText = state.userGems;
  document.getElementById('portal-streak').innerText = state.userStreak;

  document.getElementById('stat-xp').innerText = state.userXP + ' XP';
  document.getElementById('stat-gems').innerText = state.userGems + ' 💎';
  document.getElementById('stat-streak').innerText = state.userStreak + ' días';
  document.getElementById('stat-hearts').innerText = state.userHearts + ' / 5';

  // Apply user title
  let title = "Iniciado del Logos";
  if (state.activeUniverse === 'math') {
    if (state.userXP < 50) title = "Cero Absoluto";
    else if (state.userXP < 120) title = "Geómetras Aprendiz";
    else if (state.userXP < 250) title = "Calculista de Álgebra";
    else if (state.userXP < 450) title = "Científico de Ecuaciones";
    else if (state.userXP < 700) title = "Maestro Pitagórico";
    else title = "Arquitecto del Infinito 👑";
  } else {
    if (state.userXP < 50) title = "Iniciado del Logos";
    else if (state.userXP < 120) title = "Discípulo del Ágora";
    else if (state.userXP < 250) title = "Sofista Perspicaz";
    else if (state.userXP < 450) title = "Pensador Ilustrado";
    else if (state.userXP < 700) title = "Sabio de la Academia";
    else title = "Rey Filósofo 👑";
  }

  document.getElementById('user-avatar').innerText = title.charAt(0);
  document.getElementById('user-title').innerText = title;
}

function applyTheme(themeName) {
  state.currentTheme = themeName;
  saveState();

  const body = document.body;
  body.className = ''; // Reset classes
  body.style = ''; // Reset styles

  if (themeName === 'athena-classic') {
    body.classList.add('theme-athena');
    body.style.setProperty('--bg-primary', '#f4f4f7');
    body.style.setProperty('--bg-secondary', '#ffffff');
    body.style.setProperty('--bg-card', '#e8e8f0');
    body.style.setProperty('--bg-glass', 'rgba(255, 255, 255, 0.85)');
    body.style.setProperty('--border-glass', 'rgba(139, 92, 246, 0.15)');
    body.style.setProperty('--text-primary', '#1e1b4b');
    body.style.setProperty('--text-secondary', '#4f46e5');
    body.style.setProperty('--text-muted', '#6b7280');
    body.style.setProperty('--border-glass-light', 'rgba(0, 0, 0, 0.08)');
  } else if (themeName === 'chalkboard-math') {
    body.classList.add('theme-chalkboard');
    body.style.setProperty('--bg-primary', '#14251c');
    body.style.setProperty('--bg-secondary', '#1a3327');
    body.style.setProperty('--bg-card', '#214232');
    body.style.setProperty('--bg-glass', 'rgba(33, 66, 50, 0.8)');
    body.style.setProperty('--border-glass', 'rgba(255, 255, 255, 0.2)');
    body.style.setProperty('--text-primary', '#ffffff');
    body.style.setProperty('--text-secondary', '#a3cfbb');
    body.style.setProperty('--text-muted', '#789c89');
    body.style.setProperty('--accent-purple', '#a3cfbb');
    body.style.setProperty('--accent-purple-hover', '#c2e7d5');
    body.style.setProperty('--border-glass-light', 'rgba(255, 255, 255, 0.08)');
  } else if (themeName === 'cyberpunk-math') {
    body.classList.add('theme-cyberpunk');
    body.style.setProperty('--bg-primary', '#060309');
    body.style.setProperty('--bg-secondary', '#0e0817');
    body.style.setProperty('--bg-card', '#160d25');
    body.style.setProperty('--bg-glass', 'rgba(22, 13, 37, 0.7)');
    body.style.setProperty('--border-glass', '#06b6d4');
    body.style.setProperty('--text-primary', '#ffffff');
    body.style.setProperty('--text-secondary', '#a5f3fc');
    body.style.setProperty('--text-muted', '#475569');
    body.style.setProperty('--accent-purple', '#06b6d4');
    body.style.setProperty('--accent-purple-hover', '#22d3ee');
    body.style.setProperty('--accent-gold', '#d946ef');
  } else if (themeName === 'mateflix-crimson') {
    body.classList.add('theme-mateflix');
    body.style.setProperty('--bg-primary', '#090909');
    body.style.setProperty('--bg-secondary', '#121212');
    body.style.setProperty('--bg-card', '#1c1c1c');
    body.style.setProperty('--bg-glass', 'rgba(28, 28, 28, 0.75)');
    body.style.setProperty('--border-glass', '#e50914');
    body.style.setProperty('--text-primary', '#f5f5f5');
    body.style.setProperty('--text-secondary', '#cccccc');
    body.style.setProperty('--text-muted', '#777777');
    body.style.setProperty('--accent-purple', '#e50914');
    body.style.setProperty('--accent-purple-hover', '#ff1f2a');
  }
}

function renderActiveView() {
  // Hide all tab views
  document.querySelectorAll('.tab-view').forEach(v => {
    v.classList.add('hidden');
    v.classList.remove('active');
  });

  // Show selected active tab
  const activeView = document.getElementById('view-' + state.activeTab);
  if (activeView) {
    activeView.classList.remove('hidden');
    activeView.classList.add('active');
  }

  // Update navigation items state
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById('nav-btn-' + state.activeTab);
  if (activeBtn) activeBtn.classList.add('active');

  // Trigger sub-renderers
  if (state.activeTab === 'dashboard') {
    renderDashboardMap();
  } else if (state.activeTab === 'codex') {
    renderCodexGrid();
  }
}

function switchUniverse(universe) {
  state.activeUniverse = universe;
  state.activeTab = 'dashboard';
  saveState();

  if (universe === 'portal') {
    portalScreen.classList.remove('hidden');
    appScreen.classList.add('hidden');
    applyTheme('dark-deep'); // Restore standard space portal theme
  } else {
    portalScreen.classList.add('hidden');
    appScreen.classList.remove('hidden');

    // Toggle Math Laboratory subtab visibility
    const sandboxNav = document.getElementById('nav-btn-sandbox');
    if (universe === 'math') {
      sandboxNav.classList.remove('hidden');
      document.getElementById('logo-icon').innerText = '📐';
      document.getElementById('logo-title').innerText = 'Mateflix';
      document.getElementById('tab-label-dashboard').innerText = 'Temporadas';
      document.getElementById('tab-label-codex').innerText = 'Geómetras';
      document.getElementById('codex-title').innerText = 'El Códice de Geómetras';
      document.getElementById('codex-subtitle').innerText = 'Descubre a los geómetras y matemáticos más célebres de la historia.';
      applyTheme('mateflix-crimson'); // Math default theme is Mateflix crimson!
    } else {
      sandboxNav.classList.add('hidden');
      document.getElementById('logo-icon').innerText = '🦉';
      document.getElementById('logo-title').innerText = 'PhiloLingo';
      document.getElementById('tab-label-dashboard').innerText = 'Camino del Logos';
      document.getElementById('tab-label-codex').innerText = 'Códice de Sabios';
      document.getElementById('codex-title').innerText = 'El Códice de los Sabios';
      document.getElementById('codex-subtitle').innerText = 'Desbloquea los grandes filósofos completando sus lecciones.';
      applyTheme('dark-deep'); // Philosophy default theme
    }
  }

  updateGlobalStats();
  renderActiveView();
}

// ==========================================
// 5. RENDERING SENDEROS / DASHBOARD MAP
// ==========================================

function isModuleUnlocked(moduleId) {
  if (moduleId === 1) return true;

  if (state.activeUniverse === 'math') {
    const prevModule = mathLessonsData.find(m => m.id === moduleId - 1);
    if (!prevModule) return false;
    return prevModule.lessons.every(lesson => state.mathCompletedLessons.includes(lesson.id));
  } else {
    const prevModule = lessonsData.find(m => m.id === moduleId - 1);
    if (!prevModule) return false;
    return prevModule.lessons.every(lesson => state.completedLessons.includes(lesson.id));
  }
}

function isLessonUnlocked(lessonId, moduleId) {
  if (!isModuleUnlocked(moduleId)) return false;

  const dataset = state.activeUniverse === 'math' ? mathLessonsData : lessonsData;
  const module = dataset.find(m => m.id === moduleId);
  const lessonIdx = module.lessons.findIndex(l => l.id === lessonId);
  if (lessonIdx === 0) return true;

  const prevLesson = module.lessons[lessonIdx - 1];
  if (state.activeUniverse === 'math') {
    return state.mathCompletedLessons.includes(prevLesson.id);
  } else {
    return state.completedLessons.includes(prevLesson.id);
  }
}

function renderDashboardMap() {
  const container = document.getElementById('path-map-container');
  container.innerHTML = '';

  const universeHeader = document.createElement('div');
  universeHeader.className = 'path-header';
  universeHeader.innerHTML = `
    <h1>${state.activeUniverse === 'math' ? 'El Camino Matemático' : 'El Camino del Filósofo'}</h1>
    <p>${state.activeUniverse === 'math' ? 'Supera las temporadas del álgebra y modela el universo exacto.' : 'Domina las corrientes de pensamiento y asciende al nivel de Rey Filósofo.'}</p>
  `;
  container.appendChild(universeHeader);

  const dataset = state.activeUniverse === 'math' ? mathLessonsData : lessonsData;

  dataset.forEach((module) => {
    const moduleUnlocked = isModuleUnlocked(module.id);

    const moduleHeader = document.createElement('div');
    moduleHeader.className = 'question-bubble';
    moduleHeader.style.width = '100%';
    moduleHeader.style.marginBottom = '1.5rem';
    moduleHeader.style.background = moduleUnlocked ? 'var(--bg-glass)' : 'rgba(20, 20, 30, 0.4)';
    moduleHeader.style.opacity = moduleUnlocked ? '1' : '0.6';
    moduleHeader.style.borderStyle = moduleUnlocked ? 'solid' : 'dashed';
    moduleHeader.style.transform = 'none';

    moduleHeader.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
        <span style="font-size: 2rem;">${module.badge}</span>
        <div>
          <h3 style="font-size: 1.25rem; color: ${moduleUnlocked ? 'var(--text-primary)' : 'var(--text-muted)'};">
            ${module.subtitle}: {${module.title}}
          </h3>
          <span class="node-difficulty" style="color: var(--accent-gold);">Dificultad: ${module.difficulty}</span>
        </div>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">${module.description}</p>
    `;
    container.appendChild(moduleHeader);

    // List of lessons
    module.lessons.forEach((lesson, index) => {
      const unlocked = isLessonUnlocked(lesson.id, module.id);
      const completed = state.activeUniverse === 'math'
        ? state.mathCompletedLessons.includes(lesson.id)
        : state.completedLessons.includes(lesson.id);

      let nodeClass = 'locked';
      if (completed) nodeClass = 'completed';
      else if (unlocked) nodeClass = 'unlocked';

      const lessonNode = document.createElement('div');
      lessonNode.className = 'lesson-node';

      const nodeBtn = document.createElement('button');
      nodeBtn.className = `node-btn ${nodeClass}`;
      nodeBtn.disabled = !unlocked;
      nodeBtn.innerHTML = !unlocked ? '🔒' : `<span>${module.badge}</span>`;
      
      nodeBtn.addEventListener('click', () => {
        startLessonFlow(lesson);
      });

      const labelCard = document.createElement('div');
      labelCard.className = 'node-label-card';
      labelCard.innerHTML = `
        <span class="node-subtitle">${state.activeUniverse === 'math' ? 'Episodio' : 'Lección'} ${index + 1}</span>
        <div class="node-title" style="font-size: 0.85rem;">${lesson.name}</div>
        <span class="node-difficulty">Recompensa: +${lesson.xpAward} XP</span>
      `;

      lessonNode.appendChild(nodeBtn);
      lessonNode.appendChild(labelCard);

      // Connection Line
      if (index < module.lessons.length - 1) {
        const line = document.createElement('div');
        line.className = `path-line ${completed ? 'completed' : unlocked ? 'active' : ''}`;
        lessonNode.appendChild(line);
      }

      container.appendChild(lessonNode);
    });

    // Connection line to next module
    if (module.id < dataset.length) {
      const line = document.createElement('div');
      line.className = `path-line ${isModuleUnlocked(module.id + 1) ? 'completed' : ''}`;
      line.style.height = '60px';
      line.style.marginTop = '2rem';
      line.style.marginBottom = '2rem';
      container.appendChild(line);
    }
  });
}

// ==========================================
// 6. RENDERING CODEX CARD LIBRARY
// ==========================================

function renderCodexGrid() {
  const container = document.getElementById('codex-cards-grid-container');
  container.innerHTML = '';

  const dataset = state.activeUniverse === 'math' ? mathCodexData : codexData;

  dataset.forEach((character) => {
    const unlocked = isModuleUnlocked(character.moduleRequired);

    const wrapper = document.createElement('div');
    wrapper.className = 'codex-card-wrapper';

    const inner = document.createElement('div');
    inner.className = `codex-card-inner ${unlocked ? 'unlocked' : 'locked'}`;
    inner.addEventListener('click', () => {
      triggerSound('click');
    });

    // Front Side
    const front = document.createElement('div');
    front.className = `codex-card-front ${!unlocked ? 'locked' : ''}`;
    front.innerHTML = `
      <div class="philosopher-avatar">${unlocked ? character.avatar : '❓'}</div>
      <h3 class="philosopher-name">${character.name}</h3>
      <span class="philosopher-period">${character.period}</span>
      <div class="unlock-badge">${unlocked ? 'Desbloqueado' : `Completa Módulo ${character.moduleRequired}`}</div>
    `;

    inner.appendChild(front);

    // Back Side (if unlocked)
    if (unlocked) {
      const back = document.createElement('div');
      back.className = 'codex-card-back';
      back.innerHTML = `
        <div class="bio-header">
          <span class="bio-concept">${character.concept}</span>
          <h3 class="bio-name">${character.name}</h3>
        </div>
        <div class="bio-text">
          <p style="margin-bottom: 0.5rem;">${character.bio}</p>
          <p style="font-size: 0.72rem; border-top: 1px dashed var(--border-glass); padding-top: 0.5rem; font-style: normal;">
            💡 <strong>Curiosidad:</strong> ${character.curiosity}
          </p>
        </div>
        <div class="bio-quote">"${character.quote}"</div>
      `;
      inner.appendChild(back);
    }

    wrapper.appendChild(inner);
    container.appendChild(wrapper);
  });
}

// ==========================================
// 7. ACTIVE LESSON ENGINE (QUESTION POPULATOR)
// ==========================================

function startLessonFlow(lesson) {
  if (state.userHearts <= 0) {
    alert("❌ ¡No tienes vidas! Visita el Ágora (Tienda) para restaurar tus corazones.");
    state.activeTab = 'store';
    renderActiveView();
    return;
  }

  triggerSound('click');
  state.activeLesson = lesson;
  state.questionIndex = 0;
  state.selectedOption = null;
  state.sentenceWords = [];
  state.matchLeftSelected = null;
  state.matchRightSelected = null;
  state.matchedPairs = [];
  state.isAnswerChecked = false;
  state.isCorrect = false;
  state.lessonFinished = false;
  state.wrongAnswersCount = 0;

  lessonOverlay.classList.remove('hidden');
  document.getElementById('lesson-completion-zone').classList.add('hidden');
  document.getElementById('lesson-question-zone').classList.remove('hidden');
  document.getElementById('lesson-footer').className = 'lesson-footer';

  populateQuestion();
}

function populateQuestion() {
  const question = state.activeLesson.questions[state.questionIndex];

  // Progress Bar
  const progressPercent = (state.questionIndex / state.activeLesson.questions.length) * 100;
  document.getElementById('lesson-progress-bar').style.width = progressPercent + '%';
  document.getElementById('lesson-hearts-badge').innerText = state.userHearts;

  // Set Question Title
  document.getElementById('lesson-question-text').innerText = question.question;

  // Set Mentor Mood and Quote
  const displayMentor = document.getElementById('mentor-avatar-display');
  const quoteDisplay = document.getElementById('lesson-mentor-quote');

  if (state.activeUniverse === 'math') {
    displayMentor.innerText = '📐';
    quoteDisplay.innerText = '💬 ¡A resolver! Apliquemos las fórmulas correspondientes...';
  } else {
    displayMentor.innerText = '🤔';
    quoteDisplay.innerText = '💬 Analicemos con prudencia el siguiente dilema...';
  }

  // Populate Interactive Panel
  const interactiveContainer = document.getElementById('question-interactive-container');
  interactiveContainer.innerHTML = '';

  // Reset check button states
  document.getElementById('btn-check-answer').classList.remove('hidden');
  document.getElementById('btn-check-answer').disabled = true;
  document.getElementById('btn-next-question').classList.add('hidden');
  document.getElementById('feedback-slide-box').classList.add('hidden');
  document.getElementById('default-footer-instructions').classList.remove('hidden');

  if (question.type === 'multiple-choice' || question.type === 'true-false') {
    const grid = document.createElement('div');
    grid.className = `options-grid ${question.options.length === 2 ? 'two-cols' : ''}`;

    question.options.forEach((opt, idx) => {
      const alphabet = ['A', 'B', 'C', 'D'];
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-badge">${alphabet[idx]}</span> <span>${opt}</span>`;
      
      btn.addEventListener('click', () => {
        if (state.isAnswerChecked) return;
        triggerSound('click');
        state.selectedOption = opt;
        
        // Remove selection highlights
        grid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        document.getElementById('btn-check-answer').disabled = false;
      });

      grid.appendChild(btn);
    });

    interactiveContainer.appendChild(grid);

  } else if (question.type === 'fill-in-the-blank') {
    const wrapper = document.createElement('div');
    wrapper.style.width = '100%';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';

    const dropzone = document.createElement('div');
    dropzone.className = 'sentence-dropzone';
    dropzone.style.fontSize = '1.25rem';
    dropzone.style.padding = '1.5rem';
    dropzone.style.borderStyle = 'solid';
    dropzone.style.color = 'var(--text-primary)';

    const buildDropzoneHTML = (val) => {
      if (question.text) {
        const parts = question.text.split('________');
        return `${parts[0]}<span style="border-bottom: 2px solid var(--accent-purple); padding: 0 1rem; color: var(--accent-gold); font-weight: 700;">${val || "________"}</span>${parts[1] || ''}`;
      } else {
        return `<span style="color: var(--accent-gold); font-weight: 700;">${val || "________"}</span>`;
      }
    };

    dropzone.innerHTML = buildDropzoneHTML(null);

    const bank = document.createElement('div');
    bank.className = 'words-bank';

    question.options.forEach((opt) => {
      const tile = document.createElement('button');
      tile.className = 'word-tile';
      tile.innerText = opt;

      tile.addEventListener('click', () => {
        if (state.isAnswerChecked) return;
        triggerSound('click');
        state.selectedOption = opt;

        bank.querySelectorAll('.word-tile').forEach(t => t.classList.remove('used'));
        tile.classList.add('used');

        dropzone.innerHTML = buildDropzoneHTML(opt);
        document.getElementById('btn-check-answer').disabled = false;
      });

      bank.appendChild(tile);
    });

    wrapper.appendChild(dropzone);
    wrapper.appendChild(bank);
    interactiveContainer.appendChild(wrapper);

  } else if (question.type === 'sentence-builder') {
    const wrapper = document.createElement('div');
    wrapper.style.width = '100%';

    const dropzone = document.createElement('div');
    dropzone.className = 'sentence-dropzone';
    dropzone.style.flexDirection = 'column';
    dropzone.style.gap = '0.5rem';
    dropzone.style.minHeight = '120px';
    dropzone.innerHTML = `<span style="color: var(--text-muted); font-size: 0.9rem;">Haz clic en los enunciados de abajo para ordenarlos paso a paso...</span>`;

    const bank = document.createElement('div');
    bank.className = 'words-bank';
    bank.style.flexDirection = 'column';
    bank.style.gap = '0.5rem';

    const renderSentenceBuilder = () => {
      // Re-populate Dropzone
      dropzone.innerHTML = '';
      if (state.sentenceWords.length === 0) {
        dropzone.innerHTML = `<span style="color: var(--text-muted); font-size: 0.9rem;">Haz clic en los enunciados de abajo para ordenarlos paso a paso...</span>`;
      } else {
        state.sentenceWords.forEach((word, wIdx) => {
          const tile = document.createElement('button');
          tile.className = 'word-tile';
          tile.style.width = '100%';
          tile.style.textAlign = 'left';
          tile.style.display = 'flex';
          tile.style.gap = '0.75rem';
          tile.innerHTML = `<span style="color: var(--accent-gold); font-weight: bold;">${wIdx + 1}.</span> <span>${word}</span>`;
          
          tile.addEventListener('click', () => {
            if (state.isAnswerChecked) return;
            triggerSound('click');
            state.sentenceWords = state.sentenceWords.filter(w => w !== word);
            renderSentenceBuilder();
          });

          dropzone.appendChild(tile);
        });
      }

      // Sync bank tiles disabled/enabled
      bank.querySelectorAll('.word-tile').forEach((btn) => {
        const wordVal = btn.getAttribute('data-word');
        if (state.sentenceWords.includes(wordVal)) {
          btn.classList.add('used');
          btn.disabled = true;
        } else {
          btn.classList.remove('used');
          btn.disabled = false;
        }
      });

      // Enable check button if all elements are in the dropzone
      document.getElementById('btn-check-answer').disabled = (state.sentenceWords.length !== question.words.length);
    };

    question.words.forEach((word) => {
      const tile = document.createElement('button');
      tile.className = 'word-tile';
      tile.style.width = '100%';
      tile.style.textAlign = 'left';
      tile.innerText = word;
      tile.setAttribute('data-word', word);

      tile.addEventListener('click', () => {
        if (state.isAnswerChecked) return;
        triggerSound('click');
        if (!state.sentenceWords.includes(word)) {
          state.sentenceWords.push(word);
        }
        renderSentenceBuilder();
      });

      bank.appendChild(tile);
    });

    wrapper.appendChild(dropzone);
    wrapper.appendChild(bank);
    interactiveContainer.appendChild(wrapper);

  } else if (question.type === 'match') {
    const wrapper = document.createElement('div');
    wrapper.className = 'match-container';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '1rem';

    const descSpan = document.createElement('span');
    descSpan.style.fontSize = '0.85rem';
    descSpan.style.color = 'var(--text-muted)';
    descSpan.style.textAlign = 'center';
    descSpan.style.display = 'block';
    descSpan.innerText = 'Selecciona un elemento de la izquierda y luego su correspondencia a la derecha.';
    wrapper.appendChild(descSpan);

    const colsRow = document.createElement('div');
    colsRow.style.display = 'flex';
    colsRow.style.gap = '1.5rem';
    colsRow.style.width = '100%';

    const leftCol = document.createElement('div');
    leftCol.className = 'match-column';

    const rightCol = document.createElement('div');
    rightCol.className = 'match-column';

    // Populate Left Column
    question.pairs.forEach((pair) => {
      const btn = document.createElement('button');
      btn.className = 'match-item clickable';
      btn.innerText = pair.left;

      btn.addEventListener('click', () => {
        if (state.isAnswerChecked) return;
        if (state.matchedPairs.some(p => p.left === pair.left)) return;
        
        triggerSound('click');
        state.matchLeftSelected = pair.left;
        leftCol.querySelectorAll('.match-item').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        checkMatchColumns();
      });

      leftCol.appendChild(btn);
    });

    // Populate Right Column sorted alphabetically
    const sortedRights = question.pairs.map(p => p.right).sort();
    sortedRights.forEach((rightItem) => {
      const btn = document.createElement('button');
      btn.className = 'match-item clickable';
      btn.innerText = rightItem;

      btn.addEventListener('click', () => {
        if (state.isAnswerChecked) return;
        if (state.matchedPairs.some(p => p.right === rightItem)) return;

        triggerSound('click');
        state.matchRightSelected = rightItem;
        rightCol.querySelectorAll('.match-item').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        checkMatchColumns();
      });

      rightCol.appendChild(btn);
    });

    const checkMatchColumns = () => {
      if (state.matchLeftSelected && state.matchRightSelected) {
        const match = question.pairs.find(p => p.left === state.matchLeftSelected && p.right === state.matchRightSelected);
        
        if (match) {
          state.matchedPairs.push({ left: state.matchLeftSelected, right: state.matchRightSelected });
          triggerSound('click');

          // Highlight matched items
          leftCol.querySelectorAll('.match-item').forEach(b => {
            if (b.innerText === state.matchLeftSelected) {
              b.classList.add('matched');
              b.classList.remove('selected');
            }
          });
          rightCol.querySelectorAll('.match-item').forEach(b => {
            if (b.innerText === state.matchRightSelected) {
              b.classList.add('matched');
              b.classList.remove('selected');
            }
          });
        } else {
          // Clear styles on error
          leftCol.querySelectorAll('.match-item').forEach(b => b.classList.remove('selected'));
          rightCol.querySelectorAll('.match-item').forEach(b => b.classList.remove('selected'));
          triggerSound('incorrect');
        }

        // Reset selections
        state.matchLeftSelected = null;
        state.matchRightSelected = null;

        // Enable check if all matched
        document.getElementById('btn-check-answer').disabled = (state.matchedPairs.length !== question.pairs.length);
      }
    };

    colsRow.appendChild(leftCol);
    colsRow.appendChild(rightCol);
    wrapper.appendChild(colsRow);
    interactiveContainer.appendChild(wrapper);
  }
}

function processCheckAnswer() {
  const question = state.activeLesson.questions[state.questionIndex];
  let correct = false;

  if (question.type === 'multiple-choice' || question.type === 'true-false' || question.type === 'fill-in-the-blank') {
    correct = state.selectedOption === question.answer;
  } else if (question.type === 'sentence-builder') {
    correct = JSON.stringify(state.sentenceWords) === JSON.stringify(question.correctOrder);
  } else if (question.type === 'match') {
    correct = state.matchedPairs.length === question.pairs.length;
  }

  state.isCorrect = correct;
  state.isAnswerChecked = true;

  const displayMentor = document.getElementById('mentor-avatar-display');
  const quoteDisplay = document.getElementById('lesson-mentor-quote');
  const checkBtn = document.getElementById('btn-check-answer');
  const nextBtn = document.getElementById('btn-next-question');
  const feedbackBox = document.getElementById('feedback-slide-box');
  const footerFeedback = document.getElementById('lesson-footer');
  const defaultFooterInstructions = document.getElementById('default-footer-instructions');

  checkBtn.classList.add('hidden');
  nextBtn.classList.remove('hidden');
  defaultFooterInstructions.classList.add('hidden');
  feedbackBox.classList.remove('hidden');

  if (correct) {
    triggerSound('correct');
    displayMentor.innerText = '🎉';
    
    // Set success quote
    const quotes = state.activeUniverse === 'math' ? [
      "¡Excelente cálculo! Exacto como un teorema de Euclides.",
      "¡Brillante! Has operado a la perfección.",
      "¡Resuelto con maestría!",
      "La precisión matemática habita en tu mente."
    ] : [
      "¡Brillante! Has desentrañado la verdad.",
      "¡Excelente! Muy bien razonado.",
      "¡Aristóteles asentiría con orgullo!",
      "La sabiduría del Logos corre por tus venas."
    ];
    quoteDisplay.innerText = '💬 ' + quotes[Math.floor(Math.random() * quotes.length)];

    footerFeedback.className = 'lesson-footer correct';
    document.getElementById('feedback-icon-box').innerText = '✔️';
    document.getElementById('feedback-title-box').innerText = '¡Excelente Trabajo!';
    document.getElementById('feedback-desc-box').innerText = question.explanation;
  } else {
    triggerSound('incorrect');
    displayMentor.innerText = state.activeUniverse === 'math' ? '📐' : '🧐';

    // Set fail quote
    const quotes = state.activeUniverse === 'math' ? [
      "Casi... un error de signo puede cambiarlo todo. ¡Prueba otra vez!",
      "Incorrecto. Pero de los errores matemáticos nace el análisis riguroso.",
      "Ten cuidado con el despeje o la ley de signos.",
      "Revisa bien el procedimiento algebraico."
    ] : [
      "Casi... recuerda que la duda es el principio del saber.",
      "Sócrates nos diría: 'Solo sé que no sé nada'. ¡Prueba de nuevo!",
      "Incorrecto. Pero el error es un gran catalizador de la verdad.",
      "Tu alma aún necesita recordar esta Idea platónica."
    ];
    quoteDisplay.innerText = '💬 ' + quotes[Math.floor(Math.random() * quotes.length)];

    footerFeedback.className = 'lesson-footer incorrect';
    document.getElementById('feedback-icon-box').innerText = '❌';
    document.getElementById('feedback-title-box').innerText = 'Oh, no es del todo correcto';
    document.getElementById('feedback-desc-box').innerText = question.explanation;

    // Deduct hearts
    state.userHearts = Math.max(0, state.userHearts - 1);
    state.wrongAnswersCount++;
    saveState();
    updateGlobalStats();

    // Shake question card
    const card = document.getElementById('lesson-question-zone');
    card.classList.add('shake-card');
    setTimeout(() => card.classList.remove('shake-card'), 450);
  }
}

function processNextQuestion() {
  if (state.userHearts <= 0) {
    triggerSound('incorrect');
    alert("💔 ¡Has perdido todas tus vidas! Regresa al Ágora (Tienda) para recargarlas.");
    lessonOverlay.classList.add('hidden');
    state.activeTab = 'store';
    renderActiveView();
    return;
  }

  const nextIndex = state.questionIndex + 1;
  if (nextIndex < state.activeLesson.questions.length) {
    state.questionIndex = nextIndex;
    state.selectedOption = null;
    state.sentenceWords = [];
    state.matchLeftSelected = null;
    state.matchRightSelected = null;
    state.matchedPairs = [];
    state.isAnswerChecked = false;
    state.isCorrect = false;

    populateQuestion();
  } else {
    // Lesson Finished arpeggio arpa!
    triggerSound('victory');
    state.lessonFinished = true;

    // Award Rewards
    const xpEarned = state.activeLesson.xpAward;
    const gemsEarned = Math.max(5, Math.floor(state.activeLesson.xpAward / 2) - state.wrongAnswersCount);

    state.userXP += xpEarned;
    state.userGems += gemsEarned;

    // Add to completed list
    if (state.activeUniverse === 'math') {
      if (!state.mathCompletedLessons.includes(state.activeLesson.id)) {
        state.mathCompletedLessons.push(state.activeLesson.id);
      }
    } else {
      if (!state.completedLessons.includes(state.activeLesson.id)) {
        state.completedLessons.push(state.activeLesson.id);
      }
    }

    saveState();
    updateGlobalStats();

    // Load congrats panel
    document.getElementById('lesson-question-zone').classList.add('hidden');
    document.getElementById('lesson-completion-zone').classList.remove('hidden');
    document.getElementById('lesson-progress-bar').style.width = '100%';

    document.getElementById('completion-emoji-display').innerText = state.activeUniverse === 'math' ? '📐📈' : '🦉🎓';
    document.getElementById('completion-message-display').innerText = state.activeUniverse === 'math'
      ? 'Tu mente se agudiza y domina la exactitud de las fórmulas.'
      : 'El Logos se fortalece con tu templanza. ¡Gran lección de sabiduría!';
    
    document.getElementById('completion-xp-award').innerText = '+' + xpEarned;
    document.getElementById('completion-gems-award').innerText = '+' + gemsEarned + ' 💎';

    // Hide footer check buttons
    document.getElementById('btn-next-question').classList.add('hidden');
    document.getElementById('feedback-slide-box').classList.add('hidden');
  }
}

// ==========================================
// 8. STORE LOGICAL TRANSACTIONS
// ==========================================

function handleBuyHearts() {
  triggerSound('click');
  if (state.userGems < 50) {
    alert("❌ No tienes suficientes Gemas de Sabiduría.");
    return;
  }
  if (state.userHearts >= 5) {
    alert("❤️ ¡Tus vidas ya están al máximo!");
    return;
  }
  state.userGems -= 50;
  state.userHearts = 5;
  saveState();
  updateGlobalStats();
  alert("❤️ ¡Has recargado tus vidas al máximo (5 corazones)!");
}

function handleBuyShield() {
  triggerSound('click');
  if (state.userGems < 75) {
    alert("❌ No tienes suficientes Gemas de Sabiduría.");
    return;
  }
  if (state.hasStreakShield) {
    alert("🛡️ ¡Ya tienes un Escudo de Racha activo!");
    return;
  }
  state.userGems -= 75;
  state.hasStreakShield = true;
  saveState();
  updateGlobalStats();
  alert("🛡️ ¡Escudo de Racha activado! Tu racha estará protegida contra olvidos de 1 día.");
}

// ==========================================
// 9. FORMULAS SANDBOX SOLVERS (MATH TAB)
// ==========================================

// Statistics logic
function runStatsCalculator() {
  try {
    const rawVal = document.getElementById('stats-input').value;
    const nums = rawVal
      .split(',')
      .map(n => parseFloat(n.trim()))
      .filter(n => !isNaN(n));

    if (nums.length === 0) {
      alert('Ingresa una lista de números válidos.');
      return;
    }

    // Sum & Mean
    const sum = nums.reduce((a, b) => a + b, 0);
    const mean = sum / nums.length;

    // Median
    const sorted = [...nums].sort((a, b) => a - b);
    let median;
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      median = sorted[mid];
    }

    // Mode
    const counts = {};
    let maxCount = 0;
    let modes = [];
    nums.forEach(n => {
      counts[n] = (counts[n] || 0) + 1;
      if (counts[n] > maxCount) maxCount = counts[n];
    });

    if (maxCount > 1) {
      for (const n in counts) {
        if (counts[n] === maxCount) modes.push(parseFloat(n));
      }
    }

    const box = document.getElementById('stats-results-box');
    box.classList.remove('hidden');

    const medianText = sorted.length % 2 === 0
      ? `Datos ordenados: [${sorted.join(', ')}]. Par de datos centrales: (${sorted[mid - 1]} y ${sorted[mid]}) => Promedio: (${sorted[mid - 1]} + ${sorted[mid]}) / 2 = ${median.toFixed(2)}`
      : `Datos ordenados: [${sorted.join(', ')}]. Impar de datos: El centro exacto es ${median.toFixed(2)}`;

    box.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: 1rem; text-align: center; border: 1px solid var(--border-glass-light);">
          <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; font-weight: bold;">Media</span>
          <div style="font-size: 2rem; font-weight: 800; color: var(--accent-purple-hover); margin-top: 0.5rem;">${mean.toFixed(2)}</div>
        </div>
        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: 1rem; text-align: center; border: 1px solid var(--border-glass-light);">
          <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; font-weight: bold;">Mediana</span>
          <div style="font-size: 2rem; font-weight: 800; color: var(--accent-gold); margin-top: 0.5rem;">${median.toFixed(2)}</div>
        </div>
        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: 1rem; text-align: center; border: 1px solid var(--border-glass-light);">
          <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; font-weight: bold;">Moda</span>
          <div style="font-size: 1.4rem; font-weight: 800; color: var(--color-correct); margin-top: 0.75rem;">
            ${modes.length > 0 ? modes.join(', ') : 'No hay moda'}
          </div>
        </div>
      </div>

      <div style="background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border-glass-light);">
        <h3 style="font-size: 1.15rem; color: var(--accent-gold); margin-bottom: 0.75rem;">Procedimiento Paso a Paso:</h3>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-primary);">
          <strong>1. Promedio (Media):</strong> Suma total de ${nums.length} datos = ${sum.toFixed(1)}. <br/>
          Dividimos: ${sum.toFixed(1)} / ${nums.length} = ${mean.toFixed(2)}
        </p>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-primary); margin-top: 0.75rem;">
          <strong>2. Mediana (Centro):</strong> <br/>
          ${medianText}
        </p>
      </div>
    `;
  } catch (e) { alert('Verifica el formato del listado.'); }
}

// Quadratic equation logic + SVG dynamic curve plotter
function runQuadraticCalculator() {
  const a = parseFloat(document.getElementById('quad-a').value);
  const b = parseFloat(document.getElementById('quad-b').value);
  const c = parseFloat(document.getElementById('quad-c').value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Ingresa valores numéricos válidos.');
    return;
  }
  if (a === 0) {
    alert('El valor de "a" no puede ser cero.');
    return;
  }

  const disc = b * b - 4 * a * c;
  let root1, root2;
  let type = '';

  if (disc > 0) {
    root1 = (-b + Math.sqrt(disc)) / (2 * a);
    root2 = (-b - Math.sqrt(disc)) / (2 * a);
    type = 'Dos raíces reales distintas';
  } else if (disc === 0) {
    root1 = root2 = -b / (2 * a);
    type = 'Una raíz real (multiplicidad 2)';
  } else {
    const real = (-b / (2 * a)).toFixed(2);
    const imag = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
    root1 = `${real} + ${imag}i`;
    root2 = `${real} - ${imag}i`;
    type = 'Dos raíces complejas conjugadas';
  }

  const vertexX = -b / (2 * a);
  const vertexY = a * vertexX * vertexX + b * vertexX + c;

  // Plotting points
  const points = [];
  const scaleX = 25;
  const scaleY = 15;
  const centerX = 150;
  const centerY = 100;

  for (let xVal = vertexX - 4; xVal <= vertexX + 4; xVal += 0.25) {
    const yVal = a * xVal * xVal + b * xVal + c;
    const svgX = centerX + (xVal - vertexX) * scaleX;
    const svgY = centerY - (yVal - vertexY) * scaleY;
    points.push(`${svgX},${svgY}`);
  }

  const box = document.getElementById('quad-results-box');
  box.classList.remove('hidden');

  box.innerHTML = `
    <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
      <!-- Graphic SVG Curve -->
      <div style="flex: 1 1 250px; display: flex; flex-direction: column; align-items: center;">
        <h3 style="font-size: 1rem; color: var(--text-secondary); margin-bottom: 0.75rem;">Curva de la Parábola</h3>
        <div style="background: #0e0b16; padding: 1rem; border-radius: 1.25rem; border: 2px solid var(--border-glass); box-shadow: var(--shadow-glow-purple);">
          <svg width="250" height="180" style="overflow: visible;">
            <defs>
              <pattern id="chalk-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(139, 92, 246, 0.07)" stroke-width="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chalk-grid)" />
            <line x1="0" y1="90" x2="250" y2="90" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
            <line x1="125" y1="0" x2="125" y2="180" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
            <polyline fill="none" stroke="var(--color-incorrect)" stroke-width="3" points="${points.join(' ')}" stroke-linecap="round" />
            <circle cx="125" cy="90" r="5" fill="var(--accent-gold)" />
            <text x="135" y="85" fill="var(--accent-gold)" font-size="9" font-weight="bold">Vértice</text>
          </svg>
        </div>
        <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">Ejes relativos al vértice de la función</span>
      </div>

      <!-- Descriptive Results -->
      <div style="flex: 1 1 300px; display: flex; flex-direction: column; gap: 1rem;">
        <div style="background: var(--bg-card); padding: 1rem; border-radius: 0.75rem; border: 1px solid var(--border-glass-light);">
          <span style="font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase;">Tipo de Discriminante</span>
          <div style="font-weight: bold; color: var(--accent-gold);">${type}</div>
        </div>

        <div style="display: flex; gap: 1rem;">
          <div style="flex: 1; background: var(--bg-card); padding: 1rem; border-radius: 0.75rem; text-align: center; border: 1px solid var(--border-glass-light);">
            <span style="font-size: 0.75rem; color: var(--text-secondary);">Raíz x₁</span>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--color-correct);">${typeof root1 === 'number' ? root1.toFixed(2) : root1}</div>
          </div>
          <div style="flex: 1; background: var(--bg-card); padding: 1rem; border-radius: 0.75rem; text-align: center; border: 1px solid var(--border-glass-light);">
            <span style="font-size: 0.75rem; color: var(--text-secondary);">Raíz x₂</span>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--color-correct);">${typeof root2 === 'number' ? root2.toFixed(2) : root2}</div>
          </div>
        </div>

        <div style="background: rgba(255,255,255,0.02); padding: 1rem; border-radius: 0.75rem; border: 1px solid var(--border-glass-light); font-size: 0.85rem;">
          <strong>Desglose algebraico:</strong> <br/>
          Discriminante (Δ) = b² - 4ac = (${b})² - 4(${a})(${c}) = ${disc} <br/>
          Vértice de la parábola V = (${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})
        </div>
      </div>
    </div>
  `;
}

// Cramer 2x2 linear system solver
function runCramerCalculator() {
  const a1 = parseFloat(document.getElementById('cramer-a1').value);
  const b1 = parseFloat(document.getElementById('cramer-b1').value);
  const c1 = parseFloat(document.getElementById('cramer-c1').value);
  const a2 = parseFloat(document.getElementById('cramer-a2').value);
  const b2 = parseFloat(document.getElementById('cramer-b2').value);
  const c2 = parseFloat(document.getElementById('cramer-c2').value);

  if ([a1, b1, c1, a2, b2, c2].some(v => isNaN(v))) {
    alert('Ingresa coeficientes válidos.');
    return;
  }

  const D = a1 * b2 - b1 * a2;
  const Dx = c1 * b2 - b1 * c2;
  const Dy = a1 * c2 - c1 * a2;

  const box = document.getElementById('cramer-results-box');
  box.classList.remove('hidden');

  if (D === 0) {
    box.innerHTML = `
      <div style="background: rgba(244,63,94,0.1); border: 1px solid var(--color-incorrect); padding: 1.5rem; border-radius: 1rem; color: var(--color-incorrect); text-align: center;">
        <strong>Determinante del sistema (D) = 0.</strong> <br/>
        ${Dx === 0 && Dy === 0 ? 'El sistema tiene infinitas soluciones (rectas coincidentes).' : 'El sistema no tiene solución (rectas paralelas).'}
      </div>
    `;
    return;
  }

  const x = Dx / D;
  const y = Dy / D;

  box.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
      <div style="background: var(--bg-card); padding: 1.25rem; border-radius: 1rem; text-align: center; border: 1px solid var(--border-glass-light);">
        <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase;">Solución x</span>
        <div style="font-size: 2rem; font-weight: 800; color: var(--color-correct);">${x.toFixed(2)}</div>
      </div>
      <div style="background: var(--bg-card); padding: 1.25rem; border-radius: 1rem; text-align: center; border: 1px solid var(--border-glass-light);">
        <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase;">Solución y</span>
        <div style="font-size: 2rem; font-weight: 800; color: var(--color-correct);">${y.toFixed(2)}</div>
      </div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.02); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border-glass-light); font-size: 0.95rem; line-height: 1.6;">
      <h3 style="font-size: 1.15rem; color: var(--accent-gold); margin-bottom: 1rem;">Resolución por Determinantes:</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; font-family: monospace; color: var(--text-secondary);">
        <div>
          <strong>D general:</strong> <br/>
          | ${a1}   ${b1} | <br/>
          | ${a2}   ${b2} | <br/>
          D = (${a1}*${b2}) - (${b1}*${a2}) = ${D}
        </div>
        <div>
          <strong>Determinante Dx:</strong> <br/>
          | ${c1}   ${b1} | <br/>
          | ${c2}   ${b2} | <br/>
          Dx = (${c1}*${b2}) - (${b1}*${c2}) = ${Dx}
        </div>
        <div>
          <strong>Determinante Dy:</strong> <br/>
          | ${a1}   ${c1} | <br/>
          | ${a2}   ${c2} | <br/>
          Dy = (${a1}*${c2}) - (${c1}*${a2}) = ${Dy}
        </div>
      </div>
      <div style="margin-top: 1rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 0.5rem;">
        x = Dx / D = ${Dx} / ${D} = ${x.toFixed(2)} <br/>
        y = Dy / D = ${Dy} / ${D} = ${y.toFixed(2)}
      </div>
    </div>
  `;
}

// ==========================================
// 10. SETUP EVENTS AND EVENT LISTENERS
// ==========================================

function setupEventListeners() {
  // Enter Philosophy Universe
  document.getElementById('btn-enter-philo').addEventListener('click', () => {
    switchUniverse('philosophy');
  });

  // Enter Math Universe
  document.getElementById('btn-enter-math').addEventListener('click', () => {
    switchUniverse('math');
  });

  // Sidebar back to portal button
  document.getElementById('nav-btn-universe').addEventListener('click', () => {
    switchUniverse('portal');
  });

  // Primary Nav bar selectors
  document.getElementById('nav-btn-dashboard').addEventListener('click', () => {
    triggerSound('click');
    state.activeTab = 'dashboard';
    renderActiveView();
  });

  document.getElementById('nav-btn-sandbox').addEventListener('click', () => {
    triggerSound('click');
    state.activeTab = 'sandbox';
    renderActiveView();
  });

  document.getElementById('nav-btn-codex').addEventListener('click', () => {
    triggerSound('click');
    state.activeTab = 'codex';
    renderActiveView();
  });

  document.getElementById('nav-btn-store').addEventListener('click', () => {
    triggerSound('click');
    state.activeTab = 'store';
    renderActiveView();
  });

  // Ambient music toggle
  const musicCheck = document.getElementById('music-checkbox');
  musicCheck.addEventListener('change', (e) => {
    triggerSound('click');
    state.musicEnabled = e.target.checked;
    if (state.musicEnabled) {
      playSound.startAmbient();
    } else {
      playSound.stopAmbient();
    }
  });

  // Store click triggers
  document.getElementById('store-buy-hearts').addEventListener('click', handleBuyHearts);
  document.getElementById('store-buy-shield').addEventListener('click', handleBuyShield);

  // Store Theme activation buttons
  document.querySelectorAll('.btn-theme-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.getAttribute('data-theme');
      buyTheme(targetTheme);
    });
  });

  // Lesson actions: Check and Continue
  document.getElementById('btn-check-answer').addEventListener('click', processCheckAnswer);
  document.getElementById('btn-next-question').addEventListener('click', processNextQuestion);

  // Lesson close overlay button
  document.getElementById('lesson-close-btn').addEventListener('click', () => {
    triggerSound('click');
    lessonOverlay.classList.add('hidden');
  });

  // Congrats close button
  document.getElementById('btn-conclude-lesson').addEventListener('click', () => {
    triggerSound('click');
    lessonOverlay.classList.add('hidden');
  });

  // Sandbox subtabs selections
  document.getElementById('subtab-btn-stats').addEventListener('click', () => {
    toggleSandboxSubtab('stats');
  });
  document.getElementById('subtab-btn-quad').addEventListener('click', () => {
    toggleSandboxSubtab('quad');
  });
  document.getElementById('subtab-btn-cramer').addEventListener('click', () => {
    toggleSandboxSubtab('cramer');
  });

  // Sandbox calculations triggers
  document.getElementById('stats-calc-btn').addEventListener('click', runStatsCalculator);
  document.getElementById('quad-calc-btn').addEventListener('click', runQuadraticCalculator);
  document.getElementById('cramer-calc-btn').addEventListener('click', runCramerCalculator);
}

function toggleSandboxSubtab(subtab) {
  triggerSound('click');
  document.querySelectorAll('.subtab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.subtab-content').forEach(c => c.classList.add('hidden'));

  document.getElementById('subtab-btn-' + subtab).classList.add('active');
  document.getElementById('subtab-content-' + subtab).classList.remove('hidden');
}

// ==========================================
// 11. BOOTSTRAP INITIALIZATION
// ==========================================

function initApp() {
  applyTheme(state.currentTheme);
  switchUniverse(state.activeUniverse);
  setupEventListeners();
  updateGlobalStats();
  renderActiveView();
}

// Start application when DOM is fully loaded
window.addEventListener('DOMContentLoaded', initApp);
