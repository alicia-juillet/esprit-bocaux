import { useState } from "react";
import "./Carousel.scss";

type Slide = { src: string; alt?: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const max = slides.length;

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setI((x) => (x - 1 + max) % max);
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setI((x) => (x + 1) % max);
  };

  return (
    <div
      className="carousel"
      onClickCapture={(e) => e.stopPropagation()}
      onMouseDownCapture={(e) => e.stopPropagation()}
    >
      <button type="button" className="nav prev" onClick={handlePrev}>
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

      <button type="button" className="nav next" onClick={handleNext}>
        ›
      </button>
    </div>
  );
}
