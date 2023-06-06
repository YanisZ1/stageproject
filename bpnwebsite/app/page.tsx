import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Page principale</h1>
      <Link href="/Login">
        <button>Login</button>
      </Link>
      <Link href="/Inscription">
        <button>Inscription</button>
      </Link>
    </div>
  );
};

export default HomePage;
