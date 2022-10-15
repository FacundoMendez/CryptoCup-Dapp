import React, {Suspense}  from 'react'
import back1 from "./src/slider1.jpeg"
/* import back2 from "./src/slider2.jpeg" */
import back3 from "./src/slider3.jpeg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./sliderBanner.css"
import Spinner from '../../config/spinner/Spinner';


const SliderBanner = () => {

  const options2 = {
    type   : 'fade',
    perPage: 1,
    focus  : 'center',
    autoplay : true,
    pauseOnHover: true,
    speed: 1500,
    rewind: true,
  };
  return (

    <Suspense fallback={<Spinner/>}>
      <div className="slider">
        <Splide aria-label="My Favorite Images"  options={ options2 } >

          <SplideSlide>

            <Suspense fallback={<Spinner/>}>
              <img src={back1} alt="background Slider 2"/>
            </Suspense>

          </SplideSlide>
          <SplideSlide>

            <Suspense fallback={<Spinner/>}>
              <img src={back3} alt="background Slider 3"/>
            </Suspense>
            
          </SplideSlide>
        </Splide>
      </div>
    </Suspense>
  )
}

export default SliderBanner