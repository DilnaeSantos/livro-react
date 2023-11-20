import ControleEditora from '../classes/controle/ControleEditora'; // Certifique-se de que o caminho está correto

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  codEditora: number;
  autores: string[];
}

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

  const handleExcluir = () => {
    excluir();
  };

  return (
    <tr>
      <td>
        <button onClick={handleExcluir}>Excluir</button>
      </td>
      <td>{nomeEditora}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
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
