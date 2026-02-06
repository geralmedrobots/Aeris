'use client';

import { useState, useEffect } from 'react';

export function StickyHeader({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated after first render
    setIsHydrated(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position after hydration
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isHydrated && scrolled ? 'siteHeader scrolled' : 'siteHeader'}>
      {children}
    </header>
  );
}

