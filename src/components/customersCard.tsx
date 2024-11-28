import Image from "next/image"
import fiveStar from "@/assets/fiveStar.svg"
import sara from "@/assets/sarah M.svg"
import alex from "@/assets/Alex k.svg"
import James from "@/assets/James.svg"

const CustomerCard = () => {

    const cardData = [
        {
            starImg: fiveStar.src,
            nameImg: sara.src,
            paragraph: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."

        },
        {
            starImg: fiveStar.src,
            nameImg: alex.src,
            paragraph: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."

        },
        {
            starImg: fiveStar.src,
            nameImg: James.src,
            paragraph: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."

        }
    ]

    return (
        <>

            {cardData.map((elem, index) => {

                return (
                    
                    <div key={index} className={` rounded-[20px] flex flex-col gap-4 px-[32px] py-[28px] border border-[1px solid #0000001A] w-[400px] min-h-[240px]  ${index >=1  ? 'hidden sm:block' : ''}  `}>
                        <div>
                            <Image src={elem.starImg} alt="img" width={138.84} height={22.8} />
                        </div>
                        <div>
                            <Image src={elem.nameImg} alt="img"  width={111} height={24}/>
                        </div>

                        <p className="text-[#00000099] text-[16px] leading-[22px]">{elem.paragraph}</p>

                    </div>
                )
            })}



        </>
    )
}

export default CustomerCard