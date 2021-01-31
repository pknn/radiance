import * as db from "zapatos/db";

import pool from "../../configs/pg";
import { EventModel as Event } from "../../models/Event";

export const createEvent = (event: Event) => {
  return db.insert("events", event.toPersistModel()).run(pool);
};

export const getEvent = (id: string) => {
  return db.selectOne("events", { id: id }).run(pool);
};

export const getEvents = () => {
  return db.select("events", db.all).run(pool)
};