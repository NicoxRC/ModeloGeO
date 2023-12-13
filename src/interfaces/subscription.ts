export interface SubscriptionInterface {
  id_plan: string;
  customer: string;
  token_card: string;
  doc_type: string;
  doc_number: string;
  url_confirmation: string;
  method_confirmation: string;
}

type OmittedType = Omit<
  SubscriptionInterface,
  'url_confirmation' | 'method_confirmation'
>;

export type SubscriptionPayType = OmittedType & {
  ip: string;
};
