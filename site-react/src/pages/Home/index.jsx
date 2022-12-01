import { SectionBanner } from '../../components/SectionBanner';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { SectionCards } from '../../components/SectionCards';
import { acoesGa } from '../../context/acoesGa';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <acoesGa>
                    <SectionBanner />
                    <SectionCards />
                </acoesGa>

                <SectionReasons />

                <SectionSpecialists />

            </div>
        </div>
    )
}