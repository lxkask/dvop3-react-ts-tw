import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3
        }
      }
    ]
  };
  return (
    <div className="flex justify-center my-16">
     <div className="slider-container w-3/4">
        <Slider {...settings}>
          <div>
           <img src={img3} />
         </div>
          <div>
          <img src={img1} />
         </div>
         <div> 
            <img src={img2} />
         </div>
        </Slider>
     </div>
    </div>
  );
}

export default Carousel;