import { useEffect } from "react";
import { createContext, useState } from "react";

const dados = [
    {
        foto: './assets/img/BBAS3.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 901000.00,
        operacao: 'venda',
        tipo: 'casa',
        cidade: 'pato',
        bairro: 'centro'
    },
    {
        foto: './assets/img/CSAN3.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 902000.00,
        operacao: 'locacao',
        tipo: 'apto',
        cidade: 'beltrao',
        bairro: 'centro'
    },
    {
        foto: './assets/img/EGIE3.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 903000.00,
        operacao: 'venda',
        tipo: 'casa',
        cidade: 'beltrao',
        bairro: 'centro'
    },
    {
        foto: './assets/img/PETR4.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 904000.00,
        operacao: 'venda',
        tipo: 'sobrado',
        cidade: 'coronel',
        bairro: 'centro'
    },
    {
        foto: './assets/img/PSSA3.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 905000.00,
        operacao: 'venda',
        tipo: 'sobrado',
        cidade: 'pato',
        bairro: 'lasalle'
    },
    {
        foto: './assets/img/RRRP3.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 906000.00,
        operacao: 'venda',
        tipo: 'apto',
        cidade: 'pato',
        bairro: 'centro'
    },
    {
        foto: './assets/img/SUZB3.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 990000.00,
        operacao: 'locacao',
        tipo: 'casa',
        cidade: 'coronel',
        bairro: 'centro'
    },
    {
        foto: './assets/img/TOTS3.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 990000.00,
        operacao: 'locacao',
        tipo: 'casa',
        cidade: 'coronel',
        bairro: 'centro'
    },
    {
        foto: './assets/img/UNIP6.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 990000.00,
        operacao: 'locacao',
        tipo: 'casa',
        cidade: 'coronel',
        bairro: 'centro'
    },
    {
        foto: './assets/img/VALE3.png',
        titulo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        descricao: 'Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.',
        preco: 990000.00,
        operacao: 'locacao',
        tipo: 'casa',
        cidade: 'coronel',
        bairro: 'centro'
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

        //Tipo
        if (paramFilter.tipo) {
            dadosFiltrados = dadosFiltrados.filter(item => item.tipo === paramFilter.tipo)
        }

        //Cidade
        if (paramFilter.cidade) {
            dadosFiltrados = dadosFiltrados.filter(item => item.cidade === paramFilter.cidade)
        }

        //Bairro
        if (paramFilter.bairro) {
            dadosFiltrados = dadosFiltrados.filter(item => item.bairro === paramFilter.bairro)
        }

        setImoveis(dadosFiltrados)

    }, [ paramFilter ]);



    return (
        <ImovelContext.Provider value={{imoveis, setParamFilter}}>
            {props.children}
        </ImovelContext.Provider>
    )
}