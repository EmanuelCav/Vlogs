import { Router } from "express";

import * as vlogsCtrl from '../controller/vlogs.ctrl'
import vlogValid from '../middleware/validation/vlogValid'

import { upload } from "../images/multer";

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/vlogs', vlogsCtrl.vlogs)
router.get('/myvlogs', auth, vlogsCtrl.myVlogs)
router.get('/vlogs/:id', auth, vlogsCtrl.vlog)

router.post('/createvlog', auth, upload.array('files', 10), vlogValid, vlogsCtrl.createVlog)

router.delete('/vlogs/:id', auth, vlogsCtrl.removeVlog)

router.patch('/vlogs/:id', auth, vlogsCtrl.likeVlog)

export default router;