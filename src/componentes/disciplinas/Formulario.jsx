import { useContext } from "react";
import Alerta from "../Alerta";
import DisciplinasContext from "./DisciplinasContext";

function Formulario() {
    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(DisciplinasContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edição de Disciplinas</h5>
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
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    value={objeto.nome}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtSigla" className="form-label">
                                    Sigla
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="txtSigla"
                                    name="sigla"
                                    value={objeto.sigla}
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtProfessor" className="form-label">
                                    Professor
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="txtProfessor"
                                    name="professor"
                                    value={objeto.professor}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPredio" className="form-label">
                                    Prédio
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="txtPredio"
                                    name="predio"
                                    value={objeto.predio}
                                    onChange={handleChange}
                                />
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