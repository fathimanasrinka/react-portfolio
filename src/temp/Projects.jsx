function Projects() {
  const projects = [
    {
      name: "MERN To-Do List Application",
      description:
        "Developed a full-stack task management application using React.js, Node.js, Express.js, and MongoDB. Implemented complete CRUD functionality and designed RESTful APIs. Integrated MongoDB for efficient data storage with a responsive React interface.",
      tech: "React.js | Node.js | Express.js | MongoDB | REST API",
    },
    {
      name: "Calculator Application",
      description:
        "Built a functional calculator using HTML, CSS, and JavaScript. Implemented arithmetic operations using DOM manipulation and event handling. Strengthened understanding of JavaScript logic building and dynamic UI updates.",
      tech: "HTML | CSS | JavaScript",
    },
  ];

  return (
    <section id="projects">
      <div className="projects container">
        <h1 className="section-title">
          Recent <span>Projects</span>
        </h1>

        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <h4>{project.tech}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;