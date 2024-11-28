import Image from "next/image"
import casual from "@/assets/casual.svg"
import formal from "@/assets/formal.svg"
import party from "@/assets/party.svg"
import gym from "@/assets/gym.svg"


const DressStyle = () =>{
    return(
        <>
       <div className=" flex flex-col  sm:mx-16 sm:mb-16 m-6 sm:max-w-[1239px] sm:h-[802px] rounded-[40px] h-[975px] bg-[#F0F0F0] p-[40px] sm:p-[10px]" >
       <h1 className="font-extrabold text-[32px]  sm:text-[48px] leading-[36px] sm:leading-[57.5px] text-[#000000] text-center mt-12 mb-12">BROWSE BY DRESS STYLE</h1>

        <div className=" flex flex-wrap items-end gap-y-7 gap-[1.5rem] mb-4">
            <div className="sm:w-[407px] sm:h-[289px] h-[190pxd]">
                <Image src={casual} alt="img" />
            </div>
            <div  className="sm:w-[684px] sm:h-[289pxp]"     >
                <Image src={formal} alt="img" />
            </div>
            <div className="sm:w-[684px] sm:h-[289pxp]">
                <Image src={party} alt="img" />
            </div>
            <div  className="sm:w-[407px] sm:h-[289pxp]" >
                <Image src={gym} alt="img" />
            </div>
        </div>
       </div>
        </>
    )
}

export default DressStyle