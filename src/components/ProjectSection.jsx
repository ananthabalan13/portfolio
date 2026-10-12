import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function ProjectSection() {
  return <section className="section section-alt section-anchor" id="projects">
    <div className="container">
      <SectionHeading eyebrow="SELECTED WORK" title={<>Projects built by <span className="gradient-text">doing.</span></>} description="A selection of frontend projects where I’ve practiced UI development, JavaScript logic, API integration, and React." />
      <div className="projects-grid">{projects.map(project => <ProjectCard project={project} key={project.id} />)}</div>
      <div className="projects-footer"><span>More projects will be added as I build and ship them.</span><a href="https://github.com/ananthabalan13/" target="_blank" rel="noreferrer">Explore GitHub <i className="bi bi-arrow-up-right" /></a></div>
    </div>
  </section>;
}
