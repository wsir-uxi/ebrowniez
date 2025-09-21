const instagramIcon = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
  </svg>
);

const facebookIcon = (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
    <path d="M13 3h4a1 1 0 011 1v3h-3a1 1 0 00-1 1v2h4l-.5 3H14v8h-3v-8H9v-3h2V8a4 4 0 014-4z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer-content">
        <p>&copy; {year} Ebrowniez. Crafted with love in Brisbane.</p>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/ebrowniez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ebrowniez on Instagram"
          >
            {instagramIcon}
          </a>
          <a href="#" aria-label="Ebrowniez on Facebook (coming soon)">
            {facebookIcon}
          </a>
        </div>
      </div>
    </footer>
  );
}
