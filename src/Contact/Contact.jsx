import './contact.css'

export default function Contact({ title, desc, img, contactInfo }) {
    return (
        <>
            <section id="contact" className="container">
                <div className="row mx-0 align-items-center justify-content-between my-5">
                    <div className={`img-container col-md-6`}>
                        <img src={img} alt={title} className="img-fluid" />
                    </div>
                    <div className={`${contactInfo} col-md-6`}>
                        <h1 className="fw-bold display-5">{title}</h1>
                        <p className="text-secondary">{desc}</p>
                        <button href="#" className="btn btn-lg text-uppercase fs-6 contact-btn text-light fw-semibold">contact us</button>
                    </div>
                </div>
            </section>
        </>
    )
}
