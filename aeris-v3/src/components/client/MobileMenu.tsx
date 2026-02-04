"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="mobileMenuButton"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger ${isOpen ? "hamburger--open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {isOpen && (
        <div className="mobileMenuOverlay" onClick={() => setIsOpen(false)}>
          <nav className="mobileMenu" onClick={(e) => e.stopPropagation()}>
            <Link
              className="mobileMenu__item"
              href="/create"
              onClick={() => setIsOpen(false)}
            >
              Create
            </Link>
            <Link
              className="mobileMenu__item"
              href="/discover"
              onClick={() => setIsOpen(false)}
            >
              Discover
            </Link>
            <Link
              className="mobileMenu__item"
              href="/shop"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
