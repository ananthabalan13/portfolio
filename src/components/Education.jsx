import SectionHeading from "./SectionHeading.jsx";

const education = [
  { date: "JUL 2021 — JUN 2024", title: "B.Sc. Mathematics", place: "Kamaraj College of Arts and Science", location: "Thoothukudi", result: "" },
  { date: "MAY 2021", title: "HSC — Class XII", place: "GHSS, Veppalodai", location: "Thoothukudi", result: "81.77%" },
  { date: "MAR 2019", title: "SSLC — Class X", place: "GHSS, Veppalodai", location: "Thoothukudi", result: "73.8%" }
];

export default function Education() {
  return <section className="section section-anchor" id="education">
    <div className="container">
      <SectionHeading eyebrow="EDUCATION & TRAINING" title={<>A foundation for <span className="gradient-text">what's next.</span></>} />
      <div className="education-layout">
        <div className="education-timeline">{education.map((item, index) => <article className="education-item" key={item.title}>
          <div className="timeline-marker">{index + 1}</div><div className="education-card"><span className="education-date">{item.date}</span><h3>{item.title}</h3><p>{item.place}</p><span className="education-location"><i className="bi bi-geo-alt" /> {item.location}</span>{item.result && <span className="education-result">{item.result}</span>}</div>
        </article>)}</div>
        <aside className="training-card"><span className="training-icon"><i className="bi bi-mortarboard" /></span><span className="section-eyebrow">ADDITIONAL TRAINING</span><h3>Front End Development Course</h3><p>Kalai Technologies Academy, Aundipatti</p><span className="training-date">Completed February 2025</span><div className="training-divider" /><h3>Web Development Internship</h3><p>TOD Technologies, Chennai</p><span className="training-date">Completed February 2025</span><p className="note-muted training-note">Certificate files can be added once the genuine documents are available.</p></aside>
      </div>
    </div>
  </section>;
}
