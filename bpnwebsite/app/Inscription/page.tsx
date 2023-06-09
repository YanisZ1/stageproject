import React from 'react';
import Image from 'next/image';

const MyComponent = () => {
  return (
    <div className="bg-black h-[1000px] pt-10 bg-cover bg-center bg-[url('/Ordi2.jpg')]">
    <div className=" max-w-md mx-auto mt-4 p-6 bg-white/80 rounded-lg shadow-md  ">
      <h2 className="text-2xl font-bold mb-4">Formulaire Inscription</h2>
      <div>
        <label htmlFor="firstName" className="block font-bold mb-1">
          Prénom
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Prénom"
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block font-bold mb-1">
          Nom de famille
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Nom de famille"
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-bold mb-1">
          Adresse e-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Adresse e-mail"
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block font-bold mb-1">
          Mot de passe
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Inscrire
      </button>
    </div>
    </div>

  );
};

export default MyComponent;