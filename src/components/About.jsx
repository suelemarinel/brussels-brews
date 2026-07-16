function About() {
  return (
    <section id="apropos" className="about-section">
      <div className="about-inner">
        <p className="about-eyebrow">À propos</p>
        <h2>Un guide qui sent le café, pas le sponsoring.</h2>
        <div className="about-text">
          <p>
            Brussels Brews est né d'une habitude devenue obsession : tester
            chaque nouveau café de la ville, toujours avec le même rituel — un
            espresso pour juger la torréfaction, un filtre pour prendre son
            temps, et un œil sur les prises électriques.
          </p>
          <p>
            Chaque adresse de ce guide a été visitée, notée et racontée en
            toute indépendance. Pas de partenariats, pas de placements : si un
            café est ici, c'est qu'on y retournerait demain.
          </p>
        </div>
        <div className="about-values">
          <div className="value">
            <span className="value-emoji">☕</span>
            <h3>Testé sur place</h3>
            <p>Chaque café visité au moins deux fois, à des heures différentes.</p>
          </div>
          <div className="value">
            <span className="value-emoji">💛</span>
            <h3>100% indépendant</h3>
            <p>Aucun café ne paie pour figurer dans le guide. Jamais.</p>
          </div>
          <div className="value">
            <span className="value-emoji">📍</span>
            <h3>Fait à Bruxelles</h3>
            <p>Par des gens qui y vivent, pour tous ceux qui y passent.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;