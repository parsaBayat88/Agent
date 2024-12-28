import React, { useEffect, useState } from 'react';

const phrases = [
  'Automate.',
  'Innovate.',
  'Transform.',
  'Succeed.'
];

export function TypewriterText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < phrase.length) {
          setCurrentText(phrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setCurrentText(phrase.slice(0, currentText.length - 1));
        }
      }
    }, isDeleting ? 50 : 100); // Faster typing speed

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting]);

  return (
    <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
      <span className="absolute -inset-x-full -inset-y-4 bg-gradient-to-r from-[#8200fb]/20 via-transparent to-cyan-500/20 blur-xl animate-gradient-x" />
      <span className="relative bg-gradient-to-r from-[#8200fb] via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent animate-text">
        {currentText}
      </span>
      <span className="animate-pulse relative">|</span>
    </h1>
  );
}