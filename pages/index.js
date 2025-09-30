import Head from 'next/head';
import Link from 'next/link';
import useScrollFade from '../hooks/useScrollFade';

export default function HomePage() {
  useScrollFade();

// test redeploy v3

  return (
    <>
      <Head>
        <title>Ebrowniez | Brisbane Brownies & Desserts</title>
        <meta
          name="description"
          content="Ebrowniez crafts decadent brownies, cakes, and desserts made fresh in Brisbane."
        />
      </Head>
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545912354-0bd3c4f6a5ae?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Update hero background image above with your own dessert photography */}
        <div className="container scroll-fade">
          <h1>Ebrowniez</h1>
          <p>Delicious brownies, cakes, and desserts – baked fresh in Brisbane.</p>
          <div>
            <Link className="btn" href="/contact">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <section className="section scroll-fade" id="about-preview">
        <div className="container">
          <div className="section-title">Baked with Heart</div>
          <p>
            We handcraft each tray with premium ingredients, bold flavours, and plenty of love. Whether
            you&apos;re planning a celebration or craving a sweet treat, our brownies, cakes, and dessert
            cups are made to impress.
          </p>
        </div>
      </section>

      <section className="section scroll-fade" id="gallery">
        <div className="container">
          <div className="section-title">Signature Treats</div>
          <div className="gallery-grid">
            {/* Replace image URLs and captions with your own product shots */}
            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?auto=format&fit=crop&w=800&q=80"
                alt="Fudge brownie square"
              />
              <span>Classic Fudge Brownie</span>
            </div>
            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1589308078054-83253c95bb7b?auto=format&fit=crop&w=800&q=80"
                alt="Berry cheesecake brownie swirl"
              />
              <span>Strawberry Swirl</span>
            </div>
            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1606755962773-0e7d372fa0b5?auto=format&fit=crop&w=800&q=80"
                alt="Stack of brownie pieces with nuts"
              />
              <span>Nutella Hazelnut Crunch</span>
            </div>
            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1541976076758-347942db1971?auto=format&fit=crop&w=800&q=80"
                alt="Chocolate cake with frosting"
              />
              <span>Chocolate Celebration Cake</span>
            </div>
            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1577308856963-8cdc07f3472b?auto=format&fit=crop&w=800&q=80"
                alt="Lotus biscoff dessert cup"
              />
              <span>Lotus Biscoff Cup</span>
            </div>
            <div className="gallery-card">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                alt="Assorted dessert platter"
              />
              <span>Party Dessert Platter</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section scroll-fade" id="cta">
        <div className="container">
          <div className="section-title">Ready for Your Next Sweet Moment?</div>
          <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2rem' }}>
            Pre-order your favourite brownies, dessert trays, and cakes. We bake fresh for every
            celebration and can customise flavours to suit your event.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link className="btn" href="/menu">
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
