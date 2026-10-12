import Button from "./Button.jsx";

export default function Hero() {
  const profileImage = `${import.meta.env.BASE_URL}images/anantha-balan.jpg`;
  return (
    <section className="hero-section section-anchor" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> JUNIOR FRONTEND DEVELOPER
          </div>
          <h1>
            Hi, I'm <span className="gradient-text">Anantha Balan.</span>
          </h1>
          <h2>Building clean, responsive web experiences with React.</h2>
          <p className="hero-description">
            I'm a Junior Frontend Developer with 1.5 years of professional
            experience and a strong interest in building responsive,
            user-friendly web applications. I work with React.js, JavaScript,
            Bootstrap, and modern frontend technologies while continuously
            improving my skills through practical projects.
          </p>
          <div className="hero-actions">
            <Button href="#projects">
              View My Projects <i className="bi bi-arrow-up-right ms-1" />
            </Button>
            <Button
              href="/documents/Anantha-Balan-Resume.pdf"
              variant="secondary"
              download
            >
              Download Resume <i className="bi bi-download ms-1" />
            </Button>
            <a className="text-link" href="#contact">
              Contact me <i className="bi bi-arrow-down-right" />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <i className="bi bi-geo-alt" /> Coimbatore, India
            </span>
            <span>
              <i className="bi bi-code-slash" /> React · JavaScript · UI
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-glow" />
          <div className="portrait-frame">
            <img src={profileImage} alt="Portrait of Anantha Balan R" />
          </div>
          <div className="floating-note">
            <span className="note-icon">
              <i className="bi bi-braces" />
            </span>
            <span>
              <strong>Frontend Developer</strong>
              <small>Focused on React & UI</small>
            </span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </div>
      <div className="hero-bottom container">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
