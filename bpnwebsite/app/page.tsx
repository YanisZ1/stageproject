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
        <Link href="/Page admin">
          <button>Page Admin</button>
        </Link>
      </nav>

      <div className="hero">
        <h2 className="text-xl font-bold">Améliorez votre expérience avec nos supports de qualité</h2>
      </div>

      <div className="cta">
        <h2 className="text-xl font-bold">Découvrez notre sélection dès maintenant</h2>
        <a href="#products" className="bg-blue-500 text-white py-2 px-4 rounded">Voir les produits</a>
      </div>

      <section id="products" className="features">
        <div className="feature">
          <h3 className="text-lg font-bold">Supports pour ordinateur portable</h3>
          <p>Nos supports pour ordinateur portable offrent un angle de vue ergonomique pour une meilleure posture et réduisent les risques de tensions musculaires.</p>
        </div>
        <div className="feature">
          <h3 className="text-lg font-bold">Supports pour tablette</h3>
          <p>Donnez à votre tablette une position confortable avec nos supports spécialement conçus pour offrir un soutien stable et ajustable.</p>
        </div>
      </section>

      <footer>
        <p className="text-center">&copy; 2023 Supports Ordinateur et tablette. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HomePage;



