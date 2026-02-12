import "./Prestations.scss";
import { NavLink } from "react-router-dom";

export default function Prestations() {
  return (
    <section className="prestations">
      <div className="prestations-box">
        <h2>Nos prestations traiteur</h2>

        {/* 1) Traiteur */}
        <h3>1) Prestations traiteur — entrées, plats & desserts</h3>

        <div className="block">
          <h4>Entrées de saison</h4>
          <ul>
            <li>Élaborées avec les produits de nos producteurs locaux</li>
            <li>
              <strong>Tarif :</strong> 3 € – 7 € / personne
            </li>
          </ul>
        </div>

        <div className="block">
          <h4>Plat principal artisanal</h4>
          <ul>
            <li>
              Un plat pour 1 ou 2 personnes, issu de notre gamme de bocaux
              hautement qualitatifs
            </li>
            <li>
              Accompagné d’un féculent au choix{" "}
              <strong>(+ 1 € / personne)</strong>
            </li>
          </ul>
        </div>

        <div className="block">
          <h4>Desserts maison ou fromage (au choix)</h4>
          <ul className="chips">
            <li>Panna cotta</li>
            <li>Mousse au chocolat</li>
            <li>Tiramisu</li>
            <li>Assortiment de fromages locaux</li>
          </ul>
        </div>

        <hr className="sep" />

        {/* 2) Apéro */}
        <h3>2) Apéritifs & plateaux apéro</h3>

        <p className="lead">
          Découvrez nos plateaux apéritifs artisanaux, composés de fromages,
          charcuterie, toasts et accompagnements, réalisés avec des produits
          locaux et frais.
        </p>

        <div className="prices">
          <div className="prices-title">Types de plateaux</div>

          <div className="price-row">
            <span>
              Plateau mixte complet (fromage + charcuterie + toasts +
              dégustation Tomme)
            </span>
            <span className="price">16,50 € / pers.</span>
          </div>

          <div className="price-row">
            <span>Fromages apéro</span>
            <span className="price">3,75 € / pers.</span>
          </div>

          <div className="price-row">
            <span>Tomme daubée + légumes</span>
            <span className="price">3,25 € / pers.</span>
          </div>

          <div className="price-row">
            <span>Charcuterie</span>
            <span className="price">5,75 € / pers.</span>
          </div>

          <div className="prices-title">Toasts & accompagnements</div>

          <div className="price-row">
            <span>Toast saumon fumé AOP</span>
            <span className="price">5,75 € / pers.</span>
          </div>

          <div className="price-row">
            <span>Toast escargot</span>
            <span className="price">6,75 € / pers.</span>
          </div>

          <div className="price-row">
            <span>
              Toasts tartinables (5 goûts au choix : basilic, basilic thaï,
              tapenade d’olive, tomate séchée, pistou)
            </span>
            <span className="price">2,10 € / pers.</span>
          </div>

          <div className="price-row">
            <span>Olives de Nyons</span>
            <span className="price">0,90 € / pers.</span>
          </div>
        </div>

        <p className="note">
          Quantités par personne adaptées pour un apéritif convivial. Tous nos
          produits sont artisanaux et sélectionnés pour leur qualité. Chaque
          recette est réalisée dans notre conserverie artisanale, garantissant
          authenticité, fraîcheur et générosité.
        </p>

        {/* 3) Devis */}
        <div className="cta">
          <h4>Formules personnalisées</h4>
          <p>
            Nous serons ravi(e)s de vous proposer une formule adaptée à vos
            besoins ou d’organiser une première dégustation afin de vous faire
            découvrir la qualité de nos produits.
          </p>
          <p>
            Pour tout complément d’information ou pour établir un{" "}
            <strong>devis personnalisé</strong>, contactez-nous.
          </p>

          <NavLink to="/contact" className="cta-btn">
            Demander un devis
          </NavLink>
        </div>
      </div>
    </section>
  );
}
