'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const items = [
  {
    id: 1,
    images: ['/blog/1/1.png', '/blog/1/2.png', '/blog/1/3.png'],
  },
  {
    id: 2,
    images: ['/blog/2/1.png', '/blog/2/2.png', '/blog/2/3.png'],
  },
  {
    id: 3,
    images: ['/blog/3/1.png', '/blog/3/2.png', '/blog/3/3.png'],
  },
];

export function BlogGrid() {
  const [indexes, setIndexes] = useState([0, 0, 0]);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const intervals = items.map((_, colIndex) => {
      return setInterval(() => {
        setIndexes((prev) => {
          const newIndexes = [...prev];
          newIndexes[colIndex] = (newIndexes[colIndex] + 1) % items[colIndex].images.length;
          return newIndexes;
        });
      }, 3500 + colIndex * 300);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const section = sectionRef.current;
    section?.addEventListener('mousemove', handleMouseMove);
    return () => section?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="blogGrid" ref={sectionRef}>
      <div className="container">
        <div className="blogGrid__cols">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="blogGrid__col"
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                transform: isHovered === i
                  ? 'translateY(-8px) scale(1.02)'
                  : undefined,
              }}
            >
              <div className="blogGrid__imageWrapper">
                {item.images.map((img, imgIndex) => (
                  <div
                    key={img}
                    className={`blogGrid__slide ${imgIndex === indexes[i] ? 'active' : ''}`}
                    style={{
                      transform: isHovered === i
                        ? `scale(1.1) rotate(${(mousePos.x - 0.5) * 2}deg)`
                        : undefined,
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Blog image ${item.id}-${imgIndex + 1}`}
                      fill
                      className="blogGrid__img"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ))}
                <div className={`blogGrid__overlay ${isHovered === i ? 'visible' : ''}`}>
                  <div className="blogGrid__overlayContent">
                    <span className="blogGrid__viewMore">Ver Mais</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

