export interface CreditInterface {
  'card[number]': string;
  'card[exp_year]': string;
  'card[exp_month]': string;
  'card[cvc]': string;
  hasCvv: boolean;
}
