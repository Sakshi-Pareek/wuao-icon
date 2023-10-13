import React from "react";
import HeaderBottomRightImg from '../assets/images/png/header_bottom_right_img.png'
import HeaderOrangeLeftImg from '../assets/images/png/header_orange_left_layer.png'
import HeaderOrangeRightImg from '../assets/images/png/header_orange_right_layer.png'

const LayersSection = () => {
  return (
    <div className="position-relative d-xl-block d-none overflow-x-hideen">
      <img
        src={HeaderBottomRightImg}
        alt="layer"
        className="header_bottom_right_img"
      />
      <img
        src={HeaderOrangeLeftImg}
        alt="layer"
        className="header_orange_left_layer"
      />
      <img
        src={HeaderOrangeRightImg}
        alt="layer"
        className="header_orange_right_layer"
      />
    </div>
  );
};

export default LayersSection;
