import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import PressRelease from "../PressRelease/page";
import SpecialReport from "../SpecialReport/page";

const OurWork = () => {
  return (
    <div>

      <div className="w-[100%] h-[250px] bg-[#1c75bc] p-16 flex justify-start ">
        <div className=" w-[45%] ml-8">
          <h1 className=" mb-4 text-white text-4xl font-semibold">
            OUR RESOURCES
          </h1>
          <p className=" text-white">
            We’ve developed extensive evidence-based reports and publications to
            support Afghanistan’s Human Rights and our partners in building a
            world without violent.
          </p>
        </div>
      </div>
  
        <div className=" w-[100%] p-16 ml-8">
          <h1 className=" text-4xl text-[#1c75bc] font-semibold">
            Explore our resources
          </h1>
          <input
            type="search"
            placeholder="Search"
            className=" w-[95%] h-8 p-5 border-[1.5px] text-[#1c75bc] border-[#FEC00F] rounded-3xl placeholder-[#1c75bc] mt-6 mb-6 focus:outline-none active:outline-none "
          />
          <br />
          <select className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] text-xs p-2 px-2 font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl ">
            <option value="Filterbydate"> FILTER BY DATE</option>
            <option value="Filterbyreport"> FILTER BY REPORT</option>
          </select>
          <button className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] ml-4 text-xs p-2 px-4 font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl">
            CLEAR FILTER
          </button>
          <br />
          <div className=" flex w-[100%] mt-6">
            <Link
              href="/OurWork"
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 mr-4 text-xs p-2 px-4 w-[8.1rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              ALL
            </Link>
            <Link
              href="/SpecialReport"
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 mr-4 text-xs p-2 px-4 w-[8.1rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              REPORT
            </Link>
            <Link
              href="/PressRelease"
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 mr-4 text-xs p-2 px-4 w-[8.1rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              PRESS RELEASES
            </Link>
            <Link
              href="/Spotlight"
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 mr-4 text-xs p-2 px-4 w-[8.1rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              SPOTLIGHTS
            </Link>
            <Link
              href="/Audio"
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 mr-4 text-xs p-2 px-4 w-[8.1rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              AUDIO
            </Link>
            <Link
              href="/Video"
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 mr-4 text-xs p-2 px-4 w-[8.1rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              VIDEOS
            </Link>
            <Link
              href="/Campaigns"
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 text-xs p-2 px-4 w-[8.1rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              CAMPAIGNS
            </Link>
          </div>
        </div>

        {/* ---------------------------------------- */}
      

      <div className=" w-[100%] h-auto bg-[#f7f7f8] relative flex justify-center items-center">
        <div className=" w-[90%]  p-10 grid grid-cols-3 gap-8 justify-items-center items-center ">
          <Link href="/SpecialReport">
            <div className=" w-[100%] relative h-[450px] p-3 bg-[#1c75bc] border-[15px] border-[#e4eaf2] ">
              <p className=" text-white text-xs pb-2">SPECIAL REPORT</p>
              <hr className=" text-white pb-4" />
              <h3 className=" text-white font-semibold mb-24">
                Arbitrary and Illegal Detentions in Taliban- Ruled Afghanistan
              </h3>
              <img
                className=" w-[100%] object-cover absolute bottom-0 left-0 "
                src="./Images/student.jpg"
              />
              <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
            </div>
          </Link>
          <div className=" w-[100%] relative h-[450px] p-3 bg-[#1c75bc] border-[15px] border-[#e4eaf2] ">
            <p className=" text-white text-xs pb-2">REPORT</p>
            <hr className=" text-white pb-4" />
            <h3 className=" text-white font-semibold mb-24">
              Arbitrary and Illegal Detentions in Taliban- Ruled Afghanistan
            </h3>
            <img
              className=" w-[100%] object-cover absolute bottom-0 left-0 "
              src="./Images/student.jpg"
            />
            <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
          </div>
          <Link href="/PressRelease">
            <div className=" w-[100%] relative h-[450px] p-3 bg-[#1c75bc] border-[15px] border-[#e4eaf2] ">
              <p className=" text-white text-xs pb-2">PRESS RELEASE</p>
              <hr className=" text-white pb-4" />
              <h3 className=" text-white font-semibold mb-24">
                Arbitrary and Illegal Detentions in Taliban- Ruled Afghanistan
              </h3>
              <img
                className=" w-[100%] object-cover absolute bottom-0 left-0 "
                src="./Images/student.jpg"
              />
              <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
            </div>
          </Link>
          <div className=" w-[100%] relative h-[450px] p-3 bg-[#1c75bc] border-[15px] border-[#e4eaf2] ">
            <p className=" text-white text-xs pb-2">SPECIAL REPORT</p>
            <hr className=" text-white pb-4" />
            <h3 className=" text-white font-semibold mb-24">
              Arbitrary and Illegal Detentions in Taliban- Ruled Afghanistan
            </h3>
            <img
              className=" w-[100%] object-cover absolute bottom-0 left-0 "
              src="./Images/student.jpg"
            />
            <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
          </div>
          <div className=" w-[100%] relative h-[450px] p-3 bg-[#1c75bc] border-[15px] border-[#e4eaf2] ">
            <p className=" text-white text-xs pb-2">SPECIAL REPORT</p>
            <hr className=" text-white pb-4" />
            <h3 className=" text-white font-semibold mb-24">
              Arbitrary and Illegal Detentions in Taliban- Ruled Afghanistan
            </h3>
            <img
              className=" w-[100%] object-cover absolute bottom-0 left-0 "
              src="./Images/student.jpg"
            />
            <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
          </div>
          <div className=" w-[100%] relative h-[450px] p-3 bg-[#1c75bc] border-[15px] border-[#e4eaf2] ">
            <p className=" text-white text-xs pb-2">SPECIAL REPORT</p>
            <hr className=" text-white pb-4" />
            <h3 className=" text-white font-semibold mb-24">
              Arbitrary and Illegal Detentions in Taliban- Ruled Afghanistan
            </h3>
            <img
              className=" w-[100%] object-cover absolute bottom-0 left-0 "
              src="./Images/student.jpg"
            />
            <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
          </div>
        </div>
        <button className=" border-[1.5px] absolute border-[#1c75bc] -mb-8 text-[#1c75bc] mt-[5%] bottom-0 flex-shrink-0 text-xs p-2 px-4 w-[8.1rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl">
          LOAD MORE{" "}
        </button>
      </div>

      <div className=" flex w-[100%] items-center justify-center bg-[#f7f7f8] p-10 "></div>
      <div className=" flex items-center gap-40 justify-center bg-[#f7f7f8]">
        <div className=" flex flex-col w-[300px]">
          <p className=" text-xs text-[#1C75BC] mb-2">NEWSLETTER</p>
          <hr className="text-[#1C75BC] mb-1 font-bold text-lg" />
          <h3 className=" text-3xl font-semibold text-[#FEC00F] mb-4 ">
            SIGN UP FOR THE NEWSLETTER
          </h3>
          <p className="text-xs text-[#1C75BC] mb-2 font-semibold">
            Sign up to receive monthly and periodic news and insight into the
            activities of Rawadari and issues affecting human rights defenders.
          </p>
        </div>
        <div className=" flex flex-col gap-4 mt-10">
          <input
            className=" border-[1px] border-[#FEC00F] text-[#1c75bc] focus:outline-none active:outline-none w-[340px] px-4 py-2 placeholder-[#1C75BC] rounded-3xl"
            type="text"
            placeholder="Your Name"
          />
          <input
            className=" border-[1px] focus:outline-none active:outline-none border-[#FEC00F] w-[340px] text-[#1c75bc] px-4 py-2 placeholder-[#1C75BC] rounded-3xl"
            type="email"
            placeholder="Email"
          />
          <div className="flex justify-center mb-5 items-center mt-1 relative">
          <Link
              href="/OurWork">
              <button className=" border-2 border-[#1C75BC] font-semibold flex justify-center items-center text-[#1C75BC] gap-2 py-1 px-3 text-sm rounded-3xl ">SUBMIT<GoArrowRight className=" text-[#1C75BC]" /></button>
            </Link>  
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default OurWork;
