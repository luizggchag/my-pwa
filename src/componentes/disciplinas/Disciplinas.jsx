import { useState, useEffect } from 'react';
import Tabela from './Tabela';
import Formulario from './Formulario';
import DisciplinasContext from './DisciplinasContext';

function Disciplinas() {

    const [listaObjetos, setListaObjetos] = useState(
        localStorage.getItem('SALASPWA/listadisciplinas') 
        ? JSON.parse(localStorage.getItem('SALASPWA/listadisciplinas')) : []
    ); 

    const [listaTarefas, setListaTarefas] = useState(
        localStorage.getItem('SALASPWA/listatarefas')
            ? JSON.parse(localStorage.getItem('SALASPWA/listatarefas')) : []
    );
    
    const [alerta, setAlerta] = useState({status : "" , message : ""});

    const [objeto, setObjeto] = useState({id: "", nome: "", sigla: "", 
    professor: "", predio: "" });

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = e => {
        e.preventDefault();
        if (editar){
            const index = listaObjetos.findIndex(p => p.id === objeto.id);

            const listaObjetosTemp = listaObjetos.splice(0,index).concat(
                listaObjetos.splice(index+1));

            const newListaObjetos = [...listaObjetosTemp, objeto].sort( (a,b) => a.id - b.id);
            
            setListaObjetos(newListaObjetos);
            setAlerta({status:"success", message: "Objeto editado com sucesso!"});
        } else {
            if (objeto.id === 0){
                var idatual = localStorage.getItem('SALASPWA/iddisciplina');
                if (idatual === null){
                    idatual = 0;
                }         

                var novoId = Number(idatual) + 1;
                objeto.id = novoId;
                localStorage.setItem('SALASPWA/iddisciplina', novoId);

                setListaObjetos([...listaObjetos,objeto]);
                setAlerta({status:"success", message: "Objeto adicionado com sucesso!"});
            }
        }
    };

    useEffect( () => {
        localStorage.setItem('SALASPWA/listadisciplinas', JSON.stringify(listaObjetos));
    }, [listaObjetos]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({...objeto, [name]:value});
    }

    const acaoRemover = objeto => {
        if (window.confirm("Remover este objeto?")) {
            const aux = listaTarefas.filter(t => Number(t.disciplina) === Number(objeto.id));            
            
            if (aux.length > 0) {
                setAlerta({ status: "error", message: "Objeto possui tarefas!" });
            } else {
                const listaObjetosTemp = listaObjetos.filter(p => p.id !== objeto.id);
                setListaObjetos(listaObjetosTemp);
                setAlerta({ status: "success", message: "Objeto removido com sucesso!" });
            }
        }
    }

    return (
        <DisciplinasContext.Provider value={
            {
                listaObjetos, setListaObjetos, acaoRemover, 
                alerta, setAlerta, 
                objeto, setObjeto, 
                editar, setEditar, 
                acaoCadastrar, handleChange,
            } }>
            <Tabela />
            <Formulario/>
        </DisciplinasContext.Provider>
    );
}

export default Disciplinas;