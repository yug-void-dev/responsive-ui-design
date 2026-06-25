import "../../styles/WhyCompliance.css";

function WhyCompliance() {
  const cards = [
    {
      title: "Regulatory Clarity",
      description: "We Decode Complex Compliance Rules Into Simple, Actionable Steps.",
      icon: "/assets/icons/Regulatory Clarity.png",
    },
    {
      title: "Hassle-Free Filings Clarity",
      description: "From Registration To Ongoing Reporting—We Manage It End-To-End.",
      icon: "/assets/icons/Hassle-Free Filings Clarity.png",
    },
    {
      title: "Risk Protection",
      description: "Stay Ahead Of Audits, Inspections, And Compliance Gaps With Proactive Support.",
      icon: "/assets/icons/Risk Protection.png",
    },
  ];

  return (
    <section className="why-compliance" id="services">
      <div className="why-container">
        <div className="why-layout">
          <div className="why-left">
            <div className="heading-container">
              <h2 className="font-h2">
                Why <span>Compliance Matters</span>
                <br />
                For Research Analysts
              </h2>
              <img
                src="/assets/images/Vector2.png"
                alt="arrow"
                className="scribble-arrow"
              />
            </div>

            <div className="why-image">
              <img
                src="/assets/images/Section2-Image.png"
                alt="Why Compliance Illustration"
              />
            </div>

            <div className="why-chevrons">
              {[...Array(6)].map((_, i) => (
                <svg key={i} className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ))}
            </div>
          </div>

          <div className="why-right">
            <p className="why-description font-body-regular">
              In Today's Regulatory Environment, Even A Small Oversight Can Lead To
              Penalties, Reputational Risks, And Loss Of Client Trust. We Help Research
              Analysts And Firms Navigate Complex Compliance Requirements So They
              Can Focus On Delivering High-Quality Research Without Worry.
            </p>

            <div className="why-cards">
              {cards.map((card, index) => (
                <div className="why-feature-card" key={index}>
                  <div className="feature-icon-wrapper">
                    <img src={card.icon} alt={card.title} className="feature-card-icon" />
                  </div>
                  <div className="feature-card-text">
                    <h3 className="font-large-title">{card.title}</h3>
                    <p className="font-body-regular">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyCompliance;