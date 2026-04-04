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
      <nav className="nav">
        <div className="nav-brand">Vertex Cleaning</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#booking">Booking</a>
          <a href="#contact">Contact</a>
          <a href={instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">Vertex Cleaning Services</div>
            <h1>Professional Cleaning for Homes and Businesses</h1>
            <p>
              Reliable residential and commercial cleaning services across
              Vancouver and the Lower Mainland. Clean spaces, consistent
              results, and a professional team you can trust.
            </p>

            <div className="hero-buttons">
              <a href="#booking" className="btn btn-gold">
                Get a Free Quote
              </a>

              <a href="#services" className="btn btn-outline">
                View Services
              </a>

              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h3>Why Choose Vertex</h3>
            <div className="hero-list">
              <div>Residential and commercial cleaning</div>
              <div>Serving Vancouver & Lower Mainland</div>
              <div>Flexible one-time or recurring plans</div>
              <div>Starting at $40/hour</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          <div className="feature-card">
            <span>Quality</span>
            <h3>Attention to detail</h3>
            <p>
              We focus on the details that make your space feel truly clean,
              fresh, and ready.
            </p>
          </div>

          <div className="feature-card">
            <span>Flexible</span>
            <h3>Built around your schedule</h3>
            <p>
              One-time cleaning, recurring visits, and move-related cleaning
              plans that fit your needs.
            </p>
          </div>

          <div className="feature-card">
            <span>Professional</span>
            <h3>Homes & commercial spaces</h3>
            <p>
              Reliable support for homes, offices, rentals, and other business
              spaces.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Our Services</div>
            <h2>Cleaning solutions for every space</h2>
            <p>
              Professional cleaning services tailored for homes, offices,
              rentals, and commercial properties.
            </p>
          </div>

          <div className="service-group">
            <div className="group-top">
              <div>
                <h3>Residential Services</h3>
                <p>
                  Ideal for homes, apartments, Airbnb turnovers, and recurring
                  visits.
                </p>
              </div>
              <div className="pill">Home & Rental Focus</div>
            </div>

            <div className="service-grid">
              {residentialServices.map((service) => (
                <div className="service-card" key={service}>
                  <div className="service-icon">✦</div>
                  <h4>{service}</h4>
                  <p>
                    Professional, reliable, and detail-focused cleaning
                    tailored to your needs.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="service-group">
            <div className="group-top">
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
                    Consistent cleaning support to keep your business space
                    fresh, polished, and presentable.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container two-col">
          <div className="pricing-card">
            <div className="eyebrow">Pricing</div>
            <h2>Simple and transparent</h2>
            <p>
              Starting at <strong>$40/hour</strong> for basic cleaning services.
              Final pricing may vary depending on the size, condition, and type
              of cleaning required.
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
            <div className="eyebrow eyebrow-light">Contact Us</div>
            <h2>Get in touch today</h2>
            <p>
              Reach out for residential or commercial cleaning in Vancouver and
              the Lower Mainland.
            </p>

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

      <section id="booking" className="section section-soft">
        <div className="container booking-wrap">
          <div className="booking-copy">
            <div className="eyebrow">Booking Form</div>
            <h2>Request a quote or book a cleaning</h2>
            <p>
              Fill out the form below and we’ll get back to you with
              availability and pricing.
            </p>
            <p className="booking-note">
              This is a starter booking form layout. We can connect it to email
              or form submissions next.
            </p>
          </div>

          <form className="booking-form">
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Your full name" />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="Your phone number" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                />
              </div>

              <div className="form-field">
                <label htmlFor="service">Service Needed</label>
                <select id="service" defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Residential Cleaning</option>
                  <option>Office Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>Airbnb Cleaning</option>
                  <option>Post-Construction Cleaning</option>
                  <option>Move-In / Move-Out Cleaning</option>
                  <option>Weekly / Biweekly Cleaning</option>
                </select>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="address">Address / Area</label>
                <input
                  id="address"
                  type="text"
                  placeholder="Home, office, or property address"
                />
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="details">Project Details</label>
                <textarea
                  id="details"
                  rows="5"
                  placeholder="Tell us about the space, size, preferred date, and any special requests"
                ></textarea>
              </div>
            </div>

            <button type="button" className="btn btn-gold btn-full">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container insta-banner">
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