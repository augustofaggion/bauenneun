export default function Footer() {
  return (
    <div className="container-fluid footer-container">
      <hr class="hr" />
      <footer class="row  p-5 my-5 ">
        <div class="col-md-4 footer-box mb-3">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            {/* ADD logo here */}
          </a>
          <p className=" address-main">Bauenneun</p>
          <p className="text-muted address-text">
             Address:
          </p>
          <p className="text-muted address-text">Brandenburgische Straße 72</p>
          <p className="text-muted address-text">Berlin Neukölln</p>
          <p className="text-muted address-text"> 12053 - Berlin</p>
          <p className="text-muted address-text">
            {" "}

           Telefon: 030 86 76 82
          </p>
          <p className="text-muted address-text">
             info@bauenneun.com
          </p>
        </div>

        <div class="col-md-4 footer-box mb-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-2 py-3">
              <a href="#" class="nav-link p-0 text-muted">
                Startseite
              </a>
            </li>
            <li class="nav-item mb-2  py-3">
              <a href="#" class="nav-link p-0 text-muted">
                Unsere Hausmodelle
              </a>
            </li>
            <li class="nav-item mb-2 py-3">
              <a href="#" class="nav-link p-0 text-muted">
                Wer wir sind
              </a>
            </li>
            <li class="nav-item mb-2 py-3">
              <a href="#" class="nav-link p-0 text-muted">
                Testimonials
              </a>
            </li>
            <li class="nav-item mb-2 py-3">
              <a href="#" class="nav-link p-0 text-muted">
                Kontaktieren
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-4 footer-box mb-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link py-3 text-muted">
                Instagram
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link py-3 text-muted">
                Twitter
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link py-3 text-muted">
                Facebook
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link py-3 text-muted">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
        <div className="impressum d-flex justify-content-center">
          <a href="" className="px-5">Impressum</a>
          <a href="" className="px-5">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}
