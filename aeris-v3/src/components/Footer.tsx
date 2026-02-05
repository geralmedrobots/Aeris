import Link from "next/link";
import Image from "next/image";

export function Footer() {
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
            <p className="footer__tagline">
              Tu crias. Nós tornamos real. Uma vitrine demo para experimentar UX
              de e-commerce (sem pagamentos reais).
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <div className="footer__col">
              <p className="footer__title">Explorar</p>
              <div className="footer__links">
                <Link className="footer__link" href="/shop">
                  Shop
                </Link>
                <Link className="footer__link" href="/discover">
                  Discover
                </Link>
                <Link className="footer__link" href="/create">
                  Create
                </Link>
              </div>
            </div>

            <div className="footer__col">
              <p className="footer__title">Aeris</p>
              <div className="footer__links">
                <a className="footer__link" href="#quality-process">
                  Qualidade & Processo
                </a>
                <Link className="footer__link" href="/cart">
                  Carrinho
                </Link>
              </div>
            </div>

            <div className="footer__col">
              <p className="footer__title">Legal</p>
              <div className="footer__links">
                <a className="footer__link" href="#" aria-disabled="true">
                  Privacidade
                </a>
                <a className="footer__link" href="#" aria-disabled="true">
                  Termos
                </a>
                <a className="footer__link" href="#" aria-disabled="true">
                  Cookies
                </a>
              </div>
            </div>

            <div className="footer__col">
              <p className="footer__title">Contactos</p>
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
          <p className="footer__note">
            Demo shop built for learning. No affiliation with any brand. No real
            payments.
          </p>
          <p className="footer__copy">© {new Date().getFullYear()} Aeris</p>
        </div>
      </div>
    </footer>
  );
}
