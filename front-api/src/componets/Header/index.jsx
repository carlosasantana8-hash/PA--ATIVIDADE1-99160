import '. style.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
        <h1>Sistema Escolar</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Cadastrar">Alunos</Link>
            <Link to="/Listar Alunos">Cursos</Link>
        </nav>
    </header>
);
}