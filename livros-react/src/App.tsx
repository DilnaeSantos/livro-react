//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LivroLista from './components/LivroLista/index';
import LivroDados from './components/LivroDados/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
};

export default App;
