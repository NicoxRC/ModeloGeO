import card from './card';
import { getWordsCounter } from './wordsCounter';
import { postCustomer, getCustomer, deleteTokenCustomer } from './customer';
import { getPlan, getPlans, postPlan, deletePlan } from './plan';
import {
  getSubscription,
  getSubscriptions,
  postSubscription,
  postPaySubscription,
  deleteSubscription,
} from './subscription';

export = {
  getWordsCounter,
  card,
  getCustomer,
  postCustomer,
  deleteTokenCustomer,
  getPlan,
  getPlans,
  postPlan,
  deletePlan,
  getSubscription,
  getSubscriptions,
  postSubscription,
  postPaySubscription,
  deleteSubscription,
};
