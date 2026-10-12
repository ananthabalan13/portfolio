const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Documents", "#documents"], ["Contact", "#contact"]];
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <a href="#home" className="brand"><span className="brand-mark">A</span><span>Anantha Balan<span className="brand-dot">.</span></span></a>
    <p>Junior Frontend Developer · Building for the web.</p>
    <div className="footer-links">{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Anantha Balan R. All rights reserved.</span><a href="https://github.com/ananthabalan13/" target="_blank" rel="noreferrer"><i className="bi bi-github" /> GitHub</a></div>
  </div></footer>;
}
