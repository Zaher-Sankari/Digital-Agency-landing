import'./hero.css'
const Hero = () => {
  return (
    <>
        <div className="hero d-flex flex-grow-1 align-items-center justify-content-center my-0">
            <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-7 text-md-start text-center hero-info">
                    <h1 className="display-3 fw-bold main-heading">Building Digital Products, Brands & Experience</h1>
                    <p className="my-4 hero-description">
                        Digital Agency Is Your Online Team Mangement Tool That Easy And Prompt
                    </p>
                    <button href="#" className="btn btn-lg text-uppercase fs-6 contact-btn text-light">contact us</button>
                </div>
                <div className="col-md-5 hero-img">
                    <img src="./assets/img/hero-img.png" alt="hero-bg" />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Hero