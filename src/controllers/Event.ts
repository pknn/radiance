import { Request, Response } from 'express';
import { EventCreateRequestBody } from '../bodies/Event';

import { createEvent, getEvent, getEvents } from '../useCases/Event';

export const get = async (request: Request, response: Response) => {
  const { id } = request.params;
  const event = await getEvent(id);

  if (!event) {
    response.sendStatus(404);
  } else {
    response.json(event.toPresenter());
  }
};

export const getAll = async (_: Request, response: Response) => {
  const events = await getEvents();

  response.json(events.map((event) => event?.toPresenter()));
};

export const create = async (request: Request, response: Response) => {
  const event: EventCreateRequestBody = request.body;

  await createEvent(event);

  response.sendStatus(201);
};
