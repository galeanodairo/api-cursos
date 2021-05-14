import {Router} from 'express'
import * as cursosController from '../controllers/cursos.controller'
const router=Router();

import * as authjwt from '../middlewares/auth.jwt'

router.get('/', cursosController.getCursos);
router.post('/', [authjwt.verifyToken, authjwt.isDocente], cursosController.createCurso);
router.put('/:id', [authjwt.verifyToken, authjwt.isDocente], cursosController.updateCursoById);
router.delete('/:id', [authjwt.verifyToken, authjwt.isDocente], cursosController.deleteCursoById);
router.get('/:id', cursosController.getCursoById);

export default router;