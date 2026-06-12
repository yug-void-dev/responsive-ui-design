import "../../styles/WhyCompliance.css";

function WhyCompliance() {
  const cards = [
    {
      title: "Regulatory Clarity",
      description:
        "Stay updated with the latest regulations and compliance requirements.",
    },
    {
      title: "Hassle-Free Filing Cycle",
      description:
        "From registration to ongoing reporting, we manage end-to-end filing.",
    },
    {
      title: "Risk Protection",
      description:
        "Stay ahead of audits, inspections, and compliance gaps with proactive support.",
    },
  ];

  return (
    <section className="why-compliance">
      <div className="why-container">
        <div className="why-layout">
          
          <div className="why-left">
            <h2>
              Why <span>Compliance Matters</span>
              <br />
              For Research Analysts
            </h2>

            <div className="why-image">
              <img
                src="/assets/images/Section2-Image.png"
                alt="Why Compliance"
              />
            </div>
          </div>

          <div className="why-right">
            <p className="why-description">
              In today's regulatory environment, even a small oversight can
              lead to significant risks. Compliance helps research analysts
              maintain integrity and ensure adherence to industry standards.
            </p>

            <div className="why-cards">
              {cards.map((card, index) => (
                <div className="why-feature-card" key={index}>
                  <div className="feature-icon">✓</div>

                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
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