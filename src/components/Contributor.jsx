import React from "react";
// import { contributors } from "../utils";
import getContributors from "../query/contributor";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";

function Contributor() {
  const [contribs, setContribs] = useState([]);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    variableWidth: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  useEffect(() => {
    const loadRecords = async () => {
      try {
        const record = await getContributors();
        setContribs(record.items);
      } catch (error) {
        console.error("Error getting contributors:", error);
        throw error;
      }
    };

    loadRecords();
  }, []);

  return (
    <>
      <div className="slider-container pb-20 w-[95%] m-auto">
        <Slider {...settings}>
          {contribs.map((contributor, index) => (
            <Contributor_card key={index} contributor={contributor} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Contributor;

function Contributor_card({ contributor }) {
  return (
    <>
      <div className="contrib-container relative mx-3 h-[424px] w-[282px] ">
        <img
          src={`${import.meta.env.VITE_API_URL}/api/files/${contributor.collectionId}/${contributor.id}/${contributor.image}`}
          className="w-full h-full object-cover   "
        />
        <div className="w-full h-1/4 bg-gradient-to-b from-[#25252506] via-[#000000d1] to-black  absolute bottom-0 px-4">
          <div className=" font-DMMono flex items-end text-slate-200 text-lg h-16">
            {contributor.nom}
          </div>
          <div className="font-DMMono text-[#8f8f8fd4] text-lg">
            {contributor.fonction}
          </div>
        </div>
        <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
