import { Component } from "react";

type props = {
    tema: string
    seletorView: (tela: string, e: any) => void
}

export default class ListaIndex extends Component<props> {

    render() {
        return(
            <div>
                <ul className="list-group list-group-flush mx-5 px-5 py-4">
                <h1 className="pb-4">Listas</h1>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaCliente', e)}
                        style={{ cursor: 'pointer' }}>
                            Listar todos os Clientes
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaPet', e)}
                        style={{ cursor: 'pointer' }}>
                            Listar todos os Pets
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaProduto', e)}
                        style={{ cursor: 'pointer' }}>
                            Listar todos os Produtos
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaServico', e)}
                        style={{ cursor: 'pointer' }}>
                            Listar todos os Serviços
                    </li>
                    <li className="list-group-item" 
                        onClick={(e) => this.props.seletorView('ListaConsumo', e)}
                        style={{ cursor: 'pointer' }}>
                            Listar Consumos
                    </li>
                </ul>
            </div>
        )
    }

}