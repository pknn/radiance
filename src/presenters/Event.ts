export interface EventPresenter {
  title: string;
  description: string;
  details: DetailComponentPresenter[];
  capacity: number;
  location_name: string;
  geolocation?: GeolocationPresenter;
  facebook_link?: string;
  instagram_link?: string;
  website_link?: string;
}

export type DetailComponentPresenter =
  | ImageComponentPresenter
  | TextComponentPresenter;

export interface ImageComponentPresenter {
  image_url: string;
}

export type TextComponentStyle = "heading" | "subheading" | "body" | "quote";
export interface TextComponentPresenter {
  style: TextComponentStyle;
  content: string;
}

export interface GeolocationPresenter {
  latitude: number;
  longitude: number;
}
