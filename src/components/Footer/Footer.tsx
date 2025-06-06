import { useState } from 'react';
import facebook from '../../assets/img-footer/facebook.png';
import instagram from '../../assets/img-footer/instagram.png';
import twitter from '../../assets/img-footer/twitter.png';
import linkedin from '../../assets/img-footer/linkedin.png';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = () => {
        const emailRegex =
            /^[^\s@]+@([a-zA-Z0-9-]+\.)?(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|icloud\.com|aol\.com|protonmail\.com|zoho\.com|live\.com|yandex\.com|bol\.com\.br|uol\.com\.br|[a-zA-Z0-9-]+\.(com|net|org|gov|edu|br|co\.uk|com\.br|io|ai))$/;

        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address.');
        } else {
            setMessage('Subscribe successfully.');
            setEmail('');
        }
    };

    return (
        //footer
        <div className="flex justify-center items-center h-[505px] border-t border-black/[0.17] font-poppins">
            {/* Group 45 */}
            <div className="flex flex-col w-[1240.01px] h-[419px] gap-[48px]">
                {/* Group 32 - Funiro e Redes Sociais, e + 3 Colunas */}
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
                        {/* Group 12 - Redes Sociais*/}
                        <div className="flex flex-row justify-between w-[184px] h-[34px]">
                            <div className="flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full shadow-[0px_4px_14px_0px_#00000026]">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                >
                                    <img src={facebook} alt="Facebook" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full shadow-[0px_4px_14px_0px_#00000026]">
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                >
                                    <img src={instagram} alt="Instagram" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full shadow-[0px_4px_14px_0px_#00000026]">
                                <a href="https://x.com/" target="_blank">
                                    <img src={twitter} alt="Twiter" />
                                </a>
                            </div>
                            <div className="flex justify-center items-center w-[34px] h-[34px] bg-white rounded-full shadow-[0px_4px_14px_0px_#00000026]">
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                >
                                    <img src={linkedin} alt="Linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Group 31 */}
                    <div className="flex flex-row justify-between w-[710px] h-[312px] left-[523.01px]">
                        {/* Group 28 */}
                        <div className="flex flex-row justify-center gap-[114px]">
                            {/* Group 26 - Link */}
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
                            {/* Group 27 - Help */}
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
                        {/* Group 30 - Newsletter e Imput */}
                        <div className="flex flex-col gap-[53px]">
                            {/* Newsletter */}
                            <div className="text-[#9F9F9F]">
                                <p>Newsletter</p>
                            </div>
                            {/* Group 29 */}
                            <div className="flex flex-row items-center w-[286px] gap-[11px] ">
                                <div className="flex  items-center w-[200px] h-[21px] leading-5 border-0 border-b-2 border-black text-[14px] ">
                                    <input
                                        className="w-[200px] pl-1"
                                        type="email"
                                        placeholder="Enter Your Email Address"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            e.key === 'Enter' &&
                                            handleSubscribe()
                                        }
                                    />
                                </div>
                                <div className="flex justify-center items-center w-[75px] h-[21px] font-medium leading-5 border-0 border-b-2 border-black px-4 py-1 text-[14px]">
                                    <button onClick={handleSubscribe}>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            {message && (
                                <p
                                    className={
                                        message === 'Subscribe successfully.'
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }
                                >
                                    {message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                {/* Group 44 - Rodapé */}
                <div className="flex items-end w-[1240.01px] h-[59px] border-t-[1px] border-solid border-[#D9D9D9]">
                    <div className="flex leading-[24px] text-left">
                        <p>2023 furniro. All rights reverved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
