import aboutUs from "../../assets/AboutUs.jpg";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <section id="aboutUs">
      <img src={aboutUs} alt="Qui sommes nous" className="about-us-picture" />
      <div className="about-us">
        <h2 className="about__title">Qui sommes nous?</h2>
        <p>
          Je suis passionnée de cuisine depuis mon enfance. J’ai travaillé
          plusieurs années dans divers restaurants en Auvergne et ai même
          exploité un restaurant à Vallon-en-Sully (03) où je proposais une
          restauration semi-gastronomique.
        </p>
        <p>
          Après sa fermeture, je me suis installée à Vienne et ai travaillé
          plusieurs années en cuisine sur un site militaire à Lyon, ce qui m’a
          appris la rigueur et à donner du goût à des plats pour 400 personnes.
        </p>
        <p>
          J’ai ensuite souhaité revenir à la cuisine traditionnelle, mais la
          crise du Covid a freiné ma progression. J’ai alors suivi une formation
          en conserverie et commencé à proposer mes plats, lançant ainsi
          l’aventure <strong>Esprit Bocaux</strong>.
        </p>
        <p>
          Un an plus tard, j’ai créé la boutique <strong>Esprit Bocaux</strong>{" "}
          à Vienne et décidé d’y intégrer une épicerie regroupant tous les
          producteurs rencontrés durant cette année. Ce qui a commencé comme un
          hobby est devenu une véritable passion et aujourd’hui mon métier à
          plein temps.
        </p>
        <p>
          <strong>Esprit Bocaux</strong> est une conserverie artisanale créée en
          mars 2024, spécialisée dans les plats en sauce, préparés sans
          colorants ni conservateurs.
        </p>
        <p className="about__subtitle"> La boutique vous propose : </p>
        <ul className="about__list">
          <li>Une cinquantaine de producteurs locaux</li>
          <li>
            Du frais, du surgelé, des fruits et légumes, des épices et des
            produits d’épicerie
          </li>
          <li>
            Des prestations traiteur jusqu’à 30 personnes et des planches
            apéritives
          </li>
          <li>
            Des <strong>prestations de stérilisation</strong> pour vos propres
            recettes
          </li>
          <li>
            {" "}
            Des <strong>plats du jour chaque semaine</strong>
          </li>
          <li>Livraison à domicile sur Vienne</li>
        </ul>
      </div>
    </section>
  );
}
export default AboutUs;
