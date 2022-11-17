import medicina from './medicina.jpg';
import { Link } from "react-router-dom";
import './style.css';


const navBar = () =>{
    return(
        <header className="App-header">
            <nav>
                <img id="img1" src={medicina} alt="header.jpg" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="login.html"> Login </a> </li>
                    <li><Link to="/medicos">Medicos</Link> </li>
                    <li><Link to="/citas">Citas</Link> </li>
                    <li><Link to="/pacientes">Pacientes</Link> </li>
                    <li><Link to="/usuarios">Usuarios</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default navBar;