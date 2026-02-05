import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./client/MobileMenu";
import { LanguageToggle } from "./client/LanguageToggle";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";

export async function Header() {
  const locale = await getLocale();

  return (
    <header className="siteHeader">
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

        <nav className="navMain">
          <Link className="navMain__item navMain__item--active" href="/create">
            {t(locale, "nav_create")}
          </Link>
          <Link className="navMain__item" href="/discover">
            {t(locale, "nav_discover")}
          </Link>
          <Link className="navMain__item" href="/shop">
            {t(locale, "nav_shop")}
          </Link>
        </nav>

        <MobileMenu />

        <div className="header__actions">
          <button
            className="iconButton"
            type="button"
            aria-label={t(locale, "header_notifications")}
          >
            🔔
          </button>
          <Link className="btn btn--primary" href="/launch">
            {t(locale, "header_launch")}
          </Link>
          <LanguageToggle />
          <button className="avatar" type="button" aria-label="Perfil">
            <span className="avatar__inner" aria-hidden>
              MR
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
