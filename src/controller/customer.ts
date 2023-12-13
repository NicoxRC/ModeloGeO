import epayco from '../connection';
import type { Request, Response } from 'express';
import type {
  CustomerInterface,
  DeleteCustomerInterface,
} from '../interfaces/customer';

export const getCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const customer = await epayco.customers.get(id);
    res.status(200).json(customer);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};

export const postCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    token_card,
    name,
    last_name,
    email,
    defaultt,
    city,
    address,
    phone,
    cell_phone,
  } = req.body;

  try {
    const customer_info: CustomerInterface = {
      token_card,
      name,
      last_name,
      email,
      city,
      address,
      phone,
      cell_phone,
      default: defaultt,
      test: true,
    };
    const customer = await epayco.customers.create(customer_info);
    res.status(201).json(customer);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(400).json({ error: error.message })
      : null;
  }
};

export const deleteTokenCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { franchise, mask, customer_id } = req.body;

  try {
    const delete_customer_info: DeleteCustomerInterface = {
      franchise,
      mask,
      customer_id,
    };
    const customer = await epayco.customers.delete(delete_customer_info);
    res.status(202).json(customer);
  } catch (error: unknown) {
    error instanceof Error
      ? res.status(404).json({ error: error.message })
      : null;
  }
};
