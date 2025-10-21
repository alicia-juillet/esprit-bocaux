import Carousel from "../../components/Carousel/Carousel";
import t1 from "../../assets/tarif1.png";
import t2 from "../../assets/tarif2.png";
import t3 from "../../assets/tarif3.png";
import t4 from "../../assets/tarif4.png";
import t5 from "../../assets/tarif5.png";

export default function Cannery() {
  const slides = [
    { src: t1, alt: "Tarif 1" },
    { src: t2, alt: "Tarif 2" },
    { src: t3, alt: "Tarif 3" },
    { src: t4, alt: "Tarif 4" },
    { src: t5, alt: "Tarif 5" },
  ];
  return (
    <section id="cannery-tarif" className="main-section">
      <h2>Tarifs Conserverie</h2>
      <Carousel slides={slides} />
    </section>
  );
}
