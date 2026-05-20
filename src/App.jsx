import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenidos a MiTienda! Pronto verás nuestros productos aquí." />
    </div>
  );
}

export default App;
