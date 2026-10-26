import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const METEOR_COUNT = 6;
const PARTICLE_COUNT = 12;
const EXPLOSION_MS = 700;
// Meteors are thin and fast, so clicks get a generous hit area
const HIT_PADDING = 24;
// Real UI always wins over the game
const INTERACTIVE = "a, button, input, textarea";

const createStars = () =>
  Array.from(
    { length: Math.floor((window.innerWidth * window.innerHeight) / 10000) },
    (_, id) => ({
      id,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }),
  );

// A fresh id remounts the meteor, which restarts its CSS animation
const createMeteor = () => ({
  id: crypto.randomUUID(),
  size: Math.random() * 2 + 1,
  x: Math.random() * 100,
  y: Math.random() * 20,
  delay: Math.random() * 15,
  animationDuration: Math.random() * 3 + 3,
});

// Particles spread evenly around a circle at slightly random distances
const createParticles = () =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
    const distance = 40 + Math.random() * 40;
    return { dx: Math.cos(angle) * distance, dy: Math.sin(angle) * distance };
  });

const isHit = (el, x, y) => {
  if (!el || Number(getComputedStyle(el).opacity) < 0.1) return false;
  const r = el.getBoundingClientRect();
  return (
    x >= r.left - HIT_PADDING &&
    x <= r.right + HIT_PADDING &&
    y >= r.top - HIT_PADDING &&
    y <= r.bottom + HIT_PADDING
  );
};

export const StarBackground = () => {
  const [stars, setStars] = useState(createStars);
  const [meteors, setMeteors] = useState(() =>
    Array.from({ length: METEOR_COUNT }, createMeteor),
  );
  const [explosions, setExplosions] = useState([]);
  const [score, setScore] = useState(0);
  const [isChipVisible, setIsChipVisible] = useState(true);
  const meteorRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => setStars(createStars());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // The content layer sits above the meteors, so pointer events are
  // hit-tested against meteor positions instead of using onClick on each one
  useEffect(() => {
    const findHitMeteor = (e) =>
      e.target.closest(INTERACTIVE)
        ? -1
        : meteorRefs.current.findIndex((el) => isHit(el, e.clientX, e.clientY));

    // Crosshair over a meteor hints that it can be hit
    const handlePointerMove = (e) => {
      document.body.style.cursor = findHitMeteor(e) === -1 ? "" : "crosshair";
    };

    const handlePointerDown = (e) => {
      const index = findHitMeteor(e);
      if (index === -1) return;

      const id = crypto.randomUUID();
      setExplosions((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY, particles: createParticles() },
      ]);
      setMeteors((prev) =>
        prev.map((meteor, i) => (i === index ? createMeteor() : meteor)),
      );
      setScore((prev) => prev + 1);
      setTimeout(
        () => setExplosions((prev) => prev.filter((ex) => ex.id !== id)),
        EXPLOSION_MS,
      );
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "%",
              top: star.y + "%",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
          />
        ))}
        {meteors.map((meteor, index) => (
          <div
            key={meteor.id}
            ref={(el) => (meteorRefs.current[index] = el)}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 3 + "px",
              left: meteor.x + "%",
              top: meteor.y + "%",
              animationDuration: meteor.animationDuration + "s",
              animationDelay: meteor.delay + "s",
            }}
          />
        ))}
      </div>

      {/* Above the content so cards never hide an explosion */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {explosions.map((ex) => (
          <div
            key={ex.id}
            className="absolute"
            style={{ left: ex.x, top: ex.y }}
          >
            {ex.particles.map((p, i) => (
              <span
                key={i}
                className="particle"
                style={{ "--dx": `${p.dx}px`, "--dy": `${p.dy}px` }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Starts as a hint for the easter egg, then becomes the score */}
      {isChipVisible && (
        <div
          className="fixed bottom-4 left-4 z-50 flex items-center gap-2 pl-4 pr-2 py-1.5 rounded-full bg-card/80 backdrop-blur-md shadow-xs font-mono text-sm text-primary opacity-0 animate-fade-in"
          style={{ animationDelay: "3s" }}
        >
          {score === 0
            ? "Tip: click a meteor"
            : `${score} meteor${score === 1 ? "" : "s"} destroyed`}
          <button
            onClick={() => setIsChipVisible(false)}
            aria-label="Dismiss meteor hint"
            className="p-1 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  );
};
