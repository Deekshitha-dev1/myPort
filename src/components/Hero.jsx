const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Dual Degree Student | B.Tech (2025-2029)</p>
        <h1>
          Grandi Satya Deekshitha
        </h1>
        <p className="hero__description">
          B.S. in Applied AI & Data Science (IIT Jodhpur) | Passionate about AI, Data Science & Real-World Tech Innovation | Andhra Pradesh, India
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View Projects
          </a>
          <a className="button button--ghost" href="#contact">
            Hire Me
          </a>
        </div>
      </div>
      <div className="hero__card">
        <h2>Highlights</h2>
        <ul>
          <li>5+ years in frontend engineering</li>
          <li>12 shipped React apps</li>
          <li>Design-to-code specialist</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
