import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

const PressRelease = ()=>{

    return(
        <div className=" w-[100%] h-[100%]">
            <div className=" w-[100%] h-52 overflow-hidden relative flex justify-center items-center ">
                <img className=" w-[100%] absolute h-[100%] object-cover" src="./Images/Village.png"/>
                <h1 className=" absolute z-10 text-4xl text-[#fff] font-semibold">PRESS RELEASE</h1>
            </div>
            <div className=" w-[100%] h-auto flex justify-center items-center ">
                <div className=" w-[50%] mt-8 justify-center items-center text-start">
                    <h5 className="text-[#1c75bc]">PRESS RELEASE <span className=" ml-20 text-[#1c75bc]">25 MARCH 2023</span></h5>
                    <hr className=" w-[49%] mt-1 border-[1.5px] border-[#1c75bc] "/>
                    <br/>
                    <h1 className=" text-[#1c75bc] font-semibold mb-10">LATEST TALIBAN DECREE ON ATTORNEY GENERAL’S OFFICE (AGO) FURTHER ERODES RULE OF LAW IN AFGHANISTAN</h1>
                    <p className=" mb-5 ">Hibatullah Akhundzada, Taliban "Supreme Leader", issued a verbal decree to change the Attorney General's Office to the "General Directorate for Monitoring and Follow-up of decrees and directives". With this decree, Taliban have reduced the AGO to an entity for follow-up of the orders of Taliban leadership, and they have curtailed GO's authorities for fighting crime, ensuring justice and supporting the fundamental rights of citizens.</p>

                    <p className=" mb-5 ">This is Taliban latest steps in dismantling Afghanistan's legal infrastructure. Since their return to power on 15 August 2021, Taliban have dissolved key national institutions including the Afghanistan Independent Human Rights Commission, the electoral bodies, Ministry of Women's Affairs and the special courts and prosecution units dedicated to elimination of violence against women and children, subsequently dismantling the legal infrastructure that protected human rights and the rights of vulnerable groups.</p>

                    <p className=" mb-5 ">This is Taliban latest steps in dismantling Afghanistan's legal infrastructure. Since their return to power on 15 August 2021, Taliban have dissolved key national institutions including the Afghanistan Independent Human Rights Commission,</p>

                    <p className=" mb-5 ">This is Taliban latest steps in dismantling Afghanistan's legal infrastructure. Since their return to power on 15 August 2021, Taliban have dissolved key national institutions including the Afghanistan Independent Human Rights Commission, the electoral bodies, Ministry of Women's Affairs and the special courts and prosecution units dedicated to elimination of violence against women and children, subsequently dismantling the legal infrastructure that protected human rights and the rights of vulnerable groups.</p>

                    <p className=" mb-5 ">This is Taliban latest steps in dismantling Afghanistan's legal infrastructure. Since their return to power on 15 August 2021, Taliban have dissolved key national institutions including the Afghanistan Independent Human Rights Commission.</p>

                    <p className=" mb-5 ">This is Taliban latest steps in dismantling Afghanistan's legal infrastructure. Since their return to power on 15 August 2021, Taliban have dissolved key national institutions including the Afghanistan Independent Human Rights Commission, the electoral bodies, Ministry of Women's Affairs and the special courts and prosecution units dedicated to elimination of violence against women and children, subsequently dismantling the legal infrastructure that protected human rights and the rights of vulnerable groups.</p>
                   
                    

                    
            </div>
                </div>

                    <select className=" flex-shrink-0 w-[250px] p-1 pr-2 mt-4 flex items-center justify-center text-center ml-[40%] rounded-3xl border-[#1c75bc] bg-[#1c75bc] text-[#fff] text-xs">
                    <option value="Download">DOWNLOAD PDF</option>
                    </select>

                    <div className="flex justify-center items-center gap-4 text-[#9b1c21] mt-5 cursor-pointer pb-5">   
                    <RiFacebookFill />
                    <SiTwitter />
                    <RiLinkedinFill />
                    </div>

                    <div className=" w-[100%] h-[300px] bg-[#f7f7f8] flex justify-center items-center ">
                            <div className="w-[60%] ">
                            <hr  className=" mt-9 border-[1px] border-[#1c75bc] "/>
                            <div className=" flex mt-5 ">
                            <div className=" w-[60%] h-[250px] pr-8 text-left"> 
                            <h4 className=" text-[#1c75bc] font-semibold">ABOUT RAWADARI</h4>
                            <p className=" mt-2 text-[15px]">Rawadari is an Afghan human rights organisation that aims to deepen and grow the human rights culture of Afghanistan, ultimately reducing the suffering of all Afghans, especially women, and girls.</p>
                            <p className=" mt-2 text-[15px]">Rawadari helps build an Afghan human rights movement, monitors human rights violations, and pursues justice and accountability for violations. Rawadari works with individuals and collectives inside and outside Afghanistan.</p>
                            </div>
                            <div className=" w-[40%] h-[250px] pl-8">
                                
                                <h4 className=" text-[#1c75bc] font-semibold">MEDIA CONTACT</h4>
                                <p>Rawadari Communications<span><br/>
                                    +93 792 000 000</span><br/>
                                    communications@rawadari.org</p>
                                
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
            
        </div>
    );
}
export default PressRelease;