import homeImg from "../img/home/modern-house.jpg";

export default function Home() {
  return (
    <div className="container-fluid py-5 home">
      <div class="row padding">
        {/* Left */}
        <div className="col-md-6 left-side">
          <h2 className="header-secondary">Wir bauen</h2>
          <h3 className="header-terciary">Sehr modern und stilvoll</h3>
          <h2 className="header-secondary">Gebäude</h2>
          <p className="text">
            Ihre Antworten auf diese Fragen helfen uns, eine erste
            Übereinstimmung zwischen Ihnen, dem potenziellen Kunden, und Design
            und Bau zu finden.
          </p>
          <button className="btn p-4 my-4">Buchen Sie einen Berater</button>
        </div>
        {/* Right */}
        <div className="col-md-6 right-side">
          <img src={homeImg} alt="Modern house" className="img-home"/>
        </div>
      </div>
    </div>
  );
}
