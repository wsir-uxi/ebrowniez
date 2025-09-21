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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Update hero background when you have branded product imagery */}
        <div className="container">
          <span className="tagline">Menu</span>
          <h1>Our Menu</h1>
          <p>Choose from signature brownies, indulgent cups, and custom cakes. All baked fresh to order.</p>
        </div>
      </section>

      <section className="section scroll-fade" aria-labelledby="brownies">
        <div className="container">
          <div className="section-title" id="brownies">
            Brownie Collection
          </div>
          <div className="menu-grid">
            {/* Replace placeholder descriptions and pricing with your own details */}
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1600289037784-12c9befe8d5f?auto=format&fit=crop&w=800&q=80"
                alt="Strawberry brownie with drizzle"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Strawberry Brownie</h3>
                <p className="menu-card__description">
                  Silky strawberry compote swirled through rich chocolate brownie batter.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1600180758890-6d4b079db0c9?auto=format&fit=crop&w=800&q=80"
                alt="Matcha brownies"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Matcha Brownie</h3>
                <p className="menu-card__description">
                  Earthy matcha layered with white chocolate chunks for a creamy finish.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?auto=format&fit=crop&w=800&q=80"
                alt="Biscoff brownie"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Biscoff Brownie</h3>
                <p className="menu-card__description">
                  Lotus Biscoff spread and crumble folded through ultra-fudgy brownie.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1562440499-bf26d0d3db51?auto=format&fit=crop&w=800&q=80"
                alt="Nutella brownie"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Nutella Brownie</h3>
                <p className="menu-card__description">
                  Chocolate hazelnut spread ripples and roasted nuts for extra crunch.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1599785209707-28f03d3d48b8?auto=format&fit=crop&w=800&q=80"
                alt="Pistachio brownie"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Pistachio Brownie</h3>
                <p className="menu-card__description">
                  Vibrant pistachio praline topping with a hint of rose and cardamom.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                alt="Chocolate brownie with toppings"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">KitKat Crunch</h3>
                <p className="menu-card__description">
                  Milk chocolate brownie stacked with KitKat bites and caramel drizzle.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"
                alt="M&M brownie"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">M&amp;Ms Party Brownie</h3>
                <p className="menu-card__description">
                  Colourful candy crunch on top of our signature brownie base.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1614707267537-f2ac91bdf94b?auto=format&fit=crop&w=800&q=80"
                alt="Cookies and cream brownie"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Cookies n Creme</h3>
                <p className="menu-card__description">
                  White chocolate ganache swirled with crushed cookies &amp; cream pieces.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section scroll-fade" aria-labelledby="dessert-cups">
        <div className="container">
          <div className="section-title" id="dessert-cups">
            Dessert Cups &amp; Trays
          </div>
          <div className="menu-grid">
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1589307004392-53207b5713be?auto=format&fit=crop&w=800&q=80"
                alt="Tiramisu cup"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Tiramisu Cups</h3>
                <p className="menu-card__description">
                  Espresso-soaked sponge, mascarpone cream, and dark cocoa dusting.
                </p>
                <p className="menu-card__price">Box of 6 from $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1613478880932-00cf0f580fa3?auto=format&fit=crop&w=800&q=80"
                alt="Chocolate dessert cup"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Dubai Chocolate Brownies</h3>
                <p className="menu-card__description">
                  Luxurious chocolate layers with pistachio praline and chocolate shards.
                </p>
                <p className="menu-card__price">Tray from $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=800&q=80"
                alt="Lotus biscoff dessert cup"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Lotus Biscoff Cups &amp; Trays</h3>
                <p className="menu-card__description">
                  Layers of biscoff crumble, caramel, and whipped cream cheese filling.
                </p>
                <p className="menu-card__price">From $XX</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section scroll-fade" aria-labelledby="cakes">
        <div className="container">
          <div className="section-title" id="cakes">
            Celebration Cakes
          </div>
          <div className="menu-grid">
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1601972599720-b7e06bb05392?auto=format&fit=crop&w=800&q=80"
                alt="Chocolate celebration cake"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Signature Chocolate Cake</h3>
                <p className="menu-card__description">
                  Three layers of moist chocolate sponge with whipped ganache frosting.
                </p>
                <p className="menu-card__price">6&quot; from $XX</p>
              </div>
            </article>
            <article className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1611501275019-c1cce05287c7?auto=format&fit=crop&w=800&q=80"
                alt="Custom cake design"
              />
              <div className="menu-card__content">
                <h3 className="menu-card__title">Custom Buttercream Cake</h3>
                <p className="menu-card__description">
                  Tailored flavours and designs to match your theme, colours, and servings.
                </p>
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
