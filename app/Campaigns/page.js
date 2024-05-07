import React from "react";

const Campaigns = () => {
  return (
    <div>
      <div className=" bg-[#1C75BC] text-white font-bold text-3xl text-center py-14">
        <h1>CAMPAIGNS</h1>
      </div>
      <img className=" w-[100%]" src="./Images/cam1.PNG" />
      <div className="flex flex-col gap-6 mx-52 my-7">
        <h1 className=" font-semibold text-4xl text-[#1C75BC]">
          I was invited for an interview, but the next day, they called me and
          removed my name from the list
        </h1>
        <p className=" text-[14px]">
          Habitullah Akhundzada, Taliban ’ s “Supreme Leader ”, issued a verbal
          decree to change the Attorney General’ s Office to the “General
          Directorate for Monitoring and Follow-up of decrees and directives ”.
          With this decree, Taliban have reduced the AGO to an entity for
          follow-up of the orders of Taliban leadership, and they have curtailed
          AGO’ s authorities for fighting crime, ensuring justice and supporting
          the fundamental rights of citizens.
        </p>
        <p className=" text-[14px]">
          Habitullah Akhundzada, Taliban ’ s “Supreme Leader ”, issued a verbal
          decree to change the Attorney General’ s Office to the “General
          Directorate for Monitoring and Follow-up of decrees and directives ”.
          With this decree, Taliban have reduced the AGO to an entity for
          follow-up of the orders of Taliban leadership, and they have curtailed
          AGO’ s authorities for fighting crime, ensuring justice and supporting
          the fundamental rights of citizens.
        </p>
        <div className=" flex gap-10 justify-between">
          <img className=" w-[300px] h-[350px]" src="./Images/cam2.PNG" />
          <img className=" w-[300px] h-[350px]" src="./Images/cam3.PNG" />
          <img className=" w-[300px] h-[350px]" src="./Images/cam4.PNG" />
        </div>
      </div>

      <div className="mx-28 mt-14 mb-5">
        <hr className=" border-[#FEC00F] border-4" />
      </div>

      <div className="mx-28 w-[300px] mb-2">
        <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
          Previous Campaigns
        </h1>
      </div>
      <div className=" mx-28 mt-14 flex gap-10 justify-between">
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

export default Campaigns;
