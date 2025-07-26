import './trusted.css';

const brands = [
    { src: 'assets/img/spotify.png', alt: 'Spotify' },
    { src: 'assets/img/slack.png', alt: 'Slack' },
    { src: 'assets/img/dropbox.png', alt: 'Dropbox' },
    { src: 'assets/img/zoom.png', alt: 'Zoom' }
];

const Trusted = () => {
    return (
        <section className="py-5 bg-light text-center trusted-section">
        <p className="text-secondary mb-4 fw-semibold">Trusted By 4,000+ Companies</p>
        <div className="container brands-container">
            <div className="row justify-content-center align-items-center g-4">
            {brands.map((brand, index) => (
                <div className="col-md-3" key={index}>
                <img src={brand.src} alt={brand.alt} className="img-fluid brand-logo" />
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Trusted;
