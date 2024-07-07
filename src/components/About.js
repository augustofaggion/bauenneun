import howImg from "../img/how/kitchen.jpg";
export default function About() {
  return (
    <div className="container-fluid py-5">
      <div className="row padding">
        <div class="col-md-6 left-side">
        <h2 className="header-secondary">Über unser Unternehmen</h2>
        <p className="text">
          Bauenneun ist ein führendes Bauunternehmen, das sich auf die
          Errichtung moderner und stilvoller Wohngebäude spezialisiert hat. Mit
          jahrzehntelanger Erfahrung in der Baubranche haben wir uns einen Ruf
          für Qualität, Zuverlässigkeit und außergewöhnlichen Kundenservice
          erarbeitet. Unsere Mission ist es, unseren Kunden hochwertige,
          maßgeschneiderte Häuser zu bieten, die ihre individuellen Bedürfnisse
          und Wünsche widerspiegeln.
        </p>
        <p className="text">
          Unser Team aus erfahrenen Architekten, Ingenieuren und Bauarbeitern
          arbeitet eng mit jedem Kunden zusammen, um sicherzustellen, dass jedes
          Projekt von der Planung bis zur Fertigstellung reibungslos verläuft.
          Wir nutzen die neuesten Technologien und Baumethoden, um effiziente
          und nachhaltige Bauwerke zu schaffen.
        </p>
        <p className="text">
          Bei Bauenneun legen wir großen Wert auf Transparenz und
          Kundenzufriedenheit. Deshalb bieten wir detaillierte 3D-Designs an,
          damit unsere Kunden eine klare Vorstellung davon haben, wie ihr
          zukünftiges Zuhause aussehen wird. Unser Ziel ist es, den Bauprozess
          so stressfrei wie möglich zu gestalten und die Erwartungen unserer
          Kunden zu übertreffen.
        </p>
        </div>
        <div className="col-md-6 right-side">

        <img src={howImg} alt="kitchen" className="img-home" />
        </div>

      </div>
    </div>
  );
}
