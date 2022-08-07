import { IArtists } from "./IArtist";
import { IImage } from "./IImage";

export interface IAlbum {
    album_type: string;
    artists: [IArtists];
    available_markets: [string];
    external_urls: {
        spotify: string;
    }
    href: string;
    id: string;
    images: [IImage]
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}