import Link from "next/link";
import { CartCount } from "@/components/client/CartCount";

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="brand" href="/">
          <span className="brand__mark" aria-hidden>
            A
          </span>
          <span className="brand__text">Aeris</span>
        </Link>

        <nav className="nav">
          <Link href="/shop">Shop</Link>
          <Link href="/shop?tag=running">Running</Link>
          <Link href="/shop?tag=training">Training</Link>
          <Link href="/shop?tag=lifestyle">Lifestyle</Link>
        </nav>

        <div className="header__actions">
          <Link className="iconLink" href="/cart" aria-label="Open cart">
            Cart <CartCount />
          </Link>
        </div>
      </div>
    </header>
  );
}
