import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Page principale</h1>
      </header>

      <nav>
        <Link href="/Login">
          <button>Login</button>
        </Link>
        <Link href="/Inscription">
          <button>Inscription</button>
        </Link>
        <Link href="/PageAdmin">
          <button>Page Admin</button>
        </Link>
      </nav>


      <div className="container mx-auto px-4">
  <div className="hero my-8">
    <h2 className="text-3xl font-bold">Améliorez votre expérience avec nos supports de qualité</h2>
  </div>

  <div className="cta my-8">
    <h2 className="text-2xl font-bold">Découvrez notre sélection dès maintenant</h2>
    <a href="#products" className="bg-blue-500 text-white py-2 px-4 rounded inline-block mt-4">Voir les produits</a>
  </div>

  <section id="products" className="features my-8">
    <div className="feature mb-8">
      <h3 className="text-xl font-bold">Supports pour ordinateur portable</h3>
      <p>Nos supports pour ordinateur portable offrent un angle de vue ergonomique pour une meilleure posture et réduisent les risques de tensions musculaires.</p>
    </div>
    <div className="feature mb-8">
      <h3 className="text-xl font-bold">Supports pour tablette</h3>
      <p>Donnez à votre tablette une position confortable avec nos supports spécialement conçus pour offrir un soutien stable et ajustable.</p>
    </div>
  </section>
</div>
    </div>
)
}


export default HomePage;


