import documents from "../data/documents.js";
import DocumentCard from "./DocumentCard.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function DocumentsSection() {
  return <section className="section section-alt section-anchor" id="documents">
    <div className="container">
      <SectionHeading eyebrow="CAREER DOCUMENTS" title={<>Resume <span className="gradient-text">& certificates.</span></>} description="Download my current resume or check back when additional official documents are available." />
      <div className="documents-grid">{documents.map(document => <DocumentCard document={document} key={document.id} />)}</div>
    </div>
  </section>;
}
