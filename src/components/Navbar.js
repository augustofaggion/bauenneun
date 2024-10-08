export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          Bauenneun
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#home">
              Startseite
            </a>
            <a className="nav-link" href="#how-it-works">
              Wie es funktioniert
            </a>
            <a className="nav-link" href="#about-us">
              Über uns
            </a>
            <a className="nav-link" href="#testimonials">
              Testimonials
            </a>
            <a className="nav-link" href="#contact">
              Kontakt uns
            </a>

          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
