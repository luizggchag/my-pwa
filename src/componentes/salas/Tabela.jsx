import { useContext } from 'react'
import Alerta from '../Alerta';
import SalasContext from './SalasContext';



const Tabela = () => {

    const { listaObjetos, acaoRemover, alerta,
        setObjeto, setEditar, setAlerta, listaPredios } = useContext(SalasContext);

    const nomePredio = id => {
        let objeto = listaPredios.find(p => p.id === Number(id));
        return objeto.nome;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Salas</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => {
                    setObjeto({ id: 0, numero: "", descricao: "", capacidade: "", predio: "" });
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
                                <th scope="col">Numero</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Capacidade</th>
                                <th scope="col">Prédio</th>
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
                                    <td>{objeto.numero}</td>
                                    <td>{objeto.descricao}</td>
                                    <td>{objeto.capacidade}</td>
                                    <td>{nomePredio(objeto.predio)} </td>
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
