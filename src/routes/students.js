import { Router } from 'express';
import studentsController from '../controllers/Students';

const router = new Router();

router.get('/', studentsController.index);

export default router;
