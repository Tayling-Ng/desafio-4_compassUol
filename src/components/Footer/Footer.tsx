import facebook from '../../assets/img-footer/facebook.png';
import instagram from '../../assets/img-footer/instagram.png';
import twitter from '../../assets/img-footer/twitter.png';
import linkedin from '../../assets/img-footer/linkedin.png';

export const Footer = () => {
    return (
        //footer
        <div className="flex justify-center items-center h-[505px] border-t border-black/[0.17] font-poppins">
            {/* Group 45 */}
            <div className="flex flex-col w-[1240.01px] h-[419px] left-[100px] gap-[100px]">
                {/* Group 32 */}
                <div className="flex flex-row justify-between ">
                    {/* Infos e Redes Sociais */}
                    <div className="flex flex-col gap-[50px]">
                        <div>
                            <h1 className="w-[85px] h-[36px] text-2xl font-bold leading-[36px] text-black">
                                Furniro.
                            </h1>
                        </div>
                        <div>
                            <p className="w-[285px] h-[72px] text-base font-normal leading-[24px] text-[#9F9F9F]">
                                400 University Drive Suite 200 Coral
                                <br /> Gables,
                                <br />
                                FL 33134 USA
                            </p>
                        </div>
                        {/* Group 12 */}
                        <div className="flex flex-row justify-between w-[184px] h-[34px]">
                            <a href="https://www.facebook.com/" target="_blank">
                                <img
                                    className=""
                                    src={facebook}
                                    alt="Facebook"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                            >
                                <img
                                    className=""
                                    src={instagram}
                                    alt="Instagram"
                                />
                            </a>

                            <a href="https://x.com/" target="_blank">
                                <img className="" src={twitter} alt="Twiter" />
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank">
                                <img
                                    className=""
                                    src={linkedin}
                                    alt="Linkedin"
                                />
                            </a>
                        </div>
                    </div>
                    {/* Group 31 */}
                    <div className="flex flex-row justify-between w-[710px] h-[312px] left-[523.01px]">
                        {/* Group 28 */}
                        <div className="flex flex-row justify-center gap-[114px]">
                            {/* Group 26 */}
                            <div>
                                <div className="flex flex-col gap-[55px]">
                                    {/* Links */}
                                    <div className="text-[#9F9F9F]">
                                        <p>Links</p>
                                    </div>
                                    {/* Group 24 */}
                                    <div className="flex flex-col gap-[46px]">
                                        <p>Home</p>
                                        <p>Shop</p>
                                        <p>About</p>
                                        <p>Contact</p>
                                    </div>
                                </div>
                            </div>
                            {/* Group 27 */}
                            <div>
                                <div className="flex flex-col gap-[55px]">
                                    {/* Help */}
                                    <div className="text-[#9F9F9F]">
                                        <p>Help</p>
                                    </div>
                                    {/* Group 25 */}
                                    <div className="flex flex-col gap-[46px]">
                                        <p>Payment Options</p>
                                        <p>Returns</p>
                                        <p>Privacy Policies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Group 30 */}
                        <div className="flex flex-col gap-[45px]">
                            {/* Newsletter */}
                            <div className="text-[#9F9F9F]">
                                <p>Newsletter</p>
                            </div>
                            {/* Group 29 */}
                            <div className="flex flex-row justify-between gap-[11px]">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="w-full border-0 border-b-2 border-black focus:border-black outline-none px-2 py-1"
                                />
                                <button className="mt-2 border-0 border-b-2 border-black px-4 py-1 bg-transparent">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Group 44 */}
                <div className="relative w-[1240.0145px] border-t-[1px] border-solid  border-[#D9D9D9]">
                    <div className="flex border-t border-t-solid text-base leading-[24px] text-left">
                        <p>2023 furniro. All rights reverved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
