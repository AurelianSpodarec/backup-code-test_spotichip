import { ITrack } from "./ITrack";

export interface IResCategories {
    href?: string;
    items?: [ITrack];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}