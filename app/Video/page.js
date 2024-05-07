import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Video = () => {
  return (
    <div>
      <div className=" bg-[#1C75BC] text-white font-bold text-3xl text-center py-14">
        <h1>VIDEOS</h1>
      </div>
      <div className="mx-36 my-10 flex flex-col  gap-5">
        <h1 className=" text-[#1C75BC] font-semibold mb-2 text-3xl">
          I was invited for an interview, butthe next day,they called me and
          removed my name from the list
        </h1>
        <a
          className=" cursor-pointer"
          href="https://www.youtube.com/watch?v=kRpPu6OoP00"
          target="_blank"
        >
          <img className=" rounded-sm w-[100%]" src="./Images/vid1.PNG" />
        </a>
        <p>
          Habitullah Akhundzada, Taliban ’ s “Supreme Leader ”, issued a verbal
          decree to change the Attorney General’ s Office to the “General
          Directorate for Monitoring and Follow-up of decrees and directives ”.
          With this decree, Taliban have reduced the AGO to an entity for
          follow-up of the orders of Taliban leadership, and they have curtailed
          AGO’ s authorities for fighting crime, ensuring justice and supporting
          the fundamental rights of citizens.
        </p>
      </div>
      <div className=" flex gap-5 text-[#9B1C21] justify-center items-center text-xl">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
      <div className="mx-36 mt-14 mb-5">
        <hr className=" border-[#FEC00F] border-4" />
      </div>

      <div className="mx-36 w-[300px] mb-2">
        <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
          Previous Campaigns
        </h1>
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

export default Video;
