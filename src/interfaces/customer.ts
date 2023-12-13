export interface CustomerInterface {
  token_card: string;
  name: string;
  last_name: string;
  email: string;
  default: string;
  city: string;
  address: string;
  phone: string;
  cell_phone: string;
  test: boolean;
}

export interface DeleteCustomerInterface {
  franchise: string;
  mask: string;
  customer_id: string;
}
