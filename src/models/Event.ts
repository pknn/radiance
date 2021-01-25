/// <references path="index.ts" />

import { JSONArray, JSONObject } from "zapatos/db";
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

    toInsertableModel(): events.Insertable {
      return {
        title: this.title,
        description: this.description,
        details: this.details,
        capacity: this.capacity,
        location_name: this.locationName,
        latitude: this.geolocation?.latitude,
        longitude: this.geolocation?.longitude,
        facebook_link: this.facebookLink,
        instagram_link: this.instagramLink,
        website_link: this.websiteLink,
      };
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
