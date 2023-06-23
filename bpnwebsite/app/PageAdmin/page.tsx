import Link from 'next/link';
import React from 'react';

const AdminPage = () => {
  
 
return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-8">Page Administration</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Gestion des produits</h2>
          <p>Vous pouvez gérer les produits de votre site ici.</p>
          <div className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <Link href="/GestionProduit">
            <button>Voir la gestion des produits </button>
        </Link>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Gestion des utilisateurs</h2>
          <p>Vous pouvez gérer les utilisateurs de votre site ici.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Aller à la gestion des utilisateurs
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Statistiques</h2>
          <p> Les statistiques du site ici.</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Aller  voir les statistiques
          </button>
        </div>
      </div>
    </div>
  );
};



export default AdminPage;