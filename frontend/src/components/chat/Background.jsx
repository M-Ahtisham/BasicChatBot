import React from 'react';

export default function Background() {
  return ( //REMINDER TO ADD SOME KINDA COLOUR and FIX (OPTIONAL)
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => {
        const size = Math.floor(Math.random() * 80) + 20;
        const left = Math.floor(Math.random() * 100);
        const delay = Math.random() * 5;
        const duration = 20 + Math.random() * 20;
        return (
          <div
            key={i}
            className="bubble"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `-100px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}