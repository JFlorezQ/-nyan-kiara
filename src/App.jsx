import React, { useState, useEffect, useRef } from 'react';
import RetroHUD from './components/RetroHUD.jsx';
import SpaceStage from './components/SpaceStage.jsx';

// Classic 8-bit chiptune melody note frequencies (Hz)
const NYAN_NOTES = [
  369.99, // F#4
  415.30, // G#4
  311.13, // D#4
  311.13, // D#4
  246.94, // B3
  311.13, // D#4
  277.18, // C#4
  246.94, // B3
  246.94, // B3
  277.18, // C#4
  311.13, // D#4
  369.99, // F#4
  415.30, // G#4
  311.13, // D#4
  369.99, // F#4
  277.18, // C#4
];

export default function App() {
  const [distance, setDistance] = useState(0);
  const [isHyperdrive, setIsHyperdrive] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);

  const audioCtxRef = useRef(null);
  const noteIndexRef = useRef(0);
  const audioIntervalRef = useRef(null);

  // Distance ticker
  useEffect(() => {
    const rate = isHyperdrive ? 8 : 2;
    const interval = setInterval(() => {
      setDistance((d) => d + rate);
    }, 50);
    return () => clearInterval(interval);
  }, [isHyperdrive]);

  // 8-bit Chiptune Audio Synth using Web Audio API
  const playNote = (freq) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square'; // Authentic NES / Game Boy chiptune sound
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Fast attack, short decay for punchy 8-bit sound
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.13);
  };

  useEffect(() => {
    if (isAudioOn) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      const noteDuration = isHyperdrive ? 90 : 150; // ms per note

      audioIntervalRef.current = setInterval(() => {
        const note = NYAN_NOTES[noteIndexRef.current % NYAN_NOTES.length];
        playNote(note);
        noteIndexRef.current++;
      }, noteDuration);
    } else {
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
        audioIntervalRef.current = null;
      }
    }

    return () => {
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
      }
    };
  }, [isAudioOn, isHyperdrive]);

  const handleToggleAudio = () => {
    setIsAudioOn((prev) => !prev);
  };

  const handleToggleHyperdrive = () => {
    setIsHyperdrive((prev) => !prev);
  };

  return (
    <main className="arcade-container">
      {/* CRT Scanline Visual Effect */}
      <div className="scanlines" />

      {/* Retro Arcade HUD */}
      <RetroHUD
        distance={distance}
        isHyperdrive={isHyperdrive}
        onToggleHyperdrive={handleToggleHyperdrive}
        isAudioOn={isAudioOn}
        onToggleAudio={handleToggleAudio}
      />

      {/* Main Cosmic Stage */}
      <SpaceStage isHyperdrive={isHyperdrive} />

      {/* Footer Details */}
      <footer className="retro-footer">
        [ SPACE ] / CLICK HYPERDRIVE TO BOOST • HECHO CON AMOR PARA MI PERRITA KIARA 🐾❤️
      </footer>
    </main>
  );
}
