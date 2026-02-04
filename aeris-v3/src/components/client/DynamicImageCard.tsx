'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface DynamicImageCardProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function DynamicImageCard({ src, alt, className = '', priority = false }: DynamicImageCardProps) {
  const [dominantColor, setDominantColor] = useState<string>('rgba(139, 92, 246, 0.1)');
  const [accentColor, setAccentColor] = useState<string>('rgba(236, 72, 153, 0.1)');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      canvas.width = 120;
      canvas.height = 120;

      ctx.drawImage(img, 0, 0, 120, 120);

      try {
        const imageData = ctx.getImageData(0, 0, 120, 120);
        const data = imageData.data;

        const colorMap: { [key: string]: { count: number; r: number; g: number; b: number } } = {};

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];

          if (a < 200) continue;
          if (r > 245 && g > 245 && b > 245) continue;
          if (r < 20 && g < 20 && b < 20) continue;

          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const saturation = max === 0 ? 0 : (max - min) / max;

          if (saturation < 0.15) continue;

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
            setAccentColor(`rgba(${Math.min(255, color1.r + 30)}, ${Math.min(255, color1.g + 20)}, ${Math.min(255, color1.b + 40)}, 0.15)`);
          }
        }
      } catch (error) {
        console.log('Could not extract colors from image:', error);
      }
    };

    img.onerror = () => {
      console.log('Image load error, using default colors');
    };
  }, [src]);

  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(135deg, ${dominantColor}, ${accentColor})`,
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div
        className="dynamic-color-layer"
        style={{
          position: 'absolute',
          top: '-60%',
          left: '-60%',
          right: '-60%',
          bottom: '-60%',
          background: `
            radial-gradient(circle at 30% 30%, ${dominantColor.replace('0.18', '0.5')}, transparent 65%),
            radial-gradient(circle at 70% 70%, ${accentColor.replace('0.15', '0.4')}, transparent 60%)
          `,
          filter: 'blur(70px) saturate(220%) brightness(1.2)',
          opacity: 0.65,
          zIndex: 0,
          animation: 'dreamyFloat 12s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1), transparent 55%),
            radial-gradient(circle at 80% 20%, ${dominantColor.replace('0.18', '0.08')}, transparent 45%),
            linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%)
          `,
          mixBlendMode: 'overlay',
          zIndex: 2,
          animation: 'lightDance 10s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
          zIndex: 1,
        }}
        priority={priority}
      />
    </div>
  );
}
