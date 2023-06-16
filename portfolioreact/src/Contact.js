import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fa-solid fa-paper-plane"></i> amouradi2002@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i>+341 5296392</p>
            <div className="social-icons">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/asmaemouradi/"><i className="fa-brands fa-linkedin"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/aya.andaloussi.9/"><i className="fab fa-facebook"></i></a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/asmae__mouradi/"><i className="fab fa-instagram"></i></a>
              <a target="_blank" rel="noreferrer" href="https://github.com/asmaemou"><i className="fab fa-github"></i></a>
            </div>
            <a href="./my-cv.pdf" target="_blank" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet">
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea name="message" rows="6" placeholder="Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Your Company Name</p>
      </div>
    </div>
  );
};

export default Contact;
