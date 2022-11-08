import React, {Suspense}  from 'react'
import back1 from "./src/slider1.jpeg"
/* import back2 from "./src/slider2.jpeg" */
import back3 from "./src/challengeSlider.jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Spinner from '../../config/spinner/Spinner';
import '@splidejs/splide/css/sea-green';
import "./sliderBanner.css"

const SliderBanner = () => {

  const options2 = {
    type   : 'fade',
    perPage: 1,
    focus  : 'center',
    autoplay : true,
    pauseOnHover: true,
    preloadPages:2,
    speed: 1500,
    rewind: true,
  };
  return (

    <Suspense fallback={<Spinner/>}>
      <div className="slider">
        <Splide aria-label="My Favorite Images"  options={ options2 } >

          <SplideSlide>

            <Suspense fallback={<Spinner/>}>
              <img src={back3} alt="background Slider 2"/>
            </Suspense>

          </SplideSlide>
          <SplideSlide>

            <Suspense fallback={<Spinner/>}>
              <img src={back1} alt="background Slider 3"/>
            </Suspense>
            
          </SplideSlide>
        </Splide>
      </div>
    </Suspense>
  )
}

export default SliderBanner