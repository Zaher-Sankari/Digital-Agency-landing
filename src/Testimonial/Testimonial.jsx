import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './testimonial.css';

export default function Testimonial() {
    const cards = [
        {
            id: 1,
            name: "Andrew Rathore",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
            img: "/assets/img/avatar1.png",
        },
        {
            id: 2,
            name: "Vera Duncan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
            img: "/assets/img/avatar2.png",
        },
        {
            id: 3,
            name: "Mark Smith",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
            img: "/assets/img/avatar3.png",
        },
        {
            id: 4,
            name: "Don Joe",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
            img: "/assets/img/avatar1.png",
        },
                {
            id: 5,
            name: "John Doe",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
            img: "/assets/img/avatar2.png",
        },
    ];

    return (
        <>
            <section id="testimonial position-relative">
                <div className="testimonial-info mx-auto text-center">
                    <p className="testimonial-info-p fs-4">Testimonial</p>
                    <h1 className="testimonial-info-heading display-5 fw-bold">Read What Other have to Say</h1>
                </div>
                <div className="cards-container mx-auto d-flex justtify-content-between overflow-hidden">
                <Swiper
                loop={true}
                    autoplay={{
                        delay: 2000,         
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,    
                    }}
                    speed={2000}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay,Pagination, Navigation]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                        <div className="card text-center d-flex flex-shrink-0 flex-column justify-content-center align-items-center p-2 border-0" key={card.id}>
                            <img src={card.img} alt={card.name} className="avatar rounded-circle" />
                            <h3>{card.name}</h3>
                            <p>{card.desc}</p>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}
