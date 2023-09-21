import { Router } from 'express';
import studentsController from '../controllers/Students';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', studentsController.index);
router.post('/', studentsController.store);
router.put('/:id', loginRequired, studentsController.update);
router.get('/:id', studentsController.show);
router.delete('/:id', loginRequired, studentsController.delete);

export default router;
