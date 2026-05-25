import React, { useState } from 'react';
import { Calculator, TrendingUp, BarChart2, Check, Sparkles, RotateCcw } from 'lucide-react';

export default function MathLaboratory() {
  const [activeSubTab, setActiveSubTab] = useState('stats'); // 'stats', 'quadratic', 'cramer'

  // --- STATISTICS STATE ---
  const [statsInput, setStatsInput] = useState('8.5, 9.0, 7.5, 8.0, 9.5');
  const [statsResults, setStatsResults] = useState(null);

  const calculateStats = () => {
    try {
      const nums = statsInput
        .split(',')
        .map(n => parseFloat(n.trim()))
        .filter(n => !isNaN(n));

      if (nums.length === 0) {
        alert('Por favor, ingresa números válidos separados por comas.');
        return;
      }

      // 1. Mean
      const sum = nums.reduce((a, b) => a + b, 0);
      const mean = sum / nums.length;

      // 2. Median
      const sorted = [...nums].sort((a, b) => a - b);
      let median;
      const mid = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        median = (sorted[mid - 1] + sorted[mid]) / 2;
      } else {
        median = sorted[mid];
      }

      // 3. Mode
      const counts = {};
      let maxCount = 0;
      let modes = [];
      nums.forEach(n => {
        counts[n] = (counts[n] || 0) + 1;
        if (counts[n] > maxCount) {
          maxCount = counts[n];
        }
      });

      if (maxCount > 1) {
        for (const n in counts) {
          if (counts[n] === maxCount) {
            modes.push(parseFloat(n));
          }
        }
      }

      setStatsResults({
        original: nums,
        sorted,
        sum,
        mean: mean.toFixed(2),
        median: median.toFixed(2),
        modes: modes.length > 0 ? modes.join(', ') : 'No hay moda (todos se repiten igual)',
        maxCount,
        steps: {
          meanFormula: `\\bar{x} = \\frac{\\sum x_i}{N} = \\frac{${nums.join(' + ')}}{${nums.length}} = \\frac{${sum.toFixed(1)}}{${nums.length}} = ${mean.toFixed(2)}`,
          medianStep: sorted.length % 2 === 0
            ? `Datos ordenados: [${sorted.join(', ')}]. Al ser un número par de datos (${sorted.length}), la mediana es el promedio de los dos datos centrales (${sorted[mid - 1]} y ${sorted[mid]}): \\frac{${sorted[mid - 1]} + ${sorted[mid]}}{2} = ${median.toFixed(2)}`
            : `Datos ordenados: [${sorted.join(', ')}]. Al ser un número impar de datos (${sorted.length}), la mediana es el valor central en la posición ${mid + 1}: ${median.toFixed(2)}`
        }
      });
    } catch (e) {
      alert('Error en el cálculo. Revisa tu formato.');
    }
  };

  // --- QUADRATIC EQUATION STATE ---
  const [quadA, setQuadA] = useState(2);
  const [quadB, setQuadB] = useState(-7);
  const [quadC, setQuadC] = useState(3);
  const [quadResult, setQuadResult] = useState(null);

  const calculateQuadratic = () => {
    const a = parseFloat(quadA);
    const b = parseFloat(quadB);
    const c = parseFloat(quadC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      alert('Por favor, ingresa coeficientes numéricos válidos.');
      return;
    }
    if (a === 0) {
      alert('El coeficiente "a" no puede ser cero en una ecuación cuadrática.');
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
      type = 'Una raíz real de multiplicidad 2';
    } else {
      const real = (-b / (2 * a)).toFixed(2);
      const imag = (Math.sqrt(-disc) / (2 * a)).toFixed(2);
      root1 = `${real} + ${imag}i`;
      root2 = `${real} - ${imag}i`;
      type = 'Dos raíces complejas conjugadas';
    }

    // Generate coordinates for SVG plotting
    // Let's plot from x = vertexX - 5 to x = vertexX + 5
    const vertexX = -b / (2 * a);
    const vertexY = a * vertexX * vertexX + b * vertexX + c;

    const points = [];
    const scaleX = 25; // pixels per unit
    const scaleY = 15; // pixels per unit
    const centerX = 150; // offset
    const centerY = 100; // offset

    for (let xVal = vertexX - 4; xVal <= vertexX + 4; xVal += 0.25) {
      const yVal = a * xVal * xVal + b * xVal + c;
      // Convert to SVG space
      const svgX = centerX + (xVal - vertexX) * scaleX;
      // invert Y for screen space
      const svgY = centerY - (yVal - vertexY) * scaleY;
      points.push(`${svgX},${svgY}`);
    }

    setQuadResult({
      a, b, c, disc,
      root1: typeof root1 === 'number' ? root1.toFixed(2) : root1,
      root2: typeof root2 === 'number' ? root2.toFixed(2) : root2,
      type,
      vertex: `(${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})`,
      points: points.join(' '),
      vertexX,
      vertexY
    });
  };

  // --- CRAMER 2x2 STATE ---
  const [cramerA1, setCramerA1] = useState(2);
  const [cramerB1, setCramerB1] = useState(3);
  const [cramerC1, setCramerC1] = useState(8);
  const [cramerA2, setCramerA2] = useState(3);
  const [cramerB2, setCramerB2] = useState(-1);
  const [cramerC2, setCramerC2] = useState(1);
  const [cramerResult, setCramerResult] = useState(null);

  const calculateCramer = () => {
    const a1 = parseFloat(cramerA1);
    const b1 = parseFloat(cramerB1);
    const c1 = parseFloat(cramerC1);
    const a2 = parseFloat(cramerA2);
    const b2 = parseFloat(cramerB2);
    const c2 = parseFloat(cramerC2);

    if ([a1, b1, c1, a2, b2, c2].some(v => isNaN(v))) {
      alert('Ingresa coeficientes numéricos válidos.');
      return;
    }

    // Determinants
    const D = a1 * b2 - b1 * a2;
    const Dx = c1 * b2 - b1 * c2;
    const Dy = a1 * c2 - c1 * a2;

    if (D === 0) {
      if (Dx === 0 && Dy === 0) {
        setCramerResult({ status: 'infinite', D, Dx, Dy });
      } else {
        setCramerResult({ status: 'none', D, Dx, Dy });
      }
      return;
    }

    const x = Dx / D;
    const y = Dy / D;

    setCramerResult({
      status: 'success',
      D, Dx, Dy,
      x: x.toFixed(2),
      y: y.toFixed(2),
      a1, b1, c1, a2, b2, c2
    });
  };

  return (
    <div className="sandbox-panel" style={{ width: '100%', maxWidth: '850px', margin: '0 auto', animation: 'fadeIn 0.4s ease' }}>
      
      {/* Sandbox Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', background: 'linear-gradient(135deg, var(--text-primary) 30%, #f43f5e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
          <Calculator size={36} className="text-secondary" style={{ color: 'var(--color-incorrect)' }} />
          El Laboratorio de Fórmulas
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
          Un espacio interactivo para experimentar, resolver y visualizar tus guías de Matemáticas IV paso a paso.
        </p>
      </div>

      {/* Selector Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        <button
          className={`nav-item ${activeSubTab === 'stats' ? 'active' : ''}`}
          style={{ border: activeSubTab === 'stats' ? '2px solid var(--accent-purple)' : '2px solid transparent', padding: '0.75rem 1.5rem', borderRadius: '1rem' }}
          onClick={() => setActiveSubTab('stats')}
        >
          <BarChart2 size={18} />
          <span>Tendencia Central</span>
        </button>
        <button
          className={`nav-item ${activeSubTab === 'quadratic' ? 'active' : ''}`}
          style={{ border: activeSubTab === 'quadratic' ? '2px solid var(--accent-purple)' : '2px solid transparent', padding: '0.75rem 1.5rem', borderRadius: '1rem' }}
          onClick={() => setActiveSubTab('quadratic')}
        >
          <TrendingUp size={18} />
          <span>Fórmula General</span>
        </button>
        <button
          className={`nav-item ${activeSubTab === 'cramer' ? 'active' : ''}`}
          style={{ border: activeSubTab === 'cramer' ? '2px solid var(--accent-purple)' : '2px solid transparent', padding: '0.75rem 1.5rem', borderRadius: '1rem' }}
          onClick={() => setActiveSubTab('cramer')}
        >
          <Calculator size={18} />
          <span>Sistemas 2x2 (Cramer)</span>
        </button>
      </div>

      {/* --- 1. TENDENCIA CENTRAL --- */}
      {activeSubTab === 'stats' && (
        <div className="question-bubble" style={{ width: '100%', transform: 'none', background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', padding: '2rem', borderRadius: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-title)' }}>
            📊 Medidas de Tendencia Central
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Ingresa un conjunto de números separados por comas para calcular de inmediato la <strong>Media</strong>, la <strong>Mediana</strong> y la <strong>Moda</strong> con explicaciones paso a paso.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <input
              type="text"
              className="option-btn"
              style={{ flexGrow: 1, padding: '0.75rem 1.25rem', fontSize: '1.1rem', cursor: 'text', border: '1px solid var(--border-glass)' }}
              value={statsInput}
              onChange={(e) => setStatsInput(e.target.value)}
              placeholder="Ej. 8.5, 9.0, 7.5, 8.0, 9.5"
            />
            <button
              className="btn-primary"
              style={{ background: 'var(--color-correct)', color: 'white', fontWeight: 'bold', padding: '0 2rem', borderRadius: '1rem' }}
              onClick={calculateStats}
            >
              Calcular
            </button>
          </div>

          {statsResults && (
            <div style={{ marginTop: '2rem', borderTop: '1px dashed var(--border-glass)', paddingTop: '1.5rem', animation: 'fadeIn 0.3s ease' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Media Aritmética</span>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-purple-hover)', marginTop: '0.5rem' }}>{statsResults.mean}</div>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Mediana (Dato Central)</span>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-gold)', marginTop: '0.5rem' }}>{statsResults.median}</div>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Moda (Frecuente)</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--color-correct)', marginTop: '0.75rem', wordBreak: 'break-word' }}>{statsResults.modes}</div>
                </div>
              </div>

              {/* Step breakdown */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-gold)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} /> Procedimiento Paso a Paso:
                </h3>
                <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                  <p style={{ marginBottom: '0.75rem' }}>
                    <strong>1. Suma de elementos y Media:</strong>
                    <br />
                    <code style={{ background: 'var(--bg-secondary)', padding: '0.2rem 0.5rem', borderRadius: '0.35rem', color: 'var(--accent-purple-hover)' }}>
                      Sumatoria: {statsResults.original.join(' + ')} = {statsResults.sum}
                    </code>
                    <br />
                    Dividimos entre {statsResults.original.length} datos: {statsResults.sum} / {statsResults.original.length} = {statsResults.mean}
                  </p>
                  <p>
                    <strong>2. Ordenación y Mediana:</strong>
                    <br />
                    {statsResults.steps.medianStep}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- 2. FÓRMULA GENERAL --- */}
      {activeSubTab === 'quadratic' && (
        <div className="question-bubble" style={{ width: '100%', transform: 'none', background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', padding: '2rem', borderRadius: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-title)' }}>
            📈 Fórmula General Cuadrática
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Resuelve ecuaciones cuadráticas de la forma $ax^2 + bx + c = 0$ y observa su parábola graficada de forma interactiva en tiempo real.
          </p>

          {/* Form coefficients */}
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '90px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 'bold' }}>a (x²)</label>
              <input
                type="number"
                className="option-btn"
                style={{ padding: '0.75rem', fontSize: '1.1rem', cursor: 'text', border: '1px solid var(--border-glass)', textAlign: 'center' }}
                value={quadA}
                onChange={(e) => setQuadA(e.target.value)}
              />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', paddingTop: '1.2rem' }}>+</div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '90px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 'bold' }}>b (x)</label>
              <input
                type="number"
                className="option-btn"
                style={{ padding: '0.75rem', fontSize: '1.1rem', cursor: 'text', border: '1px solid var(--border-glass)', textAlign: 'center' }}
                value={quadB}
                onChange={(e) => setQuadB(e.target.value)}
              />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', paddingTop: '1.2rem' }}>+</div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '90px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 'bold' }}>c (constante)</label>
              <input
                type="number"
                className="option-btn"
                style={{ padding: '0.75rem', fontSize: '1.1rem', cursor: 'text', border: '1px solid var(--border-glass)', textAlign: 'center' }}
                value={quadC}
                onChange={(e) => setQuadC(e.target.value)}
              />
            </div>
            <button
              className="btn-primary"
              style={{ background: 'var(--color-correct)', color: 'white', fontWeight: 'bold', height: '52px', marginTop: '1.2rem', padding: '0 2rem', borderRadius: '1rem' }}
              onClick={calculateQuadratic}
            >
              Resolver
            </button>
          </div>

          {quadResult && (
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem', borderTop: '1px dashed var(--border-glass)', paddingTop: '1.5rem', animation: 'fadeIn 0.3s ease' }}>
              
              {/* Graphic Plot */}
              <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontWeight: 'bold' }}>Gráfica de la Parábola</h3>
                <div style={{ background: '#0e0b16', padding: '1rem', borderRadius: '1.25rem', border: '2px solid var(--border-glass)', boxShadow: 'var(--shadow-glow-purple)' }}>
                  <svg width="300" height="200" style={{ overflow: 'visible' }}>
                    {/* Grid Background */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(139, 92, 246, 0.07)" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Axes */}
                    <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />
                    <line x1="150" y1="0" x2="150" y2="200" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" />

                    {/* Parabola Plot */}
                    <polyline
                      fill="none"
                      stroke="var(--color-incorrect)"
                      strokeWidth="3"
                      points={quadResult.points}
                      strokeLinecap="round"
                    />

                    {/* Vertex point */}
                    <circle cx="150" cy="100" r="5" fill="var(--accent-gold)" />
                    <text x="160" y="95" fill="var(--accent-gold)" fontSize="10" fontWeight="bold">Vértice</text>
                  </svg>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Ejes centrados en el vértice de la curva</span>
              </div>

              {/* Step by step results */}
              <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Tipo de Raíces</span>
                  <div style={{ fontSize: '1.15rem', fontWeight: 'bold', color: 'var(--accent-gold)', marginTop: '0.25rem' }}>{quadResult.type}</div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flex: 1, background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Raíz x₁</span>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--color-correct)', marginTop: '0.25rem' }}>{quadResult.root1}</div>
                  </div>
                  <div style={{ flex: 1, background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Raíz x₂</span>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--color-correct)', marginTop: '0.25rem' }}>{quadResult.root2}</div>
                  </div>
                </div>

                {/* Procedure */}
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  <h4 style={{ color: 'var(--accent-purple-hover)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Fórmula General:</h4>
                  <div style={{ fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                    1. Discriminante (Δ) = b² - 4ac
                    <br />
                    &nbsp;&nbsp; Δ = ({quadResult.b})² - 4({quadResult.a})({quadResult.c})
                    <br />
                    &nbsp;&nbsp; Δ = {quadResult.b * quadResult.b} - {4 * quadResult.a * quadResult.c} = {quadResult.disc}
                    <br />
                    2. x = [-b ± √Δ] / 2a
                    <br />
                    &nbsp;&nbsp; x = [-({quadResult.b}) ± √{quadResult.disc}] / 2({quadResult.a})
                    <br />
                    &nbsp;&nbsp; Vértice V: {quadResult.vertex}
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      )}

      {/* --- 3. CRAMER 2x2 --- */}
      {activeSubTab === 'cramer' && (
        <div className="question-bubble" style={{ width: '100%', transform: 'none', background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', padding: '2rem', borderRadius: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', fontFamily: 'var(--font-title)' }}>
            🔗 Sistemas de Ecuaciones 2x2 (Regla de Cramer)
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Resuelve de inmediato sistemas de dos ecuaciones lineales con dos incógnitas por el método de determinantes ilustrado.
          </p>

          <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: '1.25rem', border: '1px solid var(--border-glass-light)', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Equation 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ width: '100px', fontWeight: 'bold', color: 'var(--accent-purple-hover)' }}>Ecuación 1:</span>
                <input
                  type="number"
                  className="option-btn"
                  style={{ width: '70px', padding: '0.5rem', textAlign: 'center', border: '1px solid var(--border-glass)' }}
                  value={cramerA1}
                  onChange={(e) => setCramerA1(e.target.value)}
                />
                <span>x</span>
                <span>+</span>
                <input
                  type="number"
                  className="option-btn"
                  style={{ width: '70px', padding: '0.5rem', textAlign: 'center', border: '1px solid var(--border-glass)' }}
                  value={cramerB1}
                  onChange={(e) => setCramerB1(e.target.value)}
                />
                <span>y</span>
                <span>=</span>
                <input
                  type="number"
                  className="option-btn"
                  style={{ width: '70px', padding: '0.5rem', textAlign: 'center', border: '1px solid var(--border-glass)' }}
                  value={cramerC1}
                  onChange={(e) => setCramerC1(e.target.value)}
                />
              </div>

              {/* Equation 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ width: '100px', fontWeight: 'bold', color: 'var(--accent-purple-hover)' }}>Ecuación 2:</span>
                <input
                  type="number"
                  className="option-btn"
                  style={{ width: '70px', padding: '0.5rem', textAlign: 'center', border: '1px solid var(--border-glass)' }}
                  value={cramerA2}
                  onChange={(e) => setCramerA2(e.target.value)}
                />
                <span>x</span>
                <span>+</span>
                <input
                  type="number"
                  className="option-btn"
                  style={{ width: '70px', padding: '0.5rem', textAlign: 'center', border: '1px solid var(--border-glass)' }}
                  value={cramerB2}
                  onChange={(e) => setCramerB2(e.target.value)}
                />
                <span>y</span>
                <span>=</span>
                <input
                  type="number"
                  className="option-btn"
                  style={{ width: '70px', padding: '0.5rem', textAlign: 'center', border: '1px solid var(--border-glass)' }}
                  value={cramerC2}
                  onChange={(e) => setCramerC2(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <button
                className="btn-primary"
                style={{ background: 'var(--color-correct)', color: 'white', fontWeight: 'bold', padding: '0.75rem 2.5rem', borderRadius: '1rem' }}
                onClick={calculateCramer}
              >
                Resolver Sistema
              </button>
            </div>
          </div>

          {cramerResult && (
            <div style={{ marginTop: '2rem', borderTop: '1px dashed var(--border-glass)', paddingTop: '1.5rem', animation: 'fadeIn 0.3s ease' }}>
              {cramerResult.status === 'success' ? (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Solución x</span>
                      <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-correct)', marginTop: '0.5rem' }}>{cramerResult.x}</div>
                    </div>

                    <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 'bold' }}>Solución y</span>
                      <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--color-correct)', marginTop: '0.5rem' }}>{cramerResult.y}</div>
                    </div>
                  </div>

                  {/* Cramer Determinants display */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-glass-light)' }}>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={16} /> Determinantes del Sistema:
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '0.9rem', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
                      <div>
                        <strong>Determinante General (D):</strong>
                        <br />
                        | {cramerResult.a1}  {cramerResult.b1} |
                        <br />
                        | {cramerResult.a2}  {cramerResult.b2} |
                        <br />
                        D = ({cramerResult.a1} * {cramerResult.b2}) - ({cramerResult.b1} * {cramerResult.a2}) = {cramerResult.D}
                      </div>

                      <div>
                        <strong>Determinante Dx:</strong>
                        <br />
                        | {cramerResult.c1}  {cramerResult.b1} |
                        <br />
                        | {cramerResult.c2}  {cramerResult.b2} |
                        <br />
                        Dx = ({cramerResult.c1} * {cramerResult.b2}) - ({cramerResult.b1} * {cramerResult.c2}) = {cramerResult.Dx}
                      </div>

                      <div>
                        <strong>Determinante Dy:</strong>
                        <br />
                        | {cramerResult.a1}  {cramerResult.c1} |
                        <br />
                        | {cramerResult.a2}  {cramerResult.c2} |
                        <br />
                        Dy = ({cramerResult.a1} * {cramerResult.c2}) - ({cramerResult.c1} * {cramerResult.a2}) = {cramerResult.Dy}
                      </div>
                    </div>
                    <div style={{ marginTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      <strong>Cálculo final de variables:</strong>
                      <br />
                      x = Dx / D = {cramerResult.Dx} / {cramerResult.D} = {cramerResult.x}
                      <br />
                      y = Dy / D = {cramerResult.Dy} / {cramerResult.D} = {cramerResult.y}
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid var(--color-incorrect)', padding: '1.5rem', borderRadius: '1rem', textAlign: 'center', color: 'var(--color-incorrect)' }}>
                  <strong>Determinante del sistema (D) = 0.</strong>
                  <br />
                  {cramerResult.status === 'infinite'
                    ? 'El sistema tiene infinitas soluciones (las rectas son coincidentes).'
                    : 'El sistema no tiene solución (las rectas son paralelas).'}
                </div>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
