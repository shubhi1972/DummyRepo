import React from "react";
// import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";


const Spotlight = ()=>{
    return(
        <div className=" w-[100%]">
            <div className=" w-[100%] h-[250px] overflow-hidden relative flex justify-center items-center ">
                <img className=" w-[100%] absolute h-[100%] object-cover" src="./Images/spot.jpg"/>
                <h1 className=" absolute z-10 text-4xl text-[#fff] font-semibold">SPOTLIGHT</h1>
            </div>
            <div className=" w-[100%] h-auto flex justify-center items-center ">
            <div className=" w-[70%] mt-8 justify-center items-center text-start">
                <h5 className="text-[#1c75bc] text-sm">SPOTLIGHT <span className=" ml-44 text-[#1c75bc]">25 MARCH 2023</span></h5>
                <hr className=" w-[40%] mt-1 border-[1px] border-[#1c75bc] "/>
                 <br/>

                 <h1 className=" text-[#1c75bc] text-[33px] font-semibold">I was invited for an interview, but the next day, they called me and removed my name from the list</h1>

                 <p className=" mt-4">Hibatullah Akhundzada, Taliban "Supreme Leader", issued a verbal decree to change the Attorney General's Office to the "General Directorate for Monitoring and Follow-up of decrees and directives". With this decree, Taliban have reduced the AGO to an entity for follow-up of the orders of Taliban leadership, and they have curtailed GO's authorities for fighting crime, ensuring justice and supporting the fundamental rights of citizens.</p>
                 
                 <img className=" w-[100%] h-[100%] object-cover mt-6" src="./Images/SPOTLIGHT_image.png"/>

                 <div className=" w-[100%] h-auto flex justify-between mt-4"> 
                 <p className=" w-[50%] text-start">Hibatullah Akhundzada, Taliban "Supreme Leader", issued a verbal decree to change the Attorney General's Office to the "General Directorate for Monitoring and Follow-up of decrees and directives". With this decree, Taliban have reduced the AGO to an entity for follow-up of the orders of Taliban leadership, and they have curtailed GO's authorities for fighting crime, ensuring justice and supporting the fundamental rights of citizens.</p>

                 <p className=" w-[48%] bg-[#a5c8e4] text-[#3974b7] font-bold text-[35px] p-3 ">...they called me and removed my name from the list...</p>
                 </div>

                 <p className=" mt-4">Hibatullah Akhundzada, Taliban "Supreme Leader", issued a verbal decree to change the Attorney General's Office to the "General Directorate for Monitoring and Follow-up of decrees and directives". With this decree, Taliban have reduced the AGO to an entity for follow-up of the orders of Taliban leadership, and they have curtailed GO's authorities for fighting crime, ensuring justice and supporting the fundamental rights of citizens.</p>

                 <p className=" mt-4">This is Taliban's latest step in dismantling Afghanistan's legal infrastructure. Since their return to power on 15 August 2021, Taliban have dissolved key national institutions including the Afghanistan Independent Human Rights Commission, the electoral bodies, Ministry of Women's Affairs and the special courts and prosecution units dedicated to elimination of violence against women and children, subsequently dismantling the legal infrastructure that protected human rights and the rights of vulnerable groups.</p>

                 <p className=" mt-4">Rawadari's findings illustrate that in the past 19 months, Taliban have carried out arbitrary arrests and punishments in both civil and criminal cases. The existing laws have been overlooked and full investigations have not been carried out in these cases.</p>

                 <p className=" mt-4">Rawadari's findings illustrate that in the past 19 months, Taliban have carried out arbitrary arrests and punishments in both civil and criminal cases. The existing laws have been overlooked and full investigations have not been carried out in these cases.</p>

            </div>
            </div>

            <div className=" w-70% flex justify-center mt-[4%] items-center">
            <button className=" bg-[#1c75bc] text-[#fff] flex justify-center items-center gap-3 text-lg px-4">SHARE <FaArrowRightLong  /></button>
            </div>
                    <div className="flex justify-center w-[100%] items-center gap-4 text-[#9b1c21] mt-[2%]  pb-5">   
                    <RiFacebookFill  className=" text-[1.5rem] cursor-pointer"/>
                    <SiTwitter className=" text-[1.5rem] cursor-pointer"/>
                    <RiLinkedinFill className=" text-[1.5rem] cursor-pointer"/>
                    </div>
            
        </div>
    );}

    export default Spotlight;