import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PageRoute } from './pages/page-route';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header />
        <PageRoute />
        <Footer />
    </StrictMode>
);
