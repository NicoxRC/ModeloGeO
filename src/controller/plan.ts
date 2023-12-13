import epayco from '../connection';
import type { Request, Response } from 'express';
import type { PlanInterface } from '../interfaces/plan';

export const getPlan = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const plan = await epayco.plans.get(id);
    res.status(200).json(plan);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};

export const getPlans = async (req: Request, res: Response): Promise<void> => {
  try {
    const plan = await epayco.plans.list();
    res.status(201).json(plan);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};

export const postPlan = async (req: Request, res: Response): Promise<void> => {
  const {
    id_plan,
    name,
    description,
    amount,
    currency,
    interval,
    interval_count,
    trial_days,
  } = req.body;

  try {
    const plan_info: PlanInterface = {
      id_plan,
      name,
      description,
      amount,
      currency,
      interval,
      interval_count,
      trial_days,
    };
    const plan = await epayco.plans.create(plan_info);
    res.status(201).json(plan);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};

export const deletePlan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const plan = await epayco.plans.delete(id);
    res.status(202).json(plan);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};
