import { useEffect } from "react";
import { createContext, useState } from "react";

const dados = [
    {
        foto: './assets/img/BBAS3.png',
        titulo: '',
        descricao: '',
        operacao: 'venda',

    },
    {
        foto: './assets/img/CSAN3.png',
        titulo: '',
        descricao: '',
        preco: 903000.00,
        operacao: 'venda',
    },
    {
        foto: './assets/img/PETR4.png',
        titulo: '',
        descricao: '',
        preco: 904000.00,
    },
    {
        foto: './assets/img/PSSA3.png',
        titulo: '',
        descricao: '',
        preco: 905000.00,
        operacao: 'venda',
    },
    {
        foto: './assets/img/RRRP3.png',
        titulo: '',
        descricao: '',
        preco: 906000.00,
        operacao: 'venda',
    },
    {
        foto: './assets/img/SUZB3.png',
        titulo: '',
        descricao: '',
        preco: 990000.00,
        operacao: 'locacao',
    },
    {
        foto: './assets/img/TOTS3.png',
        titulo: '',
        descricao: '',
        preco: 990000.00,
        operacao: 'locacao',
    },
    {
        foto: './assets/img/UNIP6.png',
        titulo: '',
        descricao: '',
        preco: 990000.00,
        operacao: 'locacao',
    },
    {
        foto: './assets/img/VALE3.png',
        titulo: '',
        descricao: '',
        preco: 990000.00,
        operacao: 'locacao',
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