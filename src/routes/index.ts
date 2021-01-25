import { Router } from "express";

import VersionRouter from "./Version";

const router = Router();

router.use("/version", VersionRouter);

export default router;
