import { Component, useState } from "react"

type props = {
    tema: string
}

type State = {
    camposRG: number[],
    camposTel: number[]
}


export default class cadastroCliente extends Component<props, State> {
    state: State = {
        camposRG : [0],
        camposTel: [0]
    };

    adicionarCampoRG = () => {
        this.setState((prevState) => ({
        camposRG: [...prevState.camposRG, prevState.camposRG.length],
        }));
    };

    adicionarCampoTel = () => {
        this.setState((prevState) => ({
        camposTel: [...prevState.camposTel, prevState.camposTel.length],
        }))
    };
    removerCampoRG = () => {
        this.setState((prevState) => {
            // Só remove se houver mais de 1 telefone
            if (prevState.camposRG.length > 1) {
                return {
                    camposRG: prevState.camposRG.slice(0, -1) // Remove o último
                };
            }
            return null; // Não altera o state se não puder remover
        });
    };

    removerCampoTel = () => {
        this.setState((prevState) => {
            // Só remove se houver mais de 1 telefone
            if (prevState.camposTel.length > 1) {
                return {
                    camposTel: prevState.camposTel.slice(0, -1) // Remove o último
                };
            }
            return null; // Não altera o state se não puder remover
        });
    };


    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid px-5">
                <form className="container-fluid px-5 py-4">
                <h1 className="pb-4">Cadastrar Cliente</h1>
                
                    {/* campo nome */}
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>

                    {/* campo nome social*/}
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>

                    {/* campo email */}
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>

                    {/* campo CPF e data de emissão*/}
                    <div className="row">
                        <div className="col-10">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão" 
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type === 'date' && !e.target.value && (e.target.type = 'text')} aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    
                    {/* botoes RG*/}
                    <div className="row">
                        <div className="mb-3 col-3">
                            <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={this.adicionarCampoRG} > Adicionar RG </button>
                        </div>
                        {this.state.camposRG.length > 1 && (
                            <div className="mb-3 col-3">
                                <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={this.removerCampoRG} > Remover Último RG </button>
                            </div>
                        )}
                    </div>

                    {/* campos RG e data de emissão*/}
                    {this.state.camposRG.map((_, index) => (
                        <div className="row" key={index}>
                            <div className="col-10">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão" 
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => e.target.type === 'date' && !e.target.value && (e.target.type = 'text')}aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>

                    ))}

                    {/* botoes Tel*/}
                    <div className="row">
                        <div className=" mb-3 col-3">
                            <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={this.adicionarCampoTel} > Adicionar Telefone </button>
                        </div>
                        {this.state.camposTel.length > 1 && (
                            <div className=" mb-3 col-3">
                                <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={this.removerCampoTel} > Remover Último Telefone </button>
                            </div>
                        )}
                    </div>

                    {/* campo Telefone*/}
                    {this.state.camposTel.map((_, index) => (
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                            
                        </div>
                    ))}

                    {/* botão de cadastrar */}
                        <div className=" justify-content-center mb-3 ">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}