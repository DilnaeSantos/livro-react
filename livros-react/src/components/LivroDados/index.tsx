import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from '../../controle/ControleLivros';
import ControleEditora from '../../controle/ControleEditora';
import Header from '../header';

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  codEditora: number;
  autores: string[];
}

interface Opcao {
  value: number;
  text: string;
}

const LivroDados: React.FC = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const opcoes: Opcao[] = ControleEditora.getEditoras().map((editora: any): Opcao => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : 0);

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value);
    setCodEditora(selectedValue);
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoLivro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    ControleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <>
    <Header />
    <main className='mainDados'>
      <h1>Dados do Livro</h1>
      <form className='containerForms' onSubmit={incluir}>
        <label>Título</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>

        <label>Resumo</label>
        <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} required/>

        <label>Editora</label>
        <select value={codEditora} onChange={tratarCombo}>
          {opcoes.map((opcao: Opcao) => (
            <option key={opcao.value} value={opcao.value}>
              {opcao.text}
            </option>
          ))}
        </select>

        <label>Autores (1 por linha)</label>
        <textarea value={autores} onChange={(e) => setAutores(e.target.value)} required/>

        <button className='btnSalvarDados' type="submit">Salvar Dados</button>
      </form>
    </main>
    </>
  );
};

export default LivroDados;
