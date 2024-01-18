import type { Request, Response } from 'express';
import type { WordsCounterInterface } from '../interfaces/wordsCounter';

export const getWordsCounter = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { text } = req.body;

  try {
    function contarPalabras(text: string): WordsCounterInterface[] {
      const palabras: string[] = text
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .split(' ');

      const conteoPalabras: WordsCounterInterface[] = [];
      palabras.forEach((palabra) => {
        if (palabra.length > 3) {
          const indice = conteoPalabras.findIndex(
            (item) => item.palabra === palabra
          );
          if (indice !== -1) {
            conteoPalabras[indice].cantidad++;
          } else {
            conteoPalabras.push({ palabra, cantidad: 1 });
          }
        }
      });
      return conteoPalabras;
    }

    const resultado = contarPalabras(text);
    res.status(200).json(resultado);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
