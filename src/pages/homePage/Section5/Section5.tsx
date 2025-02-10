import image1 from '../../../assets/img-homepage/Section5/img-1.png';
import image2 from '../../../assets/img-homepage/Section5/img-2.png';
import image3 from '../../../assets/img-homepage/Section5/img-3.png';
import image4 from '../../../assets/img-homepage/Section5/img-4.png';
import image5 from '../../../assets/img-homepage/Section5/img-5.png';
import image6 from '../../../assets/img-homepage/Section5/img-6.png';
import image7 from '../../../assets/img-homepage/Section5/img-7.png';
import image8 from '../../../assets/img-homepage/Section5/img-8.png';
import image9 from '../../../assets/img-homepage/Section5/img-9.png';

export const Section5 = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[897px] font-poppins ">
            <div className="flex flex-col justify-center items-center h-[780px]">
                {/* Texto */}
                <div className="flex flex-col justify-center items-center w-[356px] h-[86px] gap-[8px]">
                    <p className="font-semibold text-xl leading-9">
                        Share your setup with
                    </p>
                    <h2 className="font-bold text-5xl leading-tight">
                        #FuniroFurniture
                    </h2>
                </div>
                {/* Imagens */}
                <div className="flex flex-row justify-center items-center h-[721px] gap-[16px]">
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-row items-end gap-[16px]">
                            <div>
                                <img src={image1} alt="img" />
                            </div>
                            <div>
                                <img src={image2} alt="img" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-[16px]">
                            <div>
                                <img src={image3} alt="img" />
                            </div>
                            <div>
                                <img src={image4} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <img src={image5} alt="img" />
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-row items-end gap-[16px]">
                            <div>
                                <img src={image6} alt="img" />
                            </div>
                            <div>
                                <img src={image7} alt="img" />
                            </div>
                        </div>
                        <div className="flex flex-row gap-[16px]">
                            <div>
                                <img src={image8} alt="img" />
                            </div>
                            <div>
                                <img src={image9} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
