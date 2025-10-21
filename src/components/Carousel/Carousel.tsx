import { useState } from "react";
import "./Carousel.scss";

type Slide = { src: string; alt?: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const max = slides.length;

  const prev = () => setI((i) => (i - 1 + max) % max);
  const next = () => setI((i) => (i + 1) % max);

  return (
    <div className="carousel">
      <button type="button" className="nav prev" onClick={prev}>
        ‹
      </button>

      <div className="viewport">
        <img
          key={i}
          src={slides[i].src}
          alt={slides[i].alt || `Slide ${i + 1}`}
          className="slide"
          draggable={false}
        />
      </div>

      <button type="button" className="nav next" onClick={next}>
        ›
      </button>
    </div>
  );
}
