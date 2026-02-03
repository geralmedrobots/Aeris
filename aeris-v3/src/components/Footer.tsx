export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="muted">
          Demo shop built for learning. No affiliation with any brand. No real payments.
        </p>
        <p className="muted">© {new Date().getFullYear()} Aeris</p>
      </div>
    </footer>
  );
}
