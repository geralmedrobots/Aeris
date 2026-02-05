"use client";

import { useEffect, useMemo, useState } from "react";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n";

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const raw = document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${name}=`));
  if (!raw) return undefined;
  return decodeURIComponent(raw.split("=").slice(1).join("="));
}

function setCookie(name: string, value: string) {
  // 1 ano
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function LanguageToggle() {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    const v = getCookie(LOCALE_COOKIE);
    if (!v) return;
    const lower = v.toLowerCase();
    if (lower.startsWith("en")) setLocale("en");
    if (lower.startsWith("pt")) setLocale("pt");
  }, []);

  const label = useMemo(() => {
    if (locale === "pt") return { text: "Português", flag: "🇵🇹" };
    return { text: "English", flag: "🇬🇧" };
  }, [locale]);

  return (
    <button
      className="languageButton"
      type="button"
      onClick={() => {
        const next: Locale = locale === "pt" ? "en" : "pt";
        setLocale(next);
        setCookie(LOCALE_COOKIE, next);
        // refresh server components/layout metadata etc.
        window.location.reload();
      }}
      aria-label={locale === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}
    >
      {label.text}
      <span className="languageButton__flag" aria-hidden>
        {label.flag}
      </span>
    </button>
  );
}

