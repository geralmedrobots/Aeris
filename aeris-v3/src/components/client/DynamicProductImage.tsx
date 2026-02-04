'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface DynamicProductImageProps {
  src: string;
  alt: string;
  sizes?: string;
}

export function DynamicProductImage({ src, alt, sizes }: DynamicProductImageProps) {
  const [dominantColor, setDominantColor] = useState<string>('rgba(99, 102, 241, 0.05)');
  const [accentColor, setAccentColor] = useState<string>('rgba(168, 85, 247, 0.05)');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new window.Image();
    // Não usar crossOrigin para imagens locais
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      // Canvas maior para melhor precisão
      canvas.width = 100;
      canvas.height = 100;

      ctx.drawImage(img, 0, 0, 100, 100);

      try {
        const imageData = ctx.getImageData(0, 0, 100, 100);
        const data = imageData.data;

        const colorMap: { [key: string]: { count: number; r: number; g: number; b: number } } = {};

        // Analisar pixels com melhor precisão
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          // Ignorar pixels transparentes, muito claros (fundo branco) ou muito escuros
          if (a < 200) continue;
          if (r > 245 && g > 245 && b > 245) continue; // Branco
          if (r < 20 && g < 20 && b < 20) continue; // Preto

          // Calcular saturação e brilho
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const saturation = max === 0 ? 0 : (max - min) / max;
          const brightness = max / 255;

          // Priorizar cores saturadas (mais vibrantes)
          if (saturation < 0.15) continue; // Ignorar cores muito cinzas

          // Agrupar cores similares (reduzir para 20 tons por canal)
          const rKey = Math.floor(r / 20);
          const gKey = Math.floor(g / 20);
          const bKey = Math.floor(b / 20);
          const key = `${rKey},${gKey},${bKey}`;

          if (!colorMap[key]) {
            colorMap[key] = { count: 0, r: 0, g: 0, b: 0 };
          }

          colorMap[key].count++;
          colorMap[key].r += r;
          colorMap[key].g += g;
          colorMap[key].b += b;
        }

        // Encontrar as cores mais frequentes
        const sortedColors = Object.entries(colorMap)
          .map(([key, value]) => ({
            r: Math.round(value.r / value.count),
            g: Math.round(value.g / value.count),
            b: Math.round(value.b / value.count),
            count: value.count,
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 3);

        if (sortedColors.length > 0) {
          const color1 = sortedColors[0];
          setDominantColor(`rgba(${color1.r}, ${color1.g}, ${color1.b}, 0.18)`);

          if (sortedColors.length > 1) {
            const color2 = sortedColors[1];
            setAccentColor(`rgba(${color2.r}, ${color2.g}, ${color2.b}, 0.15)`);
          } else {
            // Se só tem uma cor, criar variação
            setAccentColor(`rgba(${Math.min(255, color1.r + 30)}, ${Math.min(255, color1.g + 20)}, ${Math.min(255, color1.b + 40)}, 0.15)`);
          }
        }
      } catch (error) {
        console.log('Could not extract colors from image:', error);
        // Manter cores padrão
      }
    };

    img.onerror = () => {
      console.log('Image load error, using default colors');
    };
  }, [src]);

  return (
    <>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${dominantColor}, ${accentColor})`,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          right: '-50%',
          bottom: '-50%',
          background: `
            radial-gradient(circle at 20% 30%, ${dominantColor.replace(/[\d.]+\)$/, '0.4)')}, transparent 50%),
            radial-gradient(circle at 80% 70%, ${accentColor.replace(/[\d.]+\)$/, '0.35)')}, transparent 50%),
            radial-gradient(circle at 50% 50%, ${dominantColor.replace(/[\d.]+\)$/, '0.3)')}, transparent 60%)
          `,
          filter: 'blur(50px) saturate(200%)',
          opacity: 0.7,
          zIndex: 0,
          animation: 'colorShift 10s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.08), transparent 60%),
            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05), transparent 50%)
          `,
          mixBlendMode: 'overlay',
          zIndex: 2,
          animation: 'shimmer 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={{
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
    </>
  );
}
