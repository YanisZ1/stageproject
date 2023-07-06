import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myGif from 'public/BGHomepage.gif'


const HomePage = () => {
  return (
       <div className="bg-gray-10 pt-5  text-center">
            
  
      


      <div className="bg-white-200 p-20 text-center bg-cover bg-center bg-[url('/future.jpg')] heigt-600">
        <div className="hero my-8">
          <h1 className="text-4xl font-bold mb-10" >Support Ordinateur et de Tablette </h1> 
          <h2 className="text-3xl font-bold">Améliorez votre expérience avec nos supports de qualité</h2>
        </div>

        <div className="hero bg-cover bg-center h-500 flex items-center justify-center text-gray-800 text-center">
          <h2 className="text-2xl font-bold">Découvrez notre sélection dès maintenant</h2>
  <Image src={myGif} alt="my gif" className="ml-10 " height={100} width={100} />
        </div>
              <div className="m-auto mt-4 bg-blue-500 w-[200px] hover:bg-blue-600 text-white px-4 py-2 rounded mt-10">
            <Link href="/ProductList">
              <button>Voir les produits </button>
            </Link>
          </div>


        <section id="products" className=" features flex flex-wrap justify-center space-x-4 mt-20 ">
          <div className="bg-gray-300/80 text-gray p-20 text-center w-[500px]">
            <h3 className="text-xl font-bold">Supports pour ordinateur portable</h3>
            <p>Nos supports pour ordinateur portable offrent un angle de vue ergonomique pour une meilleure posture et réduisent les risques de tensions musculaires.</p>
          </div>
          <div className="bg-gray-300/80 text-gray p-20 text-center w-[500px]">
            <h3 className="text-xl font-bold">Supports pour tablette</h3>
            <p>Donnez à votre tablette une position confortable avec nos supports spécialement conçus pour offrir un soutien stable et ajustable.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;



