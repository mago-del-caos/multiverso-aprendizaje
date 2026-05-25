// =========================================================================
// MATE-GO 🐱🌸: MATEMÁTICAS IV ADORABLES Y DIVERTIDAS
// Core Javascript Engine (NATIVE ZERO DEPENDENCY SINGLE-PAGE APPLICATION)
// =========================================================================

// ==========================================
// 1. DATA LAYER (Kawaii Syllabus & Codex)
// ==========================================

const mathLessonsData = [
  {
    id: 1,
    title: "Pastel de Números",
    subtitle: "Temporada 1",
    description: "Estudia las medidas estadísticas de tendencia central, simplifica con leyes de exponentes y domina la notación científica de forma adorable.",
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
            explanation: "Sumamos todas las calificaciones: 8.5 + 9.0 + 7.5 + 8.0 + 9.5 = 42.5. Luego dividimos por el número de exámenes: 42.5 / 5 = 8.5, ¡nya! 🌸"
          },
          {
            id: "qm1_1_2",
            type: "multiple-choice",
            question: "Los libros leídos por 7 estudiantes fueron: 3, 1, 4, 2, 5, 1, 6. ¿Cuál es la mediana de libros leídos?",
            options: ["2", "3", "4", "1"],
            answer: "3",
            explanation: "Ordenamos los datos: 1, 1, 2, 3, 4, 5, 6. Como hay 7 datos (impar), la mediana es el dato del centro: el número 3. 🍡"
          },
          {
            id: "qm1_1_3",
            type: "fill-in-the-blank",
            question: "En una encuesta sobre el medio de transporte de 15 alumnos, se obtuvo: Metro (7 veces), Camión (4), Bicicleta (2) y Auto (2). ¿Cuál es la moda?",
            options: ["Metro", "Camión", "Bicicleta", "Auto"],
            answer: "Metro",
            explanation: "La moda es el dato que más se repite. En este caso, el Metro se repite 7 veces, ¡es el más popular! 🐱"
          },
          {
            id: "qm1_1_4",
            type: "true-false",
            question: "Si a un grupo de gastos ($30, $30, $30, $45, $50, $60, $75) con media de $45.7 se le agrega un estudiante que gastó $100, la nueva media aritmética aumenta a $52.5.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "La suma sube a $420 y el total de datos a 8. Calculamos 420 / 8 = $52.5. ¡La media subió por el valor extremo! 🎀"
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
            explanation: "La ley del exponente negativo establece que x^(-n) = 1 / x^n. ¡Super sencillo, nya! ✨"
          },
          {
            id: "qm1_2_2",
            type: "multiple-choice",
            question: "Resuelve y simplifica aplicando las leyes de exponentes: (y^2)^4",
            options: ["y^6", "y^8", "2y^4", "y^16"],
            answer: "y^8",
            explanation: "Multiplicamos los exponentes en potencia de potencia: 2 * 4 = 8, obteniendo y^8. 🍭"
          },
          {
            id: "qm1_2_3",
            type: "fill-in-the-blank",
            question: "Simplifica la expresión multiplicando las bases iguales: (z^3)(z^2)",
            options: ["z^6", "z^5", "5z", "z^1"],
            answer: "z^5",
            explanation: "Al multiplicar bases iguales, se conserva la base y se suman los exponentes: z^(3+2) = z^5. 🧸"
          }
        ]
      },
      {
        id: "m1_3",
        name: "Notación Científica",
        xpAward: 25,
        questions: [
          {
            id: "qm1_3_1",
            type: "multiple-choice",
            question: "Resuelve la multiplicación y expresa el resultado: (1.5 x 10^8) x 3",
            options: ["4.5 x 10^8", "4.5 x 10^24", "1.5 x 10^24", "45 x 10^7"],
            answer: "4.5 x 10^8",
            explanation: "Multiplicamos los coeficientes decimales: 1.5 x 3 = 4.5. Conservamos la potencia de 10 intacta: 4.5 x 10^8. 🌸"
          },
          {
            id: "qm1_3_2",
            type: "true-false",
            question: "El resultado de sumar 3.2 x 10^4 + 1.5 x 10^3 es igual a 3.35 x 10^4.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "Convertimos 1.5 x 10^3 a 0.15 x 10^4 para poder sumar: (3.2 + 0.15) x 10^4 = 3.35 x 10^4. 🍡"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Magia Algebraica",
    subtitle: "Temporada 2",
    description: "Realiza operaciones con expresiones polinomiales, resuelve productos notables y aplica métodos de factorización.",
    badge: "🌸",
    difficulty: "Intermedio",
    lessons: [
      {
        id: "m2_1",
        name: "Operaciones y Productos Notables",
        xpAward: 25,
        questions: [
          {
            id: "qm2_1_1",
            type: "multiple-choice",
            question: "Simplifica la siguiente suma algebraica: (4x^2 + 3xy - 5y^2) + (6xy - 7x^2 + 8y^2) + (-xy - x^2 - 2y^2)",
            options: ["-4x^2 + 8xy + y^2", "-4x^2 + 9xy + y^2", "-3x^2 + 8xy - y^2", "x^2 + xy + y^2"],
            answer: "-4x^2 + 8xy + y^2",
            explanation: "Agrupamos semejantes: 4 - 7 - 1 = -4x^2; 3 + 6 - 1 = 8xy; -5 + 8 - 2 = 1y^2. ¡Listo, nya! 🐱"
          },
          {
            id: "qm2_1_2",
            type: "multiple-choice",
            question: "Desarrolla el binomio al cuadrado: (2x + 3y)^2",
            options: ["4x^2 + 9y^2", "4x^2 + 12xy + 9y^2", "4x^2 + 6xy + 9y^2", "2x^2 + 12xy + 3y^2"],
            answer: "4x^2 + 12xy + 9y^2",
            explanation: "Fórmula (a+b)² = a² + 2ab + b². Obtenemos (2x)² + 2(2x)(3y) + (3y)² = 4x² + 12xy + 9y². 🎀"
          }
        ]
      },
      {
        id: "m2_2",
        name: "El Arte de la Factorización",
        xpAward: 30,
        questions: [
          {
            id: "qm2_2_1",
            type: "multiple-choice",
            question: "Factoriza la expresión por término común: 14x^2 y^2 - 28x^3 y^4 + 56x^5 y^3",
            options: [
              "14x^2 y^2 (1 - 2xy^2 + 4x^3 y)",
              "7x^2 y^2 (2 - 4xy^2 + 8x^3 y)",
              "14xy (x y - 2x^2 y^3 + 4x^4 y^2)",
              "14x^2 y^2 (1 + 2xy^2 - 4x^3 y)"
            ],
            answer: "14x^2 y^2 (1 - 2xy^2 + 4x^3 y)",
            explanation: "Extraemos el MCD 14 y las menores potencias x^2 y y^2. 🍡"
          },
          {
            id: "qm2_2_2",
            type: "multiple-choice",
            question: "Resuelve la diferencia de cuadrados perfectos: 4a^2 - b^4",
            options: ["(2a - b^2)^2", "(2a - b^2)(2a + b^2)", "(2a - b)(2a + b)", "(4a - b^2)(a + b^2)"],
            answer: "(2a - b^2)(2a + b^2)",
            explanation: "La diferencia de cuadrados se factoriza en binomios conjugados: (2a - b^2)(2a + b^2), ¡nya! 🧸"
          },
          {
            id: "qm2_2_3",
            type: "match",
            question: "Empareja cada trinomio con su factorización algebraica correspondiente:",
            pairs: [
              { left: "a^2 - 2ab + b^2", right: "(a - b)^2" },
              { left: "49a^2 - 14a + 1", right: "(7a - 1)^2" },
              { left: "a^2 - 11a + 28", right: "(a - 7)(a - 4)" },
              { left: "x^2 - 5x - 36", right: "(x - 9)(x + 4)" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "El Reino de las Ecuaciones",
    subtitle: "Temporada 3",
    description: "Aprende a resolver ecuaciones lineales, resolver problemas verbales de la vida real y dominar la fórmula general cuadrática.",
    badge: "🎀",
    difficulty: "Intermedio",
    lessons: [
      {
        id: "m3_1",
        name: "Ecuaciones de 1° y 2° Grado",
        xpAward: 25,
        questions: [
          {
            id: "qm3_1_1",
            type: "multiple-choice",
            question: "Resuelve la ecuación de primer grado: 3(2x - 5) + 1 = -4x - (4 - 5x) + 5",
            options: ["x = 1", "x = 3", "x = -2", "x = 5"],
            answer: "x = 3",
            explanation: "Desarrollamos: 6x - 14 = x + 1 => 5x = 15 => x = 3. ¡Súper fácil! 🍭"
          },
          {
            id: "qm3_1_2",
            type: "multiple-choice",
            question: "Si al doble de un número se le resta su mitad, resulta 54. ¿Cuál es ese número?",
            options: ["24", "36", "48", "18"],
            answer: "36",
            explanation: "Ecuación: 2x - x/2 = 54 => 1.5x = 54 => x = 36. ✨"
          },
          {
            id: "qm3_1_3",
            type: "multiple-choice",
            question: "Resuelve empleando la fórmula general cuadrática: 2x^2 - 7x + 3 = 0",
            options: ["x = 3, x = 0.5", "x = -3, x = -0.5", "x = 2, x = 1.5", "x = 1, x = 3"],
            answer: "x = 3, x = 0.5",
            explanation: "a=2, b=-7, c=3. Discriminante = 49 - 24 = 25. x = [7 ± 5] / 4 => x1 = 3, x2 = 0.5. 🌸"
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
    curiosity: "La secta prohibía estrictamente comer habas, ¡nya! 🐱"
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
    curiosity: "Le gustaban mucho los trazos de colores pasteles."
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
  activeTab: 'dashboard',
  userXP: parseInt(localStorage.getItem('philo_xp'), 10) || 0,
  userGems: parseInt(localStorage.getItem('philo_gems'), 10) || 100,
  userHearts: parseInt(localStorage.getItem('philo_hearts'), 10) || 5,
  userStreak: parseInt(localStorage.getItem('philo_streak'), 10) || 1,
  mathCompletedLessons: JSON.parse(localStorage.getItem('math_completed_lessons')) || [],
  hasStreakShield: localStorage.getItem('philo_shield') === 'true',
  currentTheme: localStorage.getItem('philo_theme') || 'mochi-pink',
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
  mentorText: "¡Hola, nya! ¡Te doy la bienvenida a Mate-go! 🌸✨"
};

function saveState() {
  localStorage.setItem('philo_xp', state.userXP);
  localStorage.setItem('philo_gems', state.userGems);
  localStorage.setItem('philo_hearts', state.userHearts);
  localStorage.setItem('philo_streak', state.userStreak);
  localStorage.setItem('math_completed_lessons', JSON.stringify(state.mathCompletedLessons));
  localStorage.setItem('philo_shield', state.hasStreakShield);
  localStorage.setItem('philo_theme', state.currentTheme);
}

// ==========================================
// 4. UI RENDER ENGINE
// ==========================================

const appScreen = document.getElementById('app-screen');
const lessonOverlay = document.getElementById('lesson-overlay');

function updateGlobalStats() {
  document.getElementById('stat-xp').innerText = state.userXP + ' XP';
  document.getElementById('stat-gems').innerText = state.userGems + ' 🍭';
  document.getElementById('stat-streak').innerText = state.userStreak + ' días';
  document.getElementById('stat-hearts').innerText = state.userHearts + ' / 5';

  // Apply user title
  let title = "Cero Absoluto 🎀";
  if (state.userXP < 50) title = "Cero Absoluto 🎀";
  else if (state.userXP < 120) title = "Geómetra Aprendiz 🐱";
  else if (state.userXP < 250) title = "Calculista de Álgebra 🌸";
  else if (state.userXP < 450) title = "Científico de Ecuaciones 🎀";
  else if (state.userXP < 700) title = "Maestro Pitagórico 📐";
  else title = "Arquitecto del Infinito 👑";

  document.getElementById('user-avatar').innerText = '🐱';
  document.getElementById('user-title').innerText = title;
}

function applyTheme(themeName) {
  state.currentTheme = themeName;
  saveState();

  const body = document.body;
  body.className = ''; // Reset classes
  body.style = ''; // Reset styles

  if (themeName === 'mint-icecream') {
    body.classList.add('theme-mint-icecream');
    body.style.setProperty('--bg-primary', '#f0fdf4');
    body.style.setProperty('--bg-secondary', '#dcfce7');
    body.style.setProperty('--bg-card', '#bbf7d0');
    body.style.setProperty('--bg-glass', 'rgba(240, 253, 244, 0.85)');
    body.style.setProperty('--border-glass', '#4ade80');
    body.style.setProperty('--border-glass-light', 'rgba(74, 222, 128, 0.2)');
    body.style.setProperty('--accent-purple', '#4ade80');
    body.style.setProperty('--accent-purple-hover', '#22c55e');
    body.style.setProperty('--accent-purple-glow', 'rgba(74, 222, 128, 0.4)');
    body.style.setProperty('--text-primary', '#1f3a2b');
    body.style.setProperty('--text-secondary', '#355e46');
    body.style.setProperty('--text-muted', '#5e8c72');
  } else if (themeName === 'cyber-kawaii') {
    body.classList.add('theme-cyber-kawaii');
    body.style.setProperty('--bg-primary', '#faf5ff');
    body.style.setProperty('--bg-secondary', '#f3e8ff');
    body.style.setProperty('--bg-card', '#e9d5ff');
    body.style.setProperty('--bg-glass', 'rgba(250, 245, 255, 0.85)');
    body.style.setProperty('--border-glass', '#c084fc');
    body.style.setProperty('--border-glass-light', 'rgba(192, 132, 252, 0.2)');
    body.style.setProperty('--accent-purple', '#c084fc');
    body.style.setProperty('--accent-purple-hover', '#a855f7');
    body.style.setProperty('--accent-purple-glow', 'rgba(192, 132, 252, 0.4)');
    body.style.setProperty('--accent-gold', '#38bdf8');
    body.style.setProperty('--accent-gold-hover', '#0ea5e9');
    body.style.setProperty('--text-primary', '#3b224c');
    body.style.setProperty('--text-secondary', '#5e3b75');
    body.style.setProperty('--text-muted', '#8862a1');
  } else if (themeName === 'chalkboard-math') {
    body.classList.add('theme-chalkboard');
    body.style.setProperty('--bg-primary', '#1e352f');
    body.style.setProperty('--bg-secondary', '#27453d');
    body.style.setProperty('--bg-card', '#325a4f');
    body.style.setProperty('--bg-glass', 'rgba(30, 53, 47, 0.85)');
    body.style.setProperty('--border-glass', 'rgba(255, 255, 255, 0.25)');
    body.style.setProperty('--border-glass-light', 'rgba(255, 255, 255, 0.08)');
    body.style.setProperty('--accent-purple', '#ffb3c1');
    body.style.setProperty('--accent-purple-hover', '#ffccd5');
    body.style.setProperty('--accent-purple-glow', 'rgba(255, 179, 193, 0.4)');
    body.style.setProperty('--accent-gold', '#bbf7d0');
    body.style.setProperty('--accent-gold-hover', '#dcfce7');
    body.style.setProperty('--text-primary', '#ffffff');
    body.style.setProperty('--text-secondary', '#a3cfc1');
    body.style.setProperty('--text-muted', '#72968c');
  } else {
    body.classList.add('theme-mochi-pink');
  }
}

function renderActiveView() {
  document.querySelectorAll('.tab-view').forEach(v => {
    v.classList.add('hidden');
    v.classList.remove('active');
  });

  const activeView = document.getElementById('view-' + state.activeTab);
  if (activeView) {
    activeView.classList.remove('hidden');
    activeView.classList.add('active');
  }

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById('nav-btn-' + state.activeTab);
  if (activeBtn) activeBtn.classList.add('active');

  if (state.activeTab === 'dashboard') {
    renderDashboardMap();
  } else if (state.activeTab === 'codex') {
    renderCodexGrid();
  }
}

// ==========================================
// 5. RENDERING SENDEROS / DASHBOARD MAP
// ==========================================

function isModuleUnlocked(moduleId) {
  if (moduleId === 1) return true;
  const prevModule = mathLessonsData.find(m => m.id === moduleId - 1);
  if (!prevModule) return false;
  return prevModule.lessons.every(lesson => state.mathCompletedLessons.includes(lesson.id));
}

function isLessonUnlocked(lessonId, moduleId) {
  if (!isModuleUnlocked(moduleId)) return false;
  const module = mathLessonsData.find(m => m.id === moduleId);
  const lessonIdx = module.lessons.findIndex(l => l.id === lessonId);
  if (lessonIdx === 0) return true;
  const prevLesson = module.lessons[lessonIdx - 1];
  return state.mathCompletedLessons.includes(prevLesson.id);
}

function renderDashboardMap() {
  const container = document.getElementById('path-map-container');
  container.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'path-header';
  header.innerHTML = `
    <h1>El Camino de Mate-go 🐱🌸</h1>
    <p>Supera las temporadas del álgebra y modela el universo exacto de forma muy dulce.</p>
  `;
  container.appendChild(header);

  mathLessonsData.forEach((module) => {
    const moduleUnlocked = isModuleUnlocked(module.id);

    const moduleHeader = document.createElement('div');
    moduleHeader.className = 'question-bubble';
    moduleHeader.style.width = '100%';
    moduleHeader.style.marginBottom = '1.5rem';
    moduleHeader.style.background = moduleUnlocked ? 'var(--bg-glass)' : 'rgba(255, 255, 255, 0.3)';
    moduleHeader.style.opacity = moduleUnlocked ? '1' : '0.6';
    moduleHeader.style.border = '3px solid var(--text-primary)';
    moduleHeader.style.transform = 'none';

    moduleHeader.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
        <span style="font-size: 2rem;">${module.badge}</span>
        <div>
          <h3 style="font-size: 1.3rem; color: var(--text-primary);">
            ${module.subtitle}: ${module.title}
          </h3>
          <span class="node-difficulty" style="color: var(--accent-purple-hover); font-weight: bold;">Dificultad: ${module.difficulty}</span>
        </div>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-secondary);">${module.description}</p>
    `;
    container.appendChild(moduleHeader);

    module.lessons.forEach((lesson, index) => {
      const unlocked = isLessonUnlocked(lesson.id, module.id);
      const completed = state.mathCompletedLessons.includes(lesson.id);

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
        <span class="node-subtitle">Episodio ${index + 1}</span>
        <div class="node-title" style="font-size: 0.9rem; font-weight: bold;">${lesson.name}</div>
        <span class="node-difficulty">Recompensa: +${lesson.xpAward} XP</span>
      `;

      lessonNode.appendChild(nodeBtn);
      lessonNode.appendChild(labelCard);

      if (index < module.lessons.length - 1) {
        const line = document.createElement('div');
        line.className = `path-line`;
        lessonNode.appendChild(line);
      }

      container.appendChild(lessonNode);
    });

    if (module.id < mathLessonsData.length) {
      const line = document.createElement('div');
      line.className = `path-line`;
      line.style.height = '60px';
      line.style.marginTop = '2rem';
      line.style.marginBottom = '2rem';
      container.appendChild(line);
    }
  });
}

// ==========================================
// 6. RENDERING CODEX
// ==========================================

function renderCodexGrid() {
  const container = document.getElementById('codex-cards-grid-container');
  container.innerHTML = '';

  mathCodexData.forEach((character) => {
    const unlocked = isModuleUnlocked(character.moduleRequired);

    const wrapper = document.createElement('div');
    wrapper.className = 'codex-card-wrapper';

    const inner = document.createElement('div');
    inner.className = `codex-card-inner ${unlocked ? 'unlocked' : 'locked'}`;
    inner.addEventListener('click', () => {
      triggerSound('click');
    });

    const front = document.createElement('div');
    front.className = `codex-card-front ${!unlocked ? 'locked' : ''}`;
    front.innerHTML = `
      <div class="philosopher-avatar">${unlocked ? character.avatar : '❓'}</div>
      <h3 class="philosopher-name">${character.name}</h3>
      <span class="philosopher-period">${character.period}</span>
      <div class="unlock-badge">${unlocked ? 'Desbloqueado' : `Completa Módulo ${character.moduleRequired}`}</div>
    `;

    inner.appendChild(front);

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
          <p style="font-size: 0.78rem; border-top: 2px dashed var(--text-primary); padding-top: 0.5rem; font-style: normal;">
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
// 7. ACTIVE LESSON ENGINE
// ==========================================

function startLessonFlow(lesson) {
  if (state.userHearts <= 0) {
    alert("❌ ¡No tienes corazones! Visita la Tiendita de Mochi para recargarlos.");
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
  const progressPercent = (state.questionIndex / state.activeLesson.questions.length) * 100;
  document.getElementById('lesson-progress-bar').style.width = progressPercent + '%';
  document.getElementById('lesson-hearts-badge').innerText = state.userHearts;
  document.getElementById('lesson-question-text').innerText = question.question;

  const displayMentor = document.getElementById('mentor-avatar-display');
  const quoteDisplay = document.getElementById('lesson-mentor-quote');

  displayMentor.innerText = '🐱';
  quoteDisplay.innerText = '💬 ¡Hola, nya! Resolvamos este problema juntos...';

  const interactiveContainer = document.getElementById('question-interactive-container');
  interactiveContainer.innerHTML = '';

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
        return `${parts[0]}<span style="border-bottom: 3px solid var(--accent-purple); padding: 0 1rem; color: var(--accent-purple-hover); font-weight: 700;">${val || "________"}</span>${parts[1] || ''}`;
      } else {
        return `<span style="color: var(--accent-purple-hover); font-weight: 700;">${val || "________"}</span>`;
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

  } else if (question.type === 'match') {
    const wrapper = document.createElement('div');
    wrapper.className = 'match-container';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '1rem';

    const descSpan = document.createElement('span');
    descSpan.style.fontSize = '0.9rem';
    descSpan.style.color = 'var(--text-muted)';
    descSpan.style.textAlign = 'center';
    descSpan.style.display = 'block';
    descSpan.innerText = 'Selecciona una pareja compatible de ambos lados, ¡nya! 🌸';
    wrapper.appendChild(descSpan);

    const colsRow = document.createElement('div');
    colsRow.style.display = 'flex';
    colsRow.style.gap = '1.5rem';
    colsRow.style.width = '100%';

    const leftCol = document.createElement('div');
    leftCol.className = 'match-column';

    const rightCol = document.createElement('div');
    rightCol.className = 'match-column';

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
          leftCol.querySelectorAll('.match-item').forEach(b => b.classList.remove('selected'));
          rightCol.querySelectorAll('.match-item').forEach(b => b.classList.remove('selected'));
          triggerSound('incorrect');
        }

        state.matchLeftSelected = null;
        state.matchRightSelected = null;

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
    displayMentor.innerText = '😸';
    
    const quotes = [
      "¡Nya! ¡Excelente cálculo! Exacto y perfecto. 🌸✨",
      "¡Súper correcto! ¡Te has ganado un caramelo virtual! 🍭🐱",
      "¡Increíble! ¡Eres un genio matemático! 🍡🎀",
      "¡Eso es! Todo operado de forma maravillosa. 🧸✨"
    ];
    quoteDisplay.innerText = '💬 ' + quotes[Math.floor(Math.random() * quotes.length)];

    footerFeedback.className = 'lesson-footer correct';
    document.getElementById('feedback-icon-box').innerText = '✔️';
    document.getElementById('feedback-title-box').innerText = '¡Excelente Trabajo!';
    document.getElementById('feedback-desc-box').innerText = question.explanation;
  } else {
    triggerSound('incorrect');
    displayMentor.innerText = '😿';

    const quotes = [
      "¡Uyuuy! Casi lo tienes... ¡revisa el signo, nya! 🧸🎀",
      "¡Oh noes! Recuerda la ley de signos... ¡tú puedes! 😿🍭",
      "No te preocupes, ¡vamos a intentarlo de nuevo! 🌸✨",
      "¡Uy! Un error de cálculo, ¡pero sigamos practicando, nya! 🍡"
    ];
    quoteDisplay.innerText = '💬 ' + quotes[Math.floor(Math.random() * quotes.length)];

    footerFeedback.className = 'lesson-footer incorrect';
    document.getElementById('feedback-icon-box').innerText = '❌';
    document.getElementById('feedback-title-box').innerText = '¡Uy, casi casi!';
    document.getElementById('feedback-desc-box').innerText = question.explanation;

    state.userHearts = Math.max(0, state.userHearts - 1);
    state.wrongAnswersCount++;
    saveState();
    updateGlobalStats();

    const card = document.getElementById('lesson-question-zone');
    card.classList.add('shake-card');
    setTimeout(() => card.classList.remove('shake-card'), 450);
  }
}

function processNextQuestion() {
  if (state.userHearts <= 0) {
    triggerSound('incorrect');
    alert("💔 ¡Has perdido todos tus corazones! Regresa a la Tiendita de Mochi para recargarlos.");
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
    triggerSound('victory');
    state.lessonFinished = true;

    const xpEarned = state.activeLesson.xpAward;
    const gemsEarned = Math.max(5, Math.floor(state.activeLesson.xpAward / 2) - state.wrongAnswersCount);

    state.userXP += xpEarned;
    state.userGems += gemsEarned;

    if (!state.mathCompletedLessons.includes(state.activeLesson.id)) {
      state.mathCompletedLessons.push(state.activeLesson.id);
    }

    saveState();
    updateGlobalStats();

    document.getElementById('lesson-question-zone').classList.add('hidden');
    document.getElementById('lesson-completion-zone').classList.remove('hidden');
    document.getElementById('lesson-progress-bar').style.width = '100%';

    document.getElementById('completion-emoji-display').innerText = '🐱✨';
    document.getElementById('completion-message-display').innerText = '¡Nya! Has resuelto la lección de maravilla. ¡Caramelos para ti! 🍭🍡';
    
    document.getElementById('completion-xp-award').innerText = '+' + xpEarned;
    document.getElementById('completion-gems-award').innerText = '+' + gemsEarned + ' 🍭';

    document.getElementById('btn-next-question').classList.add('hidden');
    document.getElementById('feedback-slide-box').classList.add('hidden');
  }
}

// ==========================================
// 8. TIENDITA TRANSACTIONS
// ==========================================

function handleBuyHearts() {
  triggerSound('click');
  if (state.userGems < 50) {
    alert("❌ No tienes suficientes Caramelos.");
    return;
  }
  if (state.userHearts >= 5) {
    alert("💖 ¡Tus vidas ya están al máximo!");
    return;
  }
  state.userGems -= 50;
  state.userHearts = 5;
  saveState();
  updateGlobalStats();
  alert("💖 ¡Has recargado tus vidas al máximo (5 corazones)!");
}

function handleBuyShield() {
  triggerSound('click');
  if (state.userGems < 75) {
    alert("❌ No tienes suficientes Caramelos.");
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

function buyTheme(themeName) {
  triggerSound('click');
  if (state.currentTheme === themeName) {
    alert("🎨 ¡Ya tienes este tema activado!");
    return;
  }
  applyTheme(themeName);
  alert(`🎨 ¡Tema activado con éxito, nya!`);
}

// ==========================================
// 9. FORMULAS SANDBOX (LABORATORIO KAWAII)
// ==========================================

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

    const sum = nums.reduce((a, b) => a + b, 0);
    const mean = sum / nums.length;

    const sorted = [...nums].sort((a, b) => a - b);
    let median;
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
      median = (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      median = sorted[mid];
    }

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
        <div style="background: var(--bg-glass); padding: 1.25rem; border-radius: 1.5rem; text-align: center; border: 3px solid var(--text-primary); box-shadow: 3px 3px 0 var(--text-primary);">
          <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; font-weight: bold;">Media</span>
          <div style="font-size: 2.2rem; font-weight: 800; color: var(--accent-purple-hover); margin-top: 0.5rem;">${mean.toFixed(2)}</div>
        </div>
        <div style="background: var(--bg-glass); padding: 1.25rem; border-radius: 1.5rem; text-align: center; border: 3px solid var(--text-primary); box-shadow: 3px 3px 0 var(--text-primary);">
          <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; font-weight: bold;">Mediana</span>
          <div style="font-size: 2.2rem; font-weight: 800; color: var(--text-primary); margin-top: 0.5rem;">${median.toFixed(2)}</div>
        </div>
        <div style="background: var(--bg-glass); padding: 1.25rem; border-radius: 1.5rem; text-align: center; border: 3px solid var(--text-primary); box-shadow: 3px 3px 0 var(--text-primary);">
          <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; font-weight: bold;">Moda</span>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--color-correct); margin-top: 0.75rem;">
            ${modes.length > 0 ? modes.join(', ') : 'No hay moda, nya 🌸'}
          </div>
        </div>
      </div>

      <div style="background: rgba(255, 255, 255, 0.4); padding: 1.5rem; border-radius: 1.5rem; border: 3px solid var(--text-primary); box-shadow: 3px 3px 0 var(--text-primary);">
        <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.75rem;">✨ Procedimiento Paso a Paso:</h3>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-primary);">
          <strong>1. Promedio (Media):</strong> Suma total de ${nums.length} datos = ${sum.toFixed(1)}. <br/>
          Dividimos: ${sum.toFixed(1)} / ${nums.length} = ${mean.toFixed(2)}
        </p>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-primary); margin-top: 0.75rem;">
          <strong>2. Mediana (Centro):</strong> <br/>
          ${medianText}
        </p>
      </div>
    `;
  } catch (e) { alert('Verifica el formato del listado.'); }
}

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

  const points = [];
  const scaleX = 25;
  const scaleY = 15;
  const centerX = 125;
  const centerY = 90;

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
        <h3 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 0.75rem; font-weight: bold;">Curva de la Parábola</h3>
        <div style="background: #fffcf2; padding: 1rem; border-radius: 2rem; border: 3px solid var(--text-primary); box-shadow: 4px 4px 0 var(--text-primary);">
          <svg width="250" height="180" style="overflow: visible;">
            <defs>
              <pattern id="kawaii-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 133, 161, 0.08)" stroke-width="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#kawaii-grid)" />
            <line x1="0" y1="90" x2="250" y2="90" stroke="rgba(77, 53, 79, 0.2)" stroke-width="2" />
            <line x1="125" y1="0" x2="125" y2="180" stroke="rgba(77, 53, 79, 0.2)" stroke-width="2" />
            <polyline fill="none" stroke="var(--accent-purple)" stroke-width="4" points="${points.join(' ')}" stroke-linecap="round" />
            
            <!-- Vertex Star ⭐ -->
            <g transform="translate(125, 90)">
              <polygon points="0,-7 2,-2 7,-2 3,1 5,6 0,3 -5,6 -3,1 -7,-2 -2,-2" fill="var(--accent-gold)" stroke="var(--text-primary)" stroke-width="1.5" />
            </g>
            <text x="135" y="85" fill="var(--text-primary)" font-size="10" font-family="Fredoka" font-weight="bold">Vértice ⭐</text>
          </svg>
        </div>
        <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">Graficadora de nubes relativas</span>
      </div>

      <!-- Descriptive Results -->
      <div style="flex: 1 1 300px; display: flex; flex-direction: column; gap: 1rem;">
        <div style="background: var(--bg-glass); padding: 1rem; border-radius: 1.25rem; border: 3px solid var(--text-primary); box-shadow: 3px 3px 0 var(--text-primary);">
          <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase;">Tipo de Raíces</span>
          <div style="font-weight: bold; color: var(--accent-purple-hover); font-size: 1.1rem;">${type}</div>
        </div>

        <div style="display: flex; gap: 1rem;">
          <div style="flex: 1; background: var(--bg-glass); padding: 1rem; border-radius: 1.25rem; text-align: center; border: 3px solid var(--text-primary); box-shadow: 3px 3px 0 var(--text-primary);">
            <span style="font-size: 0.8rem; color: var(--text-secondary);">Raíz x₁</span>
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--color-correct);">${typeof root1 === 'number' ? root1.toFixed(2) : root1}</div>
          </div>
          <div style="flex: 1; background: var(--bg-glass); padding: 1rem; border-radius: 1.25rem; text-align: center; border: 3px solid var(--text-primary); box-shadow: 3px 3px 0 var(--text-primary);">
            <span style="font-size: 0.8rem; color: var(--text-secondary);">Raíz x₂</span>
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--color-correct);">${typeof root2 === 'number' ? root2.toFixed(2) : root2}</div>
          </div>
        </div>

        <div style="background: rgba(255, 255, 255, 0.4); padding: 1rem; border-radius: 1.25rem; border: 3px solid var(--text-primary); font-size: 0.9rem; box-shadow: 3px 3px 0 var(--text-primary);">
          <strong>Desglose de Neko-math:</strong> <br/>
          Discriminante (Δ) = b² - 4ac = (${b})² - 4(${a})(${c}) = ${disc} <br/>
          Vértice de la parábola V = (${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})
        </div>
      </div>
    </div>
  `;
}

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
      <div style="background: rgba(248,113,113,0.1); border: 3px solid var(--color-incorrect); padding: 1.5rem; border-radius: 1.5rem; color: var(--text-primary); text-align: center; box-shadow: 3px 3px 0 var(--text-primary);">
        <strong>Determinante del sistema (D) = 0.</strong> <br/>
        ${Dx === 0 && Dy === 0 ? 'El sistema tiene infinitas soluciones, nya.' : 'El sistema no tiene solución.'}
      </div>
    `;
    return;
  }

  const x = Dx / D;
  const y = Dy / D;

  box.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
      <div style="background: var(--bg-glass); padding: 1.25rem; border-radius: 1.5rem; border: 3px solid var(--text-primary); text-align: center; box-shadow: 3px 3px 0 var(--text-primary);">
        <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase;">Solución x</span>
        <div style="font-size: 2.2rem; font-weight: 800; color: var(--color-correct);">${x.toFixed(2)}</div>
      </div>
      <div style="background: var(--bg-glass); padding: 1.25rem; border-radius: 1.5rem; border: 3px solid var(--text-primary); text-align: center; box-shadow: 3px 3px 0 var(--text-primary);">
        <span style="font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase;">Solución y</span>
        <div style="font-size: 2.2rem; font-weight: 800; color: var(--color-correct);">${y.toFixed(2)}</div>
      </div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.4); padding: 1.5rem; border-radius: 2rem; border: 3px solid var(--text-primary); font-size: 0.95rem; line-height: 1.6; box-shadow: 4px 4px 0 var(--text-primary);">
      <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 1rem;">Resolución por Cramer 🧸:</h3>
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
      <div style="margin-top: 1rem; border-top: 2px dashed var(--text-primary); padding-top: 0.5rem;">
        x = Dx / D = ${Dx} / ${D} = ${x.toFixed(2)} <br/>
        y = Dy / D = ${Dy} / ${D} = ${y.toFixed(2)}
      </div>
    </div>
  `;
}

// ==========================================
// 10. SETUP EVENTS
// ==========================================

function setupEventListeners() {
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

  document.getElementById('store-buy-hearts').addEventListener('click', handleBuyHearts);
  document.getElementById('store-buy-shield').addEventListener('click', handleBuyShield);

  document.querySelectorAll('.btn-theme-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTheme = btn.getAttribute('data-theme');
      buyTheme(targetTheme);
    });
  });

  document.getElementById('btn-check-answer').addEventListener('click', processCheckAnswer);
  document.getElementById('btn-next-question').addEventListener('click', processNextQuestion);

  document.getElementById('lesson-close-btn').addEventListener('click', () => {
    triggerSound('click');
    lessonOverlay.classList.add('hidden');
  });

  document.getElementById('btn-conclude-lesson').addEventListener('click', () => {
    triggerSound('click');
    lessonOverlay.classList.add('hidden');
  });

  document.getElementById('subtab-btn-stats').addEventListener('click', () => {
    toggleSandboxSubtab('stats');
  });
  document.getElementById('subtab-btn-quad').addEventListener('click', () => {
    toggleSandboxSubtab('quad');
  });
  document.getElementById('subtab-btn-cramer').addEventListener('click', () => {
    toggleSandboxSubtab('cramer');
  });

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
  setupEventListeners();
  updateGlobalStats();
  renderActiveView();
}

window.addEventListener('DOMContentLoaded', initApp);
