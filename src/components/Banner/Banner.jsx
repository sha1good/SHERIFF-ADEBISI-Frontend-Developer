import { useState } from "react";
import "./banner.css";

const Banner = () => {

     const [sliderIndex, setSliderIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2166/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/586031/pexels-photo-586031.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

   const handleArrow = (direction) =>{
     if(direction === "l"){
         setSliderIndex(sliderIndex !== 0 ?  sliderIndex - 1 : 3)
     }

    if(direction === "r"){
         setSliderIndex(sliderIndex !== 3 ? sliderIndex + 1 : 0)
    }
   }
  return (
    <div className="container">
      <div className="arrowContainer" style={{left: "10px"}} onClick={()=>handleArrow("l")}>
        <img src="/img/arrowl.png" alt="" className="arrowImg"/>
      </div>
      <div className="wrapperBanner" style={{ transform:`translateX(${-100*sliderIndex}vw)`}}>
        {images.map((image, i) => (
          <div className="imgContainer" key={i}>
            <img src={image} alt="" className="rocketImages"/>
          </div>
        ))}
      </div>
      <div className="arrowContainer" style={{right: "10px"}} onClick={() => handleArrow("r")}>
        <img src="/img/arrowr.png" alt=""  className="arrowImg"/>
      </div>
    </div>
  );
};

export default Banner;
