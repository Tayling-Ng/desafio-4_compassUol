import facebook from '../../assets/img-footer/facebook.png';
import instagram from '../../assets/img-footer/instagram.png';
import twitter from '../../assets/img-footer/twitter.png';
import linkedin from '../../assets/img-footer/linkedin.png';

export const Footer = () => {
    return (
        //footer
        <div className="flex justify-center items-center h-[505px] border-t border-black/[0.17] mt-[4330px] font-poppin">
            {/* Group 45 */}
            <div className="flex flex-col w-[1240.01px] h-[419px] left-[100px] gap-[100px]">
                {/* Group 32 */}
                <div className="flex flex-row justify-between items-center gap-[100px]">
                    {/* Infos e Redes Sociais */}
                    <div className="flex flex-col gap-[50px]">
                        <div>
                            <h1 className="w-[85px] h-[36px] text-2xl font-bold leading-[36px] text-left text-black">
                                Furniro.
                            </h1>
                        </div>
                        <div>
                            <p className="w-[285px] h-[72px] text-base font-normal leading-[24px] text-left text-[#9F9F9F]">
                                400 University Drive Suite 200 Coral
                                <br /> Gables,
                                <br />
                                FL 33134 USA
                            </p>
                        </div>
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
                        <div className="flex flex-row justify-between">
                            {/* Group 26 */}
                            <div>
                                <div>
                                    {/* Links */}
                                    <div>
                                        <p>Links</p>
                                    </div>
                                    {/* Group 24 */}
                                    <div>
                                        <p>Home</p>
                                        <p>Shop</p>
                                        <p>About</p>
                                        <p>Contact</p>
                                    </div>
                                </div>
                            </div>
                            {/* Group 27 */}
                            <div>
                                <div>
                                    {/* Help */}
                                    <div>
                                        <p>Help</p>
                                    </div>
                                    {/* Group 25 */}
                                    <div>
                                        <p>Payment Options</p>
                                        <p>Returns</p>
                                        <p>Privacy Policies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Group 30 */}
                        <div>
                            {/* Newsletter */}
                            <div>
                                <p>Newsletter</p>
                            </div>
                            {/* Group 29 */}
                            <div className="flex flex-row justify-between">
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
                <div className="items-end w-[1240px] h-[59px] border-t border-[#D9D9D9]">
                    <p className="flex items-end h-[24px] border-t border-t-solid border-t-[#D9D9D9] text-base font-normal leading-[24px] text-left">
                        2023 furniro. All rights reverved
                    </p>
                </div>
            </div>
        </div>
    );
};
