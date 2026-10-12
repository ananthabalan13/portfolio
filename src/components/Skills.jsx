import skills from "../data/skills.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  return <section className="section section-alt section-anchor" id="skills">
    <div className="container">
      <SectionHeading eyebrow="MY TOOLKIT" title={<>Technologies I <span className="gradient-text">work with.</span></>} description="A practical set of tools I use and continue to develop through professional work and personal projects." />
      <div className="skills-grid">
        {skills.map(group => <article className={`skill-card ${group.featured ? "skill-card-featured" : ""}`} key={group.title}>
          <div className="skill-card-top"><span className="skill-symbol"><i className={`bi ${group.featured ? "bi-code-slash" : group.title.includes("CMS") ? "bi-shop" : "bi-tools"}`} /></span><span className="skill-count">{String(group.items.length).padStart(2, "0")} TOOLS</span></div>
          <h3>{group.title}</h3>
          <div className="skill-tags">{group.items.map(item => <span className={item === "React.js" || item === "JavaScript" ? "skill-tag skill-tag-featured" : "skill-tag"} key={item}>{item}</span>)}</div>
        </article>)}
      </div>
    </div>
  </section>;
}
