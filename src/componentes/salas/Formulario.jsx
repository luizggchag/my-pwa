import { useContext } from "react";
import Alerta from "../Alerta";
import SalasContext from "./SalasContext";

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaPredios } = useContext(SalasContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edição de Salas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label">
                                    ID
                                </label>
                                <input type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtID"
                                    name="id"
                                    value={objeto.id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNumero" className="form-label">
                                    Numero
                                </label>
                                <input type="number"
                                    className="form-control"
                                    id="txtNumero"
                                    name="numero"
                                    value={objeto.numero}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDescricao" className="form-label">
                                    Descrição
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="txtDescricao"
                                    name="descricao"
                                    value={objeto.descricao}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtCapacidade" className="form-label">
                                    Capacidade
                                </label>
                                <input type="number"
                                    className="form-control"
                                    id="txtCapacidade"
                                    name="capacidade"
                                    value={objeto.capacidade}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="selectPredio" className="form-label">
                                    Prédio
                                </label>
                                <select required
                                    className="form-control"
                                    id="selectPredio"
                                    value={objeto.predio}
                                    name="predio"
                                    onChange={handleChange}>
                                    <option disabled={true} value="">(Selecione o prédio)</option>
                                    {
                                        listaPredios.map((predio) => (
                                            <option key={predio.id} value={predio.id}>
                                                {predio.nome}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">Salvar
                                <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario;