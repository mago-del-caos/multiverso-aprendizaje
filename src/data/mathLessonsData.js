export const mathLessonsData = [
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
            explanation: "Primero ordenamos los datos de menor a mayor: 1, 1, 2, 3, 4, 5, 6. Como hay 7 datos (número impar), la mediana es el dato central, que se encuentra en la posición 4: el número 3."
          },
          {
            id: "qm1_1_3",
            type: "fill-in-the-blank",
            question: "En una encuesta sobre el medio de transporte de 15 alumnos, se obtuvo: Metro (7 veces), Camión (4), Bicicleta (2) y Auto (2). ¿Cuál es la moda?",
            options: ["Metro", "Camión", "Bicicleta", "Auto"],
            answer: "Metro",
            explanation: "La moda es el dato con mayor frecuencia absoluta (el que más se repite). En este caso, el Metro se repite 7 veces, más que cualquier otro transporte."
          },
          {
            id: "qm1_1_4",
            type: "true-false",
            question: "Si a un grupo de gastos ($30, $30, $30, $45, $50, $60, $75) con media de $45.7 se le agrega un estudiante que gastó $100, la nueva media aritmética aumenta a $52.5.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "La suma original era $320. Al agregar $100, la suma es $420 y el total de datos sube de 7 a 8. Calculamos 420 / 8 = $52.5. La media subió debido al valor extremo ($100)."
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
          },
          {
            id: "qm1_2_3",
            type: "fill-in-the-blank",
            question: "Simplifica la expresión multiplicando las bases iguales: (z^3)(z^2)",
            options: ["z^6", "z^5", "5z", "z^1"],
            answer: "z^5",
            explanation: "Al multiplicar bases iguales, se conserva la base y se suman los exponentes: z^(3+2) = z^5."
          },
          {
            id: "qm1_2_4",
            type: "match",
            question: "Empareja cada ley de exponente con su resultado correcto:",
            pairs: [
              { left: "x^0", right: "1" },
              { left: "2(x^0)", right: "2" },
              { left: "a^1", right: "a" },
              { left: "2^9 / 2^5", right: "16" }
            ],
            explanation: "Todo número elevado a cero es 1 (x^0 = 1, por lo que 2(x^0) = 2). Cualquier base a la potencia 1 es sí misma (a^1 = a). Para 2^9 / 2^5 restamos exponentes: 2^(9-5) = 2^4 = 16."
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
            explanation: "Multiplicamos los coeficientes decimales de forma directa: 1.5 x 3 = 4.5. Conservamos la potencia de 10 intacta: 4.5 x 10^8."
          },
          {
            id: "qm1_3_2",
            type: "multiple-choice",
            question: "Simplifica la multiplicación: (1.0 x 10^-10) x (5.0 x 10^5)",
            options: ["5.0 x 10^-15", "5.0 x 10^-5", "5.0 x 10^5", "0.5 x 10^-4"],
            answer: "5.0 x 10^-5",
            explanation: "Multiplicamos los coeficientes: 1.0 x 5.0 = 5.0. Sumamos algebraicamente los exponentes de base 10: -10 + 5 = -5. Queda 5.0 x 10^-5."
          },
          {
            id: "qm1_3_3",
            type: "true-false",
            question: "El resultado de sumar 3.2 x 10^4 + 1.5 x 10^3 es igual a 3.35 x 10^4.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "Para sumar, igualamos los exponentes convirtiendo 1.5 x 10^3 a 0.15 x 10^4. Sumamos coeficientes: (3.2 + 0.15) x 10^4 = 3.35 x 10^4."
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
        name: "Operaciones Polinomiales",
        xpAward: 20,
        questions: [
          {
            id: "qm2_1_1",
            type: "multiple-choice",
            question: "Simplifica la siguiente suma algebraica: (4x^2 + 3xy - 5y^2) + (6xy - 7x^2 + 8y^2) + (-xy - x^2 - 2y^2)",
            options: ["-4x^2 + 8xy + y^2", "-4x^2 + 9xy + y^2", "-3x^2 + 8xy - y^2", "x^2 + xy + y^2"],
            answer: "-4x^2 + 8xy + y^2",
            explanation: "Agrupamos términos semejantes:\nPara x^2: 4 - 7 - 1 = -4x^2.\nPara xy: 3 + 6 - 1 = 8xy.\nPara y^2: -5 + 8 - 2 = 1y^2.\nResultado: -4x^2 + 8xy + y^2."
          },
          {
            id: "qm2_1_2",
            type: "multiple-choice",
            question: "Multiplica el monomio por el binomio: -3a^4 (5a^3 y)",
            options: ["-15a^12 y", "-15a^7 y", "2a^7 y", "-15a^7 y^2"],
            answer: "-15a^7 y",
            explanation: "Multiplicamos los coeficientes reales: -3 * 5 = -15. Sumamos los exponentes de la base común a: a^(4+3) = a^7. Conservamos y: -15a^7 y."
          }
        ]
      },
      {
        id: "m2_2",
        name: "Productos Notables",
        xpAward: 25,
        questions: [
          {
            id: "qm2_2_1",
            type: "multiple-choice",
            question: "Desarrolla el binomio al cuadrado: (2x + 3y)^2",
            options: ["4x^2 + 9y^2", "4x^2 + 12xy + 9y^2", "4x^2 + 6xy + 9y^2", "2x^2 + 12xy + 3y^2"],
            answer: "4x^2 + 12xy + 9y^2",
            explanation: "Fórmula del binomio al cuadrado: (a + b)^2 = a^2 + 2ab + b^2.\nCuadrado del primero: (2x)^2 = 4x^2.\nDoble producto del primero por el segundo: 2 * (2x) * (3y) = 12xy.\nCuadrado del segundo: (3y)^2 = 9y^2."
          },
          {
            id: "qm2_2_2",
            type: "multiple-choice",
            question: "Desarrolla el binomio con resta al cuadrado: (4n - 9)^2",
            options: ["16n^2 - 81", "16n^2 - 72n + 81", "16n^2 - 36n + 81", "8n^2 - 72n + 18"],
            answer: "16n^2 - 72n + 81",
            explanation: "Aplicando (a - b)^2 = a^2 - 2ab + b^2:\nCuadrado de 4n = 16n^2.\nDoble de 4n por -9 = 2 * 4n * -9 = -72n.\nCuadrado de -9 = 81."
          }
        ]
      },
      {
        id: "m2_3",
        name: "El Arte de la Factorización",
        xpAward: 30,
        questions: [
          {
            id: "qm2_3_1",
            type: "multiple-choice",
            question: "Factoriza la expresión por término común: 14x^2 y^2 - 28x^3 y^4 + 56x^5 y^3",
            options: [
              "14x^2 y^2 (1 - 2xy^2 + 4x^3 y)",
              "7x^2 y^2 (2 - 4xy^2 + 8x^3 y)",
              "14xy (x y - 2x^2 y^3 + 4x^4 y^2)",
              "14x^2 y^2 (1 + 2xy^2 - 4x^3 y)"
            ],
            answer: "14x^2 y^2 (1 - 2xy^2 + 4x^3 y)",
            explanation: "El Máximo Común Divisor de los coeficientes (14, 28, 56) es 14. Las menores potencias de las variables comunes son x^2 y y^2. Extraemos 14x^2 y^2 de cada término."
          },
          {
            id: "qm2_3_2",
            type: "multiple-choice",
            question: "Resuelve la diferencia de cuadrados perfectos: 4a^2 - b^4",
            options: ["(2a - b^2)^2", "(2a - b^2)(2a + b^2)", "(2a - b)(2a + b)", "(4a - b^2)(a + b^2)"],
            answer: "(2a - b^2)(2a + b^2)",
            explanation: "La diferencia de cuadrados x^2 - y^2 se factoriza en binomios conjugados (x - y)(x + y). Obtenemos las raíces cuadradas de cada término: raíz(4a^2) = 2a, y raíz(b^4) = b^2."
          },
          {
            id: "qm2_3_3",
            type: "match",
            question: "Empareja cada trinomio con su factorización algebraica correspondiente:",
            pairs: [
              { left: "a^2 - 2ab + b^2", right: "(a - b)^2" },
              { left: "49a^2 - 14a + 1", right: "(7a - 1)^2" },
              { left: "a^2 - 11a + 28", right: "(a - 7)(a - 4)" },
              { left: "x^2 - 5x - 36", right: "(x - 9)(x + 4)" }
            ],
            explanation: "Los primeros dos son Trinomios Cuadrados Perfectos: (a - b)^2 y (7a - 1)^2. Los dos últimos son trinomios de la forma x^2 + bx + c, donde buscamos números que multiplicados den c y sumados den b."
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
        name: "Ecuaciones de Primer Grado",
        xpAward: 20,
        questions: [
          {
            id: "qm3_1_1",
            type: "multiple-choice",
            question: "Resuelve la ecuación de primer grado: 3(2x - 5) + 1 = -4x - (4 - 5x) + 5",
            options: ["x = 1", "x = 3", "x = -2", "x = 5"],
            answer: "x = 3",
            explanation: "Desarrollamos paréntesis:\n6x - 15 + 1 = -4x - 4 + 5x + 5\n6x - 14 = x + 1\nPasamos x al miembro izquierdo: 6x - x = 1 + 14\n5x = 15 => x = 15 / 5 = 3."
          },
          {
            id: "qm3_1_2",
            type: "multiple-choice",
            question: "Despeja x en la siguiente ecuación con división: x / (-5) = -6",
            options: ["x = 30", "x = -30", "x = 1.2", "x = -1.2"],
            answer: "x = 30",
            explanation: "Como el -5 está dividiendo a la variable x, pasa al otro miembro multiplicando con todo y su signo: x = -6 * (-5) = 30."
          }
        ]
      },
      {
        id: "m3_2",
        name: "Problemas Razonados",
        xpAward: 25,
        questions: [
          {
            id: "qm3_2_1",
            type: "multiple-choice",
            question: "Si al doble de un número se le resta su mitad, resulta 54. ¿Cuál es ese número?",
            options: ["24", "36", "48", "18"],
            answer: "36",
            explanation: "Planteamos la ecuación lineal: 2x - x/2 = 54.\nMultiplicamos todo por 2 para eliminar la fracción: 4x - x = 108\n3x = 108 => x = 108 / 3 = 36."
          },
          {
            id: "qm3_2_2",
            type: "multiple-choice",
            question: "Una granja tiene cerdos y gallinas. Hay un total de 35 cabezas y 116 patas. ¿Cuántos cerdos (4 patas) y gallinas (2 patas) hay?",
            options: ["20 cerdos y 15 gallinas", "23 cerdos y 12 gallinas", "15 cerdos y 20 gallinas", "25 cerdos y 10 gallinas"],
            answer: "23 cerdos y 12 gallinas",
            explanation: "Planteamos un sistema lineal con x (cerdos) y y (gallinas):\nx + y = 35 (cabezas)\n4x + 2y = 116 (patas)\nMultiplicamos la primera por -2: -2x - 2y = -70\nSumamos ambas ecuaciones: 2x = 46 => x = 23 cerdos.\nPor tanto, y = 35 - 23 = 12 gallinas."
          },
          {
            id: "qm3_2_3",
            type: "sentence-builder",
            question: "Ordena los pasos algebraicos para resolver el problema: 'La base de un rectángulo es el doble de su altura. Su perímetro mide 30 cm. Halla sus dimensiones.'",
            words: [
              "x = 5 (altura)",
              "Perímetro = 2(2x + x) = 30",
              "2x = 10 (base)",
              "6x = 30"
            ],
            correctOrder: [
              "Perímetro = 2(2x + x) = 30",
              "6x = 30",
              "x = 5 (altura)",
              "2x = 10 (base)"
            ],
            explanation: "Definimos la altura como x y la base como 2x. El perímetro es la suma de los 4 lados: 2(2x + x) = 30, lo que simplifica a 6x = 30. Resolvemos para x = 5 cm de altura, y por tanto la base mide 2(5) = 10 cm."
          }
        ]
      },
      {
        id: "m3_3",
        name: "Ecuaciones Cuadráticas",
        xpAward: 30,
        questions: [
          {
            id: "qm3_3_1",
            type: "multiple-choice",
            question: "Resuelve empleando la fórmula general cuadrática: 2x^2 - 7x + 3 = 0",
            options: ["x = 3, x = 0.5", "x = -3, x = -0.5", "x = 2, x = 1.5", "x = 1, x = 3"],
            answer: "x = 3, x = 0.5",
            explanation: "Coeficientes: a=2, b=-7, c=3.\nFórmula general: x = [-b ± raíz(b^2 - 4ac)] / 2a.\nDiscriminante: (-7)^2 - 4(2)(3) = 49 - 24 = 25.\nRaíces: x = [7 ± 5] / 4.\nx1 = 12/4 = 3, x2 = 2/4 = 0.5."
          },
          {
            id: "qm3_3_2",
            type: "multiple-choice",
            question: "Encuentra las soluciones de la ecuación cuadrática por factorización o fórmula general: x^2 + 11x + 24 = 0",
            options: ["x = 8, x = 3", "x = -8, x = -3", "x = -8, x = 3", "x = 8, x = -3"],
            answer: "x = -8, x = -3",
            explanation: "Factorizando el trinomio: (x + 8)(x + 3) = 0.\nPara que el producto sea cero, alguno de los factores debe ser cero:\nx + 8 = 0 => x = -8\nx + 3 = 0 => x = -3."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Sistemas Simultáneos",
    subtitle: "Temporada 4",
    description: "Resuelve sistemas de ecuaciones lineales en 2 variables por métodos de suma y resta, sustitución o determinantes.",
    badge: "🔗",
    difficulty: "Avanzado",
    lessons: [
      {
        id: "m4_1",
        name: "Sistemas de Ecuaciones 2x2",
        xpAward: 25,
        questions: [
          {
            id: "qm4_1_1",
            type: "multiple-choice",
            question: "Resuelve el sistema de ecuaciones:\nEc1: 2x + 3y = 8\nEc2: 3x - y = 1",
            options: ["x = 1, y = 2", "x = 2, y = 1", "x = 0, y = 3", "x = -1, y = 3"],
            answer: "x = 1, y = 2",
            explanation: "Método de suma y resta: multiplicamos la Ec2 por 3:\n9x - 3y = 3\nSumamos Ec1: (2x + 3y) + (9x - 3y) = 8 + 3\n11x = 11 => x = 1.\nSustituimos x=1 en Ec2: 3(1) - y = 1 => 3 - 1 = y => y = 2."
          },
          {
            id: "qm4_1_2",
            type: "true-false",
            question: "La Regla de Cramer (determinantes) para resolver un sistema 2x2 consiste en calcular el determinante general y dividir los determinantes de las incógnitas entre este para obtener x y y.",
            options: ["Verdadero", "Falso"],
            answer: "Verdadero",
            explanation: "Es correcto. Para un sistema de ecuaciones lineales, calculamos el determinante del sistema D, el de x (Dx) y el de y (Dy). Las soluciones son x = Dx/D y y = Dy/D, siempre que D sea diferente de cero."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Inecuaciones y Restricciones",
    subtitle: "Temporada 5",
    description: "Modela restricciones mediante inecuaciones de primer grado e inecuaciones compuestas con valor absoluto.",
    badge: "🚧",
    difficulty: "Avanzado",
    lessons: [
      {
        id: "m5_1",
        name: "Desigualdades e Intervalos",
        xpAward: 25,
        questions: [
          {
            id: "qm5_1_1",
            type: "multiple-choice",
            question: "Resuelve la inecuación lineal de primer grado: 3(x - 1) >= 5(x + 2) - 5",
            options: ["x <= -4", "x >= -4", "x <= 4", "x >= 4"],
            answer: "x <= -4",
            explanation: "Desarrollamos los paréntesis:\n3x - 3 >= 5x + 10 - 5\n3x - 3 >= 5x + 5\nRestamos 5x en ambos lados: -2x - 3 >= 5\nSumamos 3 en ambos lados: -2x >= 8\nDividimos entre -2 (¡Ojo! El signo de la desigualdad se invierte al dividir entre un negativo): x <= -4."
          },
          {
            id: "qm5_1_2",
            type: "multiple-choice",
            question: "Resuelve la desigualdad con valor absoluto o compuesta: -1 < 2x - 5 < 7",
            options: ["2 < x < 6", "-2 < x < 6", "2 < x < 12", "x < 6"],
            answer: "2 < x < 6",
            explanation: "Resolvemos la desigualdad compuesta sumando 5 en los tres términos:\n-1 + 5 < 2x < 7 + 5\n4 < 2x < 12\nDividimos todo entre 2:\n2 < x < 6."
          }
        ]
      }
    ]
  }
];
