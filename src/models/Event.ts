/// <references path="index.ts" />

import { JSONArray, JSONObject, JSONValue } from "zapatos/db";
import { events } from "zapatos/schema";

export namespace Model {
  export class Event {
    title: string;
    description: string;
    details: [DetailComponent];
    capacity: number;
    locationName: string;
    geolocation?: Geolocation;
    facebookLink?: string;
    instagramLink?: string;
    websiteLink?: string;

    constructor(
      title: string,
      description: string,
      details: [DetailComponent],
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

    toPersistModel(): events.Insertable {
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

    static fromPersistModel({
      title,
      description,
      details,
      capacity,
      location_name,
      latitude,
      longitude,
      facebook_link,
      instagram_link,
      website_link,
    }: events.JSONSelectable) {
      return new Event(
        title,
        description,
        JSON.parse(details),
        capacity,
        location_name,
        latitude && longitude ? { latitude, longitude } : undefined,
        facebook_link || undefined,
        instagram_link || undefined,
        website_link || undefined
      );
    }
  }

  export type DetailComponent = ImageComponent | TextComponent;

  export interface ImageComponent extends JSONObject {
    imageUrl: string;
  }

  export type TextComponentStyle = "heading" | "subheading" | "body" | "quote";
  export interface TextComponent extends JSONObject {
    style: TextComponentStyle;
    content: string;
  }

  export interface Geolocation {
    latitude: number;
    longitude: number;
  }
}
