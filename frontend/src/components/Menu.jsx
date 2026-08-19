import {Link} from 'react-router-dom';

export default function Menu() {
  return <nav
    style={{
      backgroundColor: 'lightblue',
    }}
  >
    <Link to="/">Inicio</Link>
    <Link to="/login">Login</Link>
    <Link to="/about">Acerca de</Link>
    <Link to="/not-found">Otra cosa</Link> 
  </nav>;
}