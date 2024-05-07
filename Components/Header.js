"use client";
import Link from "next/link";
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Header = ()=>{    
    return(
      <div className="w-[100%] h-[100px] relative">
        <div className=" w-[100%] h-[100px] flex fixed z-20 justify-around items-center py-3 bg-[#edeff5] text-[#1c75bc]"> 
            <div className=" w-[15%] h-[80px]">
                <img src="./Images/rawadari_logo.jpg" className=" w-[100%] h-[100%]" alt="logo" />
            </div>
            <div className=" w-[38%] flex justify-center items-center">
                <ul className=" flex gap-[50px] justify-around">
                    <Link href="/"><li className=" text-[20px] list-none font-semibold cursor-pointer text-[#1c75bc]">Home</li></Link>
                    <Link href="/OurWork"><li className="text-[20px] list-none font-semibold cursor-pointer text-[#1c75bc]">Our Work</li></Link>
                    <Link href="/Timeline"><li className="text-[20px] list-none font-semibold cursor-pointer text-[#1c75bc]">Timeline</li></Link>
                    <Link href="/AboutUs"><li className="text-[20px] list-none font-semibold cursor-pointer text-[#1c75bc]">About Us</li></Link>
                </ul>
            </div>
    
            <div className=" w-[32%] flex justify-between">
    
            <div className=" border-[2px] border-[#1c75bc] flex justify-evenly items-center rounded-[30px] w-[60%] h-40px ">
                <input className=" ml-2 w-[80%] h-[80%] bg-[#edeff5] text-[18px] border-none focus:border-none focus:outline-none hover:border-none hover:outline-none active:border-none active:outline-none " type="search" /> 
                <IoIosSearch  className=" w-[30px] h-[40px] text-[#1c75bc] font-bold" />
                </div>
                
                
            <select className=" bg-[#1c75bc] text-white rounded-3xl text-[12px] py-2 pr-4 pl-3 mr-4 font-semibold uppercase cursor-pointer" >
            <option value="English">ENG</option>
            <option value="Pashto">PASH</option>
            <option value="Dari">DARI</option>  
            </select>
            </div>
    
        </div>
        </div>
    );
    };
    
    export default Header;