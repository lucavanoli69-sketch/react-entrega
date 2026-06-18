import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenidos a MiTienda! Catálogo Completo." />} />
        <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Productos por Categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<div className="not-found"><h2>404 - Página no encontrada</h2></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
