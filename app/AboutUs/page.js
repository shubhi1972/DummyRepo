import React from "react";
import Link from "next/link";
import { SiTwitter } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div>
      <div>
        <img className=" w-[100%]" src="./Images/mountain.PNG" />
      </div>
      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%] flex gap-10 justify-between my-7">
        <div className=" w-[200px]">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">About Us</h1>
          <hr className=" w-1/2 border-[#FEC00F] border-2" />
        </div>
        <div className=" w-[700px] ml-40">
          <p>
            Rawadari is an Afghan human rights organisation that aims to deepen
            and grow the human rights culture of Afghanistan, ultimately
            reducing the suffering of all Afghans, especially women and girls.
            <br />
            <br />
            Rawadari helps build an Afghan human rights movement, monitors human
            rights violations, and pursues justice and accountability for
            violations. Rawadari works with individuals and collectives inside
            and outside Afghanistan
          </p>
        </div>
      </div>
      {/* ----------------------------------- */}
      </div>
            <div className=" w-[100%] flex justify-center items-center">
            <div className=" flex w-[80%] gap-2 mr-6 mt-6">
            <Link
              href=""
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 text-xs p-2 px-6 w-[9 rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              WHAT WE DO
            </Link>
            <Link
              href=""
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 text-xs p-2 px-6 w-[9 rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              OUR PRINCIPLES
            </Link>
            <Link
              href=""
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 text-xs p-2 px-6 w-[9 rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              OUR VALUES
            </Link>
            <Link
              href=""
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 text-xs p-2 px-6 w-[9 rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              ADVISORY BOARD
            </Link>
            <Link
              href=""
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 text-xs p-2 px-6 w-[9 rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
               STAFF MEMBERS
            </Link>
            <Link
              href=""
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 text-xs p-2 px-6 w-[9 rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              OUR DONORS
            </Link>
            <Link
              href=""
              className=" border-[1.5px] border-[#1c75bc] text-[#1c75bc] flex-shrink-0 text-xs p-2 px-6 w-[9 rem] font-semibold hover:bg-[#1c75bc] hover:text-[#fff] cursor-pointer rounded-3xl text-center"
            >
              OUR ANNUAL REPORT
            </Link>
          </div>
          </div>
{/* ---------------------------------------------------------------------------------------------------------------------------------------- */}
    <div className=" w-[100%] h-auto flex justify-center items-center">
      <div className=" w-[80%]">
        <div className=" w-[200px] h-[150px] flex flex-col justify-center items-start ml-4">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
            What We Do
          </h1>
          <hr className=" w-1/2 border-[#FEC00F] border-2" />
        </div>
        <div className="flex gap-10 justify-evenly items-center">

          <div className=" h-[420px] relative w-[380px] bg-[#1C75BC] justify-start text-start items-start p-8 border-b-8 border-[#FEC00F]">
            <div className=" h-[100px]">
            <h1 className=" text-white font-semibold text-3xl" >Human Rights Promotion</h1>
            </div>
            <div className=" mt-[50px]">
            <p className=" text-white text-[14px] ">Rawadari’s work aims to expand the human rights community of
              Afghanistan with new constituencies and allies inside and outside
              the country</p>
            <button className=" border-[2px] absolute bottom-[30px] rounded-3xl text-white px-4 py-1 gap-2 border-white flex justify-center items-center">READ MORE <FaArrowRightLong className=" text-white" /> </button>
            </div>
          </div>

          <div className=" h-[420px] relative w-[380px] bg-[#1C75BC] justify-start text-start items-start p-8 border-b-8 border-[#FEC00F]">
            <div className=" h-[100px]">
            <h1 className=" text-white font-semibold text-3xl" >Monitoring And Reporting</h1>
            </div>
            <div className=" mt-[50px]">
            <p className=" text-white text-[14px] ">Rawadari provides reliable and timely information human rights violations in Afghanistan with a focus of violations of the rights of women and girls and marginalized groups.</p>
            <button className=" border-[2px] absolute bottom-[30px] rounded-3xl text-white px-4 py-1 gap-2 border-white flex justify-center items-center">READ MORE <FaArrowRightLong className=" text-white" /> </button>
            </div>
          </div>

          <div className=" h-[420px] relative w-[380px] bg-[#1C75BC] justify-start text-start items-start p-8 border-b-8 border-[#FEC00F]">
          <div className=" h-[100px]">
            <h1 className=" text-white font-semibold text-3xl" >Victim-centered justice and accountability</h1>
            </div>
            <div className=" mt-[50px]">
            <p className=" text-white text-[14px]">Rawadari aims to employ all viable mechanisms for judicial and
              non-judicial accountability to combat the entrenched culture of impunity for violations committed in Afghanistan.</p>
            <button className=" border-[2px] absolute bottom-[30px] rounded-3xl text-white px-4 py-1 gap-2 border-white flex justify-center items-center">READ MORE <FaArrowRightLong className=" text-white" /> </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* ----------------------------------------------------------------------------------------------------------------------------------- */}
      
      <div className=" w-[100%] h-auto flex relative justify-center items-center">
      <div className=" w-[80%]">
        <div className=" w-[200px] h-[150px] flex flex-col justify-center items-start ml-4">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
            How we work
          </h1>
          <hr className=" w-1/2 border-[#FEC00F] border-2" />
        </div>

        <div className=" gap-x-4 gap-y-4 grid grid-cols-3 justify-items-center items-center ">
         
        <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-8 ">
            <p className=" text-[16px] text-[#2c2c2c]">
            Provide regular and timely public information on human rights violations taking place in Afghanistan.
            </p>
          </div>
          <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-8 ">
            <p className=" text-[16px] text-[#2c2c2c] ">
            Deepen and grow support for human rights inside and outside Afghanistan by utilising a range of new and traditional mediums, including culture and arts.
            </p>
          </div>
          <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-8 ">
            <p className=" text-[16px] text-[#2c2c2c]">
            Build and strengthen alliances to advance human rights in Afghanistan within the region and with other Muslim majority countries.
            </p>
          </div>
          <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-8 ">
            <p className=" text-[16px] text-[#2c2c2c]">
            Advocate with international and regional actors to protect human rights in Afghanistan. Engage with international human rights mechanisms to advance human rights in Afghanistan.
            </p>
          </div>
          <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-8 ">
            <p className=" text-[16px] text-[#2c2c2c]">
            Demand the deployment of all mechanisms forjudicial and non-judicial accountability to confront the entrenched culture of impunity for human rights violations committed in Afghanistan.
            </p>
          </div>
          <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-8 ">
            <p className=" text-[16px] text-[#2c2c2c]">
            Contribute to global human rights discourse from the unique perspective of Afghanistan.
            </p>
          </div>
        </div>
        </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------------------------- */}

        <div className=" w-[100%] h-auto flex relative justify-center items-center">
      <div className=" w-[80%]">
        <div className=" w-[200px] h-[150px] flex flex-col justify-center items-start ml-4">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
           Our Principle
          </h1>
          <hr className=" w-1/2 border-[#FEC00F] border-2" />
        </div>

        <div className=" gap-x-4 gap-y-4 grid grid-cols-2 justify-items-center items-center ">
         
        <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-16 ">
            <p className=" text-[16px] text-[#2c2c2c]">
            We take a victim and survivor-centred approach in all our work. We ensure confidentiality and privacy in our work, especially with regard to the information and stories shared with us.
            </p>
          </div>
          <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-16 ">
            <p className=" text-[16px] text-[#2c2c2c] ">
            We assess the possible impact and implications of our publications on victims, survivors, sources, and colleagues. Mindful of challenges, we publish with sensitivity.
            </p>
          </div>
          <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-16 ">
            <p className=" text-[16px] text-[#2c2c2c]">
            We pro-actively strengthen ourrelationships with Afghans inside and outside Afghanistan. We reach out to find new allies and supporters and build collaborative partnerships.
            </p>
          </div>
          <div className=" bg-[#F7F7F8] w-[100%] h-[200px] flex justify-center items-start p-16 ">
            <p className=" text-[16px] text-[#2c2c2c]">
            We continuously question and assess the added value and impact of our work for victims, survivors, and our collectives. We are flexible and agile and will adapt to meet their needs.
            </p>
          </div>
          
        </div>
        </div>
        </div>


{/* ----------------------------------------------------------------------------------------------------------------------------------- */}


<div className=" w-[100%] h-auto flex relative justify-center items-center">
      <div className=" w-[80%]">
        <div className=" w-[200px] h-[150px] flex flex-col justify-center items-start ml-4">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
           Our Value
          </h1>
          <hr className=" w-1/2 border-[#FEC00F] border-2" />
        </div>

        <div className="  bg-[#f7f7f8] w-[100%] h-[1000px] pt-10 grid grid-cols-2 grid-rows-4 justify-items-center p-6 items-center ">

          <div className=" w-[100%] h-[200px] gap-4 p-6  flex ">
          <div className=" w-[10%]   ">
            <img className=" w-[100%] h-auto" src="./Images/RD_Icon.PNG" />
            </div>
          <div className=" w-[90%]   "><h2 className=" text-[#1C75BC] font-bold pb-5">Impartiality</h2>
              <p className=" text-[12.7px]">
                We are experts in universal human rights principles and values.
                We uphold this expertise in all our work. We ensure our work is
                protected from personal bias. Our approach is at all times
                guided by these universal principles and values.
              </p></div>
          </div>
          <div className=" w-[100%] h-[200px] gap-4  p-6  flex ">
          <div className=" w-[10%] ">
            <img className=" w-[100%] h-auto" src="./Images/RD_Icon.PNG" />
            </div>
          <div className=" w-[90%]   "><h2 className=" text-[#1C75BC] font-bold pb-5">Respect for diversity</h2>
              <p className=" text-[12.7px]">
                We are aware of the many differences in Afghanistan, including
                of background, experience, and perspective. We accept, value,
                and respect our differences. We believe diversity is a value and
                a strength. We uphold diversity, and benefit from the diversity
                of our team and our views.
              </p></div>
          </div>
          <div className=" w-[100%] h-[200px] -mt-20  gap-4 p-6  flex ">
          <div className=" w-[10%]  ">
            <img className=" w-[100%] h-auto" src="./Images/RD_Icon.PNG" />
            </div>
          <div className=" w-[90%]"><h2 className=" text-[#1C75BC] font-bold pb-5">Inclusivity</h2>
              <p className=" text-[12.7px]">
                We believe everyone should have equitable access to all
                resources, opportunities, and assets regardless of their
                ability, sex, gender, ethnicity, religion, and/or political
                affiliation. We make every effort to unpack, understand, and
                include different layers of identity in our analysis.
              </p></div>
          </div>
          <div className=" w-[100%] h-[200px] -mt-20  gap-4 p-6  flex ">
          <div className=" w-[10%]  ">
            <img className=" w-[100%] h-auto" src="./Images/RD_Icon.PNG" />
            </div>
          <div className=" w-[90%]  "><h2 className=" text-[#1C75BC] font-bold pb-5">Honesty</h2>
              <p className=" text-[12.7px]">
                We believe honesty is essential to building collectives and for
                collective action. We understand honesty as sharing the truth of
                what we see and documenting without an agenda. We listen t o
                victims and survivors with openness. We are honest in every
                stage of our work and with everyone we work with.
              </p></div>
          </div>
          <div className=" w-[100%] h-[200px] -mt-40 gap-4  p-6  flex ">
          <div className=" w-[10%]   ">
            <img className=" w-[100%] h-auto" src="./Images/RD_Icon.PNG" />
            </div>
          <div className=" w-[90%]   "><h2 className=" text-[#1C75BC] font-bold pb-5">Trust</h2>
              <p className=" text-[12.7px]">
                We strive to build trust and credibility amongst Afghans in the
                hopeful vision for Afghanistan we are co-creating and in
                Rawadari. We want Afghans to know that we are listening to all
                of them. We work every day to strengthen trust inside our own
                team and with our partners. We build trust by being impartial,
                inclusive, and honest.
              </p></div>
          </div>
          <div className=" w-[100%] h-[200px] -mt-40 gap-4  p-6  flex ">
          <div className=" w-[10%]   ">
            <img className=" w-[100%] h-auto" src="./Images/RD_Icon.PNG" />
            </div>
          <div className=" w-[90%]   "><h2 className=" text-[#1C75BC] font-bold pb-5">Learning</h2>
              <p className=" text-[12.7px]">
                We acknowledge we may make mistakes. As individuals and as an
                organisation, we are committed to continuous, ongoing learning.
                We recognise that we learn best through our interactions with
                people, especially Afghans whom we are here to serve. We want to
                learn from past experience, failures, losses, and constructive
                criticism.
              </p></div>
          </div>
          <div className=" w-[100%] h-[200px] mt-[-15rem] gap-4  p-6  flex ">
          <div className=" w-[10%]   ">
            <img className=" w-[100%] h-auto" src="./Images/RD_Icon.PNG" />
            </div>
          <div className=" w-[90%]   "><h2 className=" text-[#1C75BC] font-bold pb-5">Liberty</h2>
              <p className=" text-[12.7px]">
                We believe everyone should be able to exercise their free will,
                without harming the life, liberty, or livelihoods of other
                individuals and communities. We believe everyone has the right
                to choose how to live their life, and we respect their liberty
                in doing so. We believe everyone should be able to live their
                lives free from fear, dogma, oppression, injustice, and poverty.
              </p></div>
          </div>
          <div className=" w-[100%] h-[200px] mt-[-15rem] gap-4  p-6  flex ">
          <div className=" w-[10%]   ">
            <img className=" w-[100%] h-auto" src="./Images/RD_Icon.PNG" />
            </div>
          <div className=" w-[90%]   "><h2 className=" text-[#1C75BC] font-bold pb-5">Equality and Equity</h2>
              <p className=" text-[12.7px]">
                While recognising the difference and diversity of Afghans, we
                believe that everyone is equal before the law. We uphold
                equality and say No to discrimination in any form and upon any
                basis. We strive to provide an equitable response to the needs
                of our diverse Afghan society. We educate ourselves in the
                historical and continuing injustices faced by different groups
                and communities in Afghanistan. We integrate an intersectional
                understanding of the different needs of individuals and
                communities in our work and ensure our responses meet the
                different needs.
              </p></div>
          </div>
        </div>
    </div>
  </div>

{/* ---------------------------------------------------------------------------------------------------------------------------- */}





      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%] mt-10">
        <hr className=" border-[#FEC00F] border-4" />
      </div>
      </div>
      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%]">
      <div className=" w-[30%]  h-[150px] flex flex-col justify-center items-start ml-4">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
           Board of Directors
          </h1>
          <hr className=" w-1/2 border-[#FEC00F] border-2" />
        </div>

        <div className=" w-[100%] h-[500px] grid grid-cols-4 gap-4 justify-center items-center   ">
        <div className=" w-[100%] h-[500px] relative  ">
        <div className=" w-[100%] h-[50%]">
          <img className=" w-[100%] h-[100%] object-cover" src="./Images/BOD1.jpeg"/>
          <div className="flex absolute top-2 left-20 z-10 justify-center w-[100%] items-center gap-4 text-[#fff]">
          <SiTwitter className=" text-[1rem] cursor-pointer"/>
          <RiLinkedinFill className=" text-[1rem] cursor-pointer"/>
          </div>
        </div>
        <div className=" w-[100%] h-[50%]">
        <h1 className=" font-bold mt-4 text-2xl text-[#1C75BC]">
            NAHID SARABI
          </h1>
          <h4 className=" mt-2 text-xl font-semibold text-[#1C75BC]">
            Advisory Board Member
          </h4>
          <p className="mt-3 text-[14px]">
            Naheed Sarabi is a visiting fellow at the Center for Sustainable
            Development housed within the Global Economy and Development program
            at the Brookings Institution.
          </p>
          <p className="mt-3 text-[14px] cursor-pointer font-semibold text-[#1C75BC]">
            READ MORE &nbsp; +
          </p>
        </div>
        </div>

        <div className=" w-[100%] h-[500px] relative ">
        <div className=" w-[100%] h-[50%]">
          <img className=" w-[100%] h-[100%] object-cover" src="./Images/BOD2.jpeg"/>
          <div className="flex absolute top-2 left-20 z-10 justify-center w-[100%] items-center gap-4 text-[#fff]">
          <SiTwitter className=" text-[1rem] cursor-pointer"/>
          <RiLinkedinFill className=" text-[1rem] cursor-pointer"/>
          </div>
        </div>
        <div className=" w-[100%] h-[50%]">
        <h1 className=" font-bold mt-4 text-2xl text-[#1C75BC]">
            HUMA SAEED
          </h1>
          <h4 className=" mt-2 text-xl font-semibold text-[#1C75BC]">
            Advisory Board Member
          </h4>
          <p className="mt-3 text-[14px]">
            Huma Saeed is a researcher with international human rights
            organizations. Huma is also affiliated as a senior researcher at the
            University of Leuven, ...
          </p>
          <p className="mt-3 text-[14px] cursor-pointer font-semibold text-[#1C75BC]">
            READ MORE &nbsp; +
          </p>
        </div>
        </div>

        <div className=" w-[100%] h-[500px] relative ">
        <div className=" w-[100%] h-[50%]">
          <img className=" w-[100%] h-[100%] object-cover" src="./Images/BOD3.jpeg"/>
          <div className="flex absolute top-2 left-20 z-10 justify-center w-[100%] items-center gap-4 text-[#fff]">
          <SiTwitter className=" text-[1rem] cursor-pointer"/>
          <RiLinkedinFill className=" text-[1rem] cursor-pointer"/>
          </div>
          
        </div>
        <div className=" w-[100%] h-[50%]">
        <h1 className=" font-bold mt-4 text-2xl text-[#1C75BC]">
            RACHEL REID
          </h1>
          <h4 className=" mt-2 text-xl font-semibold text-[#1C75BC]">
            Advisory Board Member
          </h4>
          <p className="mt-3 text-[14px]">
            Rachel Reid is a human rights expert, artist and activist. Rachel is
            currently leading a war crimes investigation for The Docket, part of
            the Clooney Justice Foundation.
          </p>
          <p className="mt-3 text-[14px] cursor-pointer font-semibold text-[#1C75BC]">
            READ MORE &nbsp; +
          </p>
        </div>
        </div>

        <div className=" w-[100%] h-[500px] relative ">
        <div className=" w-[100%] h-[50%]">
          <img className=" w-[100%] h-[100%] object-cover" src="./Images/BOD4.jpeg"/>
          <div className="flex absolute top-2 left-20 z-10 justify-center w-[100%] items-center gap-4 text-[#fff]">
          <SiTwitter className=" text-[1rem] cursor-pointer"/>
          <RiLinkedinFill className=" text-[1rem] cursor-pointer"/>
          </div>
        </div>
        <div className=" w-[100%] h-[50%]">
        <h1 className=" font-bold mt-4 text-2xl text-[#1C75BC]">
            SIAVASH RAHBARI
          </h1>
          <h4 className=" mt-2 text-xl font-semibold text-[#1C75BC]">
            Advisory Board Member
          </h4>
          <p className="mt-3 text-[14px]">
            Siavash Rahbari is a rule of law development professional who has
            worked on legal aid and legal education with The Asia Foundation and
            provided technical and . . .
          </p>
          <p className="mt-3 text-[14px] cursor-pointer font-semibold text-[#1C75BC]">
            READ MORE &nbsp; +
          </p>
          </div>
        </div>
        </div>
      </div>
      </div>
{/* ----------------------------------------------------------------------------------------------------------- */}


<div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%] mt-10">
        <hr className=" border-[#FEC00F] border-4" />
      </div>
      </div>
      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%]">
      <div className=" w-[30%]  h-[150px] flex flex-col justify-center items-start ml-4">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
           Board of Directors
          </h1>
          <hr className=" w-1/2 border-[#FEC00F] border-2" />
        </div>
        <p className=" mb-10 text-xs font-bold italic">
          Bios of most staff members are not included due to security concerns.
        </p>

        <div className=" w-[100%] h-[500px] grid grid-cols-3 gap-4 justify-center items-center  ">

        <div className=" w-[100%] relative ">
        <div className=" w-[100%] h-auto">
          <img className=" w-[100%] h-[100%] object-cover" src="./Images/staff.PNG"/>
          <div className="flex absolute top-2 left-28 z-10 justify-center w-[100%] items-center gap-4 text-[#fff]">
          <SiTwitter className=" text-[1rem] cursor-pointer"/>
          <RiLinkedinFill className=" text-[1rem] cursor-pointer"/>
          </div>
        </div>
        <div className=" w-[100%] h-auto">
        <h1 className=" font-bold mt-4 text-2xl text-[#1C75BC]">
            SHAHARZAD AKBAR
          </h1>
          <h4 className=" mt-2 text-xl font-semibold text-[#1C75BC]">
            Executive Director
          </h4>
          <p className="mt-3 text-[13px] pr-3 leading-6">
            Shaharzad Akbar is a human rights activist from Afghanistan,
            currently in exile, and an Academy Fellow with Chatham House and a
            Visiting Scholar at Wolfson College, Oxford.
          </p>
          <p className="mt-3 text-[14px] cursor-pointer font-semibold text-[#1C75BC]">
            READ MORE &nbsp; +
          </p>
        </div>
        </div>

        <div className=" w-[100%] relative ">
        <div className=" w-[100%] h-auto">
          <img className=" w-[100%] h-[100%] object-cover" src="./Images/sadaf.PNG"/>
          <div className="flex absolute top-2 left-28 z-10 justify-center w-[100%] items-center gap-4 text-[#fff]">
          <SiTwitter className=" text-[1rem] cursor-pointer"/>
          <RiLinkedinFill className=" text-[1rem] cursor-pointer"/>
          </div>
        </div>
        <div className=" w-[100%] h-auto">
        <h1 className=" font-bold mt-4 text-2xl text-[#1C75BC]">
        SADAF DASHTI
          </h1>
          <h4 className=" mt-2 text-xl font-semibold text-[#1C75BC]">
          Deputy Director
          </h4>
          <p className="mt-3 text-[14px] pr-3 leading-6">
            Shaharzad Akbar is a human rights activist from Afghanistan,
            currently in exile, and an Academy Fellow with Chatham House and a
            Visiting Scholar at Wolfson College, Oxford.
          </p>
          <p className="mt-3 text-[14px] cursor-pointer font-semibold text-[#1C75BC]">
            READ MORE &nbsp; +
          </p>
        </div>
        </div>

        <div className=" w-[100%] relative ">
        <div className=" w-[100%] h-auto">
          <img className=" w-[100%] h-[100%] object-cover" src="./Images/zia.PNG"/>
          <div className="flex absolute top-2 left-28 z-10 justify-center w-[100%] items-center gap-4 text-[#fff]">
          <SiTwitter className=" text-[1rem] cursor-pointer"/>
          <RiLinkedinFill className=" text-[1rem] cursor-pointer"/>
          </div>
        </div>
        <div className=" w-[100%] h-auto">
        <h1 className=" font-bold mt-4 text-2xl text-[#1C75BC]">
            SHAHARZAD AKBAR
          </h1>
          <h4 className=" mt-2 text-xl font-semibold text-[#1C75BC]">
            Executive Director
          </h4>
          <p className="mt-3 text-[14px] pr-3 leading-6">
            Shaharzad Akbar is a human rights activist from Afghanistan,
            currently in exile, and an Academy Fellow with Chatham House and a
            Visiting Scholar at Wolfson College, Oxford.
          </p>
          <p className="mt-3 text-[14px] cursor-pointer font-semibold text-[#1C75BC]">
            READ MORE &nbsp; +
          </p>
        </div>
        </div>
        </div>
        </div>
        </div>

    {/* ------------------------------------------------------------------- */}


    <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%] mt-10">
        <hr className=" border-[#FEC00F] border-4" />
      </div>
      </div>

      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%]">
      <div className=" w-[20%]  h-[150px] flex flex-col justify-center items-start ml-4">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
          Our Donors
          </h1>
          <hr className=" w-1/3 border-[#FEC00F] border-2" />
        </div>
        <p className=" mb-10 text-xs font-bold italic">
          Bios of most staff members are not included due to security concerns.
        </p>
        <div className=" w-[100%] h-[300px] grid grid-cols-5 gap-4 justify-center items-center  ">

       <div className=" w-[100%] h-[300px]">
        <div className="w-[100%] h-[70%]">
        <img className="w-[100%] h-[100%] object-cover" src="./Images/RD_Donor1.jpeg"/>
        </div>
        <p className=" text-center mt-5 px-1">Ministry of Foreign Affairs, The Netherlands</p>
       </div>
       <div className=" w-[100%] h-[300px]">
        <div className="w-[100%] h-[70%]">
        <img className="w-[100%] h-[100%] object-cover" src="./Images/RD_Donor2.jpeg"/>
        </div>
        <p className=" text-center mt-5 px-1">Ministry of Foreign Affairs, Norway</p>
       </div>
       <div className=" w-[100%] h-[300px]">
        <div className="w-[100%] h-[70%] ">
        <img className="w-[100%] h-[100%] object-cover" src="./Images/RD_Donor3.png"/>
        </div>
        <p className=" text-center mt-5 px-1">Swiss Federal Department of Foreign Affairs</p>
       </div>
       <div className=" w-[100%] h-[300px]">
        <div className="w-[100%] h-[70%]">
        <img className="w-[100%] h-[100%] object-cover" src="./Images/RD_Donor4.png"/>
        </div>
        <p className=" text-center mt-5 px-1">Rockefeller Brothers Fund</p>
       </div>
       <div className=" w-[100%] h-[300px]">
        <div className="w-[100%] h-[70%]">
        <img className="w-[100%] h-[100%] object-cover" src="./Images/RD_Donor5.png"/>
        </div>
        <p className=" text-center mt-5 px-1">Open Society Foundations</p>
       </div>
        </div>
        </div>
        </div>

{/*============================================================================================================== */}
      
      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%] mt-10">
        <hr className=" border-[#FEC00F] border-4" />
      </div>
      </div>

      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%]">
      <div className=" w-[30%]  h-[150px] flex flex-col justify-center items-start ml-4">
          <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
           Board of Directors
          </h1>
          <hr className=" w-1/2 border-[#FEC00F] border-2" />
        </div>
        <div className=" w-[100%] flex justify-between p-8 items-center bg-[#F7F7F8]">
        <div className="  flex flex-col gap-2">
          <h1 className=" font-bold text-3xl text-[#1C75BC]">
            Rawadari Hightlights in 2023
          </h1>
          <p className=" font-semibold text-[14px] text-[#1C75BC] ">
            25 March 2023
          </p>
        </div>
        <div className=" bg-[#1C75BC] text-white font-bold px-6 py-3 rounded-3xl">
          <button>DOWNLOAD PDF</button>
        </div>
      </div>

        </div>
        </div>

      
{/* ============================================================================================= */}
      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%]">
      <div className=" my-10 mb-10">
        <hr className=" border-[#FEC00F] border-4" />
      </div>
      <div className=" my-6 w-[250px]">
        <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
          Get Involved
        </h1>
        <hr className=" w-1/2 border-[#FEC00F] border-2" />
      </div>

      <div className="  mb-8 flex p-8 items-center bg-[#F7F7F8]">
        <div className="  flex flex-col gap-2">
          <h1 className=" font-bold text-3xl text-[#1C75BC]">Jobs</h1>
          <p className=" font-semibold text-[14px] text-[#1C75BC] ">
            No job offer available at the moment
          </p>
        </div>
      </div>

      <div className="  mb-8 flex p-8 items-center bg-[#F7F7F8]">
        <div className="  flex flex-col gap-2">
          <h1 className=" font-bold text-3xl text-[#1C75BC]">Consultancies</h1>
          <p className=" font-semibold text-[14px] text-[#1C75BC] ">
            No consultancy offer available at the moment
          </p>
        </div>
      </div>

      <div className="  mb-8 flex p-8 items-center bg-[#F7F7F8]">
        <div className="  flex flex-col gap-2">
          <h1 className=" font-bold text-3xl text-[#1C75BC]">Internships</h1>
          <p className=" font-semibold text-[14px] text-[#1C75BC] ">
            No internship offer available at the moment
          </p>
        </div>
      </div>

      <div className=" flex p-8 items-center bg-[#F7F7F8]">
        <div className="  flex flex-col gap-2">
          <h1 className=" font-bold text-3xl text-[#1C75BC]">Volunteering</h1>
          <p className=" font-semibold text-[14px] text-[#1C75BC] ">
            No volunteering offer available at the moment.
          </p>
        </div>
      </div>
        </div>
      </div>



{/* =============================================================================================================== */}
      
      <div className=" w-[100%] flex justify-center items-center">
      <div className=" w-[80%]">
      <div className=" my-10 mb-10">
        <hr className=" border-[#FEC00F] border-4" />
      </div>

      <div className=" my-6 w-[300px]">
        <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
          Rawadari in Media
        </h1>
        <hr className=" w-1/2 border-[#FEC00F] border-2" />
      </div>

      <div className="  my-6 flex gap-5 justify-between items-center">
        <div>
          <FaArrowLeft />
        </div>
        <div className=" bg-[#F7F7F8] h-[100px] w-[200px]"></div>
        <div className=" bg-[#F7F7F8] h-[100px] w-[200px]"></div>
        <div className=" bg-[#F7F7F8] h-[100px] w-[200px]"></div>
        <div className=" bg-[#F7F7F8] h-[100px] w-[200px]"></div>
        <div>
          <FaArrowRight />
        </div>
      </div>

      <div className=" my-10 mb-10">
        <hr className=" border-[#FEC00F] border-4" />
      </div>

      <div className=" my-6 w-[250px]">
        <h1 className=" text-[#1C75BC] font-bold mb-2 text-3xl">
          Rawadari Brand
        </h1>
        <hr className=" w-1/2 border-[#FEC00F] border-2" />
      </div>
      <p className=" mb-10 text-xs font-bold italic">
        Please download Rawadari’s logo in different format
      </p>
      <div className=" flex gap-6  justify-between items-center ">
        <div className=" bg-[#1C75BC] text-center w-[180px] text-white text-[14px] font-bold px-6 py-3 rounded-3xl">
          <button>DOWNLOAD PDF</button>
        </div>
        <div className=" bg-[#1C75BC] text-center w-[180px] text-white text-[14px] font-bold px-6 py-3 rounded-3xl">
          <button>EPS</button>
        </div>
        <div className=" bg-[#1C75BC] text-center w-[180px] text-white text-[14px] font-bold px-6 py-3 rounded-3xl">
          <button>PDF</button>
        </div>
        <div className=" bg-[#1C75BC] text-center w-[180px] text-white text-[14px] font-bold px-6 py-3 rounded-3xl">
          <button>PNG</button>
        </div>
        <div className=" bg-[#1C75BC] text-center w-[180px] text-white text-[14px] font-bold px-6 py-3 rounded-3xl">
          <button>JPG</button>
        </div>
      </div>
        </div>
      </div>




    </div>
  );
};

export default AboutUs;
