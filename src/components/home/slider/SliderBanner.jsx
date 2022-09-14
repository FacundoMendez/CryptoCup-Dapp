import React, {Suspense}  from 'react'
import back1 from "./src/sliderImg1.jpg"
import back2 from "./src/sliderImg2.jpg"
import back3 from "./src/sliderImg3.jpg"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./sliderBanner.css"


/* import '@splidejs/react-splide/css/sea-green'; */

// or only core styles

const SliderBanner = () => {

  const options = {
    type   : 'loop',
    perPage: 1,
    focus  : 'center',
  };
  return (

    <Suspense fallback={"loading"}>
      <div className="slider">
        <Splide aria-label="My Favorite Images" 
          options={ options } >
          <SplideSlide>

            <Suspense fallback={"loading"}>
              <img src={back2} alt="background Slider 1"/>
            </Suspense>

          </SplideSlide>
          <SplideSlide>

            <Suspense fallback={"loading"}>
              <img src={back1} alt="background Slider 2"/>
            </Suspense>

          </SplideSlide>
          <SplideSlide>

            <Suspense fallback={"loading"}>
              <img src={back3} alt="background Slider 3"/>
            </Suspense>
            
          </SplideSlide>
        </Splide>
      </div>
    </Suspense>
  )
}

export default SliderBanner