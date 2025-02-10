import dining from '../../../assets/img-homepage/Section2/img-01-dining.png';
import living from '../../../assets/img-homepage/Section2/img-02-living.png';
import bedroom from '../../../assets/img-homepage/Section2/img-03-bedroom.png';

export const Section2 = () => {
    return (
        <div className="flex justify-center items-center h-[798px]">
            <div className="flex flex-col justify-center w-[1183px] h-[685px] font-poppins gap-[62.29px]">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h1 className="w-[300px] h-[48px] text-[32px] font-bold leading-[48px] text-[#333333]">
                            Browse The Range
                        </h1>
                    </div>
                    <div>
                        <p className="w-[559px] h-[28.71px] text-center text-[20px] font-normal leading-[30px] text-[#666666]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-[20px]">
                    <div className="flex flex-col items-center gap-[30px]">
                        <div className="w-[381px] h-[480px]">
                            <img src={dining} alt="Dining" />
                        </div>
                        <div className="w-[79px] h-[36px] text-center text-[24px] font-semibold leading-[36px]">
                            <p>Dining</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[30px]">
                        <div className="w-[381px] h-[480px]">
                            <img src={living} alt="Living" />
                        </div>
                        <div className="w-[79px] h-[36px] text-center text-[24px] font-semibold leading-[36px]">
                            <p>Living</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[30px]">
                        <div className="w-[381px] h-[480px]">
                            <img src={bedroom} alt="Bedroom" />
                        </div>
                        <div className="w-[79px] h-[36px] text-center text-[24px] font-semibold leading-[36px]">
                            <p>Bedroom</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
