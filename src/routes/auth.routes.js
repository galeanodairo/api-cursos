import {Router} from 'express'
const router=Router();
import {checkRoleExisted, exiteUsuario} from '../middlewares/verifyRegistro'

import * as authController from '../controllers/auth.controller'

router.post('/registro', [exiteUsuario, checkRoleExisted], authController.registro);
router.post('/login', authController.login);

export default router;