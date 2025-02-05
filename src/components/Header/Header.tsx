import logo from '../../assets/img-header/Logos-05.png';
import usuario from '../../assets/img-header/Vector-usuario.png';
import carrinho from '../../assets/img-header/Vector-carrinho.png';

export const Header = () => {
    return (
        <div className="flex flex-row h-[100px] justify-between bg-blue-200">
            <div className="flex items-center absolute w-[185px] h-[41px] top-[29px] left-[54px] gap-[5px]">
                <img className="w-[50px] h-[32px]" src={logo} alt="logo" />
                <h1 className="w-[130px] h-[41px] text-[34px] font-bold leading-[41.45px] text-left text-black">
                    Furniro
                </h1>
            </div>
            <div>
                <nav className="flex flex-row items-center absolute w-[430px] h-[24px] top-[38px] left-[505px] gap-[100px] text-black">
                    <a href="">Home</a>

                    <a href="">Shop</a>

                    <a href="">About</a>

                    <a href="">Contact</a>
                </nav>
            </div>
            <div className="flex flex-row items-center absolute h-[100px] gap-[30px] right-20">
                <img
                    className="w-[23.33px] h-[18.67px] top-[41px] left-[1255px]"
                    src={usuario}
                    alt="usuario"
                />
                <img
                    className="w-[24.53px] h-[22.06px] top-[3.55px] left-[1.67px]"
                    src={carrinho}
                    alt="carrinho"
                />
            </div>
        </div>
    );
};
