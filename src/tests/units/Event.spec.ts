import { fakeEventPersistModel } from '../helpers/fakers/Event'
import { Selectable as EventPersistModel } from '../../persists/events'
import { EventModel as Event } from '../../models/Event'
import { JSONArray } from 'zapatos/db'

let eventPersistModel: EventPersistModel

beforeAll(() => {
    eventPersistModel = fakeEventPersistModel()
})

describe('Event', () => {
    describe('Event.fromPersistModel()', () => {
        it('should map from persist model to model correctly', () => {
            const eventModel: Event | undefined = Event.fromPersistModel(eventPersistModel)
            expect(eventModel).toBeDefined()
            expect(eventModel?.title).toEqual(eventPersistModel.title)
            expect(eventModel?.description).toEqual(eventPersistModel.description)
            expect(eventModel?.details).toHaveLength((JSON.parse(eventPersistModel.details) as JSONArray).length)
            expect(eventModel?.locationName).toEqual(eventPersistModel.location_name)
            expect(eventModel?.geolocation?.latitude).toEqual(eventPersistModel.latitude)
            expect(eventModel?.geolocation?.longitude).toEqual(eventPersistModel.longitude)
            expect(eventModel?.facebookLink).toEqual(eventPersistModel.facebook_link)
            expect(eventModel?.instagramLink).toEqual(eventPersistModel.instagram_link)
            expect(eventModel?.websiteLink).toEqual(eventPersistModel.website_link)
        })
    })
})