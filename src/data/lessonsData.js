export const lessonsData = [
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
        name: "Sócrates y el Método Teñido de Hierro",
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
            options: ["Escolástica", "Retórica", "Mayéutica", "Dialéctica materialista"],
            answer: "Mayéutica",
            explanation: "Inspirado en el oficio de su madre, que era partera, Sócrates consideraba que su labor no era enseñar, sino ayudar a dar a luz al conocimiento que ya habita en el alma."
          },
          {
            id: "q1_2_3",
            type: "true-false",
            question: "Sócrates dejó numerosos libros escritos que detallan su filosofía moral e intelectual antes de ser condenado a muerte.",
            options: ["Verdadero", "Falso"],
            answer: "Falso",
            explanation: "Sócrates nunca escribió nada; prefería el diálogo vivo en el Ágora. Conocemos sus ideas principalmente a través de los escritos de su discípulo Platón."
          },
          {
            id: "q1_2_4",
            type: "multiple-choice",
            question: "¿Cuál fue la condena impuesta a Sócrates por la asamblea democrática ateniense bajo cargos de corromper a la juventud?",
            options: ["El exilio perpetuo", "Beber cicuta (veneno)", "Trabajos forzados en las minas", "Decapitación"],
            answer: "Beber cicuta (veneno)",
            explanation: "Sócrates prefirió acatar las leyes de Atenas y beber cicuta antes que huir cobardemente o renunciar a filosofar."
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
        name: "Platón y las Sombras de la Caverna",
        xpAward: 20,
        questions: [
          {
            id: "q2_1_1",
            type: "multiple-choice",
            question: "En la filosofía platónica, ¿dónde se encuentra la verdad absoluta, inmutable y perfecta de las cosas?",
            options: ["En el Mundo Sensible (físico)", "En el Mundo de las Ideas (Inteligible)", "En el interior de la Tierra", "En el Olimpo de los Dioses"],
            answer: "En el Mundo de las Ideas (Inteligible)",
            explanation: "Para Platón, las cosas físicas son solo sombras o copias imperfectas de las Formas o Ideas perfectas y eternas que existen en el Mundo Inteligible."
          },
          {
            id: "q2_1_2",
            type: "fill-in-the-blank",
            question: "En el famoso mito de Platón, los prisioneros confunden las ________ proyectadas en la pared con la auténtica realidad.",
            options: ["sombras", "luces", "figuras", "visiones"],
            answer: "sombras",
            explanation: "En la Alegoría de la Caverna, las sombras representan el nivel más bajo de conocimiento (la opinión o 'doxa'), basado solo en percepciones sensibles."
          },
          {
            id: "q2_1_3",
            type: "sentence-builder",
            question: "Ordena los niveles del alma según la teoría tripartita de Platón, desde la más mundana hasta la superior:",
            words: ["Racional", "Irascible", "Concupiscible"],
            correctOrder: ["Concupiscible", "Irascible", "Racional"],
            explanation: "Platón divide el alma en: Concupiscible (deseos básicos/abdomen), Irascible (voluntad y valor/pecho) y Racional (intelecto y prudencia/cabeza)."
          },
          {
            id: "q2_1_4",
            type: "true-false",
            question: "Platón creía que aprender es en realidad 'recordar' (Reminiscencia/Anámnesis) lo que nuestra alma contempló antes de encarnar en este cuerpo.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "El alma, al caer al cuerpo físico, olvida las verdades eternas del Mundo de las Ideas, y el conocimiento filosófico ayuda a recordarlas gradualmente."
          }
        ]
      },
      {
        id: "l2_2",
        name: "Aristóteles y la Realidad Terrenal",
        xpAward: 20,
        questions: [
          {
            id: "q2_2_1",
            type: "multiple-choice",
            question: "¿Cómo llamó Aristóteles a su teoría según la cual todas las cosas físicas están constituidas inseparablemente de Materia y Forma?",
            options: ["Dualismo", "Hilemorfismo", "Monismo", "Escepticismo"],
            answer: "Hilemorfismo",
            explanation: "El hilemorfismo (de 'hyle' = materia, y 'morphe' = forma) estipula que no existen ideas separadas en otro mundo, sino que materia y forma están unidas en cada objeto."
          },
          {
            id: "q2_2_2",
            type: "match",
            question: "Asocia cada una de las Cuatro Causas de Aristóteles con su significado (ejemplo de una estatua):",
            pairs: [
              { left: "Causa Material", right: "El Bronce" },
              { left: "Causa Formal", right: "El Diseño/Forma" },
              { left: "Causa Eficiente", right: "El Escultor" },
              { left: "Causa Final", right: "Honrar a un Dios" }
            ]
          },
          {
            id: "q2_2_3",
            type: "multiple-choice",
            question: "Según la Ética de Aristóteles, la virtud ética se define como:",
            options: ["El extremo del purismo absoluto", "El término medio entre dos excesos viciosos", "La renuncia a todo placer material", "La obediencia ciega a las leyes del Estado"],
            answer: "El término medio entre dos excesos viciosos",
            explanation: "Por ejemplo, la valentía es el punto medio saludable entre la cobardía (defecto) y la temeridad imprudente (exceso)."
          },
          {
            id: "q2_2_4",
            type: "true-false",
            question: "Aristóteles sostenía que el fin último del ser humano es alcanzar la Eudaimonía (Felicidad o florecimiento humano) a través de la razón y la virtud.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "Para Aristóteles, toda acción humana aspira a un bien, y el bien supremo y autosuficiente es la Eudaimonía."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "La Duda y la Experiencia",
    subtitle: "Módulo 3",
    description: "El choque titánico de la Modernidad: la certeza geométrica de Descartes contra la mente en blanco de Locke y Hume.",
    badge: "🕯️",
    difficulty: "Intermedio",
    lessons: [
      {
        id: "l3_1",
        name: "Descartes y la Certeza Indudable",
        xpAward: 20,
        questions: [
          {
            id: "q3_1_1",
            type: "sentence-builder",
            question: "Ordena la famosa declaración en latín de René Descartes que cimienta la filosofía moderna:",
            words: ["sum", "ergo", "Cogito,"],
            correctOrder: ["Cogito,", "ergo", "sum"],
            explanation: "Significa 'Pienso, luego existo'. Incluso si dudo de todo (de mis sentidos, de la realidad e incluso si un genio maligno me engaña), no puedo dudar de que estoy dudando y, por ende, existo como sustancia pensante."
          },
          {
            id: "q3_1_2",
            type: "multiple-choice",
            question: "¿Qué corriente filosófica fundó Descartes, la cual sostiene que la razón es la principal fuente del conocimiento humano?",
            options: ["Empirismo", "Existencialismo", "Racionalismo", "Estructuralismo"],
            answer: "Racionalismo",
            explanation: "El racionalismo confía en las capacidades de la mente y las ideas innatas para llegar a la verdad matemática y lógica, independientemente de los sentidos."
          },
          {
            id: "q3_1_3",
            type: "true-false",
            question: "En su duda metódica, Descartes planteó la hipótesis del 'Genio Maligno' como un recurso mental extremo para dudar incluso de las verdades matemáticas más evidentes.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "El Genio Maligno es una figura que Descartes inventa para dudar si un ser superior manipula su mente para hacerlo creer que 2+2=4 cuando no lo es."
          }
        ]
      },
      {
        id: "l3_2",
        name: "Hume y el Escepticismo del Sentido",
        xpAward: 20,
        questions: [
          {
            id: "q3_2_1",
            type: "multiple-choice",
            question: "Para John Locke y David Hume, la mente al nacer es una 'Tabula Rasa'. Esto significa que:",
            options: ["Tiene ideas divinas grabadas", "Es una pizarra en blanco sin ideas innatas", "Está programada con ideas matemáticas", "Tiene maldad intrínseca"],
            answer: "Es una pizarra en blanco sin ideas innatas",
            explanation: "El Empirismo niega las ideas innatas. Todo conocimiento proviene exclusivamente de la experiencia y de los datos de los sentidos."
          },
          {
            id: "q3_2_2",
            type: "match",
            question: "Empareja cada concepto clave con su filósofo moderno:",
            pairs: [
              { left: "Duda Metódica", right: "René Descartes" },
              { left: "Tabula Rasa", right: "John Locke" },
              { left: "Crítica a la Causalidad", right: "David Hume" },
              { left: "Leviatán", right: "Thomas Hobbes" }
            ]
          },
          {
            id: "q3_2_3",
            type: "fill-in-the-blank",
            question: "Hume argumentaba que la conexión causal entre dos eventos (como el fuego y el calor) no es una ley racional necesaria, sino fruto del hábito y la ________.",
            options: ["costumbre", "religión", "geometría", "intuición"],
            answer: "costumbre",
            explanation: "Nunca vemos la 'fuerza' causal en sí misma, solo vemos la conjunción constante de un evento seguido de otro. Nuestra mente asocia ambos eventos debido al hábito o costumbre."
          },
          {
            id: "q3_2_4",
            type: "true-false",
            question: "David Hume creía que la razón debe estar subordinada a las pasiones y emociones al guiar la conducta moral humana.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "Su célebre frase es: 'La razón es, y solo debe ser, esclava de las pasiones, y no puede pretender otra oficina que servirlas y obedecerlas'."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "El Deber y la Crítica",
    subtitle: "Módulo 4",
    description: "Descubre la revolución copernicana de Immanuel Kant y las leyes morales que rigen la razón pura.",
    badge: "⚖️",
    difficulty: "Avanzado",
    lessons: [
      {
        id: "l4_1",
        name: "La Revolución Kantiana",
        xpAward: 25,
        questions: [
          {
            id: "q4_1_1",
            type: "multiple-choice",
            question: "¿Cómo llamó Immanuel Kant a la realidad tal como existe en sí misma, la cual es completamente incognoscible para el ser humano?",
            options: ["Fenómeno", "Noúmeno (Cosa en sí)", "Idealismo trascendental", "Imperativo"],
            answer: "Noúmeno (Cosa en sí)",
            explanation: "Kant distingue el Fenómeno (el objeto tal como se nos aparece en el espacio y tiempo a través de nuestras facultades) y el Noúmeno (la cosa en sí, que no podemos captar experimentalmente)."
          },
          {
            id: "q4_1_2",
            type: "true-false",
            question: "El 'Giro Copernicano' de Kant consiste en plantear que el sujeto no es pasivo ante el objeto, sino que el sujeto estructura de forma activa la realidad que percibe.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "Igual que Copérnico giró el modelo del cosmos, Kant propuso que es el objeto el que debe adaptarse a nuestras estructuras cognitivas (tiempo, espacio y categorías), no al revés."
          },
          {
            id: "q4_1_3",
            type: "multiple-choice",
            question: "¿Cuál es el principio moral autónomo y universal que Kant formula para guiar nuestras acciones éticas?",
            options: ["El Utilitarismo egoísta", "El Imperativo Categórico", "El Relativismo moral", "La Ley del Talión"],
            answer: "El Imperativo Categórico",
            explanation: "Kant lo define así: 'Obra solo según aquella máxima por la cual puedas querer al mismo tiempo que se convierta en ley universal'."
          },
          {
            id: "q4_1_4",
            type: "sentence-builder",
            question: "Ordena los términos éticos de Kant para construir su famosa máxima sobre los seres humanos:",
            words: ["medios,", "sino", "como", "fines.", "Nunca", "como"],
            correctOrder: ["Nunca", "como", "medios,", "sino", "como", "fines."],
            explanation: "Para Kant, las personas poseen dignidad y no precio. Jamás debemos usarlas como simples instrumentos para conseguir algo, sino tratarlas como fines en sí mismas."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "La Existencia y el Absurdo",
    subtitle: "Módulo 5",
    description: "Nietzsche y la muerte de los antiguos ídolos, cruzando el abismo del nihilismo con Sartre y Camus.",
    badge: "🎭",
    difficulty: "Avanzado",
    lessons: [
      {
        id: "l5_1",
        name: "Nietzsche y el Martillo",
        xpAward: 25,
        questions: [
          {
            id: "q5_1_1",
            type: "multiple-choice",
            question: "¿Qué proclamó Friedrich Nietzsche para ilustrar que los valores absolutos tradicionales y la fe teológica han perdido toda vigencia en la sociedad moderna?",
            options: ["'El ser humano es bueno por naturaleza'", "'Dios ha muerto'", "'Pienso, luego existo'", "'La historia es la lucha de clases'"],
            answer: "'Dios ha muerto'",
            explanation: "Con esta frase impactante, Nietzsche diagnostica la llegada del Nihilismo: el colapso de los fundamentos morales trascendentes de Occidente."
          },
          {
            id: "q5_1_2",
            type: "fill-in-the-blank",
            question: "Nietzsche propone que el ser humano debe superarse a sí mismo para dar paso al ________ (Übermensch), quien crea sus propios valores.",
            options: ["Superhombre", "Rey Filósofo", "Ermitaño", "Científico"],
            answer: "Superhombre",
            explanation: "El Übermensch (Superhombre) es aquel espíritu libre que abraza la vida con todas sus fuerzas, superando la moral de esclavos y el resentimiento."
          },
          {
            id: "q5_1_3",
            type: "true-false",
            question: "El concepto de 'Eterno Retorno' en Nietzsche es una tortura matemática que te obliga a repetir tus errores sin posibilidad de disfrutar la vida.",
            options: ["Verdadero", "Falso"],
            answer: "Falso",
            explanation: "El Eterno Retorno es un experimento ético y existencial: ¿Vivirías tu vida de tal manera que desearas repetir cada instante eternamente? Es el test supremo de aceptación de la vida ('Amor fati')."
          }
        ]
      },
      {
        id: "l5_2",
        name: "Sartre, Camus y la Libertad Radical",
        xpAward: 25,
        questions: [
          {
            id: "q5_2_1",
            type: "multiple-choice",
            question: "¿Cuál es la premisa central del existencialismo de Jean-Paul Sartre sobre la condición humana?",
            options: ["La esencia precede a la existencia", "La existencia precede a la esencia", "El destino está predeterminado", "La física explica el alma"],
            answer: "La existencia precede a la esencia",
            explanation: "Significa que nacemos primero, existimos en el mundo, y solo después nos definimos y nos damos un propósito a través de nuestras decisiones libres. No hay una naturaleza humana prediseñada."
          },
          {
            id: "q5_2_2",
            type: "match",
            question: "Une a cada existencialista con su postulado o imagen insignia:",
            pairs: [
              { left: "Jean-Paul Sartre", right: "Condenados a ser Libres" },
              { left: "Albert Camus", right: "El Mito de Sísifo (El Absurdo)" },
              { left: "Simone de Beauvoir", right: "No se nace mujer, se llega a serlo" },
              { left: "Søren Kierkegaard", right: "El salto de fe / Angustia" }
            ]
          },
          {
            id: "q5_2_3",
            type: "sentence-builder",
            question: "Ordena las palabras de la famosa frase de Sartre sobre el peso de la libertad humana:",
            words: ["libre.", "El", "ser", "humano", "está", "condenado", "a"],
            correctOrder: ["El", "ser", "humano", "está", "condenado", "a", "ser", "libre."],
            explanation: "Dado que no hay Dios ni valores fijos que determinen lo que debemos hacer, somos 100% responsables de cada una de nuestras decisiones morales."
          },
          {
            id: "q5_2_4",
            type: "true-false",
            question: "Albert Camus sostiene en 'El mito de Sísifo' que debemos imaginar a Sísifo feliz mientras empuja su roca, ya que la rebelión consciente contra el absurdo le da sentido a la vida.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "A pesar de la falta de un sentido cósmico, la lucha constante y la lucidez frente al Absurdo constituyen la auténtica dignidad y libertad humana."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "El Laberinto Moderno",
    subtitle: "Módulo 6",
    description: "Analiza el poder de la biopolítica, el cansancio contemporáneo y los desafíos éticos en la era de los algoritmos.",
    badge: "💻",
    difficulty: "Sabio",
    lessons: [
      {
        id: "l6_1",
        name: "Poder, Discurso y Cansancio",
        xpAward: 30,
        questions: [
          {
            id: "q6_1_1",
            type: "multiple-choice",
            question: "¿Qué filósofo acuñó el término 'Biopolítica' para referirse a la forma en que los Estados modernos gestionan, regulan y controlan los cuerpos de la población?",
            options: ["Karl Marx", "Michel Foucault", "Jean Baudrillard", "Jacques Derrida"],
            answer: "Michel Foucault",
            explanation: "Foucault demostró que el poder en la era moderna ya no se basa en dar muerte (el soberano), sino en administrar e higienizar la vida activa de los ciudadanos."
          },
          {
            id: "q6_1_2",
            type: "fill-in-the-blank",
            question: "Byung-Chul Han describe a la sociedad del siglo XXI como la 'Sociedad del ________', donde nos autoexplotamos voluntariamente persiguiendo el rendimiento.",
            options: ["Cansancio", "Bienestar", "Ocio", "Espectáculo"],
            answer: "Cansancio",
            explanation: "En la Sociedad del Cansancio, pasamos del esquema disciplinario del deber ('tú debes') al del rendimiento del poder ('tú puedes'). El sujeto se autoexplota libremente hasta el burnout."
          },
          {
            id: "q6_1_3",
            type: "true-false",
            question: "La 'Habitación de Searle' es un experimento mental diseñado para probar que las computadoras no comprenden realmente el lenguaje, sino que solo manipulan símbolos sintácticos de forma ciega.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "John Searle propuso este experimento para demostrar que la Inteligencia Artificial fuerte no posee una mente o comprensión real ('semántica'), solo sigue reglas formales ('sintaxis')."
          }
        ]
      }
    ]
  }
];
