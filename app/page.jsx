const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#", hasCaret: true },
  { label: "Website Examples", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#", hasCaret: true },
  { label: "Company", href: "#", hasCaret: true }
];

const stars = Array.from({ length: 5 });

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="rainbow-bar" aria-hidden="true" />
        <nav className="nav">
          <div className="logo" aria-label="PAKWEBMASTER">
            PAKWEBMASTER
          </div>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link${link.hasCaret ? " has-caret" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a href="#" className="nav-link login-link">
              Login
            </a>
            <button className="menu-button" type="button" aria-label="Open menu">
              Menu
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-eyebrow">STRUGGLING TO LAUNCH A WEBSITE YOU LOVE?</p>
            <h1 className="hero-title">
              We&apos;ll build your{" "}
              <span className="highlight">small business</span>{" "}
              <span className="highlight">website</span> in 7 days for $79
            </h1>
            <p className="hero-subtitle">
              Then we&apos;ll help grow your business. Agency service at a fraction of
              the price.
            </p>
            <div className="hero-actions">
              <button className="primary-button" type="button">
                Get Started
              </button>
              <a className="text-link" href="#">
                Are our websites any good?
              </a>
            </div>
            <div className="hero-rating">
              <span className="rating-text">RATED 4.8 EXCELLENT</span>
              <div className="rating-stars" aria-label="5 out of 5 stars">
                {stars.map((_, index) => (
                  <span key={index} className="star-tile" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                      <path d="M12 2.6l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.8 6.8 19.9l1-5.9-4.3-4.2 5.9-.9z" />
                    </svg>
                  </span>
                ))}
              </div>
              <div className="trustpilot">
                <span className="trustpilot-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.6l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.8 6.8 19.9l1-5.9-4.3-4.2 5.9-.9z" />
                  </svg>
                </span>
                <span>Trustpilot</span>
              </div>
            </div>
            <p className="hero-community">
              JOIN OUR COMMUNITY OF 700,000+ BUSINESS OWNERS
            </p>
          </div>
        </section>

        <section className="showcase">
          <div className="showcase-inner">
            <div className="showcase-card">
              <img
                className="showcase-base"
                src="/pics/65cbb4964d0da94b9227b173_editor-base.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-domain"
                src="/pics/65cbb4960b332d68ab229ff0_domain-celestial.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-left"
                src="/pics/65cbb49650e79f42be394d5a_editor-left.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-right"
                src="/pics/65cbb496129dab171442adf9_editor-right.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-nav"
                src="/pics/1.png"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-red"
                src="/pics/65df7e9b9c2c5a335d4955dd_img-red.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <img
                className="showcase-content"
                src="/pics/65cbb4966b74c2eb7ed7bc70_onnor-content.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-bookings"
                src="/pics/65cbb4962e5467e6fedefd3e_bookings.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-sell"
                src="/pics/65cbb496fd59cb86f266ffb0_selll-products.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-publish"
                src="/pics/65cbb496398c881b16497e7a_publish.svg"
                alt=""
                aria-hidden="true"
              />
              <img
                className="showcase-blue"
                src="/pics/65df7e9b39dc347faabf702a_pic-blue.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              <div className="showcase-badge" aria-hidden="true">
                <span>MONEY BACK</span>
                <span>GUARANTEE</span>
                <div className="badge-inner">U</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
