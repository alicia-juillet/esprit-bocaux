import "./Product.scss";
import lieu from "../../assets/lieu.png";

/* charge automatiquement tous les logos du dossier */
const rawLogos = import.meta.glob(
  "../../assets/logo-producteur/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

/* transforme les chemins en { "nom-du-fichier.png": url } */
const logos = Object.fromEntries(
  Object.entries(rawLogos).map(([path, url]) => [path.split("/").pop()!, url]),
);

type Producer = {
  name: string;
  description: string;
  city: string;
  logo?: string;
};

type Region = {
  name: string;
  producers: Producer[];
};

const regions: Region[] = [
  {
    name: "Isère",
    producers: [
      {
        name: "Les palets d’Emile",
        description: "Palets bretons artisanaux revisités",
        city: "Vienne",
        logo: "les-palets-emilie.jpg",
      },
      {
        name: "La savonnerie Viennoise",
        description: "Savons et cosmétiques naturels",
        city: "Vienne",
        logo: "savonnerie-viennoise.jpg",
      },
      {
        name: "Le fumé des gourmets",
        description: "De Marc Foulon, artisan fumeur de poisson",
        city: "Vienne",
        logo: "fume-des-gourmets.jpg",
      },
      {
        name: "Fleurs de café",
        description: "Torréfacteur",
        city: "Vienne",
        logo: "fleurs-de-cafe.png",
      },
      {
        name: "Basile et Téa",
        description: "Artisan chocolatier",
        city: "Pont-Évêque",
        logo: "basile-et-tea.png",
      },
      {
        name: "Les jardins du Remoulon",
        description:
          "Gamme de tisanes, aromates, sels aux herbes et poudres, fabriqués à partir de plantes cultivées par Rémi Breuil",
        city: "Serpaize",
        logo: "les-jardins-du-remoulon.png",
      },
      {
        name: "Histoire de Glaces",
        description: "Artisan glacier",
        city: "Reventin-Vaugris",
        logo: "hdg.png",
      },
      {
        name: "Domaine de Martene",
        description: "Cultivateur de céréales bio et fabricant de dérivés",
        city: "Estrablin",
        logo: "domaine-de-martene.png",
      },
      {
        name: "Le Miel Saint-Primois",
        description: "Miel de toute essence de Jérémie Jugal",
        city: "Saint-Prim",
        logo: "le-miel-saint-primois.jpg",
      },
      {
        name: "La ferme Rousset",
        description: "Producteur de bœuf charolais, de porc et d’œufs",
        city: "Vernioz",
        logo: "la-ferme-rousset.jpg",
      },
      {
        name: "L’agricueilleur du Suzon",
        description:
          "Producteur et transformateur de plantes aromatiques et médicinales bio, ainsi que des morilles bio",
        city: "Cheyssieu",
        logo: "agricueilleur.jpg",
      },
      {
        name: "Gérald Serpollier",
        description:
          "Producteur de fruits et d’asperges blanches, vente de jus de fruits",
        city: "Cheyssieu",
      },
      {
        name: "Cave Metral - Domaine fleurs de galet",
        description: "Viognier et chardonnay",
        city: "Chanas",
        logo: "fleurs-de-galet.jpg",
      },
      {
        name: "Cch et Cie",
        description: "Élevage de chèvres et fromagerie",
        city: "Bellegarde-Poussieu",
        logo: "cch-et-cie.png",
      },
      {
        name: "Marie Nicoud",
        description:
          "Productrice de fruits et légumes, sirops, confitures de fruits, pâte de coing et conserves de légumes",
        city: "Bellegarde-Poussieu",
      },
      {
        name: "Natur éDulis",
        description:
          "Cueilleur et producteur de champignons et de leurs dérivés",
        city: "Village du lac de Paladru",
        logo: "naturedulis.png",
      },
      {
        name: "Exploitation Eymard",
        description: "Noix de Grenoble et dérivés",
        city: "Saint-Vérand",
      },
      {
        name: "La boîte à recette",
        description: "De Odile, créatrice de kits de pâtisserie",
        city: "Saint-Siméon-de-Bressieux",
        logo: "la-boite-a-recette.jpg",
      },
      {
        name: "Les bocaux curieux",
        description:
          "De Lorine et Sylvain, pickles, ketchup et coulis de divers légumes, confitures, compotes et sirops de fruits",
        city: "Fontaines",
        logo: "les-bocaux-curieux.jpg",
      },
    ],
  },
  {
    name: "Ardèche",
    producers: [
      {
        name: "Elo’Asia",
        description: "Traiteur cambodgienne",
        city: "Andance",
        logo: "elo-asia.jpg",
      },
      {
        name: "L’ardèch’Oie",
        description:
          "IGP Oie du Périgord, éleveur et producteur de pâté et rillette d’oie",
        city: "Vernosc-lès-Annonay",
        logo: "ardeche.jpg",
      },
      {
        name: "Les Escargots de Corinne Michel",
        description: "Productrice d’escargots",
        city: "Villevocance",
      },
      {
        name: "Crème de marron d’Ardèche",
        description:
          "De Nicolas Buttigieg, agriculteur, producteur et transformateur de châtaigne",
        city: "Gilhac-et-Bruzac",
        logo: "creme-de-marron.jpg",
      },
    ],
  },
  {
    name: "Drôme",
    producers: [
      {
        name: "Le panier de Cédric Sartre",
        description: "Primeur",
        city: "Saint-Uze",
        logo: "le-panier-de-cedric.jpg",
      },
      {
        name: "Caracoles et Cie",
        description: "Ferme hélicicole et production de dérivés",
        city: "Le Grand-Serre",
        logo: "caracoles.jpg",
      },
      {
        name: "Le fabuleux jardin",
        description:
          "Producteur de légumes et d’aromates en biodynamique et permaculture",
        city: "Buis-les-Baronnies",
        logo: "le-fabuleux-jardin.png",
      },
      {
        name: "Véronique Bosse-Platiere",
        description: "Cultivatrice d’olive de Nyons AOP",
        city: "Buis-les-Baronnies",
      },
    ],
  },
  {
    name: "Rhône",
    producers: [
      {
        name: "Sevenne",
        description:
          "Camille et Kevin fabriquent des boissons pétillantes à base de plantes et de fruits",
        city: "Saint-Cyr-sur-le-Rhône",
      },
      {
        name: "Les Manottes",
        description:
          "Virginie et Nadège, sœurs et fabricantes de biscuits sucrés et salés",
        city: "Sainte-Colombe",
        logo: "les-manottes.jpg",
      },
      {
        name: "Maison Villanueva",
        description:
          "Fabrication artisanale de compotes, confitures, pâte à tartiner et tartinables salés",
        city: "Saint-Priest",
        logo: "mv.png",
      },
      {
        name: "La ferme du Mont Monnet",
        description:
          "Éleveurs de chèvres et de vaches, producteurs de fromages dont l’AOP Rigotte de Condrieu",
        city: "Longes",
        logo: "mont-monnet.jpg",
      },
      {
        name: "Domaine Thomas",
        description: "Vigneron en Régnier et Beaujolais-villages rosé",
        city: "Cercié",
      },
    ],
  },
  {
    name: "Loire",
    producers: [
      {
        name: "Les volailles d’Alex",
        description: "Éleveur et vendeur de volailles",
        city: "Chavanay",
        logo: "les-volailles-alex.png",
      },
      {
        name: "Le Mas du Paradis",
        description: "Domaine viticole",
        city: "Chavanay",
        logo: "le-mas-du-paradis.jpg",
      },
      {
        name: "La ferme des 3 fortunes",
        description:
          "Agriculteur bio, œufs frais et fruits rouges, fabriquant de confitures, coulis et sirops issus de ses productions",
        city: "La Chapelle-Villars",
      },
      {
        name: "La Tit’Mousse",
        description: "Brasserie de Gregory",
        city: "Pélussin",
        logo: "la-tit-mousse.jpg",
      },
      {
        name: "La ferme des hirondelles",
        description: "Élevage de porc et de vache Aubrac, boucher-charcutier",
        city: "Pélussin",
        logo: "la-ferme-des-hirondelles.jpg",
      },
      {
        name: "Les cochons des buissons",
        description: "Éleveur de cochons laineux",
        city: "Maclas",
        logo: "les-cochons-des-buissons.jpg",
      },
      {
        name: "Brasserie la Dame Jeanne",
        description: "Bière artisanale",
        city: "Maclas",
        logo: "brasserie-dame-jeanne.png",
      },
      {
        name: "Brasserie du Pilat",
        description: "Bière bio",
        city: "Saint-Julien-Molin-Molette",
        logo: "brasserie-pilat.png",
      },
      {
        name: "La noiseraie du Pilat",
        description: "Producteur de noisettes et de ses dérivés",
        city: "Bessey",
        logo: "la-noiseraie.jpg",
      },
    ],
  },
  {
    name: "Ain",
    producers: [
      {
        name: "Les 3 frangins",
        description: "Huiles végétales natures et aromatisées",
        city: "Pizay",
        logo: "les-frangins.jpg",
      },
    ],
  },
  {
    name: "Bouches-du-Rhône",
    producers: [
      {
        name: "Domaine de Remoule",
        description: "IGP riz de Camargue",
        city: "Arles",
        logo: "domaine-de-remoule.jpg",
      },
    ],
  },
  {
    name: "Sicile",
    producers: [
      {
        name: "Essensily",
        description:
          "Francesco est passé par Vienne pendant son voyage à travers le monde et en a conclu qu’il devait faire découvrir au monde entier l’huile d’olive de son domaine familial",
        city: "Sicile",
        logo: "essensily.png",
      },
    ],
  },
];

function ProducerCard({ producer }: { producer: Producer }) {
  const logoSrc = producer.logo ? logos[producer.logo] : undefined;

  return (
    <div className="producer-card">
      <div className="producer-card__logo">
        {logoSrc ? (
          <img src={logoSrc} alt={producer.name} loading="lazy" />
        ) : (
          <div className="producer-card__fallback">
            {producer.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="producer-card__content">
        <h4>{producer.name}</h4>
        <p>{producer.description}</p>
        <span>{producer.city}</span>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <section className="producteurs">
      <div className="producteurs-box">
        <h1>Producteurs en épicerie</h1>

        <p className="producteurs-intro">
          Nous travaillons avec des producteurs passionnés et engagés pour
          proposer des produits artisanaux et locaux de grande qualité.
        </p>

        <div className="producteurs-map">
          <img src={lieu} alt="Provenance géographique des producteurs" />
        </div>

        {regions.map((region) => (
          <section key={region.name} className="region-block">
            <h2>{region.name}</h2>

            <div className="region-grid">
              {region.producers.map((producer) => (
                <ProducerCard
                  key={`${producer.name}-${producer.city}`}
                  producer={producer}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
