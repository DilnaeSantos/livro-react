import React, { useState, useEffect } from 'react';
import ControleLivro from '../../controle/ControleLivros';
import ControleEditora from '../../controle/ControleEditora';
import Header from '../header/index';

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  codEditora: number;
  autores: string[];
}

const LinhaLivro: React.FC<{ livro: Livro, excluir: (codigoLivro: number) => void, indice: number }> = ({ livro, excluir, indice }) => {
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    excluir(livro.codigo);
  };

  return (
    <tr className={indice % 2 === 0 ? 'linhaImpar' : 'linhaPar'}>
      <td className='tdTitulo'>{livro.titulo}{<button className='btnExcluirTabelaLivro' onClick={handleExcluir}>Excluir</button>}</td>
      <td className='tdResumo'>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const livrosData = ControleLivro.obterLivros();
      setLivros(livrosData);
      setCarregado(true);
    };

    if (!carregado) {
      fetchData();
    }
  }, [carregado]);

  const handleExcluir = (codigoLivro: number) => {
    ControleLivro.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <>
    <Header />
    <main className='mainTabelaLista'>
      <h1>Catálogo de Livros</h1>
      <table>
        <thead>
          <tr className='cabecalhoTabelaLista'>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={handleExcluir} indice={index} />
          ))}
        </tbody>
      </table>
    </main>
  </>
  );
};

export default LivroLista;
