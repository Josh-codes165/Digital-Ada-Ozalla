import { useState, useEffect, useCallback } from "react";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";

const slides = [
  { image: Image1, title: "Women of Strength, Purpose & Grace" },
  { image: Image2, title: "United by Love, Growing Together" },
  { image: Image3, title: "Rooted in Faith, Guided by Purpose" },
  { image: Image4, title: "Empowering Women, Strengthening Communities" },
  { image: Image5, title: "Celebrating Women, Building a Legacy" },
];

const AUTO_SLIDE_INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col justify-end px-10 md:px-32 pb-44">
        {/* key={current} forces React to remount this block on every
            slide change, which re-triggers the fadeInUp animation */}
        <div key={current} className="animate-fadeInUp">
          <p className="text-lg font-semibold text-white/80 mb-3">
            Digital Ada Ozalla
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white max-w-2xl tracking-tight">
            {slides[current].title}
          </h2>
        </div>
        <button className="mt-8 w-fit bg-green-950 hover:bg-green-800 hover:scale-105 text-white text-base font-black px-7 py-3.5 rounded-lg transition-all duration-200">
          Join Us
        </button>
      </div>

      {/* Fixed: was two separately-positioned buttons with invalid
          right-50 / right-35 classes and a hidden+flex conflict.
          Now one flex group with a real gap — safer at every width. */}
      <div className="hidden sm:flex absolute inset-y-0 right-6 md:right-10 lg:right-16 items-center gap-3">
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="bg-black/30 hover:bg-black/50 hover:scale-110 text-white rounded-full w-11 h-11 flex items-center justify-center text-xl transition-all duration-200"
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="bg-black/30 hover:bg-black/50 hover:scale-110 text-white rounded-full w-11 h-11 flex items-center justify-center text-xl transition-all duration-200"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-8 left-10 md:left-32 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              index === current ? "w-8 bg-green-500" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}