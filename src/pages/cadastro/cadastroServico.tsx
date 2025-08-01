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
                <h1 className="pb-4">Cadastrar Serviço</h1>

                    {/* Serviço */}
                    <div className="row">
                        <div className=" mb-3 col-10">
                            <div className="input-group mb-3">
                            
                                <input type="text" className="form-control" placeholder="Nome do Serviço" aria-label="Nome do Serviço" aria-describedby="basic-addon1" />
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

                    {/* botão de cadastrar */}
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}