// import "./Product.scss";
// import lieu from "../../assets/lieu.png";

// type Producer = {
//   name: string;
//   description: string;
//   city: string;
//   logo?: string;
// };

// type Region = {
//   name: string;
//   producers: Producer[];
// };

// const regions: Region[] = [
//   {
//     name: "Isère",
//     producers: [
//       {
//         name: "Les palets d’Emile",
//         description: "Palets bretons artisanaux revisités",
//         city: "Vienne",
//         logo: "/producers/les-palets-emilie.jpg",
//       },
//       {
//         name: "La savonnerie Viennoise",
//         description: "Savons et cosmétiques naturels",
//         city: "Vienne",
//         logo: "/producers/savonnerie-viennoise.png",
//       },
//       {
//         name: "Le fumé des gourmets",
//         description: "Artisan fumeur de poisson — Marc Foulon",
//         city: "Vienne",
//         logo: "/producers/le-fume-des-gourmets.png",
//       },
//       {
//         name: "Fleurs de café",
//         description: "Torréfacteur",
//         city: "Vienne",
//         logo: "/producers/fleurs-de-cafe.png",
//       },
//       {
//         name: "Basile et Téa",
//         description: "Artisan chocolatier",
//         city: "Pont-Évêque",
//         logo: "/producers/basile-et-tea.png",
//       },
//       {
//         name: "Les jardins du Remoulon",
//         description:
//           "Gamme de tisanes, aromates, sels aux herbes et poudres, fabriqués à partir de plantes cultivées par Rémi Breuil",
//         city: "Serpaize",
//         logo: "/producers/jardins-du-remoulon.png",
//       },
//       {
//         name: "Histoire de Glaces",
//         description: "Artisan glacier",
//         city: "Reventin-Vaugris",
//         logo: "/producers/histoire-de-glaces.png",
//       },
//       {
//         name: "Domaine de Martene",
//         description: "Cultivateur de céréales bio et fabricant de dérivés",
//         city: "Estrablin",
//         logo: "/producers/domaine-de-martene.png",
//       },
//       {
//         name: "Le Miel Saint-Primois",
//         description: "Miels de toute essence — Jérémie Jugal",
//         city: "Saint-Prim",
//         logo: "/producers/miel-saint-primois.png",
//       },
//       {
//         name: "La ferme Rousset",
//         description: "Producteur de bœuf charolais, de porc et d’œufs",
//         city: "Vernioz",
//         logo: "/producers/ferme-rousset.png",
//       },
//       {
//         name: "L’agricueilleur du Suzon",
//         description:
//           "Producteur et transformateur de plantes aromatiques et médicinales bio, ainsi que de morilles bio",
//         city: "Cheyssieu",
//         logo: "/producers/agricueilleur-suzon.png",
//       },
//       {
//         name: "Gérald Serpollier",
//         description:
//           "Producteur de fruits et d’asperges blanches, vente de jus de fruits",
//         city: "Cheyssieu",
//         logo: "/producers/gerald-serpollier.png",
//       },
//       {
//         name: "Cave Metral - Domaine fleurs de galet",
//         description: "Viognier et chardonnay",
//         city: "Chanas",
//         logo: "/producers/cave-metral.png",
//       },
//       {
//         name: "Cch et Cie",
//         description: "Élevage de chèvres et fromagerie",
//         city: "Bellegarde-Poussieu",
//         logo: "/producers/cch-et-cie.png",
//       },
//       {
//         name: "Marie Nicoud",
//         description:
//           "Productrice de fruits et légumes, sirops, confitures, pâte de coing et conserves de légumes",
//         city: "Bellegarde-Poussieu",
//         logo: "/producers/marie-nicoud.png",
//       },
//       {
//         name: "Natur éDulis",
//         description:
//           "Cueilleur et producteur de champignons et de leurs dérivés",
//         city: "Village du lac de Paladru",
//         logo: "/producers/natur-edulis.png",
//       },
//       {
//         name: "Exploitation Eymard",
//         description: "Noix de Grenoble et dérivés",
//         city: "Saint-Vérand",
//         logo: "/producers/exploitation-eymard.png",
//       },
//       {
//         name: "La boîte à recette",
//         description: "Créatrice de kits de pâtisserie — Odile",
//         city: "Saint-Siméon-de-Bressieux",
//         logo: "/producers/boite-a-recette.png",
//       },
//       {
//         name: "Les bocaux curieux",
//         description:
//           "Pickles, ketchup et coulis de légumes, confitures, compotes et sirops de fruits",
//         city: "Fontaines",
//         logo: "/producers/les-bocaux-curieux.png",
//       },
//     ],
//   },
//   {
//     name: "Ardèche",
//     producers: [
//       {
//         name: "Elo’Asia",
//         description: "Traiteur cambodgienne",
//         city: "Andance",
//         logo: "/producers/elo-asia.png",
//       },
//       {
//         name: "L’ardèch’Oie",
//         description:
//           "IGP Oie du Périgord, éleveur et producteur de pâté et rillette d’oie",
//         city: "Vernosc-lès-Annonay",
//         logo: "/producers/ardechoie.png",
//       },
//       {
//         name: "Les Escargots de Corinne Michel",
//         description: "Productrice d’escargots",
//         city: "Villevocance",
//         logo: "/producers/escargots-corinne-michel.png",
//       },
//       {
//         name: "Crème de marron d’Ardèche",
//         description:
//           "Agriculteur, producteur et transformateur de châtaigne — Nicolas Buttigieg",
//         city: "Gilhac-et-Bruzac",
//         logo: "/producers/creme-de-marron-ardeche.png",
//       },
//     ],
//   },
//   {
//     name: "Drôme",
//     producers: [
//       {
//         name: "Le panier de Cédric Sartre",
//         description: "Primeur",
//         city: "Saint-Uze",
//         logo: "/producers/panier-cedric-sartre.png",
//       },
//       {
//         name: "Caracoles et Cie",
//         description: "Ferme hélicicole et production de dérivés",
//         city: "Le Grand-Serre",
//         logo: "/producers/caracoles-et-cie.png",
//       },
//       {
//         name: "Le fabuleux jardin",
//         description:
//           "Producteur de légumes et d’aromates en biodynamique et permaculture",
//         city: "Buis-les-Baronnies",
//         logo: "/producers/fabuleux-jardin.png",
//       },
//       {
//         name: "Véronique Bosse-Platiere",
//         description: "Cultivatrice d’olive de Nyons AOP",
//         city: "Buis-les-Baronnies",
//         logo: "/producers/veronique-bosse-platiere.png",
//       },
//     ],
//   },
//   {
//     name: "Rhône",
//     producers: [
//       {
//         name: "Sevenne",
//         description:
//           "Camille et Kevin fabriquent des boissons pétillantes à base de plantes et de fruits",
//         city: "Saint-Cyr-sur-le-Rhône",
//         logo: "/producers/sevenne.png",
//       },
//       {
//         name: "Les Manottes",
//         description:
//           "Virginie et Nadège, sœurs et fabricantes de biscuits sucrés et salés",
//         city: "Sainte-Colombe",
//         logo: "/producers/les-manottes.png",
//       },
//       {
//         name: "Maison Villanueva",
//         description:
//           "Fabrication artisanale de compotes, confitures, pâtes à tartiner et tartinables salés",
//         city: "Saint-Priest",
//         logo: "/producers/maison-villanueva.png",
//       },
//       {
//         name: "La ferme du Mont Monnet",
//         description:
//           "Éleveurs de chèvres et de vaches, producteurs de fromages dont l’AOP Rigotte de Condrieu",
//         city: "Longes",
//         logo: "/producers/ferme-mont-monnet.png",
//       },
//       {
//         name: "Domaine Thomas",
//         description: "Vigneron en Régnier et Beaujolais-villages rosé",
//         city: "Cercié",
//         logo: "/producers/domaine-thomas.png",
//       },
//     ],
//   },
//   {
//     name: "Loire",
//     producers: [
//       {
//         name: "Les volailles d’Alex",
//         description: "Éleveur et vendeur de volailles",
//         city: "Chavanay",
//         logo: "/producers/volailles-dalex.png",
//       },
//       {
//         name: "Le Mas du Paradis",
//         description: "Domaine viticole",
//         city: "Chavanay",
//         logo: "/producers/mas-du-paradis.png",
//       },
//       {
//         name: "La ferme des 3 fortunes",
//         description:
//           "Agriculteur bio, œufs frais, fruits rouges, confitures, coulis et sirops",
//         city: "La Chapelle-Villars",
//         logo: "/producers/ferme-3-fortunes.png",
//       },
//       {
//         name: "La Tit’Mousse",
//         description: "Brasserie de Gregory",
//         city: "Pélussin",
//         logo: "/producers/la-tit-mousse.png",
//       },
//       {
//         name: "La ferme des hirondelles",
//         description: "Élevage de porc et vache Aubrac, boucher-charcutier",
//         city: "Pélussin",
//         logo: "/producers/ferme-des-hirondelles.png",
//       },
//       {
//         name: "Les cochons des buissons",
//         description: "Éleveur de cochons laineux",
//         city: "Maclas",
//         logo: "/producers/cochons-des-buissons.png",
//       },
//       {
//         name: "Brasserie la Dame Jeanne",
//         description: "Bière artisanale",
//         city: "Maclas",
//         logo: "/producers/dame-jeanne.png",
//       },
//       {
//         name: "Brasserie du Pilat",
//         description: "Bière bio",
//         city: "Saint-Julien-Molin-Molette",
//         logo: "/producers/brasserie-du-pilat.png",
//       },
//       {
//         name: "La noiseraie du Pilat",
//         description: "Producteur de noisettes et de leurs dérivés",
//         city: "Bessey",
//         logo: "/producers/noiseraie-du-pilat.png",
//       },
//     ],
//   },
//   {
//     name: "Ain",
//     producers: [
//       {
//         name: "Les 3 frangins",
//         description: "Huiles végétales natures et aromatisées",
//         city: "Pizay",
//         logo: "/producers/les-3-frangins.png",
//       },
//     ],
//   },
//   {
//     name: "Bouches-du-Rhône",
//     producers: [
//       {
//         name: "Domaine de Remoule",
//         description: "IGP riz de Camargue",
//         city: "Arles",
//         logo: "/producers/domaine-de-remoule.png",
//       },
//     ],
//   },
//   {
//     name: "Sicile",
//     producers: [
//       {
//         name: "Essensily",
//         description:
//           "Francesco est passé par Vienne pendant son voyage à travers le monde et en a conclu qu’il devait faire découvrir au monde entier l’huile d’olive de son domaine familial",
//         city: "Sicile",
//         // pas de logo
//       },
//     ],
//   },
// ];

// function ProducerCard({ producer }: { producer: Producer }) {
//   return (
//     <div className="producer-card">
//       <div className="producer-card__logo">
//         {producer.logo ? (
//           <img src={producer.logo} alt={producer.name} />
//         ) : (
//           <div className="producer-card__fallback">
//             {producer.name.charAt(0)}
//           </div>
//         )}
//       </div>

//       <div className="producer-card__content">
//         <h4>{producer.name}</h4>
//         <p>{producer.description}</p>
//         <span>{producer.city}</span>
//       </div>
//     </div>
//   );
// }

// export default function Product() {
//   return (
//     <section className="producteurs">
//       <div className="producteurs-box">
//         <h1>Producteurs en épicerie</h1>
//         <p className="producteurs-intro">
//           Nous travaillons avec des producteurs passionnés, soigneusement
//           sélectionnés pour la qualité de leurs produits et leur savoir-faire.
//           Retrouvez ici les artisans et producteurs présents dans notre
//           épicerie.
//         </p>

//         <div className="producteurs-map">
//           <img src={lieu} alt="Provenance géographique de nos producteurs" />
//         </div>

//         {regions.map((region) => (
//           <section className="region-block" key={region.name}>
//             <h2>{region.name}</h2>
//             <div className="region-grid">
//               {region.producers.map((producer) => (
//                 <ProducerCard key={producer.name} producer={producer} />
//               ))}
//             </div>
//           </section>
//         ))}
//       </div>
//     </section>
//   );
// }
