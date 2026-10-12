export default function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-preview">
      {project.image ? <img src={project.image} alt={`${project.title} project preview`} loading="lazy" onError={e => { e.currentTarget.style.display = "none"; }} /> : null}
      <div className="preview-fallback"><span className="preview-icon"><i className={`bi ${project.icon || "bi-window"}`} /></span><span className="preview-label">PROJECT PREVIEW</span><span className="preview-title">{project.title}</span><div className="preview-lines"><i /><i /><i /></div></div>
      <span className="project-number">{String(project.id).padStart(2, "0")}</span>
    </div>
    <div className="project-body">
      <div className="project-title-row"><h3>{project.title}</h3><i className="bi bi-arrow-up-right project-arrow" /></div>
      <p>{project.description}</p>
      <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
      <div className="project-links">
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <i className="bi bi-arrow-up-right" /></a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code <i className="bi bi-github" /></a>}
      </div>
    </div>
  </article>;
}
