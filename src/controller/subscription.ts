import epayco from '../connection';
import type { Request, Response } from 'express';
import type {
  SubscriptionInterface
} from '../interfaces/subscription';

export const getSubscription = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const subscription = await epayco.subscriptions.get(id);
    res.status(200).json(subscription);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};

export const getSubscriptions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const subscription = await epayco.subscriptions.list();
    res.status(200).json(subscription);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};

export const postSubscription = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    id_plan,
    customer,
    token_card,
    doc_type,
    doc_number,
  } = req.body;

  try {
    const subscription_info: SubscriptionInterface = {
      id_plan,
      customer,
      token_card,
      doc_type,
      doc_number,
    };
    const subscription = await epayco.subscriptions.create(subscription_info);
    res.status(201).json(subscription);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};

export const postPaySubscription = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id_plan, customer, token_card, doc_type, doc_number } = req.body;
  const ip = req.ip;

  try {
    const subscription_info: any = {
      id_plan,
      customer,
      token_card,
      doc_type,
      doc_number,
      ip,
    };
    const subscription = await epayco.subscriptions.charge(subscription_info);
    res.status(201).json(subscription);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};

export const deleteSubscription = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const subscription = await epayco.subscriptions.cancel(id);
    res.status(202).json(subscription);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};
