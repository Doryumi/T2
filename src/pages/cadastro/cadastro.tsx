import { Component } from "react";

type props = {
    tema: string
    seletorView: (tela: string, e: any) => void
}

export default class CadastroIndex extends Component<props> {

    render() {
        return(
            <>
                <ul className="list-group list-group-flush mx-5 px-5 py-4">
                <h1 className="pb-4">Cadastro</h1>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroCliente', e)}
                        style={{ cursor: 'pointer' }}>
                            Cadastro de Cliente
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroPet', e)}
                        style={{ cursor: 'pointer' }}>
                            Cadastro de Pet
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroProduto', e)}
                        style={{ cursor: 'pointer' }}>
                            Cadastro de Produto
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroServico', e)}
                        style={{ cursor: 'pointer' }}>
                            Cadastro de Serviço
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('CadastroConsumo', e)}
                        style={{ cursor: 'pointer' }}>
                            Cadastro de Venda
                    </li>
                </ul>
            </>
        )
    }

}