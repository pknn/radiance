import { JSONArray } from 'zapatos/db';
import { fakeEvent, fakeEventCreateRequestBody, fakeEventPersistModel } from '../helpers/fakers/Event';
import { Selectable as EventPersistModel } from '../../persists/events';
import { EventModel as Event } from '../../models/Event';
import { EventPresenter } from '../../presenters/Event';
import { EventCreateRequestBody } from '../../bodies/Event';

describe('Event', () => {
  describe('Event.fromPersistModel()', () => {
    it('should map from persist model to model correctly', () => {
      const eventPersistModel: EventPersistModel = fakeEventPersistModel();
      const eventModel: Event | undefined = Event.fromPersistModel(eventPersistModel);
      expect(eventModel).toBeDefined();
      expect(eventModel?.title).toEqual(eventPersistModel.title);
      expect(eventModel?.description).toEqual(eventPersistModel.description);
      expect(eventModel?.details).toHaveLength(
        (JSON.parse(eventPersistModel.details) as JSONArray).length,
      );
      expect(eventModel?.locationName).toEqual(eventPersistModel.location_name);
      expect(eventModel?.geolocation?.latitude).toEqual(eventPersistModel.latitude);
      expect(eventModel?.geolocation?.longitude).toEqual(eventPersistModel.longitude);
      expect(eventModel?.facebookLink).toEqual(eventPersistModel.facebook_link);
      expect(eventModel?.instagramLink).toEqual(eventPersistModel.instagram_link);
      expect(eventModel?.websiteLink).toEqual(eventPersistModel.website_link);
    });
  });

  describe('Event.toPresenter()', () => {
    it('should map from model to presenter correctly', () => {
      const eventModel: Event = fakeEvent();
      const eventPresenter: EventPresenter = eventModel.toPresenter();
      expect(eventPresenter.title).toEqual(eventModel.title);
      expect(eventPresenter.description).toEqual(eventModel.description);
      expect(eventPresenter.details).toHaveLength(eventModel.details.length);
      expect(eventPresenter.location_name).toEqual(eventModel.locationName);
      expect(eventPresenter.geolocation).toEqual(eventModel.geolocation);
      expect(eventPresenter.facebook_link).toEqual(eventModel.facebookLink);
      expect(eventPresenter.instagram_link).toEqual(eventModel.instagramLink);
      expect(eventPresenter.website_link).toEqual(eventModel.websiteLink);
    });
  });

  describe('Event.fromCreateRequestBody', () => {
    it('should map from create request body to model correctly', () => {
      const eventCreateRequestBody: EventCreateRequestBody = fakeEventCreateRequestBody();
      const event: Event = Event.fromCreateRequestBody(eventCreateRequestBody);
      expect(event.title).toEqual(eventCreateRequestBody.title);
      expect(event.description).toEqual(eventCreateRequestBody.description);
      expect(event.details).toHaveLength(eventCreateRequestBody.details.length);
      expect(event.locationName).toEqual(eventCreateRequestBody.location_name);
      expect(event.geolocation).toEqual(eventCreateRequestBody.geolocation);
      expect(event.facebookLink).toEqual(eventCreateRequestBody.facebook_link);
      expect(event.instagramLink).toEqual(eventCreateRequestBody.instagram_link);
      expect(event.websiteLink).toEqual(eventCreateRequestBody.website_link);
    });
  });
});
