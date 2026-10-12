export default function Button({ href, children, variant = "primary", download = false, onClick, className = "" }) {
  const classes = `button button-${variant} ${className}`.trim();
  if (href) {
    return <a className={classes} href={href} download={download || undefined}>{children}</a>;
  }
  return <button className={classes} onClick={onClick} type="button">{children}</button>;
}
