import { Router } from "express";

import * as Controller from "../controllers/Version";

const router = Router();

router.get("/", Controller.get);

export default router;
