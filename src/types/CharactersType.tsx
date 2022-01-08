export interface ICharacters {
    code: string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: ICharactersData;
    etag: string;
}

export interface ICharactersData {
    offset: string;
    limit: string;
    total: string;
    count: string;
    results: IResult[];
}

export interface IResult {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: URL[];
    thumbnail: IThumbnail;
    comics: Comics;
    stories: Stories;
    events: Comics;
    series: Comics;

}

export interface Comics {
    available: string;
    returned: string;
    collectionURI: string;
    items: ComicsItem[];
}

export interface ComicsItem {
    resourceURI: string;
    name: string;
}

export interface Stories {
    available: string;
    returned: string;
    collectionURI: string;
    items: StoriesItem[];
}

export interface StoriesItem {
    resourceURI: string;
    name: string;
    type: string;
}

export interface IThumbnail {
    path: string;
    extension: string;
}

export interface URL {
    type: string;
    url: string;
}
