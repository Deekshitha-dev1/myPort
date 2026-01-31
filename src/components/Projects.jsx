const Projects = () => {
  const projects = [
    {
      title: "Pulse Analytics",
      description:
        "A SaaS dashboard for real-time marketing insights with interactive charts.",
      tags: ["React", "D3", "Node.js"],
    },
    {
      title: "Lumen Studio",
      description:
        "Portfolio website for a creative agency featuring motion-driven layouts.",
      tags: ["Next.js", "Framer Motion", "CSS"],
    },
    {
      title: "ParcelPath",
      description:
        "Logistics tracking platform with map visualization and delivery alerts.",
      tags: ["React", "Mapbox", "Firebase"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section__title">
        <p>Projects</p>
        <h2>Selected work that blends strategy and craft.</h2>
      </div>
      <div className="projects__grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
