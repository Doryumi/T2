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
                <h1 className="pb-4">Lista de Pets</h1>
            <table className="table table-striped align-middle">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Raça</th>
                            <th scope="col">Gênero</th>
                            <th scope="col">Tutor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Rex</td>
                            <td>Cachorro</td>
                            <td>Labrador</td>
                            <td>Macho</td>
                            <td>615.699.040-22</td>
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
                            <td>Bella</td>
                            <td>Cachorro</td>
                            <td>Poodle</td>
                            <td>Fêmea</td>
                            <td>603.584.590-87</td>
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
                            <td>Lucky</td>
                            <td>Gato</td>
                            <td>Persa</td>
                            <td>Macho</td>
                            <td>544.479.780-16</td>
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
                            <td>Nina</td>
                            <td>Gato</td>
                            <td>Siamês</td>
                            <td>Fêmea</td>
                            <td>614.892.590-74</td>
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
                            <td>Toby</td>
                            <td>Cachorro</td>
                            <td>Bulldog</td>
                            <td>Macho</td>
                            <td>309.594.320-27</td>
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
                            <td scope="row">6</td>
                            <td>Lola</td>
                            <td>Gato</td>
                            <td>SRD</td>
                            <td>Fêmea</td>
                            <td>158.058.970-75</td>
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
                            <td scope="row">7</td>
                            <td>Zoe</td>
                            <td>Coelho</td>
                            <td>Angorá</td>
                            <td>Fêmea</td>
                            <td>246.654.560-89</td>
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
                            <td scope="row">8</td>
                            <td>Rocky</td>
                            <td>Cachorro</td>
                            <td>Husky</td>
                            <td>Macho</td>
                            <td>818.320.460-01</td>
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
                            <td scope="row">9</td>
                            <td>Mia</td>
                            <td>Gato</td>
                            <td>SRD</td>
                            <td>Fêmea</td>
                            <td>937.844.350-84</td>
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
                            <td scope="row">10</td>
                            <td>Charlie</td>
                            <td>Pássaro</td>
                            <td>Canário</td>
                            <td>Macho</td>
                            <td>620.614.790-81</td>
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