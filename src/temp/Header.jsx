import { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setBg(true);
      } else {
        setBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="header">
      <div className={`header container ${bg ? "active-bg" : ""}`}>
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1><span>Fathima</span> Nasrin <span>K A</span></h1>
            </a>
          </div>

          <div className="nav-list">
            <div
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="bar"></div>
            </div>

            <ul className={menuOpen ? "active" : ""}>
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;