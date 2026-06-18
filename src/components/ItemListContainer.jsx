import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    
    asyncFunc(categoryId)
      .then(res => setProducts(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return <div className="loader-container"><h3>Cargando productos...</h3></div>;
  }

  return (
    <div className="item-list-container">
      <h2 className="item-list-title">{mensaje}</h2>
      {products.length > 0 ? <ItemList products={products} /> : <h3>No hay productos</h3>}
    </div>
  );
};

export default ItemListContainer;
