import "./testimonials-styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import React, { useEffect, useState } from "react";

const Testimonials = () => {
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
      setSlidesView(1);
    } else {
      setSlidesView(1.8);
    }
  }, [windowDimenion]);
  return (
    <>
      <div className="main-div-testimonials">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={SlidesView}
          pagination={{
            clickable: true,
          }}
          loop={true}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure className="snip1390">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
                alt="profile-sample3"
                className="profile"
              />
              <figcaption>
                <h2>Eleanor Crisp</h2>
                <h4>UX Design</h4>
                <blockquote>
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </blockquote>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="snip1390">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
                alt="profile-sample3"
                className="profile"
              />
              <figcaption>
                <h2>Eleanor Crisp</h2>
                <h4>UX Design</h4>
                <blockquote>
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </blockquote>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="snip1390">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
                alt="profile-sample3"
                className="profile"
              />
              <figcaption>
                <h2>Eleanor Crisp</h2>
                <h4>UX Design</h4>
                <blockquote>
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </blockquote>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="snip1390">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
                alt="profile-sample3"
                className="profile"
              />
              <figcaption>
                <h2>Eleanor Crisp</h2>
                <h4>UX Design</h4>
                <blockquote>
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </blockquote>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="snip1390">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg"
                alt="profile-sample3"
                className="profile"
              />
              <figcaption>
                <h2>Eleanor Crisp</h2>
                <h4>UX Design</h4>
                <blockquote>
                  Dad buried in landslide! Jubilant throngs fill streets!
                  Stunned father inconsolable - demands recount!
                </blockquote>
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Testimonials;
