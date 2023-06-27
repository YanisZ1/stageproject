import React from 'react';
import Image from "next/image";

const products = [
  {
    id: 1,
    name: 'Support Tablette',
    price: 9.99,
    image: '/Tablette1.jpg',
  },
  {
    id: 2,
    name: 'Support Ordinateur',
    price: 19.99,
    image: '/Ordi1.jpg',
  },

];

const ProductList = () => {
    return (
      <div>
        <h1>Liste des produits</h1>
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <Image
                src={product.image} 
                height={0}
                width={200}
                alt={`Image de ${product.name}`} 
              />
              <h3>{product.name}</h3>
              <p>Prix: {product.price} €</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;
  
