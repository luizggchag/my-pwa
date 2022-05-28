import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Menu from './componentes/Menu'
import Home from './componentes/Home'
import Predios from './componentes/predios/Predios'
import Salas from './componentes/salas/Salas'
import Tarefas from './componentes/Tarefas/Tarefas'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/predios" element={<Predios/>}/> 
          <Route exact path="/salas" element={<Salas/>}/> 
          <Route exact path="/tarefas" element={<Tarefas/>}/> 
        </Routes>
    </Router>
  );
}

export default App;