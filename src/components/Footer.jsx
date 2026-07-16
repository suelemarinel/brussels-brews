function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">Brussels Brews</p>
          <p className="footer-tagline">
            Le guide indépendant des cafés bruxellois, testé tasse par tasse.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Pied de page">
          <a href="#spots">Les spots</a>
          <a href="#guide">La carte</a>
          <a href="#apropos">À propos</a>
        </nav>
      </div>
      <div className="footer-bottom">
      <p>
    © {year} Brussels Brews · Site réalisé par{' '}
    <a
      href="https://suelemarinel.github.io/"
      target="_blank"
      rel="noreferrer"
      className="footer-credit"
    >
      Sue Le Marinel
    </a>
  </p>
  </div>
    </footer>
  );
}

export default Footer;