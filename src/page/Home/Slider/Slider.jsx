// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.scss';
import { Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className="slider">
       <h2 className="slider__title">
          Promotions and offers
          <span>Hurry up to grab yourself</span>
        </h2>
      <div className="slider__wrapper">
        <div className="slider__container">
        
          <Swiper navigation={true} modules={[Navigation]} >
              <SwiperSlide>
                <div className="slider__info">
                  <span className="slider__subtitle">Lorem lorem lorem</span>
                  <p className="slider__text">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  </p>
                  <button className="slider__btn btn-reset" type='button'>More details</button>
                </div>
                <img className='slider__image' src="images/slider/slide.png" alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__info">
                  <span className="slider__subtitle">Lorem lorem lorem</span>
                  <p className="slider__text">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  </p>
                  <button className="slider__btn btn-reset" type='button'>More details</button>
                </div>
                <img className='slider__image' src="images/slider/slide.png" alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__info">
                  <span className="slider__subtitle">Lorem lorem lorem</span>
                  <p className="slider__text">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  </p>
                  <button className="slider__btn btn-reset" type='button'>More details</button>
                </div>
                <img className='slider__image' src="images/slider/slide.png" alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__info">
                  <span className="slider__subtitle">Lorem lorem lorem</span>
                  <p className="slider__text">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  </p>
                  <button className="slider__btn btn-reset" type='button'>More details</button>
                </div>
                <img className='slider__image' src="images/slider/slide.png" alt="slide" />
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider__info">
                  <span className="slider__subtitle">Lorem lorem lorem</span>
                  <p className="slider__text">
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                  </p>
                  <button className="slider__btn btn-reset" type='button'>More details</button>
                </div>
                <img className='slider__image' src="images/slider/slide.png" alt="slide" />
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  );
}
 
export default Slider;