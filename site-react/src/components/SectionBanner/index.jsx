import { useState } from 'react';
import { uselAcoes } from '../../hook/useIAcoes';
import './style.css';

const operacoes = [
    { valor: '', rotulo: 'Operação' },
    { valor: 'venda', rotulo: 'Venda' },
    { valor: 'locacao', rotulo: 'Locação' }
];

export function SectionBanner() {

    const { acoes, setParamFilter } = uselAcoes();

    const [filter, setFilter] = useState({});

    function handleFilter() {
        setParamFilter(filter)
    }

    return (
        <section id="banner">
            <div className="banner-content">
                <h1>Viva de Dividendos Investindo nas melhores Empresas</h1>
                <h3>Acelere seus resultados e alcance sua Liberdade Financeira</h3>
            </div>
            <div className="banner-filter">
                <div className="filter-fields">

                    <form>
                        <select
                            onChange={event => setFilter({ ...filter, operacao: event.target.value })}>
                            {operacoes.map((item, index) => (
                                <option key={index} value={item.valor}>{item.rotulo}</option>
                            ))}
                        </select>
                    </form>

                </div>

                <div className="filter-result">
                    <p className="result-value">{acoes.length}</p>
                    <p className="result-label">{acoeslength != 1 ? 'Ações' : 'Ação'}</p>
                    <button onClick={handleFilter}>Filtrar</button>
                </div>
            </div>
        </section>
    )

}