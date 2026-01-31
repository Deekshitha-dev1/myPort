const About = () => {
  return (
    <section className="about" id="about">
      <div className="section__title">
        <p>Education</p>
        <h2>Indian Institute of Technology Jodhpur</h2>
      </div>
      <div className="about__content">
        <p>
          Bachelor of Science - BS, Applied AI and Data Science<br />
          Duration: June 2025 - May 2029
        </p>
        <div className="about__stats">
          <div>
            <h3>AI & ML</h3>
            <span>Specialization</span>
          </div>
          <div>
            <h3>Data Science</h3>
            <span>Focus Area</span>
          </div>
          <div>
            <h3>IIT Jodhpur</h3>
            <span>Institute</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
