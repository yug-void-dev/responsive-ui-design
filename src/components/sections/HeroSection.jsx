import "../../styles/HeroSection.css";
import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="font-h1">
            Simplifying <span className="highlight">Compliance</span> For
            <br />
            Research Analysts
          </h1>

          <p className="hero-desc font-body-regular">
            Stay Focused On Your Insights—We'll Handle The Compliance. Our Expert
            Solutions Ensure Your Research Practices Meet Every Regulatory
            Requirement With Confidence And Ease
          </p>

          <ul className="hero-checklist">
            <li>
              <img
                src="/assets/icons/check-sign.png"
                alt="check"
                className="check-icon"
              />
              <span className="font-body-medium">
                End-To-End Compliance Support
              </span>
            </li>
            <li>
              <img
                src="/assets/icons/check-sign.png"
                alt="check"
                className="check-icon"
              />
              <span className="font-body-medium">
                Regulatory Filings Made Simple
              </span>
            </li>
            <li>
              <img
                src="/assets/icons/check-sign.png"
                alt="check"
                className="check-icon"
              />
              <span className="font-body-medium">
                Tailored Solutions For Independent Analysts &amp; Firms
              </span>
            </li>
          </ul>

          <div className="hero-buttons">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">Book A Consultation</Button>
          </div>

          <div className="chevrons-bottom-left">
            {[...Array(6)].map((_, i) => (
              <svg
                key={i}
                className="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className="chevrons-top-left-circle">
            {[...Array(6)].map((_, i) => (
              <svg
                key={i}
                className="chevron-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>

          <div className="hero-image-container">
            <img
              src="/assets/images/Banner Image.png"
              alt="Hero Illustration"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
