import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./client/MobileMenu";
import { LanguageToggle } from "./client/LanguageToggle";
import { NavLinks } from "./client/NavLinks";
import { StickyHeader } from "./client/StickyHeader";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";

export async function Header() {
  const locale = await getLocale();

  return (
    <StickyHeader>
      <div className="container header__inner">
        <Link className="brand" href="/" aria-label="Aeris">
          <span className="brand__mark" aria-hidden>
            <Image
              src="/logo.png"
              alt="Aeris Logo"
              width={40}
              height={40}
              className="brand__logo"
            />
            aeris
          </span>
        </Link>

        <NavLinks
          locale={locale}
          translations={{
            create: t(locale, "nav_create"),
            discover: t(locale, "nav_discover"),
            design: t(locale, "nav_design"),
            shop: t(locale, "nav_shop"),
          }}
        />

        <MobileMenu />

        <div className="header__actions">
          <Link className="btn btn--ghost" href="/login">
            {locale === "pt" ? "Entrar" : "Sign In"}
          </Link>
          <LanguageToggle />
        </div>
      </div>
    </StickyHeader>
  );
}
