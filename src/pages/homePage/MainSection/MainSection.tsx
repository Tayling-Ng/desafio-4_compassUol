import background from '../../../assets/img-homepage/MainSection/img-main.png';

export const MainSection = () => {
    return (
        <div className="w-full h-auto relative">
            <img className="w-full h-auto" src={background} alt="background" />

            <div className="flex justify-center items-center w-[643px] h-[443px] absolute top-[190px] left-[778px] rounded-tl-lg font-poppins bg-[#FFF3E3]">
                <div className="flex flex-col justify-center w-[561px] h-[344px] left-[778px]">
                    <div className="w-[123px] h-[24px] top-[315px] left-[780px] text-left text-sm font-semibold leading-[24px] tracking-[3px] text-[#333333]">
                        <p>New Arrival</p>
                    </div>
                    <div className="flex flex-col justify-end items-start w-[559px] h-[127px] text-left text-[52px] font-bold leading-[65px] text-[#B88E2F]">
                        <p>Discover Our</p>
                        <p>New Collection</p>
                    </div>
                    <div className="w-[546px] h-[52px] top-[487px] left-[780px] font-poppins text-lg font-medium leading-6 text-left text-[#333333]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut
                        </p>
                        <p>elit tellus, luctus nec ullamcorper mattis.</p>
                    </div>
                    <div className="flex items-center justify-center w-[222px] h-[74px] top-[585px] mt-10 left-[778px] px-[72px] py-[25px] gap-[10px] bg-[#B88E2F]">
                        <button>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};