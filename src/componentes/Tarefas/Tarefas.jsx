import { useState, useEffect } from 'react';
import Tabela from './Tabela';
import Formulario from './Formulario';
import TarefasContext from './TarefasContext';

function Tarefas() {

    const [listaObjetos, setListaObjetos] = useState(
        localStorage.getItem('MYPWA/listatarefas')
            ? JSON.parse(localStorage.getItem('MYPWA/listatarefas')) : []
    );

    const [listaDisciplinas, setListaDisciplinas] = useState(
        localStorage.getItem('MYPWA/listadisciplinas') 
        ? JSON.parse(localStorage.getItem('MYPWA/listadisciplinas')) : []
    );     

    const [alerta, setAlerta] = useState({ status: "", message: "" });

    const [objeto, setObjeto] = useState({ id: "", titulo: "", descricao: "", observacao: "", disciplina: "" });

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = e => {
        e.preventDefault();
        
        if (editar) {
            const index = listaObjetos.findIndex(p => p.id === objeto.id);

            const listaObjetosTemp = listaObjetos.splice(0, index).concat(
                listaObjetos.splice(index + 1));

            const newListaObjetos = [...listaObjetosTemp, objeto].sort((a, b) => a.id - b.id);
            
            setListaObjetos(newListaObjetos);
            setAlerta({ status: "success", message: "Objeto editado com sucesso!" });
        } else {
            if (objeto.id === 0) {
                var idatual = localStorage.getItem('MYPWA/idtarefa');
                if (idatual === null) {
                    idatual = 0;
                }

                var novoId = Number(idatual) + 1;
                objeto.id = novoId;
                localStorage.setItem('MYPWA/idtarefa', novoId);

                setListaObjetos([...listaObjetos, objeto]);
                setAlerta({ status: "success", message: "Objeto adicionado com sucesso!" });
            }
        }
    };

    useEffect(() => {
        localStorage.setItem('MYPWA/listatarefas', JSON.stringify(listaObjetos));
    }, [listaObjetos]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const acaoRemover = objeto => {
        if (window.confirm("Remover este objeto?")) {
            const listaObjetosTemp = listaObjetos.filter(p => p.id !== objeto.id);
            setListaObjetos(listaObjetosTemp);
            setAlerta({ status: "success", message: "Objeto removido com sucesso!" });
        }
    }

    return (
        <TarefasContext.Provider value={
            {
                listaObjetos, setListaObjetos, acaoRemover,
                alerta, setAlerta,
                objeto, setObjeto,
                editar, setEditar,
                acaoCadastrar, handleChange, listaDisciplinas
            }}>
            <Tabela />
            <Formulario />
        </TarefasContext.Provider>
    );
}

export default Tarefas;