import { Router } from 'express';
import userController from '../controllers/User';

const router = new Router();

router.post('/', userController.create);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
index -> list all users -> GET
store/create -> create new user -> POST
delete -> delete  user -> DELETE
show -> show user -> GET
update -> update user -> PATCH OR PUT
*/
