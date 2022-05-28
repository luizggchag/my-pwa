import { useState } from 'react';
import withAuth from './withAuth';

const Home = () => {

    const [listaDisciplinas, setListaDisciplinas] = useState(
        localStorage.getItem('MYPWA/listadisciplinas')
            ? JSON.parse(localStorage.getItem('MYPWA/listadisciplinas')) : []
    );

    const [listaTarefas, setListaTarefas] = useState(
        localStorage.getItem('MYPWA/listatarefas')
            ? JSON.parse(localStorage.getItem('MYPWA/listatarefas')) : []
    );

    const [tarefasDaDisciplina, setTarefasDaDisciplina] = useState([]);

    const tarefaDaDisciplina = id => {
        setTarefasDaDisciplina([]);
        const listaTarefaDaDisciplina = listaTarefas.filter(t => Number(t.disciplina) === Number(id));
        setTarefasDaDisciplina(listaTarefaDaDisciplina);
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1> HOME </h1>
            <div className="modal fade" id="modalTarefas" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Tarefas da Disciplina</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {tarefasDaDisciplina.length === 0 && <h2>Nenhum registro encontrado</h2>}
                            {tarefasDaDisciplina.length > 0 && (

                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Título</th>
                                                <th scope="col">Descrição</th>
                                                <th scope="col">Observação</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tarefasDaDisciplina.map(objeto => (
                                                <tr>
                                                    <td>{objeto.id}</td>
                                                    <td>{objeto.titulo}</td>
                                                    <td>{objeto.descricao}</td>
                                                    <td>{objeto.observacao}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {listaDisciplinas.length === 0 && <h2>Nenhum registro encontrado</h2>}
            <div className="container">
                <div className="row">
                    {listaDisciplinas.map(objeto => (
                        <div key={objeto.id} className={`card col-6`} >
                            <h5 className="card-header">{objeto.sigla}</h5>
                            <div className="card-body">
                                <h5 className="card-title">{objeto.nome}</h5>
                                <p className="card-text">
                                    {objeto.professor}
                                    <br />
                                    Prédio {objeto.predio}
                                </p>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTarefas"
                                    onClick={() => tarefaDaDisciplina(objeto.id)}>
                                    Tarefas
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
};

export default withAuth(Home);