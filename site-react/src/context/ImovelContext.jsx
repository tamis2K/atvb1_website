import { useEffect } from "react";
import { createContext, useState } from "react";

const dados = [
    {
        foto: './assets/img/BBAS3.png',
        titulo: 'Banco do Brasil BBAS3',
        descricao: 'Banco do Brasil é um banco brasileiro, constituído na forma de sociedade de economia mista, com participação do Governo Federal do Brasil em 50% das ações',
        preco: 34.90 ,
        operacao: 'compra',
    },
    {
        foto: './assets/img/CSAN3.png',
        titulo: 'Cosan CSAN3',
        descricao: 'Cosan S.A. é uma empresa brasileira com negócios nas áreas de açúcar, álcool, energia, lubrificantes, e logística.',
        preco: 16.22,
        operacao: 'compra',
    },
    {
        foto: './assets/img/PETR4.png',
        titulo: 'Petrobras PETR4',
        descricao: 'Petróleo Brasileiro S.A. é uma empresa de capital aberto, cujo acionista majoritário é o Governo do Brasil, sendo, portanto, uma empresa estatal de economia mista',
        preco: 25.66,
        operacao: 'venda'
    },
    {
        foto: './assets/img/PSSA3.png',
        titulo: 'PORTO SEGURO PSSA3',
        descricao: 'A Porto é uma holding brasileira fundada em 1945. A atuação da empresa se baseia em três verticais de negócios: Porto Seguros, Porto Saúde e Porto Seguro Bank',
        preco: 23.11,
        operacao: 'compra',
    },
    {
        foto: './assets/img/RRRP3.png',
        titulo: '3R Petroleum RRRP3',
        descricao: 'A 3R Petroleum Óleo e Gás S.A. é uma empresa do setor de óleo e gás com foco em redesenvolvimento de campos maduros em produção localizados em terra (onshore) e em águas rasas (shallow water).',
        preco: 35.30,
        operacao: 'venda',
    },
    {
        foto: './assets/img/SUZB3.png',
        titulo: 'SUZANO S.A. SUZB3',
        descricao: 'Suzano Papel e Celulose é uma empresa brasileira de papel e celulose. É a maior produtora global de celulose de eucalipto e uma das 10 maiores de celulose de mercado',
        preco: 52.77,
        operacao: 'venda',
    },
    {
        foto: './assets/img/TOTS3.png',
        titulo: 'TOTVS TOTS3',
        descricao: 'Totvs é uma empresa brasileira de software, com sede em São Paulo. A Totvs foi inicialmente formada a partir da fusão das empresas Microsiga e Logocenter.',
        preco: 32.59,
        operacao: 'Compra',
    },
    {
        foto: './assets/img/UNIP6.png',
        titulo: 'Unipar UNIP6',
        descricao: 'A Unipar Carbocloro é uma empresa química brasileira de capital aberto sediada em São Paulo fabricante de cloro, soda e derivados para usos industriais e presidida por Maurício Russomano, a partir de 2020. Desde 2016, quando comprou a Solvay Indupa.',
        preco: 96.49,
        operacao: 'compra',
    },
    {
        foto: './assets/img/VALE3.png',
        titulo: 'Vale VALE3',
        descricao: 'Vale S.A. é uma mineradora multinacional brasileira e uma das maiores operadoras de logística do país. É uma das maiores empresas de mineração do mundo e também a maior produtora de minério de ferro, de pelotas e de níquel',
        preco: 85.66,
        operacao: 'Venda',
    }
]

export const ImovelContext = createContext();

export function ImovelContextProvider(props) {

    const [imoveis, setImoveis] = useState(dados);
    const [paramFilter, setParamFilter] = useState({});    

    useEffect(() => {

        let dadosFiltrados = dados;

        //Operação
        if (paramFilter.operacao) {
            dadosFiltrados = dadosFiltrados.filter(item => item.operacao === paramFilter.operacao)
        }
        setImoveis(dadosFiltrados)

    }, [ paramFilter ]);



    return (
        <ImovelContext.Provider value={{imoveis, setParamFilter}}>
            {props.children}
        </ImovelContext.Provider>
    )
}