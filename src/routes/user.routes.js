import {Router} from 'express'
import { verifyToken, isAdmin } from '../middlewares/auth.jwt';
import * as UserController from '../controllers/user.controller'
import {checkRoleExisted} from '../middlewares/verifyRegistro'

const router=Router();

router.put('/:id', [
    verifyToken,
    isAdmin,
    checkRoleExisted,
], UserController.updateUser);
router.get('/', [ 
    verifyToken,
    isAdmin
], UserController.getUsuarios);


export default router;