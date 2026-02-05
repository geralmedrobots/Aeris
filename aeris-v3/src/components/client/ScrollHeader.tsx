"use client";

import { useEffect } from "react";

export function ScrollHeader() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.siteHeader');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

