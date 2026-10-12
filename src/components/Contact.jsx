import SectionHeading from "./SectionHeading.jsx";
import Button from "./Button.jsx";

export default function Contact() {
  return <section className="section section-anchor contact-section" id="contact">
    <div className="container">
      <SectionHeading eyebrow="GET IN TOUCH" title={<>Let's <span className="gradient-text">connect.</span></>} description="I'm interested in React Developer and Frontend Developer opportunities. Feel free to contact me regarding suitable roles or web development projects." />
      <div className="contact-panel">
        <div className="contact-intro"><span className="contact-icon"><i className="bi bi-chat-square-text" /></span><h3>Have an opportunity in mind?</h3><p>I'd be happy to hear from you.</p></div>
        <div className="contact-methods">
          <a href="mailto:ananth.rk13@gmail.com" className="contact-method"><span><i className="bi bi-envelope" /></span><div><small>EMAIL</small><strong>ananth.rk13@gmail.com</strong></div><i className="bi bi-arrow-up-right ms-auto" /></a>
          <a href="tel:+919345532917" className="contact-method"><span><i className="bi bi-telephone" /></span><div><small>PHONE</small><strong>+91 93455 32917</strong></div><i className="bi bi-arrow-up-right ms-auto" /></a>
          <a href="https://github.com/ananthabalan13/" target="_blank" rel="noreferrer" className="contact-method"><span><i className="bi bi-github" /></span><div><small>GITHUB</small><strong>ananthabalan13</strong></div><i className="bi bi-arrow-up-right ms-auto" /></a>
        </div>
        <Button href="mailto:ananth.rk13@gmail.com">Send me an email <i className="bi bi-arrow-up-right ms-1" /></Button>
      </div>
    </div>
  </section>;
}
