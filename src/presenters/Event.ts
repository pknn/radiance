import { TextComponentStyle } from '../models/Event';

export abstract class DetailComponentPresenter { }

export interface ImageComponentPresenter extends DetailComponentPresenter {
  image_url: string;
}

export interface TextComponentPresenter extends DetailComponentPresenter {
  style: TextComponentStyle;
  content: string;
}

export interface GeolocationPresenter {
  latitude: number;
  longitude: number;
}

export interface EventPresenter {
  id?: string;
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
