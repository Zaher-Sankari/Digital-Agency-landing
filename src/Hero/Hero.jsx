import'./hero.css'
const Hero = () => {
  return (
    <>
    <div className="container hero">
        <div className="row">
            <div className="hero-info col-12 col-md-6">
                <h1 className='fw-bold display-3'>Building digital products, brands & experience</h1>
                <p>Digital Agency is your online team mangement tool that easy and prompt</p>
                <button>contact us</button>
            </div>
            <div className="hero-img col-12 col-md-6">
                <img src="./assets/img/hero-img.png" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero