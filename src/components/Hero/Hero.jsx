import React, { useEffect } from 'react';
import './Hero.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации в миллисекундах
      once: true, // Анимация будет проигрываться один раз
    });
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="wrap">
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="600"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="1000"
              className="box"
            ></div>
          </div>

          <div className="wrap">
            <div
              data-aos="flip-left"
              data-aos-delay="1300"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="1500"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="1700"
              className="box"
            ></div>
          </div>

          <div className="wrap">
            <div
              data-aos="flip-left"
              data-aos-delay="1900"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="2100"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="2300"
              className="box"
            ></div>
          </div>
          <div className="wrap">
            <div
              data-aos="flip-left"
              data-aos-delay="1300"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="1500"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="1700"
              className="box"
            ></div>
          </div>

          <div className="wrap">
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="600"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="900"
              className="box"
            ></div>
          </div>

          <div className="wrap">

            
            <div
              data-aos="flip-left"
              data-aos-delay="1300"
              className="box"
            ></div>
            <div
              data-aos="flip-left"
              data-aos-delay="1500"
              className="box"
            ></div>

            <div
              data-aos="flip-left"
              data-aos-delay="1700"
              className="box"
            ></div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;