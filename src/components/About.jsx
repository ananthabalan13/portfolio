import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return <section className="section section-anchor" id="about">
    <div className="container">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Developer mindset. <span className="gradient-text">Practical approach.</span></>} />
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead-copy">I’m a frontend developer who enjoys turning ideas into clear, useful web experiences.</p>
          <p>In my current Junior Frontend Developer role at Wedesign Tech, I continue to build my professional experience while strengthening my React.js and JavaScript skills. I care about responsive layouts, reusable UI, and making interfaces easy to use.</p>
          <p>I’m a self-learner who adapts to new tools and technologies. Alongside frontend development, I have exposure to WordPress, Shopify, and Liquid.</p>
        </div>
        <div className="about-facts">
          <div className="fact-card"><span className="fact-icon"><i className="bi bi-code-square" /></span><strong>React-focused</strong><p>Component-based UI and practical projects</p></div>
          <div className="fact-card"><span className="fact-icon"><i className="bi bi-phone" /></span><strong>Responsive UI</strong><p>Layouts designed for different screen sizes</p></div>
          <div className="fact-card"><span className="fact-icon"><i className="bi bi-lightbulb" /></span><strong>Always learning</strong><p>Curious, adaptable, and improving every day</p></div>
          <div className="fact-card"><span className="fact-icon"><i className="bi bi-window-stack" /></span><strong>Web experience</strong><p>Frontend, CMS, and e-commerce technologies</p></div>
        </div>
      </div>
    </div>
  </section>;
}
