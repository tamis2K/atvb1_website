import './style.css';

const razoes = [
    { valor: '+400', rotulo: 'Empresas Listadas'},
    { valor: '+70000', rotulo: 'Clientes'},
    { valor: '+20', rotulo: 'Especialistas'}
];


export function SectionReasons() {

    return (

        <section id="reasons">
            <h2>Por que nos Escolher?</h2>

            <div className="reasons-content">

                {razoes.map((item, index) => (
                    <div key={index} className="reason">
                        <p className="reason-value">{ item.valor }</p>
                        <p className="reason-label">{ item.rotulo }</p>
                    </div>
                ))}

            </div>
        </section>

    )

}