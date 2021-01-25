import * as db from "zapatos/db";

import pool from "./../configs/pg";
import { Model } from "../models/Event";

export const createEvent = (event: Model.Event) => {
  return db.insert("events", event.toInsertableModel()).run(pool);
};
