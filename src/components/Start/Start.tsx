import React from "react";
import girlWithCat from "../../assets/img/girl-and-cat.png";
const Start = () => {
  return (
    <div className="py-30px pr-30px h-full">
      <div className=" py-30px bg-accentBg rounded-3xl w-672 h-832 flex items-center justify-center">
        <img src={girlWithCat} alt="Girl with cat" className="h-auto w-auto" />
      </div>
    </div>
  );
};

export default Start;
