import { Request, Response } from 'express';
import { EventCreateRequestBody } from '../bodies/Event';
import { validateUUID } from '../commons/validators';

import { createEvent, getEvent, getEvents } from '../useCases/Event';

export const get = async (request: Request, response: Response) => {
  const { id } = request.params;
  if (!validateUUID(id)) {
    response.status(400).json({ error: 'REQ_UUID_INV', errorMessage: 'Request UUID invalid' });
  } else {
    const event = await getEvent(id);

    if (!event) {
      response.sendStatus(404);
    } else {
      response.json(event.toPresenter());
    }
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
