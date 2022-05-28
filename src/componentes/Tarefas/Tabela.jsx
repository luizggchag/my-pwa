import { useContext } from 'react'
import Alerta from '../Alerta';
import TarefasContext from './TarefasContext';

const Tabela = () => {
    const { listaObjetos, acaoRemover, alerta,
        setObjeto, setEditar, setAlerta, listaDisciplinas } = useContext(TarefasContext);

    const siglaDisciplina = id => {
        let objeto = listaDisciplinas.find(p => p.id === Number(id));
        return objeto.sigla;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Tarefas</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => {
                    setObjeto({ id: 0, titulo: "", descricao: "", observacao: "", disciplina: "" });
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
                                <th scope="col">Título</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Observação</th>
                                <th scope="col">Disciplina</th>
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
                                    <td>{objeto.titulo}</td>
                                    <td>{objeto.descricao}</td>
                                    <td>{objeto.observacao}</td>
                                    <td>{siglaDisciplina(objeto.disciplina)} </td>
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
