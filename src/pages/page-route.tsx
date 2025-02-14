import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './homePage/homePage';
import { LoginPage } from './loginPage/LoginPage';

export const PageRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} index />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};
