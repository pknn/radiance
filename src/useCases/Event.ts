import * as EventPersist from "../persists/events/Event";
import { EventModel as Event } from "../models/Event";

export const getEvent = async (id: string) => {
  const eventPersistModel = await EventPersist.getEvent(id);
  return Event.fromPersistModel(eventPersistModel);
};
