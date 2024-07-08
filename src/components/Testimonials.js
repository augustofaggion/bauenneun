import  womenPhoto  from "../img/testimonials/woman.jpg";
import  manPhoto  from "../img/testimonials/man.jpg";

export default function Testimonials() {
  return (
    <div className="container-fluid row padding testimonials">
      <div className="col-md-4">
        <h2 className="header-terciary">Zufriedene Kunden unserer Teammitglieder</h2>
      <p className="text">
        Unsere Kunden sind von der Qualität und dem Engagement unserer
        Teammitglieder begeistert. Hier sind einige ihrer Geschichten:
      </p>
      </div>
      <div className="col-md-4">
      <img className="testimonials-img" src={womenPhoto} alt="Frau" />
      <p className="sub-text">Anna Müller</p>
      <p className="text">
        "Das Bauenneun-Team hat unsere Erwartungen übertroffen. Vom ersten
        Entwurf bis zur Fertigstellung war alles perfekt abgestimmt. Unser neues
        Zuhause ist genau so, wie wir es uns vorgestellt haben, und wir könnten
        nicht glücklicher sein. Vielen Dank für die hervorragende Arbeit!"
      </p>
      </div>
      <div className="col-md-4">
        <img  className="testimonials-img" src={manPhoto} alt="Man" />
      <p className="sub-text">Michael Schneider</p>
      <p className="text">
        "Wir sind sehr zufrieden mit der Arbeit von Bauenneun. Das Team war
        stets professionell, pünktlich und äußerst kompetent. Unser Haus wurde
        termingerecht und innerhalb des Budgets fertiggestellt. Wir empfehlen
        Bauenneun ohne zu zögern weiter."
      </p>
      </div>
    </div>
  );
}
