import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav className='navHeader'>
        <Link className='linkCatalogo' to="/">Catálogo</Link>
        <Link className='linkNovo' to="/dados">Novo</Link>
      </nav>
    </header>
  );
};

export default Header;
