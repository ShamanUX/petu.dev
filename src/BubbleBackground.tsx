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

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble-float absolute rounded-full bg-blue-200/50 blur-[1px]"
          style={
            {
              bottom: `calc(-${bubble.size}px + ${bubble.startHeight * 100}vh)`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              "--duration": `${bubble.duration}s`,
              "--delay": `${bubble.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
