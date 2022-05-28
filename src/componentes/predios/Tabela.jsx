import { useContext } from 'react'
import Alerta from '../Alerta';
import PrediosContext from './PrediosContext';



const Tabela = () => {

    const { listaObjetos, acaoRemover, alerta,
        setObjeto, setEditar, setAlerta } = useContext(PrediosContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Prédios</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => {
                    setObjeto({ id: 0, nome: "", descricao: "", sigla: "" });
                    setEditar(false);
                    setAlerta({ status: "", message: "" });
                }}>
                Novo
            </button>
            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col" width="17%">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Sigla</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.id}>
                                    <td align="center">
                                        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={() => {
                                                setObjeto(objeto);
                                                setEditar(true);
                                                setAlerta({ status: "", message: "" });
                                            }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => { acaoRemover(objeto); }}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <td>{objeto.id}</td>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.descricao}</td>
                                    <td>{objeto.sigla}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

}

export default Tabela;