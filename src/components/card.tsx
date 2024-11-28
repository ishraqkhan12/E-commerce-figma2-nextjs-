import Image from "next/image";
import black from "@/assets/search black.png"
import Tshirtblack from "@/assets/Frame 32.svg"
import jeansB from "@/assets/Frame 33.svg"
import shirtshariq from "@/assets/Frame 34.svg"
import Tshirtorange from "@/assets/Frame 38.svg"
import star2 from "@/assets/Frame 39.svg"
import star3 from "@/assets/Frame 40.svg"
import star4 from "@/assets/Frame 41.svg"
import star45 from "@/assets/Frame 35.svg"

interface Icard {
  paragraph: string;
  price: string;
  imgSrc: string;
  star: string
  value?: string;
  className?: string

}

const Card = () => {

  const cardData = [
    {
      imgSrc: Tshirtblack.src,
      star: star45.src,
      paragraph: "T-SHIRT WITH TAPE DETAILS",
      price: "$120"
    },

    {
      imgSrc: jeansB.src,
      star: star2.src,
      paragraph: "T-SHIRT WITH TAPE DETAILS",
      price: "$400",
      value: "$260"
    },

    {
      imgSrc: shirtshariq.src,
      star: star3.src,
      paragraph: "CHECKERED SHIRT",
      price: "$180"
    },

    {
      imgSrc: Tshirtorange.src,
      star: star4.src,
      paragraph: "SLEEVE STRIPED T-SHIRT",
      price: "$130",
      value: "$160"

    }
  ]


  return (
    <>
      {
        cardData.map((item, index) => {
          return (
            <div className={`flex flex-col gap-1  ${index >= 2 ? 'hidden sm:block' : ''}`}>
              <div>
                <Image src={item.imgSrc} alt="img" width={280} height={265} className=" cursor-pointer" />
              </div>


              <div className="px-2">
                <p >{item.paragraph}</p>

                <Image src={item.star} alt="img" height={19} width={150} />
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

export default Card