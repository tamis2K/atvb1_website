import { SectionReasons } from '../../components/SectionReasons';
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { SectionCards } from '../../components/SectionCards';
import { SectionBanner } from '../../components/SectionBanner';
import { AcoesContextProvider } from '../../context/AcoesContext';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <AcoesContextProvider>
                    <SectionBanner />
                    <SectionCards />
                </AcoesContextProvider>

                <SectionReasons />

                <SectionSpecialists />

            </div>
        </div>
    )
}