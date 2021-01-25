/// <references path="index.ts" />

import { Insertable, Selectable } from "../persists/events";
import { EventPresenter, DetailComponentPresenter } from "../presenters/Event";

export class EventModel {
  title: string;
  description: string;
  details: DetailComponent[];
  capacity: number;
  locationName: string;
  geolocation?: Geolocation;
  facebookLink?: string;
  instagramLink?: string;
  websiteLink?: string;

  constructor(
    title: string,
    description: string,
    details: DetailComponent[],
    capacity: number,
    locationName: string,
    geolocation?: Geolocation,
    facebookLink?: string,
    instagramLink?: string,
    websiteLink?: string
  ) {
    this.title = title;
    this.description = description;
    this.details = details;
    this.capacity = capacity;
    this.locationName = locationName;
    this.geolocation = geolocation;
    this.facebookLink = facebookLink;
    this.instagramLink = instagramLink;
    this.websiteLink = websiteLink;
  }

  toPersistModel(): Insertable {
    return {
      title: this.title,
      description: this.description,
      details: JSON.stringify(this.details),
      capacity: this.capacity,
      location_name: this.locationName,
      latitude: this.geolocation?.latitude,
      longitude: this.geolocation?.longitude,
      facebook_link: this.facebookLink,
      instagram_link: this.instagramLink,
      website_link: this.websiteLink,
    };
  }

  toPresenter(): EventPresenter {
    return {
      title: this.title,
      description: this.description,
      details: this.details.map((detailComponent) => {
        let presenter: DetailComponentPresenter;
        switch (detailComponent.type) {
          case "image":
            presenter = {
              image_url: detailComponent.imageUrl,
            };
            return presenter;
          case "text":
            presenter = {
              style: detailComponent.style,
              content: detailComponent.content,
            };
            return presenter;
        }
      }),
      capacity: this.capacity,
      location_name: this.locationName,
      geolocation: this.geolocation,
      facebook_link: this.facebookLink,
      instagram_link: this.instagramLink,
      website_link: this.websiteLink,
    };
  }

  static fromPersistModel(event?: Selectable): EventModel | undefined {
    if (!event) return undefined;
    return new EventModel(
      event.title,
      event.description,
      JSON.parse(event.details),
      event.capacity,
      event.location_name,
      event.latitude && event.longitude
        ? { latitude: event.latitude, longitude: event.longitude }
        : undefined,
      event.facebook_link || undefined,
      event.instagram_link || undefined,
      event.website_link || undefined
    );
  }
}

export type DetailComponent = ImageComponent | TextComponent;

export interface ImageComponent {
  type: "image";
  imageUrl: string;
}

export type TextComponentStyle = "heading" | "subheading" | "body" | "quote";
export interface TextComponent {
  type: "text";
  style: TextComponentStyle;
  content: string;
}

export interface Geolocation {
  latitude: number;
  longitude: number;
}
