import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './homePage/homePage';

export const PageRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} index />
            </Routes>
        </BrowserRouter>
    );
};
