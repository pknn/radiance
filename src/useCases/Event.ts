import * as EventPersist from "../persists/events/Event";
import { EventModel as Event } from "../models/Event";
import { EventCreateRequestBody } from "../bodies/Event";

export const getEvent = async (id: string) => {
  const eventPersistModel = await EventPersist.getEvent(id);
  return Event.fromPersistModel(eventPersistModel);
};

export const getEvents = async () => {
  const eventPersistModels = await EventPersist.getEvents();
  return eventPersistModels.map(eventPersistModel => Event.fromPersistModel(eventPersistModel))
}

export const createEvent = async (eventCreateRequestBody: EventCreateRequestBody) => {
  const event: Event = Event.fromCreateRequestBody(eventCreateRequestBody)
  return EventPersist.createEvent(event)
}