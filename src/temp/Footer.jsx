function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <h3 style={{ marginBottom: "10px" }}>Fathima Nasrin</h3>
        <p style={{ marginBottom: "15px" }}>
          MERN Stack Developer | Passionate about building responsive and dynamic web applications.
        </p>

        <div style={socialStyle}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:yourmail@gmail.com">
            Email
          </a>
        </div>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          © {new Date().getFullYear()} Fathima Nasrin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#111",
  color: "#fff",
  padding: "40px 20px",
  textAlign: "center",
};

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
};

const socialStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

export default Footer;