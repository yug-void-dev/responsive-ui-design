import "../../styles/HeroSection.css";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1 className="font-h1">
          Simplifying <span>Compliance</span> For
          <br />
          Research Analysts
        </h1>

        <p className="font-body-regular">
          Stay Focused On Your Insights—We'll Handle The Compliance. Our Expert
          Solutions Ensure Your Research Practices Meet Every Regulatory
          Requirement With Confidence And Ease
        </p>

        <ul className="hero-checklist">
          <li>
            <img src="/assets/icons/check-sign.png" alt="check" className="check-icon" />
            <span className="font-body-medium">End-To-End Compliance Support</span>
          </li>
          <li>
            <img src="/assets/icons/check-sign.png" alt="check" className="check-icon" />
            <span className="font-body-medium">Regulatory Filings Made Simple</span>
          </li>
          <li>
            <img src="/assets/icons/check-sign.png" alt="check" className="check-icon" />
            <span className="font-body-medium">Tailored Solutions For Independent Analysts & Firms</span>
          </li>
        </ul>

        <div className="hero-buttons">
          <Button variant="primary">Get Started</Button>
          <Button variant="outline">Book A Consultation</Button>
        </div>

        {/* Decorative chevrons bottom left (desktop) or middle (mobile/tablet) */}
        <div className="chevrons-bottom-left">
          {[...Array(6)].map((_, i) => (
            <svg key={i} className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </div>
      </div>

      <div className="hero-right">
        {/* Decorative chevrons top-left of the illustration */}
        <div className="chevrons-top-left-circle">
          {[...Array(6)].map((_, i) => (
            <svg key={i} className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </div>

        <div className="hero-image-container">
          <img
            src="/assets/images/Banner Image.png"
            alt="Hero Illustration"
            className="hero-image"
          />

          {/* Rating Badge */}
          <div className="badge-rating">
            <span className="rating-value">4.8</span>
            <div className="rating-stars-container">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="rating-label">Clients Rating</span>
            </div>
          </div>

          {/* Trusted Badge */}
          <div className="badge-trusted">
            <div className="trusted-icon-box">
              <svg className="trusted-briefcase" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className="trusted-text-box">
              <span className="trusted-label">Trusted By</span>
              <span className="trusted-value">250+</span>
              <span className="trusted-sub">Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;