import React from "react";
import Slider from "react-slick";
import "./slide.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         color: "blue",
//         background: "#ec0909f7",
//       }}
//       onClick={onClick}
//     >
//       <i class="fas fa-angle-right"></i>
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         color: "blue",
//         background: "#ec0909f7",
//       }}
//       onClick={onClick}
//     >
//       <i class="fas fa-angle-left"></i>
//     </div>
//   );
// }

const Slide = () => {
  const slideData = [
    "/Image/HomeSlider/homeSlide.png",
    "/Image/HomeSlider/homeSlide.png",
    "/Image/HomeSlider/homeSlide.png",
    "/Image/HomeSlider/homeSlide.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="customSlide">
      <Slider {...settings}>
        {slideData.map((item) => (
          <div className="singleSlideContainer pe-3">
            <div className="slideItem">
              <img src={item} alt="" width="100%" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
