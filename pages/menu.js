import Head from 'next/head';
import Link from 'next/link';
import useScrollFade from '../hooks/useScrollFade';

export default function MenuPage() {
  useScrollFade();

  return (
    <>
      <Head>
        <title>Ebrowniez Menu | Brownies, Dessert Cups & Cakes</title>
        <meta
          name="description"
          content="Browse the Ebrowniez menu featuring gourmet brownies, dessert cups, and custom cakes in Brisbane."
        />
      </Head>
      <section
        className="page-hero"
        style={{
          backgroundImage: "url('/ebrowniez-logo.jpeg')", // replace hero bg later with a good branded image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <span className="tagline">Menu</span>
          <h1>Our Menu</h1>
          <p>Choose from signature brownies, indulgent cups, and custom cakes. All baked fresh to order.</p>
        </div>
      </section>

      {/* Brownies */}
      <section className="section scroll-fade" aria-labelledby="brownies">
        <div className="container">
          <div className="section-title" id="brownies">
            Brownie Collection
          </div>
          <div className="menu-grid">
            <article className="menu-card">
              <img src="/strawberrymatchabrownies.jpeg" alt="Strawberry Matcha Brownies" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Strawberry Matcha Brownies</h3>
                <p className="menu-card__description">Signature strawberry + matcha swirl with rich brownie base.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <img src="/cookiesncremebrownies.jpeg" alt="Cookies n Creme Brownies" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Cookies n Creme</h3>
                <p className="menu-card__description">White chocolate ganache with crushed cookie pieces.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <img src="/kitkatbrownies.jpeg" alt="KitKat Brownies" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">KitKat Brownies</h3>
                <p className="menu-card__description">Classic brownie base stacked with KitKat bites.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <img src="/nutellapistachiobrownies.jpeg" alt="Nutella Brownies" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Nutella Brownies</h3>
                <p className="menu-card__description">Rich chocolate brownie infused with Nutella layers.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <img src="/pistachiobrownies.jpeg" alt="Pistachio Brownies" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Pistachio Brownies</h3>
                <p className="menu-card__description">Fudgy brownie topped with pistachio praline crunch.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Cups & Trays */}
      <section className="section scroll-fade" aria-labelledby="dessert-cups">
        <div className="container">
          <div className="section-title" id="dessert-cups">
            Dessert Cups & Trays
          </div>
          <div className="menu-grid">
            <article className="menu-card">
              <img src="/tiramisucups.jpeg" alt="Tiramisu Cups" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Tiramisu Cups</h3>
                <p className="menu-card__description">Espresso-soaked sponge layered with mascarpone cream.</p>
                <p className="menu-card__price">Box of 6 from $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <img src="/dubaichocolatebrownies.jpeg" alt="Dubai Chocolate Brownies" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Dubai Chocolate Brownies</h3>
                <p className="menu-card__description">Chocolate luxury with pistachio praline and shards.</p>
                <p className="menu-card__price">Tray from $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <img src="/lotuscups.jpeg" alt="Lotus Cups & Trays" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Lotus Biscoff Cups & Trays</h3>
                <p className="menu-card__description">Biscoff crumble with caramel and whipped filling.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Cakes */}
      <section className="section scroll-fade" aria-labelledby="cakes">
        <div className="container">
          <div className="section-title" id="cakes">
            Celebration Cakes
          </div>
          <div className="menu-grid">
            <article className="menu-card">
              <img src="/customcake1.jpeg" alt="Custom Cake 1" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Custom Cake 1</h3>
                <p className="menu-card__description">Moist sponge with creative custom decorations.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <img src="/customcake1held.jpeg" alt="Custom Cake (Held)" />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Custom Cake (Held)</h3>
                <p className="menu-card__description">Show-stopper cake to impress any crowd.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
          </div>

          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            Need something special? Let&apos;s design your dream dessert table together.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Link className="btn" href="/contact">
              Start Your Order
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
