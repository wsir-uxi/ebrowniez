import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
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
          backgroundImage: "url('/images/ebrowniez-logo.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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
              <Image
                src="/images/strawberrymatchabrownies.jpeg"
                alt="Strawberry Matcha Brownies"
                width={250}
                height={250}
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Strawberry Matcha Brownies</h3>
                <p className="menu-card__description">Signature strawberry + matcha swirl with rich brownie base.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <Image
                src="/images/cookiesncremebrownies.jpeg"
                alt="Cookies n Creme"
                width={250}
                height={250}
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Cookies n Creme</h3>
                <p className="menu-card__description">White chocolate ganache with crushed cookie pieces.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <Image
                src="/images/kitkatbrownies.jpeg"
                alt="KitKat Brownies"
                width={250}
                height={250}
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">KitKat Brownies</h3>
                <p className="menu-card__description">Classic brownie base stacked with KitKat bites.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <Image
                src="/images/nutellapistachiobrownies.jpeg"
                alt="Nutella Brownies"
                width={250}
                height={250}
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Nutella Brownies</h3>
                <p className="menu-card__description">Rich chocolate brownie infused with Nutella layers.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <Image
                src="/images/pistachiobrownies.jpeg"
                alt="Pistachio Brownies"
                width={250}
                height={250}
              />
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
              <Image
                src="/images/tiramisucups.jpeg"
                alt="Tiramisu Cups"
                width={250}
                height={250}
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Tiramisu Cups</h3>
                <p className="menu-card__description">Espresso-soaked sponge layered with mascarpone cream.</p>
                <p className="menu-card__price">Box of 6 from $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <Image
                src="/images/dubaichocolatebrownies.jpeg"
                alt="Dubai Chocolate Brownies"
                width={250}
                height={250}
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Dubai Chocolate Brownies</h3>
                <p className="menu-card__description">Chocolate luxury with pistachio praline and shards.</p>
                <p className="menu-card__price">Tray from $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <Image
                src="/images/lotuscups.jpeg"
                alt="Lotus Biscoff Cups & Trays"
                width={250}
                height={250}
              />
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
              <Image
                src="/images/customcake1.jpeg"
                alt="Custom Cake 1"
                width={250}
                height={250}
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Custom Cake 1</h3>
                <p className="menu-card__description">Moist sponge with creative custom decorations.</p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>

            <article className="menu-card">
              <Image
                src="/images/customcake1held.jpeg"
                alt="Custom Cake (Held)"
                width={250}
                height={250}
              />
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
