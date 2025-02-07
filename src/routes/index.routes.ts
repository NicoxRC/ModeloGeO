import controller from '../controller';
import { Router } from 'express';

const router = Router();

//Card
router.post('/tokenCard', controller.card);

//Customer
router.get('/customer/:id', controller.getCustomer);
router.post('/customer', controller.postCustomer);
router.delete('/customer', controller.deleteTokenCustomer);

//Plan
router.get('/plan/:id', controller.getPlan);
router.get('/plan', controller.getPlans);
router.post('/plan', controller.postPlan);
router.delete('/plan/:id', controller.deletePlan);

//Subscription
router.get('/subscription/:id', controller.getSubscription);
router.get('/subscription', controller.getSubscriptions);
router.post('/subscription', controller.postSubscription);
router.post('/subscription/pay', controller.postPaySubscription);
router.delete('/subscription/:id', controller.deleteSubscription);

export default router;
