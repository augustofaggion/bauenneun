import howImg from "../img/how/kitchen.jpg";

export default function About() {
  return (
    <div className="container-fluid py-5">
      <div className="row padding">
        <div class="col-md-6 left-side">
          <h2 className="header-secondary">Über unser Unternehmen</h2>
          <p className="text-about">
            Bauenneun ist ein führendes Bauunternehmen, das sich auf moderne und
            stilvolle Wohngebäude spezialisiert hat. Mit jahrelanger Erfahrung
            bieten wir Qualität, Zuverlässigkeit und außergewöhnlichen
            Kundenservice. Unsere Mission ist es, hochwertige, maßgeschneiderte
            Häuser zu liefern, die Ihren Bedürfnissen entsprechen.
          </p>
          <p className="text-about">
            Unser erfahrenes Team arbeitet eng mit jedem Kunden zusammen, um
            sicherzustellen, dass jedes Projekt reibungslos verläuft. Wir nutzen
            moderne Technologien und Baumethoden für effiziente und nachhaltige
            Bauwerke.
          </p>
          <p className="text-about">
            Transparenz und Kundenzufriedenheit stehen bei uns im Mittelpunkt.
            Wir bieten detaillierte 3D-Designs an, damit unsere Kunden eine
            klare Vorstellung ihres zukünftigen Zuhauses haben. Unser Ziel ist
            es, den Bauprozess stressfrei zu gestalten und die Erwartungen
            unserer Kunden zu übertreffen.
          </p>
        </div>
        <div className="col-md-6 right-side">
          <img src={howImg} alt="kitchen" className="img-home" />
        </div>
      </div>
    </div>
  );
}
