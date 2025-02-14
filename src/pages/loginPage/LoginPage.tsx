import React, { useState } from 'react';
import background from '../../assets/img-login/img-login.png';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const emailRegex =
            /^[^\s@]+@([a-zA-Z0-9-]+\.)?(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com|icloud\.com|aol\.com|protonmail\.com|zoho\.com|live\.com|yandex\.com|bol\.com\.br|uol\.com\.br|[a-zA-Z0-9-]+\.(com|net|org|gov|edu|br|co\.uk|com\.br|io|ai))$/;

        if (username === '' || password === '') {
            setError('Username and password are required.');
            return;
        }

        if (!emailRegex.test(username)) {
            setError('Enter a valid email address.');
            return;
        }

        console.log('Usuário:', username, 'Senha:', password);
        setError('');
    };

    return (
        <div className="w-full h-auto relative font-poppins">
            <div>
                <img
                    className="w-full h-auto"
                    src={background}
                    alt="background"
                />
                <div className="flex justify-center items-center w-[650px] h-[450px] absolute top-[190px] left-[778px] rounded-tl-lg bg-[#FFF3E3]">
                    <div className="flex flex-col justify-center w-[561px] h-[344px] left-[778px] gap-[40px]">
                        <div className="flex justify-center items-center text-[32px] font-bold text-[#B88E2F]">
                            <h2>Login Information</h2>
                        </div>
                        {error && (
                            <div className="text-red-500 text-center">
                                {error}
                            </div>
                        )}
                        <div>
                            <form onSubmit={handleLogin} className="space-y-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-bold text-[#B88E2F]"
                                    >
                                        User
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-[#B88E2F] rounded-md "
                                        placeholder="Enter your e-mail"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-bold text-[#B88E2F]"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="w-full px-3 py-2 border border-[#B88E2F] rounded-md"
                                        placeholder="Enter your password"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#B88E2F] text-white py-2 px-4 rounded-md font-bold"
                                >
                                    Entrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
