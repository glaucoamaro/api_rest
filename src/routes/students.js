import { Router } from 'express';
import studentsController from '../controllers/Students';

const router = new Router();

router.get('/', studentsController.index);
router.post('/', studentsController.store);
router.put('/:id', studentsController.update);
router.get('/:id', studentsController.show);
router.delete('/:id', studentsController.delete);

export default router;
