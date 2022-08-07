import { ITracks } from "./ITrack";
import { IImage } from "./IImage";
import { IOwner } from "./IOwner";

export interface IPlaylist {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    }
    followers: {
        href: string;
        total: number;
    }
    href: string;
    id: string;
    images: [IImage];
    name: string;
    owner: IOwner;
    primary_color: string
    public: boolean;
    snapshot_id: string;
    tracks: ITracks
    type: string;
    uri: string;
}
