import './App.css'

import {
  Routes,
  HashRouter,
  Route,
} from 'react-router-dom';

import PanelTrabajador from './PanelTrabajador';
import EntradaTrabajador from './EntradaTrabajador'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<EntradaTrabajador />} />
        <Route path="/trabajador" element={<PanelTrabajador />} />
      </Routes>
    </HashRouter>
  )
}

export default App
