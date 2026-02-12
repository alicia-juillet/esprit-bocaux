import "./Contact.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-box">
        <h2>Nous contacter</h2>

        <p className="contact-name">
          <strong>SARL Esprit Bocaux</strong>
        </p>

        <p>
          25 Cours de Verdun <br />
          38200 Vienne
        </p>

        <p className="contact-hours">
          <strong>Horaires :</strong>
          <br />
          Du mardi au samedi <br />
          10h00 – 14h00 <br />
          16h00 – 19h30
        </p>

        <p>
          <strong>Téléphone :</strong>{" "}
          <a href="tel:0769731629">07 69 73 16 29</a>
        </p>

        <div className="contact-social">
          <p>
            <strong>Réseaux sociaux :</strong>
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61555897739691"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/esprit_bocaux"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
