import Head from 'next/head';
import useScrollFade from '../hooks/useScrollFade';

export default function AboutPage() {
  useScrollFade();

  return (
    <>
      <Head>
        <title>About Ebrowniez | Brisbane Dessert Studio</title>
        <meta
          name="description"
          content="Learn the story behind Ebrowniez and our passion for handcrafted desserts in Brisbane."
        />
      </Head>
      <section
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541976076758-347942db1971?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Swap hero background to your own bakery photo when ready */}
        <div className="container">
          <span className="tagline">Our Story</span>
          <h1>From a Home Kitchen to Brisbane&apos;s Sweet Tooth</h1>
          <p>
            Ebrowniez began as a family pastime, sharing small-batch brownies with neighbours and friends.
            Today, we craft bespoke desserts that celebrate every milestone in the community we love.
          </p>
        </div>
      </section>

      <section className="section scroll-fade">
        <div className="container">
          <div className="story-grid">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Meet the Baker
              </h2>
              <p>
                Hi, I&apos;m E, the dessert devotee behind Ebrowniez. Inspired by late-night baking sessions and
                a passion for bold flavours, I began experimenting with quality chocolate, artisan toppings,
                and creative fillings. Each recipe is perfected through countless taste tests (our friends
                don&apos;t mind!).
              </p>
              <p>
                We focus on small batches, ensuring every box is fudgy, rich, and beautifully finished.
                Whether it&apos;s an intimate celebration or a corporate treat drop, our desserts are designed to
                start conversations and create sweet memories.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&w=900&q=80"
                alt="Baker decorating brownies on a tray"
              />
              {/* Replace photo above with your own brand imagery */}
            </div>
          </div>
        </div>
      </section>

      <section className="section scroll-fade" aria-labelledby="why-ebrowniez">
        <div className="container">
          <div className="section-title" id="why-ebrowniez">
            Why Choose Ebrowniez?
          </div>
          <div className="highlight-cards">
            <article className="highlight-card">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l1.76 5.41h5.69l-4.6 3.34 1.76 5.41L12 12.82l-4.61 3.34 1.77-5.41-4.6-3.34h5.68L12 2z" />
                </svg>
              </div>
              <h3>Freshly Baked</h3>
              <p>
                Baked on the day of pickup with premium chocolate, butter, and seasonal toppings for unmatched
                flavour.
              </p>
            </article>
            <article className="highlight-card">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3 6a1 1 0 011-1h16a1 1 0 01.99 1.141l-1.5 10A1 1 0 0118.5 16H7.618l-.276 2.211a1 1 0 01-.99.864H5a1 1 0 110-2h.764l1.26-10.105A1 1 0 018 6h13a1 1 0 110 2H8.882l-.193 1.545h9.811a1 1 0 110 2H8.35l-.2 1.595h8.682a1 1 0 110 2H7.82l-.117.931a1 1 0 01-.99.864H5a1 1 0 01-1-1V6z" />
                </svg>
              </div>
              <h3>Local Delivery</h3>
              <p>
                Based in Brisbane with flexible delivery and pickup options. We can coordinate corporate drops
                and celebrations.
              </p>
            </article>
            <article className="highlight-card">
              <div className="icon-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4c-4.06 0-7 2.94-7 7 0 2.13 1.1 4.06 2.82 5.46-.04.87-.27 2.08-1.04 3.21 0 0 1.84-.25 3.32-1.51.89.24 1.83.38 2.9.38 4.06 0 7-2.94 7-7s-2.94-7-7-7z" />
                </svg>
              </div>
              <h3>Unique Flavours</h3>
              <p>
                From matcha to Lotus Biscoff, we build flavours that reflect your event theme and personal taste.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
