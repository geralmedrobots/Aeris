"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type NavLinksProps = {
  locale: Locale;
  translations: {
    create: string;
    discover: string;
    design: string;
    shop: string;
  };
};

export function NavLinks({ locale, translations }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="navMain">
      <Link
        className={`navMain__item ${pathname === "/about" ? "navMain__item--active" : ""}`}
        href="/about"
      >
        {translations.create}
      </Link>
      <Link
        className={`navMain__item ${pathname === "/discover" ? "navMain__item--active" : ""}`}
        href="/discover"
      >
        {translations.discover}
      </Link>
      <Link
        className={`navMain__item ${pathname === "/design" ? "navMain__item--active" : ""}`}
        href="/design"
      >
        {translations.design}
      </Link>
      <Link
        className={`navMain__item ${pathname === "/shop" ? "navMain__item--active" : ""}`}
        href="/shop"
      >
        {translations.shop}
      </Link>
    </nav>
  );
}
