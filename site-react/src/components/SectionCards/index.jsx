import { IntlProvider, FormattedNumber } from 'react-intl';
import { useAcoes } from '../../hook/useAcoes';

import './style.css';


export function SectionCards() {

    const { Acoes } = useAcoes();

    return (
        <section id="cards">
            <h2>Top empresas pagadoras de Dividendos e crescimento</h2>

            {Acoes.length > 0 ? (
                <div className="cards-content">

                    {Acoes.map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.foto} alt="Casa 1" />
                            <div className="card-content">
                                <h4>{item.titulo}</h4>
                                <p>{item.descricao}</p>

                                <div className="card-price">
                                    <p>
                                        <IntlProvider locale="pt-BR">
                                            <FormattedNumber value={item.preco}
                                                style="currency"
                                                currency="BRL" />
                                        </IntlProvider>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <h3 className="not-found">Não há resultado para sua busca</h3>
            ) }


        </section>
    )
}