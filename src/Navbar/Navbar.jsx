import './navbar.css';

const Navbar = () => {
  const navLinks = [
    { label: 'home', href: '#home' },
    { label: 'about', href: '#about' },
    { label: 'testimonial', href: '#testimonial' },
    { label: 'contact', href: '#contact'},
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand fw-bold fs-5 text-uppercase logo" href="#">Digital Agency</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {navLinks.map((link, index) => (
              <a key={index} className={`nav-link fw-normal`} aria-current={index === 0 ? 'page' : undefined} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
