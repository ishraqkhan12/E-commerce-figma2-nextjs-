import Image from "next/image"
import person from '@/assets/Rectangle 2 (1).svg'
import star from '@/assets/star.png'


const Hero = () => {
    return (

        <>
       
        
            <div className="h-[853px] bg-[#F2F0F1] sm:h-[600px] sm:flex ">

                <div className="h-[405px] p-[16px] sm:h-[600px] sm:w-[50%] sm:p-[100px] flex flex-col gap-[15px]">
                    <h1 className="font-extrabold text-[36px] sm:text-[49px] sm:leading-[49px] leading-[34px] ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="font-normal text-[14px] sm:size[16px] leading-[20px] text-[#00000099]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className="w-full bg-[#000000] text-[#FFFFFF] text-[15px] font-[500] py-[16px] rounded-[62px] cursor-pointer sm:w-[210px]">Shop Now</button>
                    <div className=" mt-4 grid grid-cols-2 sm:grid-cols-3 sm:gap-[4px] justify-center sm:w-[450px]  w-[288px] ">
                        <div className=" w-[155px] pt-[5px]">
                            <h1 className="font-bold text-[40px] leading-[32px] text-[#000000]">200+</h1>
                            <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">International Brands</p>
                        </div>

                        <div className="w-[155px] pt-[5px] pl-[15px] border-l border-l-[#c4c4c499]">
                            <h1 className="font-bold text-[40px] leading-[32px] text-[#000000]">200+</h1>
                            <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">High-Quality Products</p>
                        </div>

                        <div className="w-[155px] p-[5px] pl-[15px] sm:border-l sm:border-l-[#c4c4c499] ml-16 sm:m-0">
                            <h1 className="font-bold text-[40px] leading-[32px] text-[#000000]">30,000+</h1>
                            <p className="font-normal text-[12px] leading-[22px] text-[#00000099]">Happy Customers</p>
                        </div>
                    </div>
                </div>


                <div className="h-448px relative sm:h-[663px]  sm:w-[50%] overflow-hidden">
                    <Image src={star} alt="star" className="h-[76px] w-[76px] absolute top-[60px] right-[20px]" />
                    <Image src={star} alt="star" className="h-[44px] w-[44px] absolute top-[260px] left-5" />

                    <Image src={person} alt="img" className="h-[448] w-full sm:h-[600px] sm:mr-[]" />
                </div>
            </div>
          
           
        </>
    )
}

export default Hero