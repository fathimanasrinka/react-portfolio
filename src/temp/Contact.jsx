function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact-wrapper">
          
          {/* Left Side - Info */}
          <div className="contact-info">
            <h3>Let's Work Together 👋</h3>
            <p>
              I'm open to freelance, internships, and full-time opportunities.
              Feel free to reach out.
            </p>

            <div className="info-item">
              <strong>Email:</strong>
              <span> nasrinf704@gmail.com</span>
            </div>

            <div className="info-item">
              <strong>Phone:</strong>
              <span> +91 9656431129</span>
            </div>

            <div className="info-item">
              <strong>Location:</strong>
              <span> Kochi, Kerala</span>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" required />
                <label>Your Name</label>
              </div>

              <div className="form-group">
                <input type="email" required />
                <label>Your Email</label>
              </div>

              <div className="form-group">
                <textarea required></textarea>
                <label>Your Message</label>
              </div>

              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;