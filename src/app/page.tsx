import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Brand from "@/components/brand";
import Card2 from "@/components/topSelling";
import DressStyle from "@/components/dressStyle";
import CustomerCard from "@/components/customersCard";




//---------------------- CARD SECTION ---------------------------------------------
const Home = () => {


  return (
    <>
      <Navbar />
      <Hero />
      <Brand />

      {/* --------------  NEW ARRIVALS ------------------------- */}
      <div className="sm:p-16 sm:pt-24 p-6 " >

        <h1 className="font-extrabold text-[32px] mb-6 sm:text-[48px] leading-[57.6px] sm:leading-[38.4px] text-[#000000] text-center ">NEW ARRIVALS</h1>
        <div className="main-div flex flex-row  sm:flex-row gap-2 " >
          <Card />

        </div>

        <div className=" flex items-center justify-center my-7 ">
          <button className="w-full text-[#000000] hover:bg-[#F2F0F1] border border-[1px solid #0000001A] text-[15px] font-[500] py-[16px] rounded-[62px] cursor-pointer sm:w-[210px]">Shop Now</button>
        </div>
      </div>
      <hr className="mx-16" />

      {/* --------------- TOP SELLING ---------------------------- */}

      <div className="sm:p-12 p-6 sm:pt-24" >

        <h1 className="font-extrabold text-[32px] mb-6 sm:text-[48px] leading-[57.6px] sm:leading-[38.4px] text-[#000000] text-center ">NEW ARRIVALS</h1>
        <div className="main-div flex flex-row  sm:flex-row gap-2 " >
          <Card2 />

        </div>

        <div className=" flex items-center justify-center my-7 ">
          <button className="w-full text-[#000000] hover:bg-[#F2F0F1] border border-[1px solid #0000001A] text-[15px] font-[500] py-[16px] rounded-[62px] cursor-pointer sm:w-[210px]">Shop Now</button>
        </div>
      </div>
      


      <DressStyle/>

      {/* ----------------------- HAPPY CUSTOMERS ---------------------- */}
      <div className="p-6 sm:p-16 ">
        <h1 className="font-extrabold text-[32px] mb-6 sm:text-[48px] leading-[57.6px] sm:leading-[38.4px] text-[#000000]">OUR HAPPY CUSTOMERS</h1>
        <div className="flex gap-4">
        <CustomerCard />
        </div>

      </div>

    </>
  );
}

export default Home
