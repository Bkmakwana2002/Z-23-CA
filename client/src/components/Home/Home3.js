import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import "./home-style.css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Home3() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [SlidesView, setSlidesView] = useState(3);
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  useEffect(() => {
    if (windowDimenion.winWidth < 799) {
      setSlidesView(1.2);
    } else {
      setSlidesView(3);
    }
  }, [windowDimenion]);
  return (
    <>
      <div className="home-offers">
        <div className="offers-header">
          <h1>What We offer?</h1>
        </div>
        <div className="offers-main">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={SlidesView}
            coverflowEffect={{
              rotate: 60,
              stretch: 0,
              depth: 500,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-container">
                <div className="slide-img">
                  <img
                    src="https://ca.thomso.in/static/media/ilu4.09f2c3e53ba6d771e49a.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="main-content">
                  <div className="content-header">
                    <h1>Free Entry</h1>
                  </div>
                  <div className="content-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut possimus tempore est neque in veritatis enim incidunt
                    quod adipisci, accusantium ducimus. Quia assumenda modi fuga
                    aspernatur alias eos repellat ea.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <div className="slide-img">
                  <img
                    src="https://ca.thomso.in/static/media/ilu4.09f2c3e53ba6d771e49a.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="main-content">
                  <div className="content-header">
                    <h1>Free Entry</h1>
                  </div>
                  <div className="content-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut possimus tempore est neque in veritatis enim incidunt
                    quod adipisci, accusantium ducimus. Quia assumenda modi fuga
                    aspernatur alias eos repellat ea.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <div className="slide-img">
                  <img
                    src="https://ca.thomso.in/static/media/ilu4.09f2c3e53ba6d771e49a.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="main-content">
                  <div className="content-header">
                    <h1>Free Entry</h1>
                  </div>
                  <div className="content-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut possimus tempore est neque in veritatis enim incidunt
                    quod adipisci, accusantium ducimus. Quia assumenda modi fuga
                    aspernatur alias eos repellat ea.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <div className="slide-img">
                  <img
                    src="https://ca.thomso.in/static/media/ilu4.09f2c3e53ba6d771e49a.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="main-content">
                  <div className="content-header">
                    <h1>Free Entry</h1>
                  </div>
                  <div className="content-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut possimus tempore est neque in veritatis enim incidunt
                    quod adipisci, accusantium ducimus. Quia assumenda modi fuga
                    aspernatur alias eos repellat ea.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <div className="slide-img">
                  <img
                    src="https://ca.thomso.in/static/media/ilu4.09f2c3e53ba6d771e49a.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="main-content">
                  <div className="content-header">
                    <h1>Free Entry</h1>
                  </div>
                  <div className="content-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut possimus tempore est neque in veritatis enim incidunt
                    quod adipisci, accusantium ducimus. Quia assumenda modi fuga
                    aspernatur alias eos repellat ea.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-container">
                <div className="slide-img">
                  <img
                    src="https://ca.thomso.in/static/media/ilu4.09f2c3e53ba6d771e49a.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="main-content">
                  <div className="content-header">
                    <h1>Free Entry</h1>
                  </div>
                  <div className="content-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut possimus tempore est neque in veritatis enim incidunt
                    quod adipisci, accusantium ducimus. Quia assumenda modi fuga
                    aspernatur alias eos repellat ea.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default Home3;
