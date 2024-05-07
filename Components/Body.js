"use client";
import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import Spotlight from "@/app/Spotlight/page";

const Body = ({ images }) => {
 
  const slidesRef = useRef([]);
  const buttonsRef = useRef([]);
  const counterRef = useRef(0);

  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });

    buttonsRef.current.forEach((button, i) => {
      button.addEventListener('click', () => {
        resetbg();
        counterRef.current = i;
        slideImg();
        button.style.backgroundColor = 'black';
      });
    });

    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const slideImg = () => {
    slidesRef.current.forEach((slide) => {
      slide.style.transform = `translateX(-${counterRef.current * 100}%)`;
    });
  };

  const resetbg = () => {
    buttonsRef.current.forEach((button) => {
      button.style.backgroundColor = 'transparent';
    });
  };

  const changeClr = () => {
    resetbg();
    buttonsRef.current[counterRef.current].style.backgroundColor = 'white';
  };

  const nextSlide = () => {
    if (counterRef.current < slidesRef.current.length - 1) {
      counterRef.current++;
    } else {
      counterRef.current = 0;
    }
    slideImg();
    changeClr();
  };

  const prevSlide = () => {
    if (counterRef.current > 0) {
      counterRef.current--;
    } else {
      counterRef.current = slidesRef.current.length - 1;
    }
    slideImg();
    changeClr();
  };

  return (
    <div className=" relative">
      <div className=" flex relative justify-center items-center overflow-hidden w-[100%] h-[600px]">
      <div className=" w-[100%] h-[100%] ">

        {images.map((image, index) => (
          <div key={index} ref={(el) => (slidesRef.current[index] = el)} className=" w-[100%] h-[100%] absolute transition-[1s]">
            <img className=" w-[100%] h-[100%] object-cover" src={image} alt={`Slide ${index}`} />

            <div className=" w-96 absolute top-[180px] left-52 bg-white p-8">
            <div className=" relative">
              <p className=" text-xs mb-2 text-[#1C75BC]">REPORTS</p>
              <hr className="text-[#1C75BC] mb-2" />
              <h3 className=" text-[#1C75BC] mb-2">
                LATEST TALIBAN DECREE ON ATTORNEY GENERAL’S OFFICE (AGO) FURTHER
                ERODES RULE OF LAW IN AFGHANISTAN.
              </h3>
              <p className=" text-xs mb-2 ">
                Habitullah Akhundzada, Taliban’s “Supreme Leader”, issued a
                verbal decree to change the Attorney General’s Office to the
                “General Directorate for Monitoring and Follow-up of decrees and
                directives”.
              </p>
              <div className=" bg-[#FEC00F] inline-block p-4 absolute -right-8 -bottom-10 cursor-pointer text-white">
                <FaArrowRight />
              </div>
            </div>
          </div>

          </div>
        ))}
      </div>
      <div className=" absolute items-center flex gap-[10px] mt-[500px]">
        {images.map((image, index) => (
          <div key={index} ref={(el) => (buttonsRef.current[index] = el)} className=" w-[12px] h-[12px] border-[1px] border-white rounded-[50%] z-[4] cursor-pointer" />
        ))}
      </div>
    </div>


      
      <div className=" h-[250px] pt-4 flex-col items-center justify-center bg-[#1C75BC] text-white">
        <p className=" text-center text-[24.5px] text-wrap mx-60 pt-4 font-semibold">
        Rawadari is an Afghan human rights organisation that aims to 
                    deepen and grow the human rights culture of Afghanistan, ultimately 
                    reducing the suffering of all Afghans, especially women and girls.
        </p>
        <div className="flex justify-center items-center mt-10 relative">
          <Link
            href="/OurWork"
            className=" border-2 border-white-700 rounded-3xl pl-7 pr-12 py-1"
          >
            READ MORE
          </Link>
          <GoArrowRight className=" absolute ml-28" />
        </div>
      </div>
      <div className=" p-6 bg-[#F7F7F8]">
        <div className=" w-[90%] ml-12 flex justify-between">
          <div className="flex items-center ">
            <div className=" text-7xl  inline-block font-bold text-[#FEC00F]">
              <TbMinusVertical />
            </div>

            <h2 className=" inline-block text-5xl text-[#1c75bc] -ml-4">Lastest</h2>
          </div>

          <div className=" mt-9 mr-[4%] ">
            <Link
              href="/OurWork">
              <button className=" border-2 border-[#1C75BC] font-semibold flex justify-center items-center text-[#1C75BC] gap-2 py-1 px-2 rounded-3xl ">SEE MORE <GoArrowRight className=" text-[#1C75BC]" /></button>
            </Link>            
          </div>

        </div>

        <div className="flex w-[100%] h-auto flex-col items-center">
          <div className=" w-[90%] mt-10 h-auto px-[22px] grid grid-cols-3 gap-y-5 items-center " >
                    <Link href="/Spotlight"><div className=" relative overflow-hidden border-[15px] border-[#e4eaf2] w-[90%] h-[500px] bg-[#1c75bc] text-white items-center text-start">
                        <div className=" w-[100%] p-[20px] leading-8"> 
                            <h5>SPECIAL REPORT</h5>
                            <hr/>
                            <p className=" mt-[20px] text-[1.5rem]">Arbitrary and Illegal Detentions in Taliban Ruled Afghanistan</p>
                        </div>
                        <img className=" absolute bottom-0 w-[100%] object-cover" src="./Images/student.jpg" alt="" />
                        <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
                        </div></Link>

          <Link href=""><div className=" relative overflow-hidden border-[15px] border-[#e4eaf2] w-[90%] h-[500px] bg-[#1c75bc] text-white items-center text-start">
                        <div className=" w-[100%] p-[20px] leading-8"> 
                            <h5>REPORT</h5>
                            <hr/>
                            <p className=" mt-[20px] text-[1.5rem]">Unlawful & targeted killings in Afghanistan: Kandahar, Nangarhar, Panjshir and Sar-e Pol</p>
                        </div>
                        <img className=" absolute bottom-0 w-[100%] object-cover" src="./Images/student.jpg" alt="" />
                        <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
                    </div></Link>
          <Link href="/PressRelease"><div className=" relative overflow-hidden border-[15px] border-[#e4eaf2] w-[90%] h-[500px] bg-[#1c75bc] text-white items-center text-start">
          <div className=" w-[100%] p-[20px] leading-8"> 
                  <h5>PRESS RELEASE</h5>
                        <hr/>
                            <p className=" mt-[20px] text-[1.5rem]">Repression, Regressions & Reversals</p>
                        </div>
                        <img className=" absolute bottom-0 w-[100%] object-cover" src="./Images/student.jpg" alt="" />
                        <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
                    </div></Link>
          <div className=" relative overflow-hidden border-[15px] border-[#e4eaf2] w-[90%] h-[500px] bg-[#1c75bc] text-white items-center text-start">
                        <div className=" w-[100%] p-[20px] leading-8"> 
                            <h5>SPECIAL REPORT</h5>
                            <hr/>
                            <p className=" mt-[20px] text-[1.5rem]">Arbitrary and Illegal Detentions in Taliban Ruled Afghanistan</p>
                        </div>
                        <img className=" absolute bottom-0 w-[100%] object-cover" src="./Images/student.jpg" alt="" />
                        <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
                    </div>
          <div className=" relative overflow-hidden border-[15px] border-[#e4eaf2] w-[90%] h-[500px] bg-[#1c75bc] text-white items-center text-start">
                        <div className=" w-[100%] p-[20px] leading-8"> 
                            <h5>SPECIAL REPORT</h5>
                            <hr/>
                            <p className=" mt-[20px] text-[1.5rem]">Arbitrary and Illegal Detentions in Taliban Ruled Afghanistan</p>
                        </div>
                        <img className=" absolute bottom-0 w-[100%] object-cover" src="./Images/student.jpg" alt="" />
                        <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
                    </div>
          <div className=" relative overflow-hidden border-[15px] border-[#e4eaf2] w-[90%] h-[500px] bg-[#1c75bc] text-white items-center text-start">
                        <div className=" w-[100%] p-[20px] leading-8"> 
                            <h5>SPECIAL REPORT</h5>
                            <hr/>
                            <p className=" mt-[20px] text-[1.5rem]">Arbitrary and Illegal Detentions in Taliban Ruled Afghanistan</p>
                        </div>
                        <img className=" absolute bottom-0 w-[100%] object-cover" src="./Images/student.jpg" alt="" />
                        <button className=" absolute z-10 p-[10px] border-[1px] border-white rounded-[50%] bg-transparent right-[30px] bottom-[30px] cursor-pointer"><GoArrowRight className=" text-[1.5rem] text-white z-10 "/></button>
                    </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
        <Link
              href="/OurWork">
              <button className=" border-2 border-[#1C75BC] font-semibold flex justify-center items-center text-[#1C75BC] gap-2 py-2 px-4 rounded-3xl ">SEE MORE <GoArrowRight className=" text-[#1C75BC]" /></button>
            </Link>  
        </div>
      </div>
        <div className=" flex justify-center items-center w-[100%] h-[450px] ">
      <div className="flex justify-between m-10 w-[90%] h-[400px] bg-[#FEF2CF]">
        <div className=" p-9 w-[60%] items-start ">
          <p className=" text-xs text-[#1C75BC] mb-4">SPOTLIGHTS</p>
          <h3 className="text-3xl font-bold text-[#1C75BC] mb-3">
            I was invited for an interview, but the next day, they called me and
            removed my name from the list.
          </h3>
          <p>
            I am a female Artist living in Kabul. When the Taliban came to
            power, I burned all of my artwork and painting materials that I had
            brought from neighboring countries. I could not send my resume to
            find a job anywhere due to fear of arrest by the Taliban. I can no
            longer do the painting to earn an income and have applied to lower
            NGO positions to survive.
          </p>
          
        <Link
              href="/Spotlight">
              <button className=" border-2 mt-4 border-[#1C75BC] font-semibold flex justify-center items-center text-[#1C75BC] gap-2 py-2 px-6 rounded-3xl ">READ MORE <GoArrowRight className=" text-[#1C75BC] text-xl" /></button>
            </Link>  
        
        </div>
        <div className=" w-[30%] ">
          <img className=" w-[100%] h-[100%] object-cover " src="./Images/spotlight.PNG" />
        </div>
      </div>
      </div>
        <div className=" flex m-20 items-center gap-40 justify-center">
          <div className=" flex flex-col w-[300px]">
            <p className=" text-xs text-[#1C75BC] mb-2">NEWSLETTER</p>
            <hr className="text-[#1C75BC] mb-1 font-bold text-lg" />
            <h3 className=" text-3xl font-semibold text-[#FEC00F] mb-4 ">
              SIGN UP FOR THE NEWSLETTER
            </h3>
            <p className="text-xs text-[#1C75BC] mb-2 font-semibold">
              Sign up to receive monthly and periodic news and insight into the
              activities of Rawadari and issues affecting human rights
              defenders.
            </p>
          </div>
          <div className=" flex flex-col gap-4 mt-10">
            <input
              className=" border-[1px] border-[#FEC00F] w-[340px] px-4 py-2 placeholder-[#1C75BC] text-[#1c75bc] rounded-3xl focus:outline-none active:outline-none  "
              type="text"
              placeholder="Your Name"
            />
            <input
              className=" border-[1px] border-[#FEC00F] w-[340px] px-4 py-2 placeholder-[#1C75BC] text-[#1c75bc] focus:outline-none active:outline-none rounded-3xl"
              type="email"
              placeholder="Email"
            />
            <div className="flex justify-center items-center mt-1 relative">
              <Link
                href="/OurWork"
                className=" border-2 text-xs border-[#1C75BC] text-[#1C75BC] font-semibold rounded-3xl pl-5 pr-10 py-2"
              >
                SUBMIT
              </Link>
              <FaArrowRightLong className=" absolute ml-[60px] text-[#1C75BC]" />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Body;
