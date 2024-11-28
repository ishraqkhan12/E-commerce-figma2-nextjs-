import Image from "next/image";

import greenShirt from "@/assets/greenshirt.svg"
import orangeTShirt from "@/assets/orangeShirt2.svg"
import short from "@/assets/short2.svg"
import blackJeans from "@/assets/star1.svg"
import star1 from "@/assets/blackJeans2.svg"
import star2 from "@/assets/star2.svg"
import star3 from "@/assets/star3.svg"
import star4 from "@/assets/star4.svg"


interface Icard{
    paragraph :string;
    price : string;
    imgSrc : string;
    star : string
    value?: string;
    className?: string

}

const Card2 = () => {

 const cardData =[
  {
    imgSrc: greenShirt.src,
    star: star1.src,
    paragraph: "T-SHIRT WITH TAPE DETAILS",
    price: "$120"
  },

  {
    imgSrc: orangeTShirt.src,
    star: star2.src,
    paragraph: "T-SHIRT WITH TAPE DETAILS",
    price: "$400",
    value: "$260"
  },

  {
    imgSrc: short.src,
    star: star3.src,
    paragraph: "CHECKERED SHIRT",
    price: "$180"
  },

  {
    imgSrc: blackJeans.src,
    star: star4.src,
    paragraph: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    value: "$160"

  }
]


 return( 
   <>
   {
   cardData.map((item, index)=> {
   return(
   <div className={`flex flex-col gap-1  ${index >=2 ? 'hidden sm:block' : ''}`}>
            <div> 
              <Image src={item.imgSrc} alt="img" width={280} height={265} className=" cursor-pointer" />
            </div>


            <div className="px-2">
              <p >{item.paragraph}</p>

              <Image src={item.star} alt="img" height={19} width={150}  />
              <div className="flex gap-2 items-center">
              <p className="text[24px] sm:text-[20px] leading-[32.4px] font-bold">{item.price}</p>
              <del className="text-[#00000066]">{item.value}</del>
              <button className="sm:w-[58px] w-[42px] sm:h-[25px] h-[20px] text-[#FF3333] text-center bg-[#FF33331A] rounded-[62px] text[10px] sm:text-[12px] leading-[16px] font-medium">-20%</button>
              </div>
            </div>
          </div>
   )

   })
   }
        
   </>

      )
}

export default Card2