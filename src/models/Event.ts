/// <references path="index.ts" />

import { Insertable, Selectable } from "../persists/events";
import { DetailComponentPresenter, EventPresenter, ImageComponentPresenter, TextComponentPresenter } from "../presenters/Event";

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
      details: this.details.map(detail => detail.toPresenter()),
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

export abstract class DetailComponent {
  abstract toPresenter(): DetailComponentPresenter
}

export class ImageComponent extends DetailComponent {
  imageUrl: string;
  constructor(imageUrl: string) {
    super()
    this.imageUrl = imageUrl
  }

  toPresenter(): ImageComponentPresenter {
    return {
      image_url: this.imageUrl
    }
  }
}

export type TextComponentStyle = "heading" | "subheading" | "body" | "quote";
export class TextComponent extends DetailComponent {
  style: TextComponentStyle;
  content: string;

  constructor(style: TextComponentStyle, content: string) {
    super()
    this.style = style
    this.content = content
  }

  toPresenter(): TextComponentPresenter {
    return {
      style: this.style,
      content: this.content
    }
  }
}

export interface Geolocation {
  latitude: number;
  longitude: number;
}
