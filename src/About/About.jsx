import './about.css'
const About = ({ title, desc, img, reverse = false, aboutInfo }) => {
    return (
        <>
    <section className="container py-5">
        <div className="row mx-0 align-items-center justify-content-between my-5">
            <div className={`img-container col-md-6 ${reverse ? 'order-md-2' : ''}`}>
                <img src={img} alt={title} className="img-fluid" />
            </div>
            <div className={`${aboutInfo} col-md-6 ${reverse ? 'order-md-1' : ''}`}>
                <h1 className="fw-bold display-5">{title}</h1>
                <p className="text-secondary">{desc}</p>
                <span className="text-primary fs-4">→</span>
            </div>
        </div>
    </section>
        </>
    );
};

export default About;
