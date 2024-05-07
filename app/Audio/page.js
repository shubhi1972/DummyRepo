import React from "react";

const Audio = () => {
  return (
    <div>
      <img className=" w-[100%]" src="./Images/bg.PNG" />

      <div className="mx-36 mt-14 mb-5">
        <hr className=" border-[#FEC00F] border-4" />
      </div>

      <div className="mx-36 w-[300px] mb-2">
        <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">Listen More</h1>
      </div>
      <div className=" mx-36 mt-14 flex gap-10 justify-between">
        <div className=" flex flex-col gap-2">
          <img src="./Images/ocam1.PNG" />
          <p className=" mt-5 text-xs text-[#1C75BC] font-semibold">
            25 March 2023
          </p>
          <hr className="border-[#1C75BC] border" />
          <h2 className=" mt-5 font-bold text-[#1C75BC] text-2xl">
            I was invited for an interview, butthe next day,they called me and
            removed my name from the list
          </h2>
        </div>
        <div className=" flex flex-col gap-2">
          <img src="./Images/ocam2.PNG" />
          <p className=" mt-5 text-xs text-[#1C75BC] font-semibold">Audio</p>
          <hr className="border-[#1C75BC] border" />
          <h2 className=" mt-5 font-bold text-[#1C75BC] text-2xl">
            I was invited for an interview, butthe next day,they called me and
            removed my name from the list
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Audio;
