import { Router } from "express";

import auth from '../middleware/auth/auth'

import * as userCtrl from '../controller/user.ctrl'
import userValid from '../middleware/validation/userValid'

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:email', auth, userCtrl.usersSugested)
router.get('/users/:id', userCtrl.user)

router.post('/register', userValid, userCtrl.register)
router.post('/login', userCtrl.login)

router.delete('/users/:id', userCtrl.removeUser)

export default router