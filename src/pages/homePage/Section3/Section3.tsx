import syltherine from '../../../assets/img-homepage/Section3/img-1-syltherine.png';
import leviosa from '../../../assets/img-homepage/Section3/img-2-leviosa.png';
import lolito from '../../../assets/img-homepage/Section3/img-3-lolito.png';
import respira from '../../../assets/img-homepage/Section3/img-4-respira.png';
import grifo from '../../../assets/img-homepage/Section3/img-5-grifo.png';
import muggo from '../../../assets/img-homepage/Section3/img-6-muggo.png';
import pingky from '../../../assets/img-homepage/Section3/img-7-pingky.png';
import potty from '../../../assets/img-homepage/Section3/img-8-potty.png';
import share from '../../../assets/img-homepage/Section3/img-vector-share.png';
import compare from '../../../assets/img-homepage/Section3/img-vector-compare.png';
import like from '../../../assets/img-homepage/Section3/img-vector-like.png';

export const Section3 = () => {
    return (
        // Seção 3 - Our Products
        <div className="flex justify-center items-center h-[1209px]">
            {/* container Our Products */}
            <div className="flex flex-col justify-center items-center w-[1236px] h-[1084px] border-[#B88E2F] font-poppins gap-[32px]">
                {/* Título Our Products    */}
                <div className="w-[269px] h-[48px] text-center text-[40px] font-bold leading-[48px] text-[#3A3A3A]">
                    <h1>Our Products</h1>
                </div>
                {/* Imagens */}
                <div className="flex flex-col w-[1236px] h-[924px] gap-[32px]">
                    {/* Imagens - container 1 */}
                    <div className="flex flex-row justify-between w-[1236px] h-[446px]">
                        {/* Imagem Syltherine */}
                        <div className="flex flex-col w-[285px] h-[446px]">
                            {/* Imagem Syltherine */}
                            <div className="relative">
                                <img src={syltherine} alt="img" />
                                <div className="flex items-center justify-center rounded-full absolute w-[48px] h-[48px] top-[24px] left-[213px] bg-[#E97171] text-white  ">
                                    <p>-30%</p>
                                </div>
                            </div>
                            {/* Texto Syltherine */}
                            <div className="flex w-[285px] h-[145px] bg-[#F4F5F7] pt-3 pl-3">
                                <div className="flex flex-col justify-center h-[99px] gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="w-[123px] h-[29px] font-semibold text-[24px] leading-[28.8px]">
                                            Syltherine
                                        </p>
                                        <p className="font-medium leading-[24px] text-[#898989]">
                                            Stylish cafe chair
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-6">
                                        <p className="h-[30px] font-semibold text-[20px] leading-[30px] text-[#3A3A3A]">
                                            Rp 2.500.000
                                        </p>
                                        <p className="line-through h-[24px] leading-[24px] text-[#B0B0B0]">
                                            Rp 3.500.000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Imagem Leviosa */}
                        <div className="flex flex-col relative w-[285px] h-[446px]">
                            {/* Imagem Leviosa */}
                            <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
                            <div>
                                <img src={leviosa} alt="img" />
                            </div>
                            {/* Texto leviosa */}
                            <div className="flex w-[285px] h-[145px] bg-[#F4F5F7] pt-3 pl-3">
                                <div className="flex flex-col justify-center h-[99px] gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="w-[123px] h-[29px] font-semibold text-[24px] leading-[28.8px]">
                                            Leviosa
                                        </p>
                                        <p className="font-medium leading-[24px] text-[#898989]">
                                            Stylish cafe chair
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-6">
                                        <p className="h-[30px] font-semibold text-[20px] leading-[30px] text-[#3A3A3A]">
                                            Rp 2.500.000
                                        </p>
                                        <p className="line-through h-[24px] leading-[24px] text-[#B0B0B0]">
                                            Rp 3.500.000
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <div className="flex flex-col justify-center items-center w-[252px] h-[96px] absolute top-[175px] left-[16px] gap-[24px] ">
                                <div>
                                    <button className="w-[202px] h-[48px] font-semibold text-base leading-6 tracking-normal text-[#B88E2F] bg-white">
                                        Add to cart
                                    </button>
                                </div>
                                <div className="flex flex-row justify-between w-[252px] h-[24px] text-white gap-[20px]">
                                    <div className="flex flex-row justify-center items-center gap-[2px]">
                                        <div>
                                            <img src={share} alt="img" />
                                        </div>
                                        <div>
                                            <p>Share</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-[2px]">
                                        <div>
                                            <img src={compare} alt="img" />
                                        </div>
                                        <div>
                                            <p>Compare</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center items-center gap-[2px]">
                                        <div>
                                            <img src={like} alt="img" />
                                        </div>
                                        <div>
                                            <p>Like</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Imagem Lolito */}
                        <div className="flex flex-col w-[285px] h-[446px]">
                            {/* Imagem Lolito */}
                            <div className="relative">
                                <img src={lolito} alt="img" />
                                <div className="flex items-center justify-center rounded-full absolute w-[48px] h-[48px] top-[24px] left-[213px] bg-[#E97171] text-white  ">
                                    <p>-50%</p>
                                </div>
                            </div>

                            {/* Texto Lolito */}
                            <div className="flex w-[285px] h-[145px] bg-[#F4F5F7] pt-3 pl-3">
                                <div className="flex flex-col justify-center h-[99px] gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="w-[123px] h-[29px] font-semibold text-[24px] leading-[28.8px]">
                                            Lolito
                                        </p>
                                        <p className="font-medium leading-[24px] text-[#898989]">
                                            Luxury big sofa
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-6">
                                        <p className="h-[30px] font-semibold text-[20px] leading-[30px] text-[#3A3A3A]">
                                            Rp 7.000.000
                                        </p>
                                        <p className="line-through h-[24px] leading-[24px] text-[#B0B0B0]">
                                            Rp 14.000.000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Imagem Respira */}
                        <div className="flex flex-col w-[285px] h-[446px]">
                            {/* Imagem Respira */}
                            <div className="relative">
                                <img src={respira} alt="img" />
                                <div className="flex items-center justify-center rounded-full absolute w-[48px] h-[48px] top-[24px] left-[213px] bg-[#2EC1AC] text-white  ">
                                    <p>Now</p>
                                </div>
                            </div>
                            {/* Texto Respira */}
                            <div className="flex w-[285px] h-[145px] bg-[#F4F5F7] pt-3 pl-3">
                                <div className="flex flex-col justify-center w-[px] h-[99px] gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="w-[123px] h-[29px] font-semibold text-[24px] leading-[28.8px]">
                                            Respira
                                        </p>
                                        <p className="font-medium leading-[24px] text-[#898989]">
                                            Outdoor bar table and stool
                                        </p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="h-[30px] font-semibold text-[20px] leading-[30px] text-[#3A3A3A]">
                                            Rp 500.000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Imagens - container 2 */}
                    <div className="flex flex-row justify-between w-[1236px] h-[446px]">
                        {/* Imagem Grifo */}
                        <div className="flex flex-col w-[285px] h-[446px]">
                            {/* Imagem Grifo */}
                            <div>
                                <img src={grifo} alt="img" />
                            </div>
                            {/* Texto Grifo */}
                            <div className="flex w-[285px] h-[145px] bg-[#F4F5F7] pt-3 pl-3">
                                <div className="flex flex-col justify-center h-[99px] gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="w-[123px] h-[29px] font-semibold text-[24px] leading-[28.8px]">
                                            Grifo
                                        </p>
                                        <p className="font-medium leading-[24px] text-[#898989]">
                                            Night lamp
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-6">
                                        <p className="h-[30px] font-semibold text-[20px] leading-[30px] text-[#3A3A3A]">
                                            Rp 1.500.000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Imagem Muggo */}
                        <div className="flex flex-col w-[285px] h-[446px]">
                            {/* Imagem Muggo */}
                            <div className="relative">
                                <img src={muggo} alt="img" />
                                <div className="flex items-center justify-center rounded-full absolute w-[48px] h-[48px] top-[24px] left-[213px] bg-[#2EC1AC] text-white  ">
                                    <p>Now</p>
                                </div>
                            </div>
                            {/* Texto Muggo */}
                            <div className="flex w-[285px] h-[145px] bg-[#F4F5F7] pt-3 pl-3">
                                <div className="flex flex-col justify-center h-[99px] gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="w-[123px] h-[29px] font-semibold text-[24px] leading-[28.8px]">
                                            Muggo
                                        </p>
                                        <p className="font-medium leading-[24px] text-[#898989]">
                                            Small mug
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-6">
                                        <p className="h-[30px] font-semibold text-[20px] leading-[30px] text-[#3A3A3A]">
                                            Rp 150.000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Imagem Pingky */}
                        <div className="flex flex-col w-[285px] h-[446px]">
                            {/* Imagem Pingky */}
                            <div className="relative">
                                <img src={pingky} alt="img" />
                                <div className="flex items-center justify-center rounded-full absolute w-[48px] h-[48px] top-[24px] left-[213px] bg-[#E97171] text-white  ">
                                    <p>-50%</p>
                                </div>
                            </div>
                            {/* Texto Pingky */}
                            <div className="flex w-[285px] h-[145px] bg-[#F4F5F7] pt-3 pl-3">
                                <div className="flex flex-col justify-center h-[99px] gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="w-[123px] h-[29px] font-semibold text-[24px] leading-[28.8px]">
                                            Pingky
                                        </p>
                                        <p className="font-medium leading-[24px] text-[#898989]">
                                            Cute bed set
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-6">
                                        <p className="h-[30px] font-semibold text-[20px] leading-[30px] text-[#3A3A3A]">
                                            Rp 7.000.000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Imagem Potty */}
                        <div className="flex flex-col w-[285px] h-[446px]">
                            {/* Imagem Potty */}
                            <div className="relative">
                                <img src={potty} alt="img" />
                                <div className="flex items-center justify-center rounded-full absolute w-[48px] h-[48px] top-[24px] left-[213px] bg-[#2EC1AC] text-white  ">
                                    <p>Now</p>
                                </div>
                            </div>
                            {/* Texto Potty */}
                            <div className="flex w-[285px] h-[145px] bg-[#F4F5F7] pt-3 pl-3">
                                <div className="flex flex-col justify-center w-[px] h-[99px] gap-2">
                                    <div className="flex flex-col gap-2">
                                        <p className="w-[123px] h-[29px] font-semibold text-[24px] leading-[28.8px]">
                                            Potty
                                        </p>
                                        <p className="font-medium leading-[24px] text-[#898989]">
                                            Minimalist flower pot
                                        </p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="h-[30px] font-semibold text-[20px] leading-[30px] text-[#3A3A3A]">
                                            Rp 500.000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Show More */}
                <div>
                    <button className="flex justify-center items-center w-[245px] h-[48px] border border-[#B88E2F] font-semibold text-[16px] leading-[24px] text-[#B88E2F]">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
};
