import React from 'react';

export default function RetroHUD({
  distance,
  isHyperdrive,
  onToggleHyperdrive,
  isAudioOn,
  onToggleAudio,
}) {
  const formattedDistance = String(Math.floor(distance)).padStart(6, '0');

  return (
    <header className="retro-hud">
      <div className="hud-title-box">
        <h1 className="hud-title">NYAN BULL TERRIER</h1>
        <div className="hud-counter">
          DIST: <span>{formattedDistance}</span> KM
        </div>
      </div>

      <div className="hud-controls">
        <button
          className={`arcade-btn ${isAudioOn ? 'audio-active' : ''}`}
          onClick={onToggleAudio}
          title="Toggle 8-bit Synth Music"
        >
          {isAudioOn ? '🔊 8-BIT MUSIC: ON' : '🔈 8-BIT MUSIC: OFF'}
        </button>

        <button
          className={`arcade-btn ${isHyperdrive ? 'hyperdrive-active' : ''}`}
          onClick={onToggleHyperdrive}
          title="Toggle Hyperdrive Speed"
        >
          {isHyperdrive ? '⚡ HYPERDRIVE: MAX!' : '🚀 HYPERDRIVE: OFF'}
        </button>
      </div>
    </header>
  );
}
