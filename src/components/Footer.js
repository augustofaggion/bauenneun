export default function Footer() {
  return (
    <div className="container-fluid footer-container">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 ">
        <div class="col mb-3">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            {/* ADD logo here */}
          </a>
          <p className="text-muted">Address</p>
          <p className="text-muted">Brandenburgische Straße 72</p>
          <p className="text-muted">Berlin Neukölln</p>
          <p className="text-muted">12053 - Berlin</p>
          <p className="text-muted">030 86 76 82</p>
          <p className="text-muted">info@bauenneun.com</p>
        </div>

        <div class="col mb-3"></div>

        <div class="col mb-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Startseite
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Unsere Hausmodelle
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Wer wir sind
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Testimonials
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Kontaktieren uns
              </a>
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Instagram
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Twitter
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Facebook
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Pinterest
              </a>
            </li>
          </ul>
        </div>

        <div class="col mb-3">
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Telefon
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                E-mail
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Datenschutz
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Impressum
              </a>
            </li>
          </ul>
        </div>
      </footer>
      ;
    </div>
  );
}
