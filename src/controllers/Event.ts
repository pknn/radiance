import { Request, Response } from "express";
import { getEvent } from "./../useCases/Event";

export const get = async (request: Request, response: Response) => {
  const { id } = request.params;
  const event = await getEvent(id);

  if (!event) {
    response.sendStatus(404);
  } else {
    response.json(event.toPresenter());
  }
};
