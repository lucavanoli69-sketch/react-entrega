import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        MiTienda
      </div>
      
      <ul className="nav-links">
        <li className="nav-link">Inicio</li>
        <li className="nav-link">Categorías</li>
        <li className="nav-link">Ofertas</li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
