import { useEffect } from 'react';
import '../styles/UseStars.style.css';

export const useStars = () => {
  useEffect(() => {
    const createStars = () => {
      const body = document.body;
      for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        body.appendChild(star);
      }
    };
    createStars();
    return () => {
      document.querySelectorAll('.star').forEach(star => star.remove());
    };
  }, []);
};