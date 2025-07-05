import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import CadastroIndex from "../pages/cadastro/cadastro";
import CadastroCliente from "../pages/cadastro/cadastroCliente";
import CadastroPet from "../pages/cadastro/cadastroPet";
import CadastroProduto from "../pages/cadastro/cadastroProduto";
import CadastroServico from "../pages/cadastro/cadastroServico";
import CadastroConsumo from "../pages/cadastro/cadastroConsumo";

import ListaIndex from "../pages/listas/lista";
import ListaCliente from "../pages/listas/listaClientes";
import ListaPet from "../pages/listas/listaPets";
import ListaProduto from "../pages/listas/listaProdutos";
import ListaServico from "../pages/listas/listaServicos";
import ListaConsumo from "../pages/listas/listaConsumo";


type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Listar'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Listar', 'Cadastrar']} />
        if (this.state.tela === 'Listar') {
            return (
                <>
                    {barraNavegacao}
                    <ListaIndex tema="#e3f2fd" seletorView={this.selecionarView} />
                </>
            )
        } 
        else if (this.state.tela === 'ListaCliente') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <ListaCliente tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'ListaPet') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <ListaPet tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'ListaProduto') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <ListaProduto tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'ListaServico') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <ListaServico tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'ListaConsumo') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <ListaConsumo tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'Cadastrar') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <CadastroIndex tema="e3f2fd" seletorView={this.selecionarView} />
                    </div>
                </>
            )
        } 
        else if (this.state.tela === 'CadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <CadastroCliente tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'CadastroPet') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <CadastroPet tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'CadastroProduto') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <CadastroProduto tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'CadastroServico') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <CadastroServico tema="e3f2fd" />
                    </div>
                </>
            )
        }
        else if (this.state.tela === 'CadastroConsumo') {
            return (
                <>
                    {barraNavegacao}
                    <div className="">
                        <CadastroConsumo tema="e3f2fd" />
                    </div>
                </>
            )
        }
    }
}