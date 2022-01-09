export interface IComics {
    code: string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: IComicsData;
    etag: string;
}

export interface IComicsData {
    offset: string;
    limit: string;
    total: string;
    count: string;
    results: IComicsResult[];
}

export interface IComicsResult {
    id: string;
    digitalId: string;
    title: string;
    issueNumber: string;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: string;
    textObjects: TextObject[];
    resourceURI: string;
    urls: URL[];
    series: Series;
    variants: Series[];
    collections: Series[];
    collectedIssues: Series[];
    dates: DateElement[];
    prices: Price[];
    thumbnail: Thumbnail;
    images: Thumbnail[];
    creators: Characters;
    characters: Characters;
    stories: Stories;
    events: Events;
}

export interface Characters {
    available: string;
    returned: string;
    collectionURI: string;
    items: CharactersItem[];
}

export interface CharactersItem {
    resourceURI: string;
    name: string;
    role: string;
}

export interface Series {
    resourceURI: string;
    name: string;
}

export interface DateElement {
    type: string;
    date: string;
}

export interface Events {
    available: string;
    returned: string;
    collectionURI: string;
    items: Series[];
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Price {
    type: string;
    price: string;
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

export interface TextObject {
    type: string;
    language: string;
    text: string;
}

export interface URL {
    type: string;
    url: string;
}
