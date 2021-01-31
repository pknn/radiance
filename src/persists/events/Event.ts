import * as db from 'zapatos/db';

import pool from '../../configs/pg';
import { EventModel as Event } from '../../models/Event';

export const createEvent = (event: Event) => db.insert('events', event.toPersistModel()).run(pool);

export const getEvent = (id: string) => db.selectOne('events', { id }).run(pool);

export const getEvents = () => db.select('events', db.all).run(pool);
