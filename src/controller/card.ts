import epayco from '../connection';
import type { Request, Response } from 'express';
import type { CreditInterface } from '../interfaces/card';

export = async (req: Request, res: Response): Promise<void> => {
  const { card_number, card_exp_year, card_exp_month, card_cvc } = req.body;

  try {
    const credit_info: CreditInterface = {
      'card[number]': card_number,
      'card[exp_year]': card_exp_year,
      'card[exp_month]': card_exp_month,
      'card[cvc]': card_cvc,
      hasCvv: true,
    };
    const token = await epayco.token.create(credit_info);
    res.status(201).json(token);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};
