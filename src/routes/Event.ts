import { Router } from "express";

import * as EventController from "./../controllers/Event";

const router: Router = Router();

router.get("/", EventController.getAll);

router.get("/:id", EventController.get);

export default router;
