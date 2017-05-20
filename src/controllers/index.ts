import { Router } from 'express';
import { jwtAuth } from '../middlewares/jwt-auth';
import { authenticateController } from './authenticate';
import { usersController } from './users';

const router: Router = Router();

// PUBLIC
router.post('/authenticate', authenticateController.authenticateAction);
router.post('/authenticate/token', authenticateController.authenticateTokenAction);

// PROTECTED
router.get('/users/me', jwtAuth, usersController.getMeAction);

export const routing: Router = router;
