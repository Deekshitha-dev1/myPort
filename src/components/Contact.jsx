const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section__title">
        <p>Contact</p>
        <h2>Get in touch with me</h2>
      </div>
      <div className="contact__content">
        <p className="contact__description">
          Feel free to reach out through any of the following channels:
        </p>
        <div className="contact__methods">
          <a href="tel:+918333897576" className="contact__method">
            <span className="contact__icon">📞</span>
            <span>8333897576 (Home)</span>
          </a>
          <a href="mailto:grandhisatyadeekshitha9@gmail.com" className="contact__method">
            <span className="contact__icon">✉</span>
            <span>grandhisatyadeekshitha9@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/grandi-satya-deekshitha-b81423370/" target="_blank" rel="noreferrer" className="contact__method">
            <span className="contact__icon">💼</span>
            <span>LinkedIn Profile</span>
          </a>
        </div>
        <form className="contact__form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="contact__btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
