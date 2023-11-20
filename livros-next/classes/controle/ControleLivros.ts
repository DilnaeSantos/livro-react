import { Livro } from '../modelo/Livro.ts'; // Importando a classe Livro

// Definindo a variável livros como um Array<Livro> com pelo menos três elementos em formato JSON
const livros: Array<Livro> = [
  new Livro(1, 1, 'Use a Cabeça: Java', 'Use a Cabeça! Java é uma experiência de complta de aprendizado em programação orientada a objetos (OO) e Java', ['Bert Bates', 'Kathy Sierra']),
  new Livro(2, 2, 'Livro 2', 'Resumo 2', ['Paul Deitel', 'Harvey Deitel']),
  new Livro(3, 3, 'Livro 3', 'Resumo 3', ['Cay Horstmann']),
];

export default class ControleLivro {
  static obterLivros(): Array<Livro> {
    return livros;
  }

  static incluir(novoLivro: Livro): void {
    const codigoMaisAlto = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0);
    novoLivro.codigo = codigoMaisAlto + 1;
    livros.push(novoLivro);
  }

  static excluir(codigo: number): void {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
