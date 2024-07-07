export default function HowItWorks() {
  return (
    <div className="container-fluid row padding how-box">
      <div className="col-md-6 ">
        <div className="text row">
          <div className="col-md-12"> {/* Adjusted for proper column usage */}
            <p className="mx-5 text-how"> {/* Margin start (left) for indenting */}
              <span className="me-5 span-how">1</span> Der Baufragebogen
            </p>
            <p className="m-5 text-how">
              <span className="me-5 span-how">2</span> Das Bau-Interview
            </p>
            <p className="m-5 text-how">
              <span className="me-5  span-how">3</span> Der Bauprozess
            </p>
            <p className="m-5 text-how">
              <span className="me-5 span-how">4</span> Wir bauen Ihr Zuhause
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div>
          <h2 className="header-secondary">Wie Gebäude funktionieren</h2>
          <p className="text">
            In dieser Phase können Sie das Aussehen und das Gefühl Ihres Hauses
            in 3D gestalten, mit detaillierten Spezifikationen, damit das
            Endprodukt so nah wie möglich an Ihrer Vision ist.
          </p>
          <button className="btn">Fragebogen ausfüllen</button>
        </div>
        <div>
          <h2 className="header-secondary">Was Sie bekommen...</h2>
          <p className="text">
            Ihr Zuhause wird mindestens 20% weniger kosten als bei unseren
            Mitbewerbern, was bedeutet, dass Sie mindestens 200.000 $ bei einem
            92,9 m² großen Haus sparen, wenn Sie mit uns bauen.
          </p>
          <p className="text">
            Ihr Zuhause wird spätestens 1 Monat nach dem geplanten
            Fertigstellungstermin fertiggestellt, solange keine
            unvorhergesehenen Umstände auftreten.
          </p>
          <p className="text">
            Sie sind so gut wie garantiert, mit dem Haus, das Sie erhalten,
            zufrieden zu sein, weil wir genau das entwerfen, was Sie in 3D
            gebaut haben.
          </p>
        </div>
      </div>
    </div>
  );
}
