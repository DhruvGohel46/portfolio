'use client';

import { useState, useEffect, useCallback } from 'react';

const HEX_CHARS = '0123456789ABCDEF!@#$%&*+<>[]{}';

export function useScramble(text, intervalMs = 6000) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const trigger = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const scrambleInterval = setInterval(() => {
      setDisplayText((current) => 
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index]; // Resolved character
            }
            return HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
          })
          .join('')
      );

      // Increase iteration smoothly. The slower, the longer the scramble lasts.
      if (iteration >= text.length) {
        clearInterval(scrambleInterval);
        setIsScrambling(false);
        setDisplayText(text); // Final clamp
      }
      iteration += 1 / 4; 
    }, 30);

    return () => clearInterval(scrambleInterval);
  }, [text, isScrambling]);

  useEffect(() => {
    // Random initial scramble to immediately establish vibe
    const timeout = setTimeout(trigger, 500);
    // Recurring loop
    const loop = setInterval(trigger, intervalMs);

    return () => {
      clearTimeout(timeout);
      clearInterval(loop);
    };
  }, [trigger, intervalMs]);

  return { displayText, trigger };
}
