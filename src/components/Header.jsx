import { useState } from "react";
import Button from "./Button.jsx";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"],
  ["Projects", "#projects"], ["Education", "#education"], ["Documents", "#documents"], ["Contact", "#contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell container">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Anantha Balan home">
          <span className="brand-mark">A</span><span>Anantha Balan<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
        </button>
        <div className={`nav-content ${open ? "nav-content-open" : ""}`}>
          <div className="nav-links">
            {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </div>
          <Button href="/documents/Anantha-Balan-Resume.pdf" download>Resume <i className="bi bi-download ms-1" /></Button>
        </div>
      </nav>
    </header>
  );
}
