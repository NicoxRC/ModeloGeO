import type { Request, Response } from 'express';

export const getWordsCounter = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { text } = req.body;

  try {
    function contarPalabras(text: string) {
      const palabras: string[] = text
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .split(' ');
      const conteoPalabras: any = {};
      palabras.forEach((palabra: string) => {
        if (conteoPalabras[palabra]) {
          conteoPalabras[palabra]++;
        } else {
          conteoPalabras[palabra] = 1;
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
