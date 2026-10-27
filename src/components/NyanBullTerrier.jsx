import React from 'react';

export default function NyanBullTerrier({ isHyperdrive }) {
  const animSpeed = isHyperdrive ? '0.12s' : '0.22s';

  return (
    <div
      style={{
        position: 'relative',
        width: '240px',
        height: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 25,
      }}
    >
      <svg
        width="240"
        height="140"
        viewBox="0 0 240 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.5))' }}
      >
        <defs>
          <style>{`
            @keyframes pawPaddleFront {
              0% { transform: translateY(0px) rotate(-8deg); }
              100% { transform: translateY(6px) rotate(14deg); }
            }
            @keyframes pawPaddleBack {
              0% { transform: translateY(6px) rotate(12deg); }
              100% { transform: translateY(0px) rotate(-10deg); }
            }
            @keyframes tailWag {
              0% { transform: rotate(-15deg); }
              100% { transform: rotate(18deg); }
            }
            .paw-front {
              animation: pawPaddleFront ${animSpeed} infinite alternate ease-in-out;
              transform-origin: 145px 100px;
            }
            .paw-back {
              animation: pawPaddleBack ${animSpeed} infinite alternate ease-in-out;
              transform-origin: 75px 100px;
            }
            .tail-wiggle {
              animation: tailWag ${animSpeed} infinite alternate ease-in-out;
              transform-origin: 40px 75px;
            }
          `}</style>
        </defs>

        {/* --- TAIL --- */}
        <g className="tail-wiggle">
          <path
            d="M 40 76 C 25 74 15 65 18 55 C 20 52 26 56 32 64 Z"
            fill="#8d5524"
            stroke="#1a0f07"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* White tail tip */}
          <circle cx="19" cy="56" r="4" fill="#ffffff" />
        </g>

        {/* --- BACK PAWS (Behind Donut) --- */}
        <g className="paw-back">
          {/* Rear back foot */}
          <rect x="68" y="98" width="12" height="24" rx="6" fill="#754318" stroke="#1a0f07" strokeWidth="2.5" />
          <ellipse cx="74" cy="120" rx="7" ry="5" fill="#ffffff" stroke="#1a0f07" strokeWidth="2.5" />
        </g>
        <g className="paw-front">
          {/* Front back foot */}
          <rect x="138" y="98" width="12" height="24" rx="6" fill="#754318" stroke="#1a0f07" strokeWidth="2.5" />
          <ellipse cx="144" cy="120" rx="7" ry="5" fill="#ffffff" stroke="#1a0f07" strokeWidth="2.5" />
        </g>

        {/* --- DONUT BODY --- */}
        <g id="donut-body">
          {/* Donut Baked Dough Base */}
          <circle cx="110" cy="75" r="54" fill="#d99b52" stroke="#4a2c0f" strokeWidth="4" />
          
          {/* Frosted Donut Glaze (Chocolate / Caramel Glaze) */}
          <path
            d="M 110 24 
               C 138 24 160 46 160 74 
               C 158 88 152 92 146 84 
               C 140 78 132 86 128 92 
               C 122 100 114 104 106 98 
               C 98 94 92 100 86 102 
               C 74 104 60 92 60 74 
               C 60 46 82 24 110 24 Z"
            fill="#6d3b14"
            stroke="#381c07"
            strokeWidth="3.5"
          />

          {/* Glaze Highlights */}
          <path
            d="M 85 36 C 96 30 120 30 135 38"
            stroke="#9c5e2d"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Donut Hole (Shows background through center) */}
          <circle cx="110" cy="74" r="18" fill="#0c0b1e" stroke="#4a2c0f" strokeWidth="4" />
          {/* Inner dough rim in hole */}
          <path
            d="M 100 68 C 105 64 118 64 122 70"
            stroke="#d99b52"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Rainbow Sprinkles on Donut */}
          {/* Cyan Sprinkle */}
          <rect x="80" y="48" width="10" height="4" rx="2" fill="#00e5ff" transform="rotate(25 80 48)" />
          {/* Yellow Sprinkle */}
          <rect x="130" y="44" width="10" height="4" rx="2" fill="#ffe600" transform="rotate(-35 130 44)" />
          {/* Pink Sprinkle */}
          <rect x="74" y="74" width="10" height="4" rx="2" fill="#ff4081" transform="rotate(70 74 74)" />
          {/* Lime Sprinkle */}
          <rect x="136" y="76" width="10" height="4" rx="2" fill="#76ff03" transform="rotate(15 136 76)" />
          {/* Orange Sprinkle */}
          <rect x="100" y="32" width="10" height="4" rx="2" fill="#ff9100" transform="rotate(-10 100 32)" />
          {/* White Sprinkle */}
          <rect x="114" y="94" width="9" height="4" rx="2" fill="#ffffff" transform="rotate(40 114 94)" />
          {/* Purple Sprinkle */}
          <rect x="144" y="60" width="9" height="4" rx="2" fill="#d500f9" transform="rotate(-50 144 60)" />
          {/* Red Sprinkle */}
          <rect x="88" y="90" width="9" height="4" rx="2" fill="#ff1744" transform="rotate(20 88 90)" />
        </g>

        {/* --- FRONT PAWS (In Front of Donut) --- */}
        <g className="paw-front">
          {/* Rear front foot */}
          <rect x="80" y="102" width="13" height="24" rx="6.5" fill="#ffffff" stroke="#1a0f07" strokeWidth="2.5" />
          <ellipse cx="86" cy="124" rx="8" ry="5.5" fill="#ffffff" stroke="#1a0f07" strokeWidth="2.5" />
          <line x1="84" y1="122" x2="84" y2="128" stroke="#1a0f07" strokeWidth="1.5" />
          <line x1="88" y1="122" x2="88" y2="128" stroke="#1a0f07" strokeWidth="1.5" />
        </g>
        <g className="paw-back">
          {/* Forward front foot */}
          <rect x="150" y="102" width="13" height="24" rx="6.5" fill="#ffffff" stroke="#1a0f07" strokeWidth="2.5" />
          <ellipse cx="156" cy="124" rx="8" ry="5.5" fill="#ffffff" stroke="#1a0f07" strokeWidth="2.5" />
          <line x1="154" y1="122" x2="154" y2="128" stroke="#1a0f07" strokeWidth="1.5" />
          <line x1="158" y1="122" x2="158" y2="128" stroke="#1a0f07" strokeWidth="1.5" />
        </g>

        {/* --- BULL TERRIER HEAD --- */}
        <g id="bull-terrier-head">
          {/* Left Ear (White / Behind Head) */}
          <path
            d="M 160 48 L 168 18 C 172 16 177 20 178 26 L 180 50 Z"
            fill="#f7f7f7"
            stroke="#1a0f07"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Inner pink for left ear */}
          <path d="M 167 42 L 171 25 L 176 44 Z" fill="#ffb8cf" />

          {/* Right Ear (Brown Patch Ear) */}
          <path
            d="M 180 50 L 192 14 C 196 12 201 16 200 24 L 196 52 Z"
            fill="#8d5524"
            stroke="#1a0f07"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Inner pink for right ear */}
          <path d="M 187 44 L 193 23 L 197 45 Z" fill="#f09db7" />

          {/* Distinctive Egg-Shaped Bull Terrier Head & Muzzle Profile */}
          <path
            d="M 152 74 
               C 152 50 170 38 188 38 
               C 208 38 230 52 236 78 
               C 238 86 232 94 220 96 
               C 200 98 178 96 166 94 
               C 156 92 152 84 152 74 Z"
            fill="#ffffff"
            stroke="#1a0f07"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Iconic Brown Eye Patch (Surrounding eye) */}
          <path
            d="M 182 46 
               C 196 44 208 52 206 66 
               C 204 76 192 80 180 76 
               C 172 72 172 58 176 50 Z"
            fill="#8d5524"
          />

          {/* Eye (Small triangular/oval almond Bull Terrier eye) */}
          <ellipse cx="192" cy="62" rx="4.5" ry="3.5" transform="rotate(-15 192 62)" fill="#111111" />
          <circle cx="193.5" cy="61" r="1.5" fill="#ffffff" /> {/* Eye gleam */}

          {/* Nose (Black nose at the tip of the curved egg muzzle) */}
          <path
            d="M 230 78 C 236 78 238 82 236 86 C 234 89 228 89 226 86 C 225 82 227 78 230 78 Z"
            fill="#111111"
          />
          <circle cx="232" cy="80.5" r="1" fill="#666666" />

          {/* Smile / Mouth line */}
          <path
            d="M 230 88 C 224 93 216 93 212 90"
            stroke="#1a0f07"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Cheerful Pink Blush */}
          <ellipse cx="198" cy="80" rx="6" ry="4" fill="rgba(255, 120, 160, 0.45)" />
        </g>
      </svg>
    </div>
  );
}
