"use client";

import { useState } from "react";
import Link from "next/link";
import { LanguageToggle } from "./LanguageToggle";

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
        <>
          <div className="mobileMenuOverlay" onClick={() => setIsOpen(false)} />
          <nav className="mobileMenu" onClick={(e) => e.stopPropagation()}>
            <div className="mobileMenu__header">
              <button
                className="avatar avatar--mobile"
                type="button"
                aria-label="Perfil"
              >
                <span className="avatar__inner" aria-hidden>
                  MR
                </span>
              </button>
              <span className="mobileMenu__userName">My Account</span>
            </div>

            <div className="mobileMenu__divider" />

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

            <div className="mobileMenu__divider" />

            <Link
              className="mobileMenu__item"
              href="/launch"
              onClick={() => setIsOpen(false)}
            >
              🚀 Launch
            </Link>

            <div className="mobileMenu__divider" />

            <div className="mobileMenu__footer">
              <LanguageToggle />
            </div>
          </nav>
        </>
      )}
    </>
  );
}
