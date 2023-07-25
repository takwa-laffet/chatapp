// components/HomePage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <p>Bienvenue sur le site Web éducatif pour le professeur d'économie et de gestion.</p>
      <Link to="/login">Se connecter</Link>
      <br />
      <Link to="/signup">S'inscrire</Link>
    </div>
  );
}

export default HomePage;
