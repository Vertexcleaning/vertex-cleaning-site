export default function App() {
  const instagram = "https://www.instagram.com/vertexcleaning.ca";
  const website = "https://vertexcleanbc.com";

  const residentialServices = [
    "Residential Cleaning",
    "Move-In / Move-Out Cleaning",
    "Deep Cleaning",
    "Weekly / Biweekly Cleaning",
    "Airbnb Cleaning",
    "Rental Cleaning",
  ];

  const commercialServices = [
    "Office Cleaning",
    "Post-Construction Cleaning",
    "Rental Turnover Cleaning",
  ];

  return (
    <div>
      <section className="hero">
        <div className="overlay" />
        <div className="container hero-content">
          <div className="hero-left">
            <div className="tag">Vertex Cleaning Services</div>
            <h1>Professional Cleaning for Homes and Businesses</h1>
            <p>
              Reliable residential and commercial cleaning services across
              Vancouver and the Lower Mainland. Clean spaces, consistent
              results, and service you can trust.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-light">
                Get a Free Quote
              </a>
              <a href="#services" className="btn btn-outline">
                View Services
              </a>
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why Choose Vertex</h3>
            <div className="feature-list">
              <div className="feature-item">Professional residential and commercial service</div>
              <div className="feature-item">Serving Vancouver and the Lower Mainland</div>
              <div className="feature-item">Flexible scheduling for one-time or recurring visits</div>
              <div className="feature-item">Starting at $40/hour for basic cleaning</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="info-grid">
          <div className="info-box">
            <span>Quality</span>
            <h3>Attention to detail</h3>
            <p>
              We focus on the details that make your space feel clean, fresh,
              and ready.
            </p>
          </div>
          <div className="info-box">
            <span>Flexible</span>
            <h3>Built around your schedule</h3>
            <p>
              One-time cleaning, recurring visits, and move-related cleaning
              plans.
            </p>
          </div>
          <div className="info-box">
            <span>Professional</span>
            <h3>Residential & Commercial</h3>
            <p>
              Reliable cleaning support for homes, offices, rentals, and
              business spaces.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span>Our Services</span>
            <h2>Cleaning solutions for every space</h2>
            <p>
              Professional cleaning services tailored for homes, offices,
              rentals, and commercial properties.
            </p>
          </div>

          <div className="service-group">
            <div className="group-header">
              <div>
                <h3>Residential Services</h3>
                <p>Ideal for homes, apartments, Airbnb turnovers, and recurring visits.</p>
              </div>
              <div className="pill">Home & Rental Focus</div>
            </div>

            <div className="service-grid">
              {residentialServices.map((service) => (
                <div className="service-card" key={service}>
                  <div className="service-icon">✦</div>
                  <h4>{service}</h4>
                  <p>
                    Professional, reliable, and detail-focused cleaning tailored
                    to your needs.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="service-group">
            <div className="group-header">
              <div>
                <h3>Commercial Services</h3>
                <p>
                  Professional cleaning support for offices, managed properties,
                  and post-construction projects.
                </p>
              </div>
              <div className="pill">Business Ready</div>
            </div>

            <div className="service-grid">
              {commercialServices.map((service) => (
                <div className="service-card" key={service}>
                  <div className="service-icon">✦</div>
                  <h4>{service}</h4>
                  <p>
                    Consistent, professional cleaning support to keep business
                    spaces fresh and presentable.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="two-col">
          <div className="pricing-card">
            <span>Pricing</span>
            <h2>Simple and transparent</h2>
            <p>
              Starting at <strong>$40/hour</strong> for basic cleaning services.
              Pricing may vary depending on the size, condition, and type of
              cleaning required.
            </p>

            <div className="quote-box">
              <h4>Custom quotes available for:</h4>
              <ul>
                <li>Deep cleaning</li>
                <li>Office and commercial contracts</li>
                <li>Move-in / move-out cleaning</li>
                <li>Recurring cleaning plans</li>
              </ul>
            </div>
          </div>

          <div id="contact" className="contact-card">
            <span>Contact Us</span>
            <h2>Request your free quote</h2>
            <p>
              Reach out today for residential or commercial cleaning in
              Vancouver and the Lower Mainland.
            </p>

            <div className="contact-buttons">
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Book via Instagram
              </a>
            </div>

            <div className="contact-list">
              <div className="contact-item">
                <strong>Phone</strong>
                <p>+1 (604) 360-0485</p>
              </div>
              <div className="contact-item">
                <strong>Email</strong>
                <p>info@vertexcleanbc.com</p>
              </div>
              <div className="contact-item">
                <strong>Website</strong>
                <p>
                  <a href={website} target="_blank" rel="noreferrer">
                    vertexcleanbc.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <strong>Service Area</strong>
                <p>Vancouver & Lower Mainland, British Columbia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="instagram-banner">
          <h2>See Our Work on Instagram</h2>
          <p>
            Check out our latest cleaning projects, updates, and business
            content.
          </p>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            View Instagram Page
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p>© 2026 Vertex Cleaning Services. All rights reserved.</p>
            <a href={website} target="_blank" rel="noreferrer">
              vertexcleanbc.com
            </a>
          </div>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark small-btn"
          >
            Follow us on Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}