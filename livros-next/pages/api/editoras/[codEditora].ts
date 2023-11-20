import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { codEditora } = req.query;
      if (!codEditora || typeof codEditora !== 'string') {
        res.status(400).json({ message: 'Código de editora inválido' });
        return;
      }

      const editoraId = parseInt(codEditora, 10);
      const nomeEditora = ControleEditora.getNomeEditora(editoraId);
      if (!nomeEditora) {
        res.status(404).json({ message: 'Editora não encontrada' });
        return;
      }

      res.status(200).json({ nomeEditora });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
