import { Router } from 'express';
import { authenticateController } from './authenticate';
import { usersController } from './users';

const router: Router = Router();

router.post('/authenticate', authenticateController.authenticateAction);
router.post('/authenticate/token', authenticateController.authenticateTokenAction);

router.get('/users', usersController.getUsersAction);
router.get('/users/:uuid', usersController.getUserAction);
router.post('/users', usersController.createUserAction);

export const routing: Router = router;
