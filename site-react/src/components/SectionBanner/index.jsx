import { useState } from 'react';
import { useImovel } from '../../hook/useImovel';
import './style.css';

const operacoes = [
    { valor: '', rotulo: 'Operação' },
    { valor: 'venda', rotulo: 'Venda' },
    { valor: 'compra', rotulo: 'Compra' }
];


export function SectionBanner() {

    const { imoveis, setParamFilter } = useImovel();

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
                    <p className="result-value">{imoveis.length}</p>
                    <p className="result-label">{imoveis.length != 1 ? 'imóveis' : 'imóvel'}</p>
                    <button onClick={handleFilter}>Filtrar</button>
                </div>
            </div>
        </section>
    )

}