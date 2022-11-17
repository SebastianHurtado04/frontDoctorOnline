import './style.css';



// Importar componentes

import CompMostrarMedicos from './components/Medicos/MostrarMedicos';
import CompCrearMedicos from './components/Medicos/CrearMedicos';
import CompEditarMedicos from './components/Medicos/EditarMedicos';
import CompMostrarCita from './components/Cita/MostrarCita';
import CompEditarCitas from './components/Cita/EditarCita';
import CompCrearCitas from './components/Cita/CrearCita';
import CompMostrarPaciente from './components/Paciente/MostrarPaciente';
import CompCrearPaciente from './components/Paciente/CrearPaciente';
import CompEditarPaciente from './components/Paciente/EditarPaciente';
import CompMostrarUsuario from './components/Usuario/MostrarUsuario';
import CompCrearUsuario from './components/Usuario/CrearUsuario';
import CompEditarUsuario from './components/Usuario/EditarUsuario';
import CompHome from './home';
import CompRegistrar from './components/Autenticacion/Registrar';
import CompLogin from './components/Autenticacion/Login';




// importar rutas

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={< CompHome  />}/>

          <Route path='/' element={< CompLogin  />}/>
          <Route path='/registrar' element={< CompRegistrar  />}/>

          <Route path='/medicos' element={< CompMostrarMedicos  />}/>
          <Route path='/medicos/crear' element={< CompCrearMedicos  />}/>
          <Route path='/medicos/editar/:id' element={< CompEditarMedicos  />}/>

          <Route path='/citas' element={< CompMostrarCita  />}/>
          <Route path='/citas/crear' element={< CompCrearCitas  />}/>
          <Route path='/citas/editar/:id' element={< CompEditarCitas  />}/>

          <Route path='/pacientes' element={< CompMostrarPaciente  />}/>
          <Route path='/pacientes/crear' element={< CompCrearPaciente  />}/>
          <Route path='/pacientes/editar/:id' element={< CompEditarPaciente  />}/>

          <Route path='/usuarios' element={< CompMostrarUsuario />}/>
          <Route path='/usuarios/crear' element={< CompCrearUsuario  />}/>
          <Route path='/usuarios/editar/:id' element={< CompEditarUsuario  />}/>

        </Routes>
      </BrowserRouter>
      <footer>
                <div className='textFooter'>
                
                    <h2>Contactenos</h2>
                    <p><i class="fa-solid fa-phone"></i> Tel: 01800555555</p>
                    <p><i class="fa-solid fa-phone"></i> Cel: +573012346789</p>
                </div>
            </footer>
    </div>
  
  );
}

export default App;
