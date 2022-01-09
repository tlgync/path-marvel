export interface ICharacterDetail {
    code: string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: ICharacterDetailData;
    etag: string;
}

export interface ICharacterDetailData {
    offset: string;
    limit: string;
    total: string;
    count: string;
    results: ICharacterDetailResult[];
}

export interface ICharacterDetailResult {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: URL[];
    thumbnail: Thumbnail;
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

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface URL {
    type: string;
    url: string;
}
