import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return <section className="section section-anchor" id="experience">
    <div className="container">
      <SectionHeading eyebrow="WORK EXPERIENCE" title={<>Where I'm <span className="gradient-text">growing.</span></>} description="My current professional role and the experience I'm building in web development." />
      <article className="experience-card">
        <div className="experience-mark">W</div>
        <div className="experience-main">
          <div className="experience-top"><div><h3>Junior Frontend Developer</h3><p className="company-name">Wedesign Tech <span>·</span> Coimbatore, Tamil Nadu</p></div><span className="experience-duration">1.5 years</span></div>
          <p className="experience-summary">Currently working in a web development role, building professional experience and continuing to strengthen frontend development skills.</p>
          <div className="experience-tags"><span>Frontend Development</span><span>Responsive UI</span><span>Web Technologies</span></div>
        </div>
      </article>
      <p className="note-muted"><i className="bi bi-info-circle me-2" />Employment dates and detailed responsibilities can be added when you confirm the exact information.</p>
    </div>
  </section>;
}
