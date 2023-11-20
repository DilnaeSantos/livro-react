import React, { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import styles from '../styles/Home.module.css';
import { Router } from 'next/router';
import ControleEditora from '../classes/controle/ControleEditora';

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  autores: string[];
  codEditora: number;
  // outras propriedades
}

// Supondo que ControleEditora seja importado de algum lugar
const controleEditora = new ControleEditora();
const baseURL = 'http://localhost:3000/api/livros';

const LivroDados: React.FC = () => {
  const opcoes = ControleEditora.getEditoras().map((editora: { codEditora: any; nome: any; }) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value);
    setCodEditora(selectedValue);
  };

  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoLivro: Livro = {
      codigo: 0, // ou pode usar um algoritmo para gerar IDs únicos
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
      // outras propriedades
    };

    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoLivro),
      });

      if (response.ok) {
        //Router.push('/LivroLista');
      } else {
        console.error('Falha ao incluir o livro');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Livro Dados</title>
        {/* Outras tags meta e links de estilo */}
      </Head>
      <Menu />
      <main>
        <h1>Título da Página</h1>
        <form onSubmit={incluir}>
          {/* Inputs para título, resumo, autores, select para editoras */}
          <label>
            Título:
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </label>
          {/* Outros campos aqui */}
          <label>
            Editora:
            <select value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao: { value: React.Key | readonly string[] | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Adicionar Livro</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
