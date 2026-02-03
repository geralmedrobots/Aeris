import Link from "next/link";
import { CartCount } from "@/components/client/CartCount";

export function Header() {
  return (
    <header className="siteHeader">
      <div className="promoBar">Devoluções e trocas gratuitas</div>
      <div className="utilityBar">
        <div className="container utilityBar__inner">
          <div className="utilityBar__links">
            <Link href="/help">ajuda</Link>
            <Link href="/orders">encomendas e devoluções</Link>
          </div>
          <Link className="utilityBar__cta" href="/membership">
            torna-te membro
          </Link>
        </div>
      </div>

      <div className="navBar">
        <div className="container navBar__inner">
          <Link className="brandLogo" href="/" aria-label="Adidas">
            <span className="brandLogo__mark" aria-hidden>
              adidas
            </span>
          </Link>

          <nav className="navMain">
            <Link href="/shop?category=homem">HOMEM</Link>
            <Link href="/shop?category=mulher">MULHER</Link>
            <Link href="/shop?category=crianca">CRIANÇA</Link>
            <Link href="/shop?category=sapatilhas">SAPATILHAS</Link>
            <Link href="/shop?category=desportos">DESPORTOS</Link>
            <Link href="/shop?category=outlet">OUTLET</Link>
          </nav>

          <div className="navActions">
            <label className="searchBox">
              <span className="srOnly">Procurar</span>
              <input type="search" placeholder="Procurar" />
              <span className="searchBox__icon" aria-hidden>
                ⌕
              </span>
            </label>
            <button className="iconButton" type="button" aria-label="Favoritos">
              ♡
            </button>
            <Link className="iconButton" href="/cart" aria-label="Carrinho">
              🛍
              <CartCount />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
