import { Editora } from '../modelo/Editora'; // Importando a classe Editora

// Definindo a variável editoras como um Array<Editora> com pelo menos três elementos em formato JSON
const editoras: Array<Editora> = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Pearson'),
  new Editora(3, 'Addison Wesley'),
];

class ControleEditora {
  // Método para retornar todas as editoras
  static getEditoras(): Array<Editora> {
    return editoras;
  }

  // Método para obter o nome da editora com base no código da editora
  static getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = editoras.find(editora => editora.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}

export default ControleEditora;
