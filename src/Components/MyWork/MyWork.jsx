import React from "react";
import "./MyWork.css";
import data from "../../assets/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function MyWork() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div id="work">
      <div className="my-work-title">
        <h1>My latest work</h1>
      </div>

      <div className="my-work-container">
        <Slider {...settings}>
          {data.map((work, index) => {
            return (
              <div className="card">
                <div className="p-img">
                  <img src={work.p_img} alt="" />
                </div>
                <div className="p-info">
                  <h1>{work.p_name}</h1>
                  <p>{work.p_dec}</p>
                  <button>
                    <a href={work.p_link} target="_blank">
                      Soruce Code.
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default MyWork;
