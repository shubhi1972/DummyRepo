import React from "react";
import Link from "next/link";
import { RiFacebookFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#1C75BC]">
        <div className=" py-10 mt-6 flex items-center justify-center gap-5">
          <img src="./Images/flogo.PNG" />
          <p className=" text-white font-semibold">
            FOR AN EQUAL AND <br />
            PEACEFUL AFGANISTAN
          </p>
        </div>
        <div className="flex gap-4 text-white text-xs justify-center -mt-8 font-thin">
          <Link href="/OurWork">Media Enquiry |</Link>
          <Link href="/OurWork">Press Release |</Link>
          <Link href="/AboutUs">Get Involved |</Link>
          <Link href="/AboutUs">About Us |</Link>
          <Link href="/AboutUs">Meet The Team |</Link>
        </div>
        <p className="flex text-xs justify-center mt-3 font-thin text-[#FEC00F] ">
          info@rawadari.org
        </p>
        <div className="flex justify-center gap-4 text-white mt-5 cursor-pointer pb-5">
          <RiFacebookFill />
          <SiTwitter />
          <RiLinkedinFill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
