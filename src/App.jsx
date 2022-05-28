import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import Menu from './componentes/Menu'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './componentes/Home'
import Tarefas from './componentes/tarefas/Tarefas'
import Disciplinas from './componentes/disciplinas/Disciplinas'

function App() {
  return (
    <Router>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/tarefas" element={<Tarefas/>}/> 
          <Route exact path="/disciplinas" element={<Disciplinas/>}/> 
        </Routes>
    </Router>
  );
}

export default App;