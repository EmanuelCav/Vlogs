import { Router } from "express";

import * as vlogsCtrl from '../controller/vlogs.ctrl'
import vlogValid from '../middleware/validation/vlogValid'

import { upload } from "../images/multer";

import auth from '../middleware/auth/auth'

const router = Router()

router.get('/vlogs', auth, vlogsCtrl.vlogs)
router.get('/myvlogs/:id', auth, vlogsCtrl.myVlogs)
router.get('/vlogs/:id', auth, vlogsCtrl.vlog)

router.post('/createvlog', auth, upload.array('files', 10), vlogValid, vlogsCtrl.createVlog)

router.delete('/vlogs/:id', auth, vlogsCtrl.removeVlog)

router.patch('/vlogs/:id', auth, vlogsCtrl.likeVlog)
router.patch('/unvlogs/:id', auth, vlogsCtrl.unLikeVlog)

export default router;