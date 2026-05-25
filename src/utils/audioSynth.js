// Web Audio API Synthesizer for PhiloLingo Sound Effects
// Generates arcade-style and pleasant acoustic tones on the fly.

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

export const playSound = {
  click: () => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      console.warn("Audio Context blocked or not supported:", e);
    }
  },

  correct: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Play a beautiful, shiny major triad arpeggio (C5 -> E5 -> G5 -> C6)
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
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
    } catch (e) {
      console.warn("Audio Context blocked or not supported:", e);
    }
  },

  incorrect: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.linearRampToValueAtTime(110, now + 0.25); // Slurs downward

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      // Low pass filter to make it warmer/less harsh
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(500, now);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(now + 0.25);
    } catch (e) {
      console.warn("Audio Context blocked or not supported:", e);
    }
  },

  victory: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Heroic synth brass fanfare
      const notes = [
        { f: 349.23, d: 0.15 }, // F4
        { f: 440.00, d: 0.15 }, // A4
        { f: 523.25, d: 0.15 }, // C5
        { f: 587.33, d: 0.3 },  // D5
        { f: 659.25, d: 0.3 },  // E5
        { f: 783.99, d: 0.6 }   // G5 (Triumphant chord)
      ];

      let accumulatedTime = 0;
      notes.forEach((note, index) => {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        // Dual detuned oscillators for fat sound
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

        accumulatedTime += note.d * 0.75; // overlap
      });
    } catch (e) {
      console.warn("Audio Context blocked or not supported:", e);
    }
  },

  startAmbient: () => {
    try {
      const ctx = getAudioContext();
      if (ambientOsc) return; // Already playing

      const now = ctx.currentTime;
      ambientGain = ctx.createGain();
      ambientGain.gain.setValueAtTime(0.0, now);
      // Soft fade in
      ambientGain.gain.linearRampToValueAtTime(0.03, now + 2);
      ambientGain.connect(ctx.destination);

      // We'll simulate a soft greek arpa/lyre lofi track using Web Audio nodes recursively!
      let step = 0;
      const chords = [
        [220, 261.63, 329.63, 392], // Am7
        [174.61, 261.63, 349.23, 392], // Fmaj7
        [261.63, 329.63, 392, 493.88], // Cmaj7
        [196, 293.66, 392, 440] // G6
      ];

      const playAmbientArpeggio = () => {
        if (!ambientGain) return; // Stopped

        const chord = chords[step % chords.length];
        const noteFreq = chord[Math.floor(Math.random() * chord.length)];
        
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

        noteGain.gain.setValueAtTime(1.0, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        // Warm low pass filter
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, ctx.currentTime);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(ambientGain);

        osc.start();
        osc.stop(ctx.currentTime + 1.3);

        step++;
        // Schedule next note in 400ms to 700ms randomly for organic harp feel
        const delay = 500 + Math.random() * 200;
        ambientOsc = setTimeout(playAmbientArpeggio, delay);
      };

      playAmbientArpeggio();
    } catch (e) {
      console.warn("Ambient music failed to start:", e);
    }
  },

  stopAmbient: () => {
    try {
      if (ambientOsc) {
        clearTimeout(ambientOsc);
        ambientOsc = null;
      }
      if (ambientGain) {
        // Soft fade out
        const ctx = getAudioContext();
        ambientGain.gain.setValueAtTime(ambientGain.gain.value, ctx.currentTime);
        ambientGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
        setTimeout(() => {
          if (ambientGain) {
            ambientGain.disconnect();
            ambientGain = null;
          }
        }, 600);
      }
    } catch (e) {
      console.warn("Ambient music failed to stop:", e);
    }
  }
};
