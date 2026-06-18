import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then(res => setProduct(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <div className="loader-container"><h3>Cargando detalle...</h3></div>;
  }

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail {...product} /> : <h3>El producto no existe</h3>}
    </div>
  );
};

export default ItemDetailContainer;
