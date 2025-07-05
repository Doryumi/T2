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
                <h1 className="pb-4">Lista de Serviços</h1>
            <table className="table table-striped align-middle ">
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
                            <td>Banho e Tosa</td>
                            <td>R$50,00</td>
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
                            <td>Consulta Veterinária</td>
                            <td>R$100,00</td>
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
                            <td>Cirurgia de Castração</td>
                            <td>R$300,00</td>
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
                            <td>Vacinação</td>
                            <td>R$80,00</td>
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
                            <td scope="row">5</td>
                            <td>Pet Sitter (diária)</td>
                            <td>R$120,00</td>
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