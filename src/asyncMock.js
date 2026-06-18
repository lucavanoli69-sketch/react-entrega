const products = [
  {
    id: '1',
    name: 'Teclado Mecánico',
    price: 120,
    category: 'perifericos',
    img: 'https://via.placeholder.com/200',
    stock: 10,
    description: 'Teclado mecánico con switches Cherry MX Red.'
  },
  {
    id: '2',
    name: 'Ratón Gaming',
    price: 60,
    category: 'perifericos',
    img: 'https://via.placeholder.com/200',
    stock: 15,
    description: 'Ratón óptico de alta precisión para gaming.'
  },
  {
    id: '3',
    name: 'Monitor 144Hz',
    price: 250,
    category: 'monitores',
    img: 'https://via.placeholder.com/200',
    stock: 5,
    description: 'Monitor de 24 pulgadas con tasa de refresco de 144Hz.'
  },
  {
    id: '4',
    name: 'Auriculares 7.1',
    price: 90,
    category: 'audio',
    img: 'https://via.placeholder.com/200',
    stock: 8,
    description: 'Auriculares con sonido envolvente 7.1.'
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === itemId));
    }, 1000);
  });
};
