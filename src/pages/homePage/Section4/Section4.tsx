import image1 from '../../../assets/img-homepage/Section4/img-1.png';
import image2 from '../../../assets/img-homepage/Section4/img-2.png';
import image3 from '../../../assets/img-homepage/Section4/img-3.png';
import arrow from '../../../assets/img-homepage/Section4/Vector-arrow.png';
import arrow2 from '../../../assets/img-homepage/Section4/Vector-arrow2.png';
import indicator from '../../../assets/img-homepage/Section4/Indicator.png';

export const Section4 = () => {
    return (
        <div className="flex flex-row justify-center items-center h-[670px] font-poppins bg-[#FCF8F3] gap-[42px]">
            {/* Texto e Botão */}
            <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-[7px]">
                    <div className="w-[422px] h-[96px] left-[100px] font-bold text-[40px] leading-[48px] text-[#3A3A3A]">
                        <h1>50+ Beautiful rooms inspiration</h1>
                    </div>
                    <div className="w-[368px] h-[48px] left-[100px] font-medium leading-[24px] text-[#616161]">
                        <p>
                            Our designer already made a lot of beautiful
                            prototipe of rooms that inspire you
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-[176px] h-[48px] left-[100px] text-white bg-[#B88E2F]">
                    <button>Explore More</button>
                </div>
            </div>
            {/* Imagens */}
            <div className="flex flex-row relative gap-[24px]">
                <div>
                    <img src={image1} alt="img" />
                    <div className="flex flex-col justify-center w-[217px] h-[130px] absolute top-[428px] left-[24px] bg-[#FFFFFFB8] text-container pl-[32px] backdrop-blur gap-[8px]">
                        <div className="flex flex-row items-center w-[142px] h-[24px] gap-[8px]">
                            <div>01</div>
                            <div className="w-[27px] border-b border-gray-600"></div>
                            <div>Bed Room</div>
                        </div>
                        <div className="font-semibold text-[28px] leading-8 text-[#3A3A3A]">
                            <p>Inner Peace</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[48px] h-[48px] absolute top-[510px] left-[241px] bg-[#B88E2F]">
                        <button>
                            <img src={arrow} alt="img" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-[40px]">
                    <div>
                        <img src={image2} alt="img" />
                        <div className="flex justify-center items-center w-[48px] h-[48px] absolute top-[260px] left-[775px] bg-white rounded-full shadow-[0_4px_14px_1px_#00000029]">
                            <button>
                                <img src={arrow2} alt="img" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[120px] h-[27px]">
                        <img src={indicator} alt="img" />
                    </div>
                </div>
                <div>
                    <img src={image3} alt="img" />
                </div>
            </div>
        </div>
    );
};
