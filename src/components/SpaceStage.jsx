import React from 'react';
import StarField from './StarField.jsx';
import RainbowTrail from './RainbowTrail.jsx';
import NyanBullTerrier from './NyanBullTerrier.jsx';

export default function SpaceStage({ isHyperdrive }) {
  return (
    <div className="space-stage">
      {/* Dynamic Starfield Canvas */}
      <StarField isHyperdrive={isHyperdrive} />

      {/* The Central Character & Rainbow Trail Rig */}
      <div className={`character-rig ${isHyperdrive ? 'fast' : ''}`}>
        {/* Animated Rainbow Wave trailing behind the donut */}
        <RainbowTrail isHyperdrive={isHyperdrive} />

        {/* Nyan Bull Terrier Donut */}
        <NyanBullTerrier isHyperdrive={isHyperdrive} />
      </div>
    </div>
  );
}
