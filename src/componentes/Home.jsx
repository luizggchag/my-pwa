import { useState } from 'react';

const Home = () => {

    const [listaPredios, setListaPredios] = useState(
        localStorage.getItem('SALASPWA/listapredios')
            ? JSON.parse(localStorage.getItem('SALASPWA/listapredios')) : []
    );

    const [listaSalas, setListaSalas] = useState(
        localStorage.getItem('SALASPWA/listasalas')
            ? JSON.parse(localStorage.getItem('SALASPWA/listasalas')) : []
    );

    const [salasDoPredio, setSalasDoPredio] = useState([]);

    const salaDoPredio = id => {
        setSalasDoPredio([]);
        const listaSalaDoPredio = listaSalas.filter(s => Number(s.predio) === Number(id));
        setSalasDoPredio(listaSalaDoPredio);
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Salas de aula e Prédios - PWA</h1>
            <div className="modal fade" id="modalSalas" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Salas do prédio</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {salasDoPredio.length === 0 && <h2>Nenhum registro encontrado</h2>}
                        {salasDoPredio.length > 0 && (
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Numero</th>
                                            <th scope="col">Descrição</th>
                                            <th scope="col">Capacidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {salasDoPredio.map(objeto => (
                                            <tr key={objeto.id}>
                                                <td>{objeto.numero}</td>
                                                <td>{objeto.descricao}</td>
                                                <td>{objeto.capacidade}</td>
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
            <div className="container">
                <div className="row">
                    {listaPredios.map(objeto => (
                        <div key={objeto.id} className={`card col-6`} >
                            <h5 className="card-header">{objeto.sigla}</h5>
                            <div className="card-body">
                                <h5 className="card-title">{objeto.nome}</h5>
                                <p className="card-text">{objeto.descricao}</p>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalSalas"
                                    onClick={() => salaDoPredio(objeto.id)}>
                                    Salas
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
};

export default Home;