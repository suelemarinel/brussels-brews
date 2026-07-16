function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">Le guide indépendant des cafés bruxellois</p>
        <h1>
          Les meilleurs cafés de Bruxelles, testés tasse par tasse.
        </h1>
        <p className="hero-sub">
          Des adresses choisies avec soin — pour travailler, flâner, bruncher
          ou tomber amoureux. Zéro sponsoring, que des coups de cœur.
        </p>
        <a href="#guide" className="hero-cta">
          Explorer la carte
        </a>
        <div className="hero-stats">
  <div className="stat">
    <span className="stat-num">12</span>
    <span className="stat-label">cafés testés</span>
  </div>
  <div className="stat">
    <span className="stat-num">9</span>
    <span className="stat-label">quartiers</span>
  </div>
  <div className="stat">
    <span className="stat-num">100%</span>
    <span className="stat-label">indépendant</span>
  </div>
</div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-blob" />
        {/* Ombre portée */}
        <ellipse cx="170" cy="272" rx="90" ry="10" fill="#4a3f3a" opacity="0.07" />
        <svg viewBox="0 0 340 300" className="hero-cup">
          {/* Vapeur */}
          <g className="steam">
            <path
              className="steam-1"
              d="M135 95 C 127 78, 143 66, 135 48"
              fill="none"
              stroke="#c7b9d9"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              className="steam-2"
              d="M170 88 C 162 70, 178 58, 170 40"
              fill="none"
              stroke="#e5a591"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              className="steam-3"
              d="M205 95 C 197 78, 213 66, 205 48"
              fill="none"
              stroke="#c7b9d9"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>

          {/* Soucoupe */}
          <ellipse cx="170" cy="248" rx="112" ry="20" fill="#f0ded4" />
          <ellipse cx="170" cy="243" rx="112" ry="20" fill="#f7e8e0" />

          {/* Anse */}
          <path
            d="M252 155 C 292 152, 296 208, 248 210"
            fill="none"
            stroke="#e5a591"
            strokeWidth="13"
            strokeLinecap="round"
          />

          {/* Corps de la tasse */}
          <path
            d="M88 132 L252 132 C252 200 216 240 170 240 C124 240 88 200 88 132 Z"
            fill="#fdf8f4"
            stroke="#f0ded4"
            strokeWidth="2"
          />

          {/* Bord + café avec latte art */}
          <ellipse cx="170" cy="132" rx="82" ry="17" fill="#fdf8f4" stroke="#f0ded4" strokeWidth="2" />
          <ellipse cx="170" cy="132" rx="68" ry="13" fill="#c96f52" />
          <ellipse cx="170" cy="132" rx="48" ry="9" fill="none" stroke="#fdf8f4" strokeWidth="2.5" opacity="0.6" />
          <ellipse cx="170" cy="132" rx="30" ry="5.5" fill="none" stroke="#fdf8f4" strokeWidth="2.5" opacity="0.75" />
          <ellipse cx="170" cy="132" rx="13" ry="2.5" fill="#fdf8f4" opacity="0.9" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;