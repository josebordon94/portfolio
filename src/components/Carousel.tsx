import { useState, useEffect, useRef, useCallback } from "react";

interface CarouselProps {
  images: string[];
  alt: string;
}

export default function Carousel({ images, alt }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const touchStart = useRef(0);

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
  }, [images.length]);

  useEffect(() => {
    if (images.length > 1) {
      startInterval();
    }
    return () => clearInterval(intervalRef.current);
  }, [images.length, startInterval]);

  const goTo = (index: number) => {
    setCurrent(index);
    startInterval();
  };

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <div className="relative w-full lg:w-1/2">
      <div
        className="relative overflow-hidden rounded-2xl border-2 border-dark-800 shadow-xl shadow-primary-500/5 aspect-[9/19] max-w-[280px] mx-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-dark-950/70 text-dark-100 hover:bg-dark-950/90 transition-colors text-lg"
              aria-label="Anterior"
            >
              &#8249;
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-dark-950/70 text-dark-100 hover:bg-dark-950/90 transition-colors text-lg"
              aria-label="Siguiente"
            >
              &#8250;
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary-400 w-4" : "bg-dark-600"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
