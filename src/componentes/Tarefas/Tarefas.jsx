import { useState, useEffect } from 'react';
import Tabela from './Tabela';
import Formulario from './Formulario';
import TarefasContext from './TarefasContext';

function Tarefas() {

    const [listaObjetos, setListaObjetos] = useState(
        localStorage.getItem('SALASPWA/listapredios')
            ? JSON.parse(localStorage.getItem('SALASPWA/listapredios')) : []
    );

    // const [listaSalas, setListaSalas] = useState(
    //     localStorage.getItem('SALASPWA/listasalas')
    //         ? JSON.parse(localStorage.getItem('SALASPWA/listasalas')) : []
    // );

    const [alerta, setAlerta] = useState({ status: "", message: "" });

    const [objeto, setObjeto] = useState({ id: "", nome: "", descricao: "", sigla: "" });

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = e => {
        // console.log("ação cadastrar");
        // e.preventDefault();
        // if (editar) {
        //     // pegar o index do objeto na lista
        //     const index = listaObjetos.findIndex(p => p.id === objeto.id);
        //     // remover o objeto da lista
        //     const listaObjetosTemp = listaObjetos.splice(0, index).concat(
        //         listaObjetos.splice(index + 1));
        //     // colocamos o objeto de volta na lista
        //     const newListaObjetos = [...listaObjetosTemp, objeto].sort((a, b) => a.id - b.id);
        //     setListaObjetos(newListaObjetos);
        //     setAlerta({ status: "success", message: "Prédio editado com sucesso!" });
        // } else {
        //     if (objeto.id === 0) {
        //         var idatual = localStorage.getItem('SALASPWA/idpredio');
        //         if (idatual === null) {
        //             idatual = 0;
        //         }
        //         var novoId = Number(idatual) + 1;
        //         objeto.id = novoId;
        //         localStorage.setItem('SALASPWA/idpredio', novoId);
        //         setListaObjetos([...listaObjetos, objeto]);
        //         setAlerta({ status: "success", message: "Prédio adicionado com sucesso!" });
        //     }
        // }
    };

    useEffect(() => {
        // localStorage.setItem('SALASPWA/listapredios', JSON.stringify(listaObjetos));
    }, [listaObjetos]);

    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        // setObjeto({ ...objeto, [name]: value });
    }


    const acaoRemover = objeto => {
        // if (window.confirm("Remover este objeto?")) {
        //     const listaSalaDoPredio = listaSalas.filter(s => Number(s.predio) === Number(objeto.id));            
        //     if (listaSalaDoPredio.length > 0) {
        //         setAlerta({ status: "error", message: "Prédio possui salas!" });
        //     } else {
        //         const listaObjetosTemp = listaObjetos.filter(p => p.id !== objeto.id);
        //         setListaObjetos(listaObjetosTemp);
        //         setAlerta({ status: "success", message: "Prédio removido com sucesso!" });
        //     }
        // }
    }

    return  (
        <TarefasContext.Provider value={
            {
                listaObjetos, setListaObjetos, acaoRemover,
                alerta, setAlerta,
                objeto, setObjeto,
                editar, setEditar,
                acaoCadastrar, handleChange
            }}>
            <Tabela />
            <Formulario />
        </TarefasContext.Provider>
    );
}

export default Tarefas;