import './style.css';

const especialistas = [
    {
        nome: 'Mateus Varnier',
        cidade: 'Pato branco',
        descricao: 'Seguidor do metodo barsi buscar boas empresas pagadoras de Dividendos e crescimento'
    },
    {
        nome: 'Luiz Barsi Filho',
        cidade: 'São Paulo',
        descricao: 'Luiz Barsi Filho é um economista, advogado e o maior investidor individual brasileiro. Criador do metodo Barsi de investir vivendo de Dividendos'
    },
    {
        nome: 'Felipe Ruiz',
        cidade: 'São Paulo',
        descricao: 'INVESTIDOR desde 1999 É engenheiro de produção e possui MBA pelo MIT (Massachusetts Institute of Technology).'
    }
];

export function SectionSpecialists() {
    return (
        <section id="specialists">
            <h2>Converse com um Especialista</h2>
            <div className="specialists-content">

                { especialistas.map((item,index) => (
                    <div key={index} className="specialist">
                        <h5>{ item.nome }</h5>
                        <p>{ item.cidade }</p>
                        <p className="specialist-detail">{ item.descricao }</p>
                    </div>
                ))}

            </div>
        </section>
    )
}