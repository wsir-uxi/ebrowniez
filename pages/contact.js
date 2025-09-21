import Head from 'next/head';
import useScrollFade from '../hooks/useScrollFade';

export default function ContactPage() {
  useScrollFade();

  const handleSubmit = (event) => {
    if (!event.currentTarget.checkValidity()) {
      event.preventDefault();
      event.currentTarget.reportValidity();
      return;
    }

    event.preventDefault();
    // Hook this up to your form handler or service when ready.
  };

  return (
    <>
      <Head>
        <title>Contact Ebrowniez | Place an Order</title>
        <meta
          name="description"
          content="Order Ebrowniez brownies, dessert cups, and cakes. Contact our Brisbane kitchen to plan your next treat."
        />
      </Head>
      <section
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Update hero background image with your brand photography */}
        <div className="container">
          <span className="tagline">Let&apos;s Bake</span>
          <h1>Contact &amp; Order</h1>
          <p>
            Complete the form below and we&apos;ll confirm your order within 24 hours. For custom creations, share
            your inspo pics and flavours!
          </p>
        </div>
      </section>

      <section className="section scroll-fade" aria-labelledby="contact-form">
        <div className="container">
          <div className="contact-wrapper">
            <div className="form-card">
              <h2 className="section-title" id="contact-form" style={{ textAlign: 'left' }}>
                Place Your Order
              </h2>
              <form data-validate="true" onSubmit={handleSubmit} noValidate>
                {/* Update form handler when you&apos;re ready to connect to your preferred email or CRM */}
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />

                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />

                <label htmlFor="phone">Phone *</label>
                <input type="tel" id="phone" name="phone" placeholder="Best contact number" required />

                <label htmlFor="order-details">Order Details *</label>
                <textarea
                  id="order-details"
                  name="order-details"
                  placeholder="Brownie flavours, quantity, event details"
                  required
                />

                <label htmlFor="preference">Preferred Pickup or Delivery *</label>
                <select id="preference" name="preference" defaultValue="" required>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="pickup">Pick Up</option>
                  <option value="delivery">Delivery</option>
                </select>

                <label htmlFor="date">Preferred Date *</label>
                <input type="date" id="date" name="date" required />

                <button type="submit" className="btn">
                  Submit Enquiry
                </button>
              </form>
            </div>

            <div className="info-card">
              <h3>How to Order</h3>
              <ul>
                <li>?? Based in Brisbane. Please order at least 2 days in advance.</li>
                <li>?? Pick up in Carindale or delivery arranged upon request.</li>
                <li>?? DM us on Instagram for custom designs and inspo pics.</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <a className="btn" href="https://www.instagram.com/ebrowniez" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </div>
              <div className="map-embed" style={{ marginTop: '2rem' }}>
                {/* Replace with your own Google Maps embed if you have a storefront */}
                <iframe
                  title="Ebrowniez - Brisbane"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.383566476159!2d153.02513187602252!3d-27.469770476317996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a1edda8b0e5%3A0x130c0b9cbee37c0!2sBrisbane%20City%20QLD%204000!5e0!3m2!1sen!2sau!4v1700000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
