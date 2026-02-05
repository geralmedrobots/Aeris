import Link from "next/link";
import Image from "next/image";
import { getLocale } from "@/components/useLocale";
import { t } from "@/lib/i18n";

export async function Footer() {
  const locale = await getLocale();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link className="footer__logo" href="/" aria-label="Aeris">
              <span className="footer__logoMark" aria-hidden>
                <Image
                  src="/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="footer__logoImg"
                />
                <span className="footer__logoText">Aeris</span>
              </span>
            </Link>
            <p className="footer__tagline">{t(locale, "footer_tagline")}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <div className="footer__col">
              <p className="footer__title">{t(locale, "footer_explore")}</p>
              <div className="footer__links">
                <Link className="footer__link" href="/shop">
                  {t(locale, "nav_shop")}
                </Link>
                <Link className="footer__link" href="/discover">
                  {t(locale, "nav_discover")}
                </Link>
                <Link className="footer__link" href="/create">
                  {t(locale, "nav_create")}
                </Link>
              </div>
            </div>

            <div className="footer__col">
              <p className="footer__title">{t(locale, "footer_aeris")}</p>
              <div className="footer__links">
                <a className="footer__link" href="#quality-process">
                  {t(locale, "footer_quality")}
                </a>
                <Link className="footer__link" href="/cart">
                  {t(locale, "nav_cart")}
                </Link>
              </div>
            </div>

            <div className="footer__col">
              <p className="footer__title">{t(locale, "footer_legal")}</p>
              <div className="footer__links">
                <a className="footer__link" href="#" aria-disabled="true">
                  {t(locale, "footer_privacy")}
                </a>
                <a className="footer__link" href="#" aria-disabled="true">
                  {t(locale, "footer_terms")}
                </a>
                <a className="footer__link" href="#" aria-disabled="true">
                  {t(locale, "footer_cookies")}
                </a>
              </div>
            </div>

            <div className="footer__col">
              <p className="footer__title">{t(locale, "footer_contacts")}</p>
              <div className="footer__links">
                <a className="footer__link" href="mailto:hello@aeris.demo">
                  hello@aeris.demo
                </a>
                <a
                  className="footer__link"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="footer__link"
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__note">{t(locale, "footer_note")}</p>
          <p className="footer__copy">© {new Date().getFullYear()} Aeris</p>
        </div>
      </div>
    </footer>
  );
}
