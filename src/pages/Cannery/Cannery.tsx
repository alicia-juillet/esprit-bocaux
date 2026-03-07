import "./Cannery.scss";

type Item = {
  name: string;
  price: string;
};

type SectionProps = {
  title: string;
  subtitle?: string;
  source?: string;
  icon?: string;
  onePerson?: Item[];
  twoPeople?: Item[];
  extraTitle?: string;
  extraItems?: Item[];
  note?: string;
};

function CannerySection({
  title,
  subtitle,
  source,
  icon,
  onePerson,
  twoPeople,
  extraTitle,
  extraItems,
  note,
}: SectionProps) {
  return (
    <article className="cannery-card">
      <div className="cannery-card__header">
        <h2>
          {title} {icon && <span>{icon}</span>}
        </h2>
        {subtitle && <p className="cannery-card__subtitle">{subtitle}</p>}
        {source && <p className="cannery-card__source">{source}</p>}
      </div>

      {onePerson && onePerson.length > 0 && (
        <div className="cannery-block">
          <h3>Un bocal de 450 g, parfait pour une personne</h3>
          <div className="cannery-list">
            {onePerson.map((item, index) => (
              <div className="cannery-row" key={`${item.name}-${index}`}>
                <span className="cannery-row__name">{item.name}</span>
                <span className="cannery-row__price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {twoPeople && twoPeople.length > 0 && (
        <div className="cannery-block">
          <h3>Un bocal de 450 g, parfait pour deux personnes</h3>
          <div className="cannery-list">
            {twoPeople.map((item, index) => (
              <div className="cannery-row" key={`${item.name}-${index}`}>
                <span className="cannery-row__name">{item.name}</span>
                <span className="cannery-row__price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {extraItems && extraItems.length > 0 && (
        <div className="cannery-block">
          {extraTitle && <h3>{extraTitle}</h3>}
          <div className="cannery-list">
            {extraItems.map((item, index) => (
              <div className="cannery-row" key={`${item.name}-${index}`}>
                <span className="cannery-row__name">{item.name}</span>
                <span className="cannery-row__price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {note && <p className="cannery-card__note">{note}</p>}
    </article>
  );
}

export default function Cannery() {
  const porcOnePerson: Item[] = [
    { name: "Cassoulet au porc", price: "7€90" },
    { name: "Cassoulet au canard", price: "9€90" },
    { name: "Saucisse lentille", price: "8€90" },
    { name: "Petit salé aux lentilles", price: "8€90" },
    { name: "Saucisse à la graisse de canard", price: "9€90" },
  ];

  const porcTwoPeople: Item[] = [
    { name: "Porc gras “chiang mai” 🌶️", price: "10€90" },
    { name: "Rougail saucisse", price: "11€90" },
    { name: "Joue de porc au cidre", price: "13€90" },
    { name: "Porc aux pruneaux", price: "10€90" },
  ];

  const volailleOnePerson: Item[] = [
    { name: "Tajine au poulet", price: "9€90" },
  ];

  const volailleTwoPeople: Item[] = [
    { name: "Poulet cajun 🌶️", price: "10€90" },
    { name: "Poulet basquaise", price: "10€90" },
    { name: "Poulet au curry (déclinaison avec lait de coco)", price: "11€90" },
    { name: "Carry de poulet au safran", price: "13€90" },
  ];

  const boeufOnePerson: Item[] = [{ name: "Chili con carne", price: "7€90" }];

  const boeufTwoPeople: Item[] = [
    { name: "Bœuf bourguignon", price: "13€90" },
    { name: "Carbonnade flamande", price: "15€90" },
    { name: "Sauce bolognaise", price: "6€90" },
    { name: "Blanquette de veau", price: "12€90" },
    { name: "Veau marengo", price: "12€90" },
  ];

  const veggieMain: Item[] = [
    { name: "Lentilles à la tomate", price: "3€90" },
    { name: "Ratatouille", price: "3€90" },
    { name: "Mogette à l’auvergnate", price: "3€90" },
  ];

  const veggieFestive: Item[] = [
    { name: "Foie gras de canard au calvados", price: "22€50" },
  ];

  return (
    <section className="cannery">
      <div className="cannery-box">
        <h1>Conserverie artisanale</h1>
        <p className="cannery-intro">
          Retrouvez ici notre sélection de bocaux artisanaux, préparés avec soin
          à partir de produits de qualité, locaux dès que possible.
        </p>

        <CannerySection
          title="Recettes à base de porc"
          icon="🐷"
          source="Porc provenant principalement du GAEC des Hirondelles à Pélussin ou de la boucherie D48 à Ampuis."
          onePerson={porcOnePerson}
          twoPeople={porcTwoPeople}
        />

        <CannerySection
          title="Recettes à base de volaille"
          icon="🐔"
          subtitle="Une grande partie de nos produits est préparée dans des bocaux Weck de 580 ml (450 g)."
          source="Poulet provenant principalement d’un élevage à Félines ou de la boucherie D48 à Ampuis."
          onePerson={volailleOnePerson}
          twoPeople={volailleTwoPeople}
          note="Des produits longue conservation : 2 ans de durée de vie, sans compromis sur la qualité."
        />

        <CannerySection
          title="Recettes à base de bœuf ou veau"
          icon="🐄"
          source="Bovin provenant principalement d’Ezin Pinet, Vernioz, Saint Chamond ou de la boucherie D48 à Ampuis."
          onePerson={boeufOnePerson}
          twoPeople={boeufTwoPeople}
          note="Un délai de 3 semaines peut s’appliquer pour certaines recettes momentanément hors stock. En cas de commande urgente, un forfait supplémentaire pourra être facturé."
        />

        <CannerySection
          title="Recette végétarienne"
          icon="🥕"
          source="Légumes provenant principalement d’Isère, mais aussi de Drôme ou d’Ardèche."
          extraTitle="Un bocal de 450 g"
          extraItems={veggieMain}
        />

        <CannerySection
          title="Pour les fêtes"
          icon="🎄"
          extraTitle="Un bocal de 200 g"
          extraItems={veggieFestive}
          note="Certaines recettes dépendent des saisons."
        />
      </div>
    </section>
  );
}
