import './footer.css'

const Footer = () => {
  const footerData = [
    {
      title: "Digital Agency",
      items: ["Building Digital Products,", "Brands & Experience"],
    },
    {
      title: "Resources",
      items: ["Guides", "Blog", "Customer Stories", "Glossery"],
    },
    {
      title: "Company",
      items: ["About Us", "Careers", "Partners", "Contact Us"],
    },
    {
      title: "Social Media",
      items: ["LinkedIn", "Facebook", "Instagram", "Twitter"],
    },
  ];

  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container footer-container mx-auto">
        <div className="row text-start text-md-start gy-4">
          {footerData.map((section, index) => (
            <div key={index} className="col-12 col-md-3">
              <h6 className="fw-bold">{section.title}</h6>
              <ul className="list-unstyled mt-3 mb-0 text-secondary footer-ul">
                {section.items.map((item, idx) => (
                  <li className="mb-2" key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-secondary small mt-4">
          © Matheus. Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
