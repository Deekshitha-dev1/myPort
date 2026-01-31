const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section__title">
        <p>Skills</p>
        <h2>Top Skills</h2>
      </div>
      <div className="skills__content">
        <div className="skills__category">
          <h3>Programming Languages</h3>
          <div className="skills__list">
            <span>C</span>
            <span>Python</span>
          </div>
        </div>
        <div className="skills__category">
          <h3>Soft Skills</h3>
          <div className="skills__list">
            <span>Communication</span>
          </div>
        </div>
        <div className="skills__category">
          <h3>Interests</h3>
          <div className="skills__list">
            <span>Artificial Intelligence</span>
            <span>Data Science</span>
            <span>Tech Innovation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
