// components/BubbleBackground.tsx
import { useEffect, useRef, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  startHeight: number;
}

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const initialized = useRef(false);
  const swayRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const swayIntervals = useRef<Map<number, NodeJS.Timeout>>(new Map());

  useEffect(() => {
    const createBubble = (isInitial: boolean) => {
      const size = Math.random() * 100 + 10;
      const duration = Math.max(30, size / 2); // Smaller bubbles are faster

      const newBubble: Bubble = {
        id: Date.now() + Math.random(),
        size: size,
        left: Math.random() * 100,
        duration: duration,
        delay: 0,
        startHeight: isInitial ? Math.random() : 0,
      };
      /* 
      console.debug("bubble size", size);
      console.debug("bubble duration", duration); */

      setBubbles((prev) => [...prev, newBubble].slice(-30));
    };

    const interval = setInterval(() => {
      createBubble(false);
    }, 5000);
    if (!initialized.current) {
      for (let i = 0; i < 2; i++) {
        createBubble(true);
      }
    }
    initialized.current = true;
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bubbles.forEach(bubble => {
      if (!swayIntervals.current.has(bubble.id)) {
        setTimeout(() => {
          const interval = setInterval(() => {
            const el = swayRefs.current.get(bubble.id);
            if (el) {
              const swayX = (Math.random() - 0.5) * 40; // -20 to 20
              el.style.transform = `translateX(${swayX}px)`;
            }
          }, 3000);
          swayIntervals.current.set(bubble.id, interval);
        }, Math.random() * 3000);
      }
    });
  }, [bubbles]);

  useEffect(() => {
    const currentIds = new Set(bubbles.map(b => b.id));
    swayIntervals.current.forEach((interval, id) => {
      if (!currentIds.has(id)) {
        clearInterval(interval);
        swayIntervals.current.delete(id);
      }
    });
  }, [bubbles]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          ref={(el) => { if (el) swayRefs.current.set(bubble.id, el); }}
          className="bubble-sway absolute"
          style={
            {
              bottom: `calc(-${bubble.size}px + ${bubble.startHeight * 100}vh)`,
              left: `${bubble.left}%`,
            } as React.CSSProperties
          }
        >
          <div
            className="bubble-float rounded-full bg-blue-200/50 blur-[1px]"
            style={
              {
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                "--duration": `${bubble.duration}s`,
                "--delay": `${bubble.delay}s`,
              } as React.CSSProperties
            }
          />
        </div>
      ))}
    </div>
  );
}
