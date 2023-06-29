import React from 'react';
import Image from "next/image";
import Link from 'next/link';

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des produits</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div className="bg-white rounded-lg shadow-md p-4" key={product.id}>
            <Image
              src={product.image}
              height={0}
              width={200}
              alt={`Image de ${product.name}`}
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">Prix : {product.price} €</p>
      <div className="m-auto mt-4 bg-blue-500 w-[100px] hover:bg-blue-600 text-white px-4 py-2 rounded">
            <Link href="/Panier">
              <button>Voir les produits </button>
            </Link>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

  
