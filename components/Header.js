import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [router.pathname]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header>
      <div className="container">
        <nav aria-label="Main navigation">
          <Link className="logo" href="/" onClick={closeMenu}>
            Ebrowniez
          </Link>
          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation menu"
            type="button"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="primary-navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link className={router.pathname === href ? 'active' : ''} href={href} onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
