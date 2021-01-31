import Faker from 'faker'
import { DetailComponentRequestBody, EventCreateRequestBody, ImageComponentRequestBody, TextComponentRequestBody } from '../../../bodies/Event'

import { EventModel as Event, ImageComponent, TextComponent, DetailComponent, TextComponentStyle } from '../../../models/Event'
import { Selectable } from '../../../persists/events'

const fakeImageComponents = (n: number): ImageComponent[] => {
    let imageComponents: ImageComponent[] = []
    for (let _ = 0; _ < n; _++) {
        imageComponents.push(new ImageComponent(Faker.image.imageUrl()))
    }
    return imageComponents
}

const fakeTextComponents = (n: number): TextComponent[] => {
    const textComponentStyles: TextComponentStyle[] = ["heading", "subheading", "body", "quote"]
    let textComponents: TextComponent[] = []
    for (let _ = 0; _ < n; _++) {
        textComponents.push(new TextComponent(Faker.random.arrayElement(textComponentStyles), Faker.lorem.paragraph()))
    }
    return textComponents
}

export const fakeEvent = (): Event => {
    const imageComponents = fakeImageComponents(Faker.random.number())
    const textComponents = fakeTextComponents(Faker.random.number())

    return new Event(
        Faker.lorem.lines(),
        Faker.lorem.lines(),
        (<DetailComponent[]>imageComponents).concat(textComponents),
        Faker.random.number(),
        Faker.address.streetName(),
        {
            latitude: parseFloat(Faker.address.latitude()),
            longitude: parseFloat(Faker.address.longitude())
        },
        Faker.internet.url(),
        Faker.internet.url(),
        Faker.internet.url()
    )
}

export const fakeEventPersistModel = (): Selectable => {
    const imageComponents = fakeImageComponents(Faker.random.number())
    const textComponents = fakeTextComponents(Faker.random.number())

    const details = JSON.stringify((<DetailComponent[]>imageComponents).concat(textComponents))

    return {
        id: Faker.random.uuid(),
        title: Faker.lorem.lines(),
        description: Faker.lorem.lines(),
        details: details,
        location_name: Faker.address.streetName(),
        capacity: Faker.random.number(),
        latitude: parseFloat(Faker.address.latitude()),
        longitude: parseFloat(Faker.address.longitude()),
        facebook_link: Faker.internet.url(),
        instagram_link: Faker.internet.url(),
        website_link: Faker.internet.url()
    }
}

const fakeImageComponentRequestBodies = (n: number): ImageComponentRequestBody[] => {
    const imageComponentsRequestBodies: ImageComponentRequestBody[] = []
    for (let _ = 0; _ < n; _++) {
        imageComponentsRequestBodies.push(new ImageComponentRequestBody(Faker.image.imageUrl()))
    }

    return imageComponentsRequestBodies
}

const fakeTextComponentRequestBodies = (n: number): TextComponentRequestBody[] => {
    const textComponentsRequestBodies: TextComponentRequestBody[] = []
    const textComponentStyles: TextComponentStyle[] = ["heading", "subheading", "body", "quote"]
    for (let _ = 0; _ < n; _++) {
        textComponentsRequestBodies.push(new TextComponentRequestBody(Faker.random.arrayElement(textComponentStyles), Faker.lorem.lines()))
    }

    return textComponentsRequestBodies
}

export const fakeEventCreateRequestBody = (): EventCreateRequestBody => {
    const imageComponentRequestBodies: ImageComponentRequestBody[] = fakeImageComponentRequestBodies(Faker.random.number())
    const textComponentRequestBodies: TextComponentRequestBody[] = fakeTextComponentRequestBodies(Faker.random.number())

    return {
        title: Faker.lorem.lines(),
        description: Faker.lorem.lines(),
        details: (<DetailComponentRequestBody[]>imageComponentRequestBodies).concat(textComponentRequestBodies),
        location_name: Faker.address.streetName(),
        capacity: Faker.random.number(),
        geolocation: {
            latitude: parseFloat(Faker.address.latitude()),
            longitude: parseFloat(Faker.address.longitude()),
        },
        facebook_link: Faker.internet.url(),
        instagram_link: Faker.internet.url(),
        website_link: Faker.internet.url()
    }
}