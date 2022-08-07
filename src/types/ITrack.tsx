import { IAlbum } from "./IAlbum";

export interface ITrack {
    added_at: string;
    album: IAlbum;
    added_by: {
        external_urls: {
            spotify: string;
        },
        href: string;
        id: string, 
        type: string; 
        uri: string;
    };
    is_local: boolean;
    primary_color: string;
    track: ITrack;
    video_thumbnail: {
        url: string;
    };
    explicit?: boolean;
    episode?: boolean;
    duration_ms: number;
}

export interface ITracks {
    href: string;
    album?: IAlbum;
    items: [ITrack],
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}
