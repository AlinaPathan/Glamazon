import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Carousal = () => {
  return (
    <div
      className="mx-10 my-3 rounded-md h-[32rem] bg-cover bg-center flex items-center justify-between"
      style={{ backgroundImage: "url('/Carousal/MakeupCarausal.png')" }}>
      <SlArrowLeft className="h-[2rem] w-[2rem] mx-2 text-ChineseViolet hover:text-purple-600 hover:scale-110 transition-transform duration-200 ease-in-out" />

      <div className=""></div>
      <SlArrowRight className="h-[2rem] w-[2rem] mx-2 text-ChineseViolet hover:text-purple-600 hover:scale-110 transition-transform duration-200 ease-in-out" />
    </div>
  );
};

export default Carousal;
