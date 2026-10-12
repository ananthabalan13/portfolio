export default function DocumentCard({ document }) {
  return <article className={`document-card ${document.available ? "" : "document-unavailable"}`}>
    <div className="document-top"><span className="document-icon"><i className={`bi ${document.icon}`} /></span><span className={`document-status ${document.available ? "status-available" : ""}`}>{document.available ? "AVAILABLE" : "COMING SOON"}</span></div>
    <h3>{document.title}</h3><p>{document.description}</p>
    {document.available && document.fileUrl ? <a className="document-download" href={document.fileUrl} download={document.fileName}>Download file <i className="bi bi-download" /></a> : <span className="document-pending"><i className="bi bi-lock" /> File not added yet</span>}
  </article>;
}
