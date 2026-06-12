import "../../styles/HeroSection.css";


function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">

        <h1>
          Simplifying <span>Compliance</span> For
          <br />
          Research Analysts
        </h1>

        <p>
          Stay informed through AI-powered insights,
          compliance monitoring and automated filing
          assistance.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Book a Consultation
          </button>
        </div>

        <div className="stats-card">
          <h3>250+</h3>
          <p>Professionals Protected</p>
        </div>

      </div>

    <div className="hero-right">
  <img
    src="/assets/images/Banner Image.png"
    alt="Hero"
  />
</div>
    </section>
  );
}

export default HeroSection;