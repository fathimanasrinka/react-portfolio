function Services() {
  const services = [
    {
      title: "Web Design",
      desc: "Creative and responsive web design services.",
    },
    {
      title: "Web App Development",
      desc: "Building scalable MERN applications.",
    },
    {
      title: "Full Stack Consulting",
      desc: "Optimizing complete web solutions.",
    },
    {
      title: "Deployment & Maintenance",
      desc: "Deployment and support services.",
    },
  ];

  return (
    <section id="services">
      <div className="services container">
        <h1 className="section-title">Services</h1>

        <div className="service-bottom">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;