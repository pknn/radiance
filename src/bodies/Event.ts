import { DetailComponent, ImageComponent, TextComponent, TextComponentStyle } from "../models/Event";

export interface EventCreateRequestBody {
    title: string;
    description: string;
    details: DetailComponentRequestBody[];
    capacity: number;
    location_name: string;
    geolocation?: GeolocationRequestBody;
    facebook_link?: string;
    instagram_link?: string;
    website_link?: string;
}

export abstract class DetailComponentRequestBody {
    abstract toDetailComponent(): DetailComponent
}

export class ImageComponentRequestBody extends DetailComponentRequestBody {
    image_url: string;

    constructor(imageUrl: string) {
        super()
        this.image_url = imageUrl
    }

    toDetailComponent(): ImageComponent {
        return new ImageComponent(this.image_url)
    }
}

export class TextComponentRequestBody extends DetailComponentRequestBody {
    style: TextComponentStyle;
    content: string;

    constructor(style: TextComponentStyle, content: string) {
        super()
        this.style = style
        this.content = content
    }

    toDetailComponent(): TextComponent {
        return new TextComponent(this.style, this.content)
    }
}

export interface GeolocationRequestBody {
    latitude: number;
    longitude: number;
}