import React, { useState, useEffect } from 'react';
import { 
  Map, 
  BookOpen, 
  ShoppingBag, 
  Flame, 
  Heart, 
  Gem, 
  Award, 
  ArrowRight, 
  Check, 
  X, 
  Volume2, 
  VolumeX, 
  Lock, 
  Trophy, 
  Sparkles, 
  RotateCcw,
  Calculator,
  ArrowLeft,
  Lightbulb,
  HelpCircle
} from 'lucide-react';
import { lessonsData } from './data/lessonsData';
import { codexData } from './data/codexData';
import { mathLessonsData } from './data/mathLessonsData';
import { mathCodexData } from './data/mathCodexData';
import MathLaboratory from './components/MathLaboratory';
import { playSound } from './utils/audioSynth';
import './App.css';

function App() {
  // --- Persistent User State (localStorage) ---
  const [activeUniverse, setActiveUniverse] = useState(() => {
    return localStorage.getItem('active_universe') || 'portal'; // 'portal', 'philosophy', 'math'
  });

  const [userXP, setUserXP] = useState(() => {
    const saved = localStorage.getItem('philo_xp');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [userGems, setUserGems] = useState(() => {
    const saved = localStorage.getItem('philo_gems');
    return saved ? parseInt(saved, 10) : 100; // Gift 100 gems at start!
  });
  const [userHearts, setUserHearts] = useState(() => {
    const saved = localStorage.getItem('philo_hearts');
    return saved ? parseInt(saved, 10) : 5;
  });
  const [userStreak, setUserStreak] = useState(() => {
    const saved = localStorage.getItem('philo_streak');
    return saved ? parseInt(saved, 10) : 1;
  });
  const [lastActiveDate, setLastActiveDate] = useState(() => {
    return localStorage.getItem('philo_last_date') || '';
  });

  // Completed lessons state (tracked separately per universe)
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('philo_completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [mathCompletedLessons, setMathCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('math_completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [hasStreakShield, setHasStreakShield] = useState(() => {
    return localStorage.getItem('philo_shield') === 'true';
  });
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('philo_theme') || 'dark-deep';
  });

  // --- Audio State ---
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);

  // --- Active Navigation Tab ---
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'codex', 'store', 'sandbox'

  // --- Active Lesson Flow State ---
  const [activeLesson, setActiveLesson] = useState(null); // lesson object or null
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  
  // Sentence builder state
  const [sentenceWords, setSentenceWords] = useState([]);
  
  // Match pairs state
  const [matchLeftSelected, setMatchLeftSelected] = useState(null);
  const [matchRightSelected, setMatchRightSelected] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]); // indices array

  // Question checking feedback states
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [shakeQuestion, setShakeQuestion] = useState(false);

  // Lesson ending states
  const [lessonFinished, setLessonFinished] = useState(false);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);

  // Mentor dialogues
  const [mentorText, setMentorText] = useState("¡Saludos, joven pensador! Busquemos hoy la sabiduría.");
  const [mentorMood, setMentorMood] = useState("🦉"); // 🦉 neutral, 🤔 thinking, 🎉 happy, 🧐 wise, 📐 geómetra

  // --- Theme Application effect ---
  useEffect(() => {
    const body = document.body;
    body.className = ''; // Reset classes
    
    // Remove custom properties
    body.style.removeProperty('--bg-primary');
    body.style.removeProperty('--bg-secondary');
    body.style.removeProperty('--bg-card');
    body.style.removeProperty('--bg-glass');
    body.style.removeProperty('--border-glass');
    body.style.removeProperty('--text-primary');
    body.style.removeProperty('--text-secondary');
    body.style.removeProperty('--text-muted');
    body.style.removeProperty('--border-glass-light');
    body.style.removeProperty('--accent-purple');
    body.style.removeProperty('--accent-purple-hover');
    body.style.removeProperty('--accent-gold');

    if (currentTheme === 'athena-classic') {
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
    } else if (currentTheme === 'chalkboard-math') {
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
    } else if (currentTheme === 'cyberpunk-math') {
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
    } else if (currentTheme === 'mateflix-crimson') {
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
    } else {
      body.classList.add('theme-cosmos');
    }
    localStorage.setItem('philo_theme', currentTheme);
  }, [currentTheme]);

  // --- Sync State to localStorage ---
  useEffect(() => {
    localStorage.setItem('active_universe', activeUniverse);
  }, [activeUniverse]);

  useEffect(() => {
    localStorage.setItem('philo_xp', userXP);
  }, [userXP]);

  useEffect(() => {
    localStorage.setItem('philo_gems', userGems);
  }, [userGems]);

  useEffect(() => {
    localStorage.setItem('philo_hearts', userHearts);
  }, [userHearts]);

  useEffect(() => {
    localStorage.setItem('philo_completed_lessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('math_completed_lessons', JSON.stringify(mathCompletedLessons));
  }, [mathCompletedLessons]);

  useEffect(() => {
    localStorage.setItem('philo_shield', hasStreakShield);
  }, [hasStreakShield]);

  // --- Handle Ambient Music ---
  useEffect(() => {
    if (musicEnabled) {
      playSound.startAmbient();
    } else {
      playSound.stopAmbient();
    }
    return () => playSound.stopAmbient();
  }, [musicEnabled]);

  // --- Calculate User Title based on XP ---
  const getUserTitle = () => {
    if (activeUniverse === 'math') {
      if (userXP < 50) return "Cero Absoluto";
      if (userXP < 120) return "Geómetra Aprendiz";
      if (userXP < 250) return "Calculista del Álgebra";
      if (userXP < 450) return "Científico de Ecuaciones";
      if (userXP < 700) return "Maestro Pitagórico";
      return "Arquitecto del Infinito 👑";
    }
    if (userXP < 50) return "Iniciado del Logos";
    if (userXP < 120) return "Discípulo del Ágora";
    if (userXP < 250) return "Sofista Perspicaz";
    if (userXP < 450) return "Pensador Ilustrado";
    if (userXP < 700) return "Sabio de la Academia";
    return "Rey Filósofo 👑";
  };

  // --- Streak logic ---
  useEffect(() => {
    const todayStr = new Date().toDateString();
    if (lastActiveDate) {
      const lastDate = new Date(lastActiveDate);
      const today = new Date(todayStr);
      const diffTime = Math.abs(today - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        const nextStreak = userStreak + 1;
        setUserStreak(nextStreak);
        localStorage.setItem('philo_streak', nextStreak);
      } else if (diffDays > 1) {
        if (hasStreakShield) {
          setHasStreakShield(false);
          alert("🛡️ ¡Tu Escudo de Racha te ha salvado! Tu racha diaria sigue intacta.");
        } else {
          setUserStreak(1);
          localStorage.setItem('philo_streak', 1);
        }
      }
    }
    setLastActiveDate(todayStr);
    localStorage.setItem('philo_last_date', todayStr);
  }, []);

  // --- Audio play wrapper ---
  const triggerSound = (soundName) => {
    if (!effectsEnabled) return;
    if (soundName === 'click') playSound.click();
    else if (soundName === 'correct') playSound.correct();
    else if (soundName === 'incorrect') playSound.incorrect();
    else if (soundName === 'victory') playSound.victory();
  };

  // --- Lesson flow functions ---
  const startLesson = (lesson) => {
    if (userHearts <= 0) {
      alert("❌ ¡No tienes vidas! Compra un elixir de vidas en la tienda del Ágora antes de continuar.");
      setActiveTab('store');
      return;
    }
    triggerSound('click');
    setActiveLesson(lesson);
    setQuestionIndex(0);
    setSelectedOption(null);
    setSentenceWords([]);
    setMatchLeftSelected(null);
    setMatchRightSelected(null);
    setMatchedPairs([]);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    setLessonFinished(false);
    setWrongAnswersCount(0);

    if (activeUniverse === 'math') {
      setMentorText("¡A resolver! Apliquemos las fórmulas correspondientes...");
      setMentorMood("📐");
    } else {
      setMentorText("A ver qué opinas sobre esta cuestión...");
      setMentorMood("🤔");
    }
  };

  const handleSelectOption = (option) => {
    if (isAnswerChecked) return;
    triggerSound('click');
    setSelectedOption(option);
  };

  const handleToggleWord = (word) => {
    if (isAnswerChecked) return;
    triggerSound('click');
    if (sentenceWords.includes(word)) {
      setSentenceWords(sentenceWords.filter(w => w !== word));
    } else {
      setSentenceWords([...sentenceWords, word]);
    }
  };

  const handleMatchClick = (item, side) => {
    if (isAnswerChecked) return;
    triggerSound('click');
    if (side === 'left') {
      if (matchedPairs.some(p => p.left === item)) return;
      setMatchLeftSelected(item);
    } else {
      if (matchedPairs.some(p => p.right === item)) return;
      setMatchRightSelected(item);
    }
  };

  // Watch for matching actions
  useEffect(() => {
    if (matchLeftSelected && matchRightSelected && activeLesson) {
      const question = activeLesson.questions[questionIndex];
      const matchingPair = question.pairs.find(p => p.left === matchLeftSelected && p.right === matchRightSelected);
      if (matchingPair) {
        setMatchedPairs([...matchedPairs, { left: matchLeftSelected, right: matchRightSelected }]);
        setMatchLeftSelected(null);
        setMatchRightSelected(null);
        triggerSound('click');
      } else {
        setMatchLeftSelected(null);
        setMatchRightSelected(null);
        triggerSound('incorrect');
      }
    }
  }, [matchLeftSelected, matchRightSelected]);

  const checkAnswer = () => {
    const question = activeLesson.questions[questionIndex];
    let correct = false;

    if (question.type === 'multiple-choice' || question.type === 'true-false' || question.type === 'fill-in-the-blank') {
      correct = selectedOption === question.answer;
    } else if (question.type === 'sentence-builder') {
      correct = JSON.stringify(sentenceWords) === JSON.stringify(question.correctOrder);
    } else if (question.type === 'match') {
      correct = matchedPairs.length === question.pairs.length;
    }

    setIsCorrect(correct);
    setIsAnswerChecked(true);

    if (correct) {
      triggerSound('correct');
      setMentorMood("🎉");
      const correctPhrases = activeUniverse === 'math' ? [
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
      setMentorText(correctPhrases[Math.floor(Math.random() * correctPhrases.length)]);
    } else {
      triggerSound('incorrect');
      setMentorMood(activeUniverse === 'math' ? "📐" : "🧐");
      const incorrectPhrases = activeUniverse === 'math' ? [
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
      setMentorText(incorrectPhrases[Math.floor(Math.random() * incorrectPhrases.length)]);
      
      const nextHearts = Math.max(0, userHearts - 1);
      setUserHearts(nextHearts);
      setWrongAnswersCount(wrongAnswersCount + 1);

      setShakeQuestion(true);
      setTimeout(() => setShakeQuestion(false), 450);
    }
  };

  const handleNext = () => {
    if (userHearts <= 0) {
      triggerSound('incorrect');
      alert("💔 ¡Has perdido todas tus vidas! Regresa al Ágora para recargarlas.");
      setActiveLesson(null);
      setActiveTab('store');
      return;
    }

    const nextIndex = questionIndex + 1;
    if (nextIndex < activeLesson.questions.length) {
      setQuestionIndex(nextIndex);
      setSelectedOption(null);
      setSentenceWords([]);
      setMatchLeftSelected(null);
      setMatchRightSelected(null);
      setMatchedPairs([]);
      setIsAnswerChecked(false);
      setIsCorrect(false);
      
      if (activeUniverse === 'math') {
        setMentorMood("📐");
        setMentorText("Analicemos con precisión el siguiente planteamiento...");
      } else {
        setMentorMood("🤔");
        setMentorText("Analicemos con prudencia el siguiente dilema...");
      }
      triggerSound('click');
    } else {
      triggerSound('victory');
      setLessonFinished(true);

      const earnedXP = activeLesson.xpAward;
      const earnedGems = Math.max(5, Math.floor(activeLesson.xpAward / 2) - wrongAnswersCount);
      
      setUserXP(userXP + earnedXP);
      setUserGems(userGems + earnedGems);

      // Add to completed lessons depending on the universe
      if (activeUniverse === 'math') {
        if (!mathCompletedLessons.includes(activeLesson.id)) {
          setMathCompletedLessons([...mathCompletedLessons, activeLesson.id]);
        }
      } else {
        if (!completedLessons.includes(activeLesson.id)) {
          setCompletedLessons([...completedLessons, activeLesson.id]);
        }
      }
    }
  };

  // --- Agora Store Actions ---
  const buyHeartsRefill = () => {
    triggerSound('click');
    if (userGems < 50) {
      alert("❌ No tienes suficientes Gemas de Sabiduría.");
      return;
    }
    if (userHearts >= 5) {
      alert("❤️ ¡Tus vidas ya están al máximo!");
      return;
    }
    setUserGems(userGems - 50);
    setUserHearts(5);
    alert("❤️ ¡Has recargado tus vidas al máximo (5 corazones)!");
  };

  const buyStreakShield = () => {
    triggerSound('click');
    if (userGems < 75) {
      alert("❌ No tienes suficientes Gemas de Sabiduría.");
      return;
    }
    if (hasStreakShield) {
      alert("🛡️ ¡Ya tienes un Escudo de Racha activo!");
      return;
    }
    setUserGems(userGems - 75);
    setHasStreakShield(true);
    alert("🛡️ ¡Escudo de Racha activado! Tu racha estará protegida contra olvidos de 1 día.");
  };

  const buyTheme = (themeName) => {
    triggerSound('click');
    if (currentTheme === themeName) {
      alert("🎨 ¡Ya tienes este tema activado!");
      return;
    }
    setCurrentTheme(themeName);
    alert(`🎨 Tema cambiado con éxito.`);
  };

  // Helper checking if a module is unlocked
  const isModuleUnlocked = (moduleId) => {
    if (moduleId === 1) return true;
    
    if (activeUniverse === 'math') {
      const prevModule = mathLessonsData.find(m => m.id === moduleId - 1);
      if (!prevModule) return false;
      return prevModule.lessons.every(lesson => mathCompletedLessons.includes(lesson.id));
    } else {
      const prevModule = lessonsData.find(m => m.id === moduleId - 1);
      if (!prevModule) return false;
      return prevModule.lessons.every(lesson => completedLessons.includes(lesson.id));
    }
  };

  // Helper checking if a specific lesson is unlocked in a module
  const isLessonUnlocked = (lessonId, moduleId) => {
    if (!isModuleUnlocked(moduleId)) return false;
    
    if (activeUniverse === 'math') {
      const module = mathLessonsData.find(m => m.id === moduleId);
      const lessonIdx = module.lessons.findIndex(l => l.id === lessonId);
      if (lessonIdx === 0) return true;
      const prevLesson = module.lessons[lessonIdx - 1];
      return mathCompletedLessons.includes(prevLesson.id);
    } else {
      const module = lessonsData.find(m => m.id === moduleId);
      const lessonIdx = module.lessons.findIndex(l => l.id === lessonId);
      if (lessonIdx === 0) return true;
      const prevLesson = module.lessons[lessonIdx - 1];
      return completedLessons.includes(prevLesson.id);
    }
  };

  // --- RENDER 1: SELECTOR PORTAL ---
  if (activeUniverse === 'portal') {
    return (
      <div className="portal-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', padding: '3rem 2rem', background: 'radial-gradient(circle at center, #18112b 0%, #06030a 100%)', width: '100vw', overflowY: 'auto' }}>
        
        {/* Portal Header */}
        <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-title)', background: 'linear-gradient(135deg, #ffffff 40%, var(--accent-purple-hover) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800', letterSpacing: '-0.03em' }}>
            Portal Multiverso de Aprendizaje
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginTop: '0.75rem', fontWeight: '500' }}>
            Selecciona tu camino y domina las ciencias y saberes más significativos del bachillerato.
          </p>
        </div>

        {/* Portals grid */}
        <div className="portal-cards-grid" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '900px', width: '100%', marginBottom: '4rem' }}>
          
          {/* Card 1: Philosophy */}
          <div 
            className="portal-card" 
            style={{ 
              flex: '1 1 350px', 
              background: 'rgba(26, 21, 41, 0.6)', 
              border: '2px solid rgba(139, 92, 246, 0.3)', 
              borderRadius: '2rem', 
              padding: '2.5rem', 
              textAlign: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), var(--shadow-glow-purple)', 
              transition: 'var(--transition-elastic)' 
            }}
          >
            <span style={{ fontSize: '4.5rem', marginBottom: '1.5rem', animation: 'float 5s ease-in-out infinite' }}>🦉</span>
            <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.75rem' }}>Ágora de Filosofía</h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              Desde Tales de Mileto hasta el existencialismo contemporáneo. Ejercita tu pensamiento crítico con retos intelectuales interactivos.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <span className="node-difficulty" style={{ color: '#c084fc', border: '1px solid #c084fc', padding: '0.2rem 0.6rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Presocráticos</span>
              <span className="node-difficulty" style={{ color: '#c084fc', border: '1px solid #c084fc', padding: '0.2rem 0.6rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Metafísica</span>
              <span className="node-difficulty" style={{ color: '#c084fc', border: '1px solid #c084fc', padding: '0.2rem 0.6rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Existencialismo</span>
            </div>
            <button 
              className="btn-primary" 
              style={{ width: '100%', background: 'linear-gradient(135deg, var(--accent-purple) 0%, #6d28d9 100%)', boxShadow: '0 8px 0px #4c1d95', fontSize: '1.1rem', fontWeight: 'bold', padding: '1rem' }}
              onClick={() => { triggerSound('click'); setActiveUniverse('philosophy'); setActiveTab('dashboard'); }}
            >
              Entrar al Ágora
            </button>
          </div>

          {/* Card 2: Mathematics IV */}
          <div 
            className="portal-card" 
            style={{ 
              flex: '1 1 350px', 
              background: 'rgba(30, 10, 15, 0.6)', 
              border: '2px solid rgba(244, 63, 94, 0.3)', 
              borderRadius: '2rem', 
              padding: '2.5rem', 
              textAlign: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(244, 63, 94, 0.2)', 
              transition: 'var(--transition-elastic)' 
            }}
          >
            <span style={{ fontSize: '4.5rem', marginBottom: '1.5rem', animation: 'float 4s ease-in-out infinite' }}>📐</span>
            <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.75rem' }}>Mateflix: Matemáticas IV</h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              El programa oficial de la UNAM estructurado en lecciones amenas basadas en tu guía oficial. ¡Domina desde álgebra hasta inecuaciones!
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <span className="node-difficulty" style={{ color: '#fb7185', border: '1px solid #fb7185', padding: '0.2rem 0.6rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Estadística</span>
              <span className="node-difficulty" style={{ color: '#fb7185', border: '1px solid #fb7185', padding: '0.2rem 0.6rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Álgebra y Cramer</span>
              <span className="node-difficulty" style={{ color: '#fb7185', border: '1px solid #fb7185', padding: '0.2rem 0.6rem', borderRadius: '0.5rem', fontWeight: 'bold' }}>Fórmulas y Sandbox</span>
            </div>
            <button 
              className="btn-primary" 
              style={{ width: '100%', background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)', boxShadow: '0 8px 0px #881337', fontSize: '1.1rem', fontWeight: 'bold', padding: '1rem' }}
              onClick={() => { triggerSound('click'); setActiveUniverse('math'); setActiveTab('dashboard'); }}
            >
              Iniciar Temporada
            </button>
          </div>

        </div>

        {/* Global Statistics Footer */}
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '1.5rem', padding: '1.5rem 3rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award style={{ color: 'var(--color-correct)' }} />
            <span><strong>{userXP}</strong> XP Acumulada</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Gem style={{ color: '#3b82f6' }} />
            <span><strong>{userGems}</strong> Sabiduría 💎</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Flame style={{ color: 'var(--accent-gold)' }} />
            <span><strong>{userStreak} días</strong> Racha</span>
          </div>
        </div>

      </div>
    );
  }

  // Choose the data depending on active universe
  const currentLessonsData = activeUniverse === 'math' ? mathLessonsData : lessonsData;
  const currentCodexData = activeUniverse === 'math' ? mathCodexData : codexData;

  return (
    <div className="app-container">
      {/* 1. LEFT SIDEBAR */}
      <aside className="sidebar">
        <div className="logo-container">
          <span className="logo-owl" role="img" aria-label="Logo">{activeUniverse === 'math' ? '📐' : '🦉'}</span>
          <h1 className="logo-text">{activeUniverse === 'math' ? 'Mateflix' : 'PhiloLingo'}</h1>
        </div>

        <nav className="nav-links">
          {/* Change universe button */}
          <button 
            className="nav-item"
            style={{ color: 'var(--accent-gold)', border: '1px dashed var(--accent-gold)', marginBottom: '1rem', background: 'rgba(245,158,11,0.05)' }}
            onClick={() => { triggerSound('click'); setActiveUniverse('portal'); }}
          >
            <ArrowLeft size={18} />
            <span>Cambiar Universo</span>
          </button>

          <button 
            className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => { triggerSound('click'); setActiveTab('dashboard'); }}
          >
            <Map />
            <span>{activeUniverse === 'math' ? 'Temporadas' : 'Camino del Logos'}</span>
          </button>

          {activeUniverse === 'math' && (
            <button 
              className={`nav-item ${activeTab === 'sandbox' ? 'active' : ''}`}
              onClick={() => { triggerSound('click'); setActiveTab('sandbox'); }}
            >
              <Calculator />
              <span>Laboratorio</span>
            </button>
          )}
          
          <button 
            className={`nav-item ${activeTab === 'codex' ? 'active' : ''}`}
            onClick={() => { triggerSound('click'); setActiveTab('codex'); }}
          >
            <BookOpen />
            <span>{activeUniverse === 'math' ? 'Geómetras' : 'Códice de Sabios'}</span>
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'store' ? 'active' : ''}`}
            onClick={() => { triggerSound('click'); setActiveTab('store'); }}
          >
            <ShoppingBag />
            <span>El Ágora (Tienda)</span>
          </button>
        </nav>

        {/* Dynamic Sound Controls */}
        <div className="sound-toggle-bar" style={{ marginBottom: '1.5rem' }}>
          <Volume2 size={16} className="text-secondary" />
          <span className="sound-toggle-label">Música</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={musicEnabled} 
              onChange={(e) => { triggerSound('click'); setMusicEnabled(e.target.checked); }}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="sidebar-footer">
          <div className="user-profile-preview">
            <div className="user-avatar-circle">
              {getUserTitle().charAt(0)}
            </div>
            <div className="user-info">
              <span className="user-name">Buscador</span>
              <span className="user-title" style={{ fontSize: '0.65rem' }}>{getUserTitle()}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN WORKSPACE */}
      <main className="main-content">
        {/* STATS HEADER BAR */}
        <header className="top-navbar">
          <div className="stat-badge streak" title="Racha de días de estudio">
            <Flame className="stat-icon-animate" size={18} fill="currentColor" />
            <span>{userStreak} días</span>
          </div>

          <div className="stat-badge hearts" title="Vidas/Corazones restantes">
            <Heart size={18} fill="currentColor" />
            <span>{userHearts} / 5</span>
          </div>

          <div className="stat-badge gems" title="Gemas acumuladas">
            <Gem size={18} fill="currentColor" />
            <span>{userGems} 💎</span>
          </div>

          <div className="stat-badge xp" title="Puntos de Experiencia (XP)">
            <Award size={18} fill="currentColor" />
            <span>{userXP} XP</span>
          </div>
        </header>

        {/* VIEW 1: PATH MAP DASHBOARD */}
        {activeTab === 'dashboard' && (
          <div className="path-container">
            <div className="path-header">
              <h1>{activeUniverse === 'math' ? 'El Camino Matemático' : 'El Camino del Filósofo'}</h1>
              <p>{activeUniverse === 'math' ? 'Supera las temporadas del álgebra y modela el universo exacto.' : 'Domina las corrientes de pensamiento y asciende al nivel de Rey Filósofo.'}</p>
            </div>

            {currentLessonsData.map((module) => {
              const moduleUnlocked = isModuleUnlocked(module.id);
              return (
                <div key={module.id} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Module Header Card */}
                  <div 
                    className="question-bubble" 
                    style={{ 
                      width: '100%', 
                      marginBottom: '1.5rem', 
                      background: moduleUnlocked ? 'var(--bg-glass)' : 'rgba(20, 20, 30, 0.4)',
                      opacity: moduleUnlocked ? 1 : 0.6,
                      borderStyle: moduleUnlocked ? 'solid' : 'dashed',
                      transform: 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '2rem' }}>{module.badge}</span>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', color: moduleUnlocked ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                          {module.subtitle}: {module.title}
                        </h3>
                        <span className="node-difficulty" style={{ color: 'var(--accent-gold)' }}>Dificultad: {module.difficulty}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{module.description}</p>
                  </div>

                  {/* Vertical sequence of lessons */}
                  {module.lessons.map((lesson, index) => {
                    const unlocked = isLessonUnlocked(lesson.id, module.id);
                    const completed = activeUniverse === 'math' 
                      ? mathCompletedLessons.includes(lesson.id)
                      : completedLessons.includes(lesson.id);
                    
                    let nodeClass = 'locked';
                    if (completed) nodeClass = 'completed';
                    else if (unlocked) nodeClass = 'unlocked';

                    return (
                      <div key={lesson.id} className="lesson-node">
                        <button 
                          className={`node-btn ${nodeClass}`}
                          disabled={!unlocked}
                          onClick={() => startLesson(lesson)}
                        >
                          {!unlocked ? <Lock size={28} /> : <span>{module.badge}</span>}
                        </button>
                        
                        <div className="node-label-card">
                          <span className="node-subtitle">{activeUniverse === 'math' ? 'Episodio' : 'Lección'} {index + 1}</span>
                          <div className="node-title" style={{ fontSize: '0.85rem' }}>{lesson.name}</div>
                          <span className="node-difficulty">Recompensa: +{lesson.xpAward} XP</span>
                        </div>

                        {/* Connection Line between nodes */}
                        {index < module.lessons.length - 1 && (
                          <div className={`path-line ${completed ? 'completed' : unlocked ? 'active' : ''}`} />
                        )}
                      </div>
                    );
                  })}

                  {/* Connection line to next module */}
                  {module.id < currentLessonsData.length && (
                    <div 
                      className={`path-line ${isModuleUnlocked(module.id + 1) ? 'completed' : ''}`} 
                      style={{ height: '60px', marginTop: '2rem', marginBottom: '2rem' }} 
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: MATH FORMULA SANDBOX */}
        {activeTab === 'sandbox' && activeUniverse === 'math' && (
          <MathLaboratory />
        )}

        {/* VIEW 3: CODEX LIBRARY */}
        {activeTab === 'codex' && (
          <div className="codex-container">
            <div className="codex-header">
              <h1>{activeUniverse === 'math' ? 'El Códice de Geómetras' : 'El Códice de los Sabios'}</h1>
              <p>{activeUniverse === 'math' ? 'Descubre a los pioneros de la geometría, álgebra y análisis completando sus módulos.' : 'Desbloquea los grandes filósofos completando sus lecciones. ¡Haz clic para ver sus biografías y frases memorables!'}</p>
            </div>

            <div className="codex-grid">
              {currentCodexData.map((phil) => {
                const unlocked = isModuleUnlocked(phil.moduleRequired);
                return (
                  <div key={phil.id} className="codex-card-wrapper">
                    <div className={`codex-card-inner ${unlocked ? 'unlocked' : 'locked'}`} onClick={() => triggerSound('click')}>
                      {/* FRONT CARD SIDE */}
                      <div className={`codex-card-front ${!unlocked ? 'locked' : ''}`}>
                        <div className="philosopher-avatar">
                          {unlocked ? phil.avatar : '❓'}
                        </div>
                        <h3 className="philosopher-name">{phil.name}</h3>
                        <span className="philosopher-period">{phil.period}</span>
                        <div className="unlock-badge">
                          {unlocked ? 'Desbloqueado' : `Completa Módulo ${phil.moduleRequired}`}
                        </div>
                      </div>

                      {/* BACK CARD SIDE (Unlocked only) */}
                      {unlocked && (
                        <div className="codex-card-back">
                          <div className="bio-header">
                            <span className="bio-concept">{phil.concept}</span>
                            <h3 className="bio-name">{phil.name}</h3>
                          </div>
                          <div className="bio-text">
                            <p style={{ marginBottom: '0.5rem' }}>{phil.bio}</p>
                            <p style={{ fontSize: '0.75rem', borderTop: '1px dashed var(--border-glass)', paddingTop: '0.5rem', fontStyle: 'normal' }}>
                              💡 <strong>Curiosidad:</strong> {phil.curiosity}
                            </p>
                          </div>
                          <div className="bio-quote">
                            "{phil.quote}"
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 4: AGORA STORE */}
        {activeTab === 'store' && (
          <div className="store-container">
            <div className="store-header">
              <h1>El Ágora de Atenas y Fórmulas</h1>
              <p>Intercambia tus Gemas de Sabiduría por elixires, escudos protectores y entornos temáticos exclusivos</p>
            </div>

            <div className="store-grid">
              {/* Product 1: Heart Refill */}
              <div className="store-card">
                <span className="store-card-icon" style={{ color: 'var(--color-incorrect)' }}>❤️</span>
                <div className="store-card-details">
                  <div>
                     <h3 className="store-item-name">Elixir de Corazones</h3>
                    <p className="store-item-desc">Restaura todas tus vidas para seguir practicando sin interrupciones en el camino del saber.</p>
                  </div>
                  <div className="store-buy-row">
                    <span className="store-item-cost">50 💎</span>
                    <button 
                      className="btn-store-buy" 
                      disabled={userHearts >= 5 || userGems < 50}
                      onClick={buyHeartsRefill}
                    >
                      {userHearts >= 5 ? 'Lleno' : 'Comprar'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2: Streak Shield */}
              <div className="store-card">
                <span className="store-card-icon" style={{ color: 'var(--accent-gold)' }}>🛡️</span>
                <div className="store-card-details">
                  <div>
                    <h3 className="store-item-name">Escudo de Racha</h3>
                    <p className="store-item-desc">Protege tu valiosa racha diaria. Evita perder tus días acumulados si no entras a estudiar por un día.</p>
                  </div>
                  <div className="store-buy-row">
                    <span className="store-item-cost">75 💎</span>
                    <button 
                      className="btn-store-buy" 
                      disabled={hasStreakShield || userGems < 75}
                      onClick={buyStreakShield}
                    >
                      {hasStreakShield ? 'Activo' : 'Comprar'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 3: Athena theme */}
              <div className="store-card">
                <span className="store-card-icon" style={{ color: '#4f46e5' }}>🏛️</span>
                <div className="store-card-details">
                  <div>
                    <h3 className="store-item-name">Tema Atenas Clásica</h3>
                    <p className="store-item-desc">Cambia el aspecto del aula por un mármol mediterráneo claro con matices de azul y oro clásico.</p>
                  </div>
                  <div className="store-buy-row">
                    <span className="store-item-cost">Gratis</span>
                    <button 
                      className="btn-store-buy" 
                      disabled={currentTheme === 'athena-classic'}
                      onClick={() => buyTheme('athena-classic')}
                    >
                      Activar
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 4: Deep Cosmos theme */}
              <div className="store-card">
                <span className="store-card-icon" style={{ color: 'var(--accent-purple)' }}>🌌</span>
                <div className="store-card-details">
                  <div>
                    <h3 className="store-item-name">Tema Cosmos Oscuro</h3>
                    <p className="store-item-desc">Vuelve al ambiente original nocturno con violeta eléctrico y carbón sideral para una profunda concentración.</p>
                  </div>
                  <div className="store-buy-row">
                    <span className="store-item-cost">Gratis</span>
                    <button 
                      className="btn-store-buy" 
                      disabled={currentTheme === 'dark-deep'}
                      onClick={() => buyTheme('dark-deep')}
                    >
                      Activar
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 5: Chalkboard Theme */}
              <div className="store-card">
                <span className="store-card-icon" style={{ color: '#2b9348' }}>📝</span>
                <div className="store-card-details">
                  <div>
                    <h3 className="store-item-name">Tema Pizarra de Tiza</h3>
                    <p className="store-item-desc">Un ambiente de salón escolar clásico con fondo verde oscuro, líneas finas y tiza blanca.</p>
                  </div>
                  <div className="store-buy-row">
                    <span className="store-item-cost">Gratis</span>
                    <button 
                      className="btn-store-buy" 
                      disabled={currentTheme === 'chalkboard-math'}
                      onClick={() => buyTheme('chalkboard-math')}
                    >
                      Activar
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 6: Cyberpunk Theme */}
              <div className="store-card">
                <span className="store-card-icon" style={{ color: '#06b6d4' }}>⚡</span>
                <div className="store-card-details">
                  <div>
                    <h3 className="store-item-name">Tema Cyberpunk Teorema</h3>
                    <p className="store-item-desc">Diseño futurista de neón cian, violeta y resplandor digital para alta concentración intelectual.</p>
                  </div>
                  <div className="store-buy-row">
                    <span className="store-item-cost">Gratis</span>
                    <button 
                      className="btn-store-buy" 
                      disabled={currentTheme === 'cyberpunk-math'}
                      onClick={() => buyTheme('cyberpunk-math')}
                    >
                      Activar
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 7: Mateflix Theme */}
              <div className="store-card">
                <span className="store-card-icon" style={{ color: '#e50914' }}>🎬</span>
                <div className="store-card-details">
                  <div>
                    <h3 className="store-item-name">Tema Mateflix Carmesí</h3>
                    <p className="store-item-desc">Inspirado en interfaces cinematográficas, con negro carbón y un impactante rojo carmesí.</p>
                  </div>
                  <div className="store-buy-row">
                    <span className="store-item-cost">Gratis</span>
                    <button 
                      className="btn-store-buy" 
                      disabled={currentTheme === 'mateflix-crimson'}
                      onClick={() => buyTheme('mateflix-crimson')}
                    >
                      Activar
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </main>

      {/* 3. ACTIVE LESSON FLOW OVERLAY (FULL SCREEN) */}
      {activeLesson && (
        <div className="lesson-page">
          <header className="lesson-header">
            <button className="close-btn" onClick={() => { triggerSound('click'); setActiveLesson(null); }}>
              <X />
            </button>
            
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill"
                style={{ width: `${(questionIndex / activeLesson.questions.length) * 100}%` }}
              />
            </div>

            <div className="stat-badge hearts" style={{ flexShrink: 0 }}>
              <Heart size={16} fill="currentColor" />
              <span>{userHearts}</span>
            </div>
          </header>

          {/* MAIN LESSON CONTENT */}
          <div className="lesson-body">
            {!lessonFinished ? (
              <div className={`question-card ${shakeQuestion ? 'shake-card' : ''}`}>
                
                {/* 🦉 MENTOR PANEL */}
                <div className="question-bubble-container">
                  <div className="mentor-avatar">
                    {mentorMood}
                  </div>
                  <div className="question-bubble">
                    <p className="question-title">
                      {activeLesson.questions[questionIndex].question}
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginTop: '0.35rem', display: 'block', fontStyle: 'italic' }}>
                      💬 {mentorText}
                    </span>
                  </div>
                </div>

                {/* QUESTION RENDER MODULES */}
                {/* 1. Multiple choice & True/False */}
                {(activeLesson.questions[questionIndex].type === 'multiple-choice' || 
                  activeLesson.questions[questionIndex].type === 'true-false') && (
                  <div className={`options-grid ${activeLesson.questions[questionIndex].options.length === 2 ? 'two-cols' : ''}`}>
                    {activeLesson.questions[questionIndex].options.map((option, index) => {
                      const alphabet = ["A", "B", "C", "D"];
                      return (
                        <button
                          key={option}
                          disabled={isAnswerChecked}
                          className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
                          onClick={() => handleSelectOption(option)}
                        >
                          <span className="option-badge">{alphabet[index]}</span>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* 2. Fill in the blanks */}
                {activeLesson.questions[questionIndex].type === 'fill-in-the-blank' && (
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div 
                      className="sentence-dropzone" 
                      style={{ fontSize: '1.25rem', padding: '1.5rem', borderStyle: 'solid', color: 'var(--text-primary)' }}
                    >
                      {activeLesson.questions[questionIndex].text ? (
                        <>
                          {activeLesson.questions[questionIndex].text.split('________')[0]}
                          <span 
                            style={{ 
                              borderBottom: '2px solid var(--accent-purple)', 
                              padding: '0 1rem', 
                              color: 'var(--accent-gold)', 
                              fontWeight: '700' 
                            }}
                          >
                            {selectedOption || "________"}
                          </span>
                          {activeLesson.questions[questionIndex].text.split('________')[1]}
                        </>
                      ) : (
                        <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>
                          {selectedOption || "________"}
                        </span>
                      )}
                    </div>

                    <div className="words-bank">
                      {activeLesson.questions[questionIndex].options.map((word) => (
                        <button
                          key={word}
                          disabled={isAnswerChecked}
                          className={`word-tile ${selectedOption === word ? 'used' : ''}`}
                          onClick={() => handleSelectOption(word)}
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Sentence builder / Step builder */}
                {activeLesson.questions[questionIndex].type === 'sentence-builder' && (
                  <div style={{ width: '100%' }}>
                    <div className="sentence-dropzone" style={{ flexDirection: 'column', gap: '0.5rem', minHeight: '120px' }}>
                      {sentenceWords.map((word, wIdx) => (
                        <button
                          key={wIdx}
                          className="word-tile"
                          style={{ width: '100%', textAlign: 'left', display: 'flex', gap: '0.75rem' }}
                          disabled={isAnswerChecked}
                          onClick={() => handleToggleWord(word)}
                        >
                          <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>{wIdx + 1}.</span>
                          <span>{word}</span>
                        </button>
                      ))}
                      {sentenceWords.length === 0 && (
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                          Haz clic en los enunciados de abajo para ordenarlos paso a paso...
                        </span>
                      )}
                    </div>

                    <div className="words-bank" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                      {activeLesson.questions[questionIndex].words.map((word, wIdx) => {
                        const isUsed = sentenceWords.includes(word);
                        return (
                          <button
                            key={wIdx}
                            disabled={isUsed || isAnswerChecked}
                            className={`word-tile ${isUsed ? 'used' : ''}`}
                            style={{ width: '100%', textAlign: 'left' }}
                            onClick={() => handleToggleWord(word)}
                          >
                            {word}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 4. Match the pairs */}
                {activeLesson.questions[questionIndex].type === 'match' && (
                  <div className="match-container" style={{ flexDirection: 'column', gap: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', display: 'block', marginBottom: '0.5rem' }}>
                      Selecciona un elemento de la izquierda y luego su correspondencia a la derecha.
                    </span>
                    <div style={{ display: 'flex', gap: '1.5rem', width: '100%' }}>
                      <div className="match-column">
                        {activeLesson.questions[questionIndex].pairs.map((pair, pIdx) => {
                          const isMatched = matchedPairs.some(p => p.left === pair.left);
                          return (
                            <button
                              key={pIdx}
                              disabled={isMatched || isAnswerChecked}
                              className={`match-item clickable ${matchLeftSelected === pair.left ? 'selected' : ''} ${isMatched ? 'matched' : ''}`}
                              onClick={() => handleMatchClick(pair.left, 'left')}
                            >
                              {pair.left}
                            </button>
                          );
                        })}
                      </div>

                      <div className="match-column">
                        {activeLesson.questions[questionIndex].pairs
                          .map(p => p.right)
                          .sort()
                          .map((rightItem, rIdx) => {
                            const isMatched = matchedPairs.some(p => p.right === rightItem);
                            return (
                              <button
                                key={rIdx}
                                disabled={isMatched || isAnswerChecked}
                                className={`match-item clickable ${matchRightSelected === rightItem ? 'selected' : ''} ${isMatched ? 'matched' : ''}`}
                                onClick={() => handleMatchClick(rightItem, 'right')}
                              >
                                {rightItem}
                              </button>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              /* LESSON COMPLETED CONGRATULATIONS PANEL */
              <div className="completion-container">
                <span className="completion-owl">{activeUniverse === 'math' ? '📐📈' : '🦉🎓'}</span>
                <h1 className="completion-title">¡Lección Finalizada!</h1>
                <p className="completion-subtitle">
                  {activeUniverse === 'math' ? 'Tu mente se agudiza y domina la exactitud de las fórmulas.' : 'El Logos se fortalece con tu templanza. ¡Gran lección de sabiduría!'}
                </p>

                <div className="completion-stats">
                  <div className="comp-stat-card">
                    <span className="comp-stat-value" style={{ color: 'var(--color-correct)' }}>
                      +{activeLesson.xpAward}
                    </span>
                    <span className="comp-stat-label">XP Recibida</span>
                  </div>

                  <div className="comp-stat-card">
                    <span className="comp-stat-value" style={{ color: 'var(--accent-gold)' }}>
                      +{Math.max(5, Math.floor(activeLesson.xpAward / 2) - wrongAnswersCount)} 💎
                    </span>
                    <span className="comp-stat-label">Gemas Extra</span>
                  </div>
                </div>

                <button 
                  className="btn-primary btn-correct"
                  style={{ width: '100%', background: activeUniverse === 'math' ? 'linear-gradient(135deg, #f43f5e, #be123c)' : '' }}
                  onClick={() => { triggerSound('click'); setActiveLesson(null); }}
                >
                  Continuar al Sendero
                </button>
              </div>
            )}
          </div>

          {/* DYNAMIC FEEDBACK FOOTER PANEL */}
          {!lessonFinished && (
            <footer className={`lesson-footer ${isAnswerChecked ? (isCorrect ? 'correct' : 'incorrect') : ''}`}>
              <div className="lesson-footer-content">
                {isAnswerChecked ? (
                  <div className="feedback-slide">
                    <div className="feedback-icon">
                      {isCorrect ? <Check size={28} /> : <X size={28} />}
                    </div>
                    <div className="feedback-details">
                      <h4>{isCorrect ? '¡Excelente Trabajo!' : 'Oh, no es del todo correcto'}</h4>
                      <p>{activeLesson.questions[questionIndex].explanation}</p>
                    </div>
                  </div>
                ) : (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {activeUniverse === 'math' ? 'Resuelve y comprueba para avanzar en la temporada.' : 'Selecciona una respuesta para continuar tu indagación filosófica.'}
                  </span>
                )}

                {!isAnswerChecked ? (
                  <button
                    className="btn-primary"
                    disabled={
                      (activeLesson.questions[questionIndex].type === 'multiple-choice' ||
                       activeLesson.questions[questionIndex].type === 'true-false' ||
                       activeLesson.questions[questionIndex].type === 'fill-in-the-blank') ? !selectedOption :
                      activeLesson.questions[questionIndex].type === 'sentence-builder' ? sentenceWords.length === 0 :
                      activeLesson.questions[questionIndex].type === 'match' ? matchedPairs.length < activeLesson.questions[questionIndex].pairs.length : false
                    }
                    onClick={checkAnswer}
                  >
                    Comprobar
                  </button>
                ) : (
                  <button
                    className={`btn-primary ${isCorrect ? 'btn-correct' : 'btn-incorrect'}`}
                    onClick={handleNext}
                  >
                    Continuar <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </footer>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
