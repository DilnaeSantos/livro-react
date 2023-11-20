import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import styles from '../styles/Home.module.css';

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  // ... outras propriedades
}

const LivroLista: React.FC = () => {
  const baseURL = 'http://localhost:3000/api/livros';

  const obter = async () => {
    try {
      const response = await fetch(baseURL);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw new Error('Falha ao obter dados');
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const excluirLivro = async (codigo: number) => {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      return response.ok;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      obter().then(data => {
        setLivros(data);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const excluiu = await excluirLivro(codigo);
    if (excluiu) {
      setCarregado(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livro Lista</title>
        {/* Adicione outros meta tags e links de estilo aqui, se necessário */}
      </Head>
      <Menu />
      <main>
        <h1 className={styles.title}>Lista de Livros</h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Resumo</th>
              {/* Outras colunas */}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.map(livro => (
              <tr key={livro.codigo}>
                <td>{livro.codigo}</td>
                <td>{livro.titulo}</td>
                <td>{livro.resumo}</td>
                {/* Outras colunas */}
                <td>
                  <button onClick={() => excluir(livro.codigo)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
