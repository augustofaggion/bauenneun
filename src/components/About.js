import howImg from "../img/how/kitchen.jpg";

export default function About() {
  return (
    <div className="about container-fluid py-5">
      <div className="row padding">
        <div class="col-md-6 left-side">
          <h2 className="header-secondary">Über unser Unternehmen</h2>
          <p className="text-about">
            Bauenneun ist ein führendes Bauunternehmen, spezialisiert auf
            moderne Wohngebäude. Wir bieten Qualität, Zuverlässigkeit und
            außergewöhnlichen Kundenservice, um maßgeschneiderte Häuser zu
            liefern. Unser erfahrenes Team nutzt moderne Technologien für
            effiziente und nachhaltige Bauwerke. Transparenz und
            Kundenzufriedenheit stehen im Mittelpunkt, mit detaillierten
            3D-Designs und einem stressfreien Bauprozess.
          </p>
        </div>
        <div className="col-md-6 right-side">
          <img src={howImg} alt="kitchen" className="img-home" />
        </div>
      </div>
    </div>
  );
}
