import { NextApiRequest, NextApiResponse } from 'next';
import controleLivro from '../../../classes/controle/ControleLivros'; 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      if (!codigo || typeof codigo !== 'string') {
        res.status(400).json({ message: 'Código inválido fornecido' });
        return;
      }

      const codigoLivro = parseInt(codigo, 10);
      controleLivro.excluir(codigoLivro);
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
