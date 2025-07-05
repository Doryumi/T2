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
                <h1 className="pb-4">Estatísticas</h1>
                <table className="table table-striped align-middle">
                        <tbody>
                            <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                                {/* top 10 clientes OK*/}
                                <div className="accordion-item">

                                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                            10 clientes que mais consumiram (em quantidade)
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                                        <div className="accordion-body">
                                            <table className="table table-striped align-middle">
                                                <thead>
                                                    <tr> 
                                                    <td scope="row">Posição</td>
                                                        <td>Nome</td>
                                                        <td>CPF</td>
                                                        <td>Total consumido</td>
                                                    </tr>
                                                </thead>        
                                                <tbody>
                                                    <tr> 
                                                    <td scope="row">1</td>
                                                        <td>Maria Silva</td>
                                                        <td>61569904022</td>
                                                        <td>15</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">2</td>
                                                        <td>Pedro Souza</td>
                                                        <td>30959432027</td>
                                                        <td>14</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">3</td>
                                                        <td>Ricardo Alves</td>
                                                        <td>24665456089</td>
                                                        <td>14</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">4</td>
                                                        <td>Fernanda Lima</td>
                                                        <td>81832046001</td>
                                                        <td>14</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">5</td>
                                                        <td>Ana Costa</td>
                                                        <td>61489259074</td>
                                                        <td>13</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">6</td>
                                                        <td>João Oliveira</td>
                                                        <td>60358459087</td>
                                                        <td>12</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">7</td>
                                                        <td>Laura Mendes</td>
                                                        <td>15805897075</td>
                                                        <td>11</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">8</td>
                                                        <td>Juliana Pereira</td>
                                                        <td>62061479081</td>
                                                        <td>11</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">9</td>
                                                        <td>Gustavo Rocha</td>
                                                        <td>93784435084</td>
                                                        <td>10</td>
                                                    </tr>

                                                    <tr>
                                                    <td scope="row">10</td>
                                                        <td>Carlos Santos</td>
                                                        <td>54447978016</td>
                                                        <td>9</td> 
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* top 5 clientes OK*/}
                                <div className="accordion-item">

                                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            5 clientes que mais gastaram (R$)
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div className="accordion-body">
                                            <table className="table table-striped align-middle">
                                                <thead>
                                                    <tr>
                                                    <td scope="row">Posição</td>
                                                        <td>Nome</td>
                                                        <td>CPF</td>
                                                        <td>Total consumido</td>
                                                    </tr>
                                                </thead>        
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Maria Silva</td>
                                                            <td>61569904022</td>
                                                            <td>R$ 2375.4</td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td>2</td>
                                                            <td>João Oliveira</td>
                                                            <td>60358459087</td>
                                                            <td>R$ 1962.5</td>
                                                        </tr>

                                                        <tr>
                                                            <td>3</td>
                                                            <td>Ricardo Alves</td>
                                                            <td>24665456089</td>
                                                            <td>R$ 1712.7</td>
                                                        </tr>

                                                        <tr>
                                                            <td>4</td>
                                                            <td>Pedro Souza</td>
                                                            <td>30959432027</td>
                                                            <td>R$ 1397.2</td>
                                                        </tr>

                                                        <tr>
                                                            <td>5</td>
                                                            <td>Laura Mendes</td>
                                                            <td>15805897075</td>
                                                            <td>R$ 1226.7</td>
                                                        </tr>
                                                    </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Produtos mais consumidos OK */}
                                <div className="accordion-item">

                                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Produtos mais consumidos
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div className="accordion-body">
                                            <table className="table table-striped align-middle">
                                                <thead>
                                                    <tr> 
                                                        <td scope="row">Posição</td>
                                                        <td>ID</td>
                                                        <td>Nome</td>
                                                        <td>Total consumido</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>                                                    
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>Guia Retrátil Premium</td>
                                                        <td>27</td>
                                                    </tr>

                                                    <tr>                                                    
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>Coleira Antipulgas</td>
                                                        <td>23</td>
                                                    </tr>

                                                    <tr>                                                    
                                                        <td>3</td>
                                                        <td>5</td>
                                                        <td>Caixa Transportadora</td>
                                                        <td>14</td>
                                                    </tr>
                                                </tbody>        
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Serviços mais consumidos OK */}
                                <div className="accordion-item">

                                    <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                            Serviços mais consumidos
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                        <div className="accordion-body">
                                            <table className="table table-striped align-middle">
                                                <thead>
                                                    <tr> 
                                                        <td scope="row">Posição</td>
                                                        <td>ID</td>
                                                        <td>Nome</td>
                                                        <td>Total consumido</td>
                                                    </tr>
                                                </thead>        
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>3</td>
                                                        <td>Cirurgia de Castração</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr>

                                                        <td>2</td>
                                                        <td>5</td>
                                                        <td>Pet Sitter (diária)</td>
                                                        <td>13</td>
                                                    </tr>

                                                    <tr>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>Banho e Tosa</td>
                                                        <td>10</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Tipo mais consumidos */}
                                <div className="accordion-item">

                                    <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                            Produtos e Serviços mais consumidos por tipo de pet
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                                        <div className="accordion-body">
                                            <table className="table table-striped align-middle">
                                                <thead>
                                                    <tr> 
                                                        <td scope="row"></td>
                                                        <td></td>
                                                        <td>Serviços</td>
                                                        <td></td>
                                                        <td>Produtos</td>
                                                        <td></td>
                                                        <td></td>

                                                    </tr>
                                                    <tr> 
                                                        <td scope="row">Tipo</td>
                                                        <td>ID</td>
                                                        <td>Nome</td>
                                                        <td>QTD</td>
                                                        <td>ID</td>
                                                        <td>Nome</td>
                                                        <td>QTD</td>
                                                    </tr>
                                                </thead>        
                                                <tbody>
                                                    <tr> 
                                                        <td scope="row">Cachorro</td>
                                                        <td>1</td>
                                                        <td>Banho e Tosa</td>
                                                        <td>12</td>
                                                        <td>2</td>
                                                        <td>Coleira Antipulgas</td>
                                                        <td>12</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Gato</td>
                                                        <td>3</td>
                                                        <td>Cirurgia de Castração</td>
                                                        <td>5</td>
                                                        <td>1</td>
                                                        <td>Guia Retrátil Premium</td>
                                                        <td>16</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Coelho</td>
                                                        <td>5</td>
                                                        <td>Cirurgia de Castração</td>
                                                        <td>6</td>
                                                        <td>5</td>
                                                        <td>Caixa Transportadora</td>
                                                        <td>3</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Pássaro</td>
                                                        <td>5</td>
                                                        <td>Pet Sitter (diária)</td>
                                                        <td>2</td>
                                                        <td>5</td>
                                                        <td>Caixa Transportadora</td>
                                                        <td>3</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Raças mais consumidos */}
                                <div className="accordion-item">

                                    <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                            Produtos e Serviços mais consumidos por tipo de pet
                                        </button>
                                    </h2>

                                    <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                                        <div className="accordion-body">
                                            <table className="table table-striped align-middle">
                                                <thead>
                                                    <tr> 
                                                        <td scope="row"></td>
                                                        <td></td>
                                                        <td>Serviços</td>
                                                        <td></td>
                                                        <td>Produtos</td>
                                                        <td></td>
                                                        <td></td>

                                                    </tr>
                                                    <tr> 
                                                        <td scope="row">Tipo</td>
                                                        <td>ID</td>
                                                        <td>Nome</td>
                                                        <td>QTD</td>
                                                        <td>ID</td>
                                                        <td>Nome</td>
                                                        <td>QTD</td>
                                                    </tr>
                                                </thead>        
                                                <tbody>
                                                    <tr> 
                                                        <td scope="row">Labrador</td>
                                                        <td>3</td>
                                                        <td>Cirurgia de Castração</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>Coleira Antipulgas</td>
                                                        <td>6</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Poodle</td>
                                                        <td>3</td>
                                                        <td>Cirurgia de Castração</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>Coleira Antipulgas</td>
                                                        <td>6</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Persa</td>
                                                        <td>3</td>
                                                        <td>Cirurgia de Castração</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>Guia Retrátil Premium</td>
                                                        <td>6</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Siamês</td>
                                                        <td>5</td>
                                                        <td>Pet Sitter (diária)</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>Guia Retrátil Premium</td>
                                                        <td>3</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Bulldog</td>
                                                        <td>5</td>
                                                        <td>Pet Sitter (diária)</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>Guia Retrátil Premium</td>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">SRD</td>
                                                        <td>3</td>
                                                        <td>Cirurgia de Castração</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>Guia Retrátil Premium</td>
                                                        <td>7</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Angorá</td>
                                                        <td>3</td>
                                                        <td>Cirurgia de Castração</td>
                                                        <td>3</td>
                                                        <td>5</td>
                                                        <td>Pet Sitter (diária)</td>
                                                        <td>2</td>
                                                    </tr>

                                                    <tr> 
                                                        <td scope="row">Husky</td>
                                                        <td>1</td>
                                                        <td>Banho e Tosa</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>Guia Retrátil Premium</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr> 
                                                        <td scope="row">Canário</td>
                                                        <td>2</td>
                                                        <td>Consulta Veterinária</td>
                                                        <td>1</td>
                                                        <td>5</td>
                                                        <td>Caixa Transportadora</td>
                                                        <td>2</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </tbody>
                </table>
            </div>
        )
    }
}