import versace from "@/assets/Vector.svg"
import Image from "next/image"
import Zara from "@/assets/zara-logo-1 1.svg"
import gucci from "@/assets/gucci-logo-1 1.svg"
import prada from "@/assets/prada-logo-1 1.svg"
import calvinKlien from "@/assets/Group.svg"



const Brand = () => {
    return (
        <>
            <div className="h-[140px] sm:h-[122px]  bg-[#000000] grid grid-cols-3 gap-4 pt-6 place-content-center place-items-center sm:flex justify-evenly items-center">
                <div className="h-[23.25px] sm:h-auto sm:w-auto w-[116.74px]">
                   <Image src={versace} alt="img" />
                </div>
                <div className="h-[26.65px] w-[63.81px] sm:h-auto sm:w-auto ">
                   <Image src={Zara} alt="img" />
                </div> 
                
                <div className="h-[25.24px] w-[109.39px] sm:h-auto sm:w-auto ">
                   <Image src={gucci} alt="img" />
                </div> 
                
                <div className="h-[21px] w-[127px] ml-20 sm:m-0 sm:h-auto sm:w-auto ">
                   <Image src={prada} alt="img" />
                </div> 
                
                <div className="h-[21.75px] w-[134.84px] ml-36 sm:m-0 sm:h-auto sm:w-auto ">
                   <Image src={calvinKlien} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Brand