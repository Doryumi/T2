import { Component } from "react"

type props = {
    tema: string
}

export default class cadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid px-5">
                <form className="container-fluid px-5 py-4">
                <h1 className="pb-4">Cadastrar Produto</h1>

                    {/* Produto */}
                    <div className="row">
                        <div className=" mb-3 col-10">
                            <div className="input-group mb-3">
                            
                                <input type="text" className="form-control" placeholder="Nome do Produto" aria-label="Nome do Produto" aria-describedby="basic-addon1" />
                            </div>
                        </div>

                        {/* campo preço */}

                        <div className="col-2">
                            <div className="input-group">                 
                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>$</span>
                                <input type="text" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="basic-addon1" />
                            </div>

                            <div className="col-8">
                            

                            </div>
                        </div>
                    </div>  




                    {/* botoes RG
                    <div className="row">
                        <div className="mb-3 col-3">
                            <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={this.adicionarCampoRG} > Adicionar RG </button>
                        </div>
                        <div className="mb-3 col-3">
                            <button className="btn btn-outline-primary w-100" type="button" style={{ background: tema }} onClick={this.removerCampoRG} > Remover Último RG </button>
                        </div>
                    </div>









                    {/* botão de cadastrar */}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}