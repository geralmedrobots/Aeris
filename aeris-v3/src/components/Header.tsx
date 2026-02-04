import Link from "next/link";

export function Header() {
  return (
    <header className="siteHeader">
      <div className="container header__inner">
        <Link className="brand" href="/" aria-label="Aeris">
          <span className="brand__mark" aria-hidden>
            aeris
          </span>
        </Link>

        <nav className="navMain">
          <Link className="navMain__item navMain__item--active" href="/create">
            Create
          </Link>
          <Link className="navMain__item" href="/discover">
            Discover
          </Link>
          <Link className="navMain__item" href="/shop">
            Shop
          </Link>
        </nav>

        <div className="header__actions">
          <button className="iconButton" type="button" aria-label="Notificações">
            🔔
          </button>
          <Link className="btn btn--primary" href="/launch">
            Launch Your idea
          </Link>
          <button className="languageButton" type="button">
            Português
            <span className="languageButton__flag" aria-hidden>
              🇵🇹
            </span>
          </button>
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
