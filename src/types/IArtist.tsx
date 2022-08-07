export interface IArtist {
    key: number;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
    external_urls: {
        spotify: string;
    },
}

export interface IArtists {
    artists: IArtist;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}