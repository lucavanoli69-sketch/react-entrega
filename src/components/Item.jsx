import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img }) => {
  return (
    <div className="item-card">
      <img src={img} alt={name} className="item-img" />
      <h3 className="item-title">{name}</h3>
      <p className="item-price">${price}</p>
      <Link to={`/item/${id}`} className="item-detail-btn">Ver detalle</Link>
    </div>
  );
};

export default Item;
