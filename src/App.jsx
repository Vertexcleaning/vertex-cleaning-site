import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  const services = [
    {
      title: "Residential Cleaning",
      text: "Reliable home cleaning tailored to your schedule, with close attention to kitchens, bathrooms, floors, and finishing details.",
    },
    {
      title: "Commercial Cleaning",
      text: "Professional cleaning for offices, retail spaces, and workplaces to keep your business presentable, fresh, and client-ready.",
    },
    {
      title: "Move-In / Move-Out",
      text: "Detailed top-to-bottom cleaning for homes, apartments, and rental units before or after a move.",
    },
    {
      title: "Post-Construction Cleaning",
      text: "Dust, debris, and detail cleanup after renovations or construction so the space looks polished and ready to use.",
    },
    {
      title: "Airbnb / Short-Term Rental",
      text: "Fast, dependable turnover cleaning to help your rental stay spotless and guest-ready.",
    },
    {
      title: "Weekly / Bi-Weekly Service",
      text: "Flexible recurring cleaning plans designed to keep your property consistently clean and stress-free.",
    },
  ];

  const highlights = [
    "Professional and detail-focused service",
    "Flexible scheduling",
    "Residential and commercial cleaning",
    "Reliable communication and quick response",
    "Serving the Lower Mainland",
    "Free quotes available",
  ];

  const areas = [
    "New Westminster",
    "Burnaby",
    "Vancouver",
    "Surrey",
    "Coquitlam",
    "Richmond",
    "Delta",
    "Lower Mainland",
  ];

  const pricing = [
    {
      title: "Basic Cleaning",
      price: "$40 / hour",
      text: "A solid option for regular residential or light commercial cleaning needs.",
      points: [
        "General cleaning tasks",
        "Flexible scheduling",
        "Best for recurring upkeep",
      ],
    },
    {
      title: "Deep Cleaning",
      price: "Custom Quote",
      text: "Pricing depends on the condition, size, and detail required after we review the space.",
      points: [
        "More detailed service",
        "Ideal for first-time cleans",
        "Quote provided after assessment",
      ],
    },
    {
      title: "Move-Out / Post-Construction",
      price: "Custom Quote",
      text: "Best for heavier cleaning jobs, turnovers, and detailed finishing work after viewing the site.",
      points: [
        "Move-in / move-out cleaning",
        "Post-construction cleanup",
        "Quote provided after site review",
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, Helvetica, sans-serif; background: #070707; color: #f5f5f5; }
        a { text-decoration: none; }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .section {
          padding: 78px 0;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          margin: 0 0 14px;
          color: #ffffff;
          line-height: 1.1;
        }

        .section-subtitle {
          margin: 0 auto;
          max-width: 780px;
          color: #c8c8c8;
          font-size: 16px;
          line-height: 1.7;
        }

        .gold-line {
          width: 72px;
          height: 3px;
          background: linear-gradient(90deg, #b8860b, #f2d16b, #b8860b);
          border-radius: 999px;
          margin: 0 0 18px;
        }

        .center-line {
          margin-left: auto;
          margin-right: auto;
        }

        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(8, 8, 8, 0.88);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .nav-inner {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          color: white;
          min-width: 0;
        }

        .brand-logo {
          width: 50px;
          height: 50px;
          object-fit: contain;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 4px;
        }

        .brand-text-wrap {
          min-width: 0;
        }

        .brand-title {
          margin: 0;
          letter-spacing: 2px;
          font-size: 22px;
          font-weight: 800;
          background: linear-gradient(90deg, #b8860b, #f2d16b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-sub {
          margin: 3px 0 0;
          color: #d4b14d;
          font-size: 12px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav-links a {
          color: #eaeaea;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.25s ease;
        }

        .nav-links a:hover {
          border: 1px solid #f2d16b;
          color: #f2d16b;
          background: rgba(242, 209, 107, 0.08);
        }

        .nav-links a:hover::after {
          transform: scaleX(1);
        }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(184, 134, 11, 0.20), transparent 32%),
            radial-gradient(circle at 85% 20%, rgba(242, 209, 107, 0.12), transparent 24%),
            linear-gradient(180deg, #0b0b0b 0%, #070707 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 34px;
          align-items: center;
          min-height: calc(100vh - 76px);
          padding: 46px 0 34px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f2d16b;
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(38px, 6vw, 72px);
          line-height: 1.02;
          letter-spacing: -1px;
          color: #ffffff;
        }

        .hero h1 span {
          color: #f2d16b;
        }

        .hero p {
          margin: 22px 0 0;
          max-width: 680px;
          font-size: 18px;
          color: #d0d0d0;
          line-height: 1.8;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.2px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
          text-decoration: none;
          white-space: nowrap;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-gold {
          background: linear-gradient(135deg, #b8860b, #f2d16b);
          color: #111111;
          box-shadow: 0 14px 30px rgba(184, 134, 11, 0.22);
        }

        .btn-light {
          background: #ffffff;
          color: #111111 !important;
          border: 1px solid rgba(255,255,255,0.85);
        }

        .hero-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.32);
        }

        .hero-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .metric {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 22px 18px;
        }

        .metric h3 {
          margin: 0;
          color: #f2d16b;
          font-size: 26px;
        }

        .metric p {
          margin: 8px 0 0;
          color: #d4d4d4;
          font-size: 14px;
          line-height: 1.6;
        }

        .services-grid,
        .why-grid,
        .areas-grid,
        .contact-grid,
        .footer-grid,
        .pricing-grid {
          display: grid;
          gap: 22px;
        }
          display: grid;
          gap: 22px;
        }

        .services-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 40px;
        }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.20);
        }

        .card h3 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: 22px;
        }

        .card p {
          margin: 0;
          color: #cbcbcb;
          line-height: 1.8;
          font-size: 15px;
        }

        .about-wrap {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 26px;
          align-items: stretch;
          margin-top: 34px;
        }

        .about-panel {
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 30px;
        }

        .about-panel p {
          color: #cbcbcb;
          line-height: 1.9;
          font-size: 16px;
          margin: 0 0 16px;
        }

        .why-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 36px;
        }

        .pill-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .pill {
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #ececec;
          line-height: 1.6;
          font-size: 15px;
          font-weight: 600;
          word-break: break-word;
        }

        .areas-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 34px;
        }

        .area {
          text-align: center;
          padding: 20px 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f2f2f2;
          font-weight: 600;
        }

        .contact-grid {
          grid-template-columns: 0.95fr 1.05fr;
          margin-top: 36px;
          align-items: stretch;
        }

        .pricing-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 40px;
        }

        .pricing-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.22);
        }

        .pricing-card.featured {
          border: 1px solid rgba(242, 209, 107, 0.45);
          box-shadow: 0 20px 45px rgba(184, 134, 11, 0.14);
        }

        .pricing-title {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 24px;
        }

        .pricing-price {
          margin: 0 0 14px;
          font-size: 32px;
          font-weight: 800;
          color: #f2d16b;
        }

        .pricing-text {
          margin: 0 0 18px;
          color: #cbcbcb;
          line-height: 1.8;
          font-size: 15px;
        }

        .pricing-points {
          display: grid;
          gap: 10px;
          margin-bottom: 22px;
        }

        .pricing-point {
          color: #ededed;
          font-size: 15px;
          line-height: 1.6;
          padding: 12px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
        }

        .info-block {
          display: grid;
          gap: 14px;
          margin-top: 18px;
        }

        .info-item {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 18px;
        }

        .info-label {
          display: block;
          color: #f2d16b;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 7px;
        }

        .info-item a,
        .info-item div {
          color: #f3f3f3;
          font-size: 16px;
          line-height: 1.7;
          word-break: break-word;
        }

        .form-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          padding: 28px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .full {
          grid-column: 1 / -1;
        }

        input,
        textarea,
        select {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          color: white;
          border-radius: 14px;
          padding: 15px 16px;
          font-size: 15px;
          outline: none;
        }

        select option {
          color: #111111;
          background: #ffffff;
        }

        input::placeholder,
        textarea::placeholder {
          color: #aaaaaa;
        }

        textarea {
          min-height: 140px;
          resize: vertical;
        }

        .form-note {
          margin-top: 12px;
          color: #bdbdbd;
          font-size: 13px;
          line-height: 1.7;
        }

        .form-status {
          margin-top: 14px;
          font-size: 14px;
          line-height: 1.7;
        }

        .form-status.success {
          color: #d8f5b2;
        }

        .form-status.error {
          color: #ffb8b8;
        }

        .footer {
          padding: 26px 0 40px;
          border-top: 1px solid rgba(255,255,255,0.08);
          background: #060606;
        }

        .footer-grid {
          grid-template-columns: 1fr auto;
          align-items: center;
        }

        .footer p {
          margin: 0;
          color: #a8a8a8;
          line-height: 1.7;
          font-size: 14px;
        }

        .footer-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .footer-links a {
          color: #e7e7e7;
          font-size: 14px;
        }

        @media (max-width: 1060px) {
          .hero-grid,
          .about-wrap,
          .contact-grid,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .services-grid,
          .why-grid,
          .areas-grid,
          .pricing-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .nav-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 14px 0;
          }

          .brand-title {
            font-size: 18px;
            letter-spacing: 1px;
          }

          .nav-links {
            gap: 10px;
            justify-content: flex-start;
            width: 100%;
          }

          .nav-links a {
            font-size: 13px;
            padding: 8px 12px;
          }

          .hero-grid {
            min-height: auto;
            padding-top: 34px;
          }

          .hero p {
            font-size: 16px;
          }

          .hero-card-grid,
          .services-grid,
          .why-grid,
          .areas-grid,
          .pill-list,
          .form-grid,
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 64px 0;
          }

          .cta-row {
            gap: 12px;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <div className="brand-text-wrap">
              <h2 className="brand-title">VERTEX Cleaning Services</h2>
            </div>
          </a>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#areas">Areas</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Premium Residential & Commercial Cleaning</div>
            <h1>
              Professional cleaning with a <span>sharp finish</span>.
            </h1>
            <p>
              Vertex Cleaning delivers dependable residential and commercial cleaning services across the Lower Mainland. From routine maintenance to detailed deep cleaning, we focus on quality, consistency, and a professional result every time.
            </p>

            <div className="cta-row">
              <a className="btn btn-gold" href="#contact">
                Get a Free Quote
              </a>
              <a className="btn btn-light" href="tel:6043600485">
                Call 604-360-0485
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-grid">
              <div className="metric">
                <h3>Residential</h3>
                <p>Recurring and one-time cleaning for homes, condos, apartments, and rentals.</p>
              </div>
              <div className="metric">
                <h3>Commercial</h3>
                <p>Clean, polished spaces for offices, retail units, and professional environments.</p>
              </div>
              <div className="metric">
                <h3>Detail-Focused</h3>
                <p>We pay attention to presentation, finishing touches, and consistency.</p>
              </div>
              <div className="metric">
                <h3>Free Quotes</h3>
                <p>Reach out by phone, email, or Instagram to get a fast quote for your space.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="gold-line center-line"></div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Our Services
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            We provide flexible cleaning solutions for homes, rental properties, businesses, and post-construction spaces.
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container">
          <div className="gold-line center-line"></div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Pricing
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            Straightforward starting pricing for standard cleaning, with custom quotes available for larger or more detailed jobs after reviewing the site.
          </p>

          <div className="pricing-grid">
            {pricing.map((item, index) => (
              <div className={`pricing-card ${index === 0 ? "featured" : ""}`} key={item.title}>
                <h3 className="pricing-title">{item.title}</h3>
                <p className="pricing-price">{item.price}</p>
                <p className="pricing-text">{item.text}</p>
                <div className="pricing-points">
                  {item.points.map((point) => (
                    <div className="pricing-point" key={point}>
                      {point}
                    </div>
                  ))}
                </div>
                <a className="btn btn-gold" href="#contact">
                  Request Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about" style={styles.darkSection}>
        <div className="container">
          <div className="gold-line"></div>
          <h2 className="section-title">About Vertex Cleaning</h2>
          <p className="section-subtitle" style={{ marginLeft: 0 }}>
            We built Vertex Cleaning around one simple idea: provide reliable service, strong communication, and a clean finish that clients can trust.
          </p>

          <div className="about-wrap">
            <div className="about-panel">
              <p>
                Whether you need regular cleaning for your home, a polished office environment, an Airbnb turnover, or a post-construction cleanup, we approach every job with professionalism and attention to detail.
              </p>
              <p>
                Our goal is to make your space look better, feel fresher, and stay presentable with consistent, dependable service.
              </p>
              <div className="cta-row" style={{ marginTop: 8 }}>
                <a className="btn btn-gold" href="mailto:info@vertexcleanbc.com">
                  Email Us
                </a>
                <a
                  className="btn btn-light"
                  href="https://www.instagram.com/vertexcleaning.ca"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Instagram
                </a>
              </div>
            </div>

            <div className="about-panel">
              <h3 style={styles.sideHeading}>Why clients choose us</h3>
              <div className="pill-list">
                {highlights.map((item) => (
                  <div className="pill" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gold-line center-line"></div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            A clean space reflects your standards
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            We focus on detail, consistency, and a professional presentation whether the property is personal, rental-based, or business-facing.
          </p>

          <div className="why-grid">
            <div className="card">
              <h3>Consistent Quality</h3>
              <p>
                We aim for a polished result on every visit, not just a quick surface clean.
              </p>
            </div>
            <div className="card">
              <h3>Flexible Scheduling</h3>
              <p>
                One-time, weekly, bi-weekly, and custom service options depending on your needs.
              </p>
            </div>
            <div className="card">
              <h3>Professional Communication</h3>
              <p>
                Clear scheduling, responsive support, and dependable service from first contact to final result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="areas" style={styles.darkSection}>
        <div className="container">
          <div className="gold-line center-line"></div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Service Areas
          </h2>
          <p className="section-subtitle" style={{ textAlign: "center" }}>
            Based in the Lower Mainland and available for residential and commercial cleaning across surrounding areas.
          </p>

          <div className="areas-grid">
            {areas.map((area) => (
              <div className="area" key={area}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="gold-line"></div>
          <h2 className="section-title">Get a Free Quote</h2>
          <p className="section-subtitle" style={{ marginLeft: 0 }}>
            Tell us what type of cleaning you need and we will get back to you as soon as possible.
          </p>

          <div className="contact-grid">
            <div className="card">
              <h3>Contact Information</h3>
              <p>
                Reach out for residential cleaning, commercial cleaning, rental turnover cleaning, or post-construction cleaning.
              </p>

              <div className="info-block">
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <a href="tel:6043600485">604-360-0485</a>
                </div>
                <div className="info-item">
                  <span className="info-label">Email</span>
                  <a href="mailto:info@vertexcleanbc.com">info@vertexcleanbc.com</a>
                </div>
                <div className="info-item">
                  <span className="info-label">Website</span>
                  <a href="https://www.vertexcleanbc.com" target="_blank" rel="noreferrer">
                    www.vertexcleanbc.com
                  </a>
                </div>
                <div className="info-item">
                  <span className="info-label">Instagram</span>
                  <a
                    href="https://www.instagram.com/vertexcleaning.ca"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @vertexcleaning.ca
                  </a>
                </div>
                <div className="info-item">
                  <span className="info-label">Serving</span>
                  <div>Lower Mainland, BC</div>
                </div>
              </div>
            </div>

            <div className="form-card">
              <h3 style={{ marginTop: 0, marginBottom: 18, fontSize: 24 }}>Request a Quote</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select Service</option>
                    <option value="Residential Cleaning">Residential Cleaning</option>
                    <option value="Commercial Cleaning">Commercial Cleaning</option>
                    <option value="Move-In / Move-Out">Move-In / Move-Out</option>
                    <option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
                    <option value="Airbnb / Short-Term Rental">Airbnb / Short-Term Rental</option>
                    <option value="Weekly / Bi-Weekly Service">Weekly / Bi-Weekly Service</option>
                  </select>
                  <textarea
                    className="full"
                    name="message"
                    placeholder="Tell us about your space, location, and what type of cleaning you need"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button className="btn btn-gold full" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Request"}
                  </button>
                </div>
              </form>
              
              {status === "success" && (
                <p className="form-status success">Your request was sent successfully.</p>
              )}
              {status === "error" && (
                <p className="form-status error">Something went wrong. Please try again after updating your Formspree endpoint.</p>
              )}
              <p className="form-status">We’ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <p>
            © {new Date().getFullYear()} Vertex Cleaning. Professional residential and commercial cleaning services in the Lower Mainland.
          </p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#070707",
  },
  darkSection: {
    background: "linear-gradient(180deg, #090909 0%, #050505 100%)",
  },
  sideHeading: {
    marginTop: 0,
    marginBottom: 18,
    fontSize: 24,
    color: "#ffffff",
  },
};
