import React, { useState, useEffect } from 'react';

// 文字アニメーション用のコンポーネント
const AnimatedText = ({ text, isVisible, className, delay = 0 }) => {
  const [animatedChars, setAnimatedChars] = useState(new Set());

  useEffect(() => {
    if (isVisible) {
      text.split('').forEach((_, index) => {
        setTimeout(() => {
          setAnimatedChars(prev => new Set([...prev, `${delay}-${index}`]));
        }, delay + index * 70);
      });
    }
  }, [isVisible, text, delay]);

  const splitText = text.split('').map((char, index) => {
    const isCharAnimated = animatedChars.has(`${delay}-${index}`);
    return (
      <span
        key={index}
        className={`inline-block transition-colors duration-300`}
        style={{
          color: isCharAnimated ? '#1b1b1b' : '#f9f9f9'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    );
  });

  return <span className={className}>{splitText}</span>;
};

export default AnimatedText; 