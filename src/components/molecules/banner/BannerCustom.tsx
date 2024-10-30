import React from "react";
import Banner from "../../../img/Banner.png";

const BannerCustom: React.FC = () => {
  return (
    <div className="d-flex align-items-center" style={{height: "100%"}}>
      <img
        src={Banner}
        alt="Banner"
        className="w-100"
      />
    </div>
  );
};

export default BannerCustom;
