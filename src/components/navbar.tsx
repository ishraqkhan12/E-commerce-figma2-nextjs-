import Image from "next/image"
import search from '@/assets/Vector.png'
import chair from '@/assets/Vector (1).png'
import user from '@/assets/Vector (2).png'
import searchBlack from '@/assets/search black.png'
import blank from '@/assets/Frame.png'


const Navbar = () => {
    return (

        <>


            <div className="h-[34px] text-[12px] leading-[16.2px] bg-[#000000] sm:h-[38px] sm:max-w-[1440px] font-[400] sm:text-[14px] sm:leading-[18.9px] text-[#FFFFFF] mx-auto content-center">
                <p className="flex justify-center items-center space-x-2">
                    <span>Sign up and get 20% off to your first order.</span>
                    <a href="#" className="underline underline-offset-4 font-[500] ">Sign Up Now</a>
                    <span className="hidden sm:inline text-[17px] cursor-pointer absolute right-[40px] ">X</span>
                </p>
            </div>
            {/* ------------------------- tab and laptops (sm) ---------- */}

           
            <div className="hidden sm:max-w-[1400px] w-full h-[85px]  sm:flex justify-between items-center px-[80px]">
                 <p className="font-[900] text-[32px] leading-[38.4px] hidden sm:inline cursor-pointer">SHOP.CO</p>
                <ul className="sm:flex gap-[24px]">
                    <li className="cursor-pointer">Shop</li>
                    <li className="cursor-pointer">On Sale</li>
                    <li className="cursor-pointer">New Arrivals</li>
                    <li className="cursor-pointer">Brands</li>
                </ul>
                <div className=" h-[48px] max-w-[600px] rounded-[62px] bg-[#F0F0F0] p-[13px] sm:flex gap-[12px]">
                    <Image src={search} alt="search" className="w-[24px] h-[24px]" />
                    <input type="text" placeholder="Search for products..." className=" bg-[#F0F0F0] p-2 rounded outline-none w-full" />
                </div>
                <div className="sm:flex gap-[14px] hidden">
                    <Image src={chair} alt="img" className="w-[22.13px] h-[20.25px] cursor-pointer" />
                    <Image src={user} alt="img" className="w-[23px] h-[23px] cursor-pointer" />
                </div>
            </div>


            {/* ----------------- MOBILE NAVBAR -------------------- */}

            <div className="max-w-full p-[16px] flex justify-between items-center sm:hidden">
                <div className="flex items-center gap-[30px]">
                    <div>
                        <Image src={blank} alt="btn" className="w-[24px] h-[24px]" />
                    </div>
                    <p className="font-[900] text-[25.2px] leading-[30.24px] text-[#000000] ">SHOP.CO</p>

                </div>


                <div className="flex items-end gap-[12px]">
                    <Image src={searchBlack} alt="img" className="w-[24px] h-[24px]" />
                    <Image src={chair} alt="img" className="w-[24px] h-[24px]" />
                    <Image src={user} alt="img" className="w-[24px] h-[24px]" />

                </div>
            </div>
        </>
    )
}
export default Navbar