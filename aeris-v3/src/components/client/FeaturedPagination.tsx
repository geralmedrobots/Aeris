'use client';

import { useState } from 'react';
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

interface FeaturedPaginationProps {
  shoes: Shoe[];
  itemsPerPage?: number;
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

export function FeaturedPagination({ shoes, itemsPerPage = 6 }: FeaturedPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(shoes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentShoes = shoes.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll suave para o topo da seção
    document.querySelector('.featured')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <div className="featuredGrid">
        {currentShoes.map((shoe) => (
          <article className="featuredCard" key={shoe.name}>
            {shoe.badge ? (
              <span className="featuredCard__badge">{shoe.badge}</span>
            ) : null}
            <h3 className="featuredCard__title">{shoe.name}</h3>
            <DynamicImageCard
              src={shoe.image}
              alt={shoe.name}
              className="featuredCard__media"
            />
            <div className="featuredCard__body">
              <p className="featuredCard__tone">{shoe.tone}</p>
              <div className="featuredCard__stats">
                <span className="featuredCard__stat">
                  <span className="featuredCard__icon">❤</span>
                  <span className="featuredCard__value">{shoe.votes}</span>
                </span>
                <span className="featuredCard__stat">
                  <span className="featuredCard__icon">☆</span>
                  <span className="featuredCard__value">{shoe.likes}</span>
                </span>
              </div>
              <div className="featuredCard__author">
                <span className="avatar avatar--sm" aria-hidden>
                  {shoe.author
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <span className="featuredCard__authorName">{shoe.author}</span>
              </div>
              <div className="featuredCard__progress">
                <div className="featuredCard__progressBar">
                  <span
                    className={`featuredCard__progressFill ${getProgressColor(shoe.progress)}`}
                    style={{ width: shoe.progress }}
                  />
                </div>
              </div>
              <div className="featuredCard__footer">
                <span className="featuredCard__progressText">{shoe.progress}</span>
                <span className="featuredCard__votesLabel">para produção</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination__btn pagination__btn--prev"
            onClick={goToPrevious}
            disabled={currentPage === 1}
            aria-label="Página anterior"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Anterior
          </button>

          <div className="pagination__pages">
            {getPageNumbers().map((page, index) => (
              typeof page === 'number' ? (
                <button
                  key={index}
                  className={`pagination__page ${currentPage === page ? 'pagination__page--active' : ''}`}
                  onClick={() => goToPage(page)}
                  aria-label={`Página ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ) : (
                <span key={index} className="pagination__ellipsis">
                  {page}
                </span>
              )
            ))}
          </div>

          <button
            className="pagination__btn pagination__btn--next"
            onClick={goToNext}
            disabled={currentPage === totalPages}
            aria-label="Próxima página"
          >
            Próxima
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      <div className="pagination__info">
        Mostrando {startIndex + 1}-{Math.min(endIndex, shoes.length)} de {shoes.length} designs
      </div>
    </>
  );
}
