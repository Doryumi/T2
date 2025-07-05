/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
}

export default class ListaCliente extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="mx-5 px-5 py-4">
                <h1 className="pb-4">Lista de Produtos</h1>
            <table className="table table-striped align-middle">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Preço</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Guia Retrátil Premium</td>
                            <td>R$79,90</td>
                            <td style={{width:'10px'}}>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-outline-secondary">
                                        Editar
                                    </button>

                                    <button className="btn btn-outline-danger">
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td scope="row">2</td>
                            <td>Coleira Antipulgas</td>
                            <td>R$45,90</td>
                            <td style={{width:'10px'}}>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-outline-secondary">
                                        Editar
                                    </button>

                                    <button className="btn btn-outline-danger">
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td scope="row">3</td>
                            <td>Ração Super Premium para Cães</td>
                            <td>R$129,90</td>
                            <td style={{width:'10px'}}>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-outline-secondary">
                                        Editar
                                    </button>

                                    <button className="btn btn-outline-danger">
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td scope="row">4</td>
                            <td>Arranhador para Gatos</td>
                            <td>R$120,00</td>
                            <td style={{width:'1px'}}>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-outline-secondary">
                                        Editar
                                    </button>

                                    <button className="btn btn-outline-danger">
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td scope="row">5</td>
                            <td>Caixa Transportadora</td>
                            <td>R$65,00</td>
                            <td style={{width:'10px'}}>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-outline-secondary">
                                        Editar
                                    </button>

                                    <button className="btn btn-outline-danger">
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}