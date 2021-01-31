import { Router } from 'express';

import VersionRouter from './Version';
import EventRouter from './Event';

const router = Router();

router.use('/version', VersionRouter);
router.use('/events', EventRouter);

export default router;
