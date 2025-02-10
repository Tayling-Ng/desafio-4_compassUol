import { MainSection } from './MainSection/MainSection.tsx';
import { Section2 } from './Section2/Section2.tsx';
import { Section3 } from './Section3/Section3.tsx';
import { Section4 } from './Section4/Section4.tsx';
import { Section5 } from './Section5/Section5.tsx';

export const HomePage = () => {
    return (
        <div>
            <MainSection />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>
    );
};
