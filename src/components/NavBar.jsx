import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
        MiTienda
      </Link>
      
      <ul className="nav-links">
        <li><Link to="/" className="nav-link" style={{ textDecoration: 'none' }}>Inicio</Link></li>
        <li><Link to="/category/perifericos" className="nav-link" style={{ textDecoration: 'none' }}>Periféricos</Link></li>
        <li><Link to="/category/monitores" className="nav-link" style={{ textDecoration: 'none' }}>Monitores</Link></li>
        <li><Link to="/category/audio" className="nav-link" style={{ textDecoration: 'none' }}>Audio</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
