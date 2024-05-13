export const Contact = () => {
  const sendEmail = () => {
    window.location.href = "mailto:vishwaskatiyar130919198gmail.com";
  };

  return (
    <section className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14410.142137513209!2d78.52545433955189!3d25.453787315712603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977711c71d3957f%3A0x1de3439dea67ec1f!2sAwas%20Vikas%2C%20Awas%20Vikas%20Nagar%2C%20Jhansi%2C%20Uttar%20Pradesh%20284003!5e0!3m2!1sen!2sin!4v1715569723542!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3"> Contact Form</h3>
        <form action="#" className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="full name"
              id="fullname"
              className="form-input"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              placeholder="Email"
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your message"
          ></textarea>
          <button className="form-btn" onClick={sendEmail}>
            Send Email
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
