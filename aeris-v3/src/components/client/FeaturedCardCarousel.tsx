'use client';

import { useState, useEffect } from 'react';
import { DynamicImageCard } from './DynamicImageCard';

interface Shoe {
  name: string;
  votes: string;
  likes: string;
  progress: string;
  author: string;
  tone: string;
  image: string;
  badge?: string;
}

interface FeaturedCardCarouselProps {
  shoes: Shoe[];
  groupIndex: number;
  autoPlayInterval?: number; // Tempo em milissegundos entre transições
}

const getProgressColor = (progress: string): string => {
  const percentage = parseInt(progress.replace('%', ''));

  if (percentage <= 20) {
    return 'progress--red';
  } else if (percentage <= 60) {
    return 'progress--yellow';
  } else {
    return 'progress--green';
  }
};

export function FeaturedCardCarousel({
  shoes,
  groupIndex,
  autoPlayInterval = 5000
}: FeaturedCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentShoe = shoes[currentIndex];

  // Auto-play effect
  useEffect(() => {
    if (isPaused || shoes.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shoes.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, shoes.length, autoPlayInterval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shoes.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + shoes.length) % shoes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <article
      className="featuredCard featuredCard--carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {currentShoe.badge ? (
        <span className="featuredCard__badge">{currentShoe.badge}</span>
      ) : null}

      <div className="featuredCard__navigation">
        <button
          className="featuredCard__navBtn featuredCard__navBtn--prev"
          onClick={goToPrev}
          aria-label="Produto anterior"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="featuredCard__navBtn featuredCard__navBtn--next"
          onClick={goToNext}
          aria-label="Próximo produto"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <h3 className="featuredCard__title">{currentShoe.name}</h3>

      <DynamicImageCard
        src={currentShoe.image}
        alt={currentShoe.name}
        className="featuredCard__media"
      />

      <div className="featuredCard__body">
        <p className="featuredCard__tone">{currentShoe.tone}</p>
        <div className="featuredCard__stats">
          <span className="featuredCard__stat">
            <span className="featuredCard__icon">❤</span>
            <span className="featuredCard__value">{currentShoe.votes}</span>
          </span>
          <span className="featuredCard__stat">
            <span className="featuredCard__icon">☆</span>
            <span className="featuredCard__value">{currentShoe.likes}</span>
          </span>
        </div>
        <div className="featuredCard__author">
          <span className="avatar avatar--sm" aria-hidden>
            {currentShoe.author
              .split(' ')
              .map((part) => part[0])
              .join('')}
          </span>
          <span className="featuredCard__authorName">{currentShoe.author}</span>
        </div>
        <div className="featuredCard__progress">
          <div className="featuredCard__progressBar">
            <span
              className={`featuredCard__progressFill ${getProgressColor(currentShoe.progress)}`}
              style={{ width: currentShoe.progress }}
            />
          </div>
        </div>
        <div className="featuredCard__footer">
          <span className="featuredCard__progressText">{currentShoe.progress}</span>
          <span className="featuredCard__votesLabel">para produção</span>
        </div>
      </div>

      <div className="featuredCard__dots">
        {shoes.map((_, index) => (
          <button
            key={index}
            className={`featuredCard__dot ${index === currentIndex ? 'featuredCard__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ver produto ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </article>
  );
}
