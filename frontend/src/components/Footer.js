function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="name">{currentYear} ⚙︎ Evaldas Pranckevicius</p>
    </footer>
  );
}
export default Footer;
