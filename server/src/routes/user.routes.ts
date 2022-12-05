import { Router } from "express";

import auth from '../middleware/auth/auth'

import * as userCtrl from '../controller/user.ctrl'
import userValid from '../middleware/validation/userValid'

import { upload } from "../images/multer";

const router = Router()

router.get('/users', userCtrl.users)
router.get('/users/:email', auth, userCtrl.usersSugested)
router.get('/user/:id', userCtrl.user)

router.post('/register', userValid, userCtrl.register)
router.post('/login', userCtrl.login)

router.delete('/users/:id', userCtrl.removeUser)

router.put('/users/:id', auth, upload.single('file'), userCtrl.updatePhoto)

export default router