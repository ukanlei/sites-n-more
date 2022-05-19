import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const images = [img1, img2, img3, img4];

const Slider = () => {
    return(
        <div className="image-container">
            <img alt="" src="[0]" />
        </div>
    )
}
export default Slider;
