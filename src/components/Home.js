import homeImg from "../img/home/modern-house.jpg";

export default function Home() {
  return (
    <div>
      {/* Left */}
      <div className="left-side">
        <h2>Wir bauen</h2>
        <h3>Sehr modern und stilvoll</h3>
        <h2>Gebäude</h2>
        <p>
          Ihre Antworten auf diese Fragen helfen uns, eine erste Übereinstimmung
          zwischen Ihnen, dem potenziellen Kunden, und Design und Bau zu finden.
        </p>
        <button>Buchen Sie einen Berater</button>
      </div>
      {/* Right */}
      <div className="right-side">
        <img src={homeImg} alt="Modern house" />
      </div>
    </div>
  );
}
