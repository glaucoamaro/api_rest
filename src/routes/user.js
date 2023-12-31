import { Router } from 'express';
import userController from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // list users
// router.get('/:id', userController.show); // list user

router.post('/', loginRequired, userController.create);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;
