import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} unidades de ${name}`);
  };

  return (
    <div className="item-detail-card">
      <img src={img} alt={name} className="item-detail-img" />
      <div className="item-detail-info">
        <h2 className="item-detail-title">{name}</h2>
        <p className="item-detail-category">Categoría: {category}</p>
        <p className="item-detail-desc">{description}</p>
        <p className="item-detail-price">${price}</p>
        <p className="item-detail-stock">Stock disponible: {stock}</p>
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
