import { Fetch } from '../components/Fetch';
import { BaseConfig } from '../config/BaseConfig';

export const CharactersService = {

  GetAllCharacters(limits: number) {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    };

    return Fetch(`${BaseConfig.api.release.user}characters?limit=${limits}&offset=0&ts=1&apikey=${BaseConfig.utilities.marvelPublicKey}&hash=${BaseConfig.utilities.hash}`, requestOptions);
  },
  GetCharacterComics(id: string) {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    };

    return Fetch(`${BaseConfig.api.release.user}characters/${id}/comics?limit=10&offset=0&ts=1&apikey=${BaseConfig.utilities.marvelPublicKey}&hash=${BaseConfig.utilities.hash}&orderBy=-onsaleDate`, requestOptions);
  },
  GetCharacterById(id: string) {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    };

    return Fetch(`${BaseConfig.api.release.user}characters/${id}?limit=10&offset=0&ts=1&apikey=${BaseConfig.utilities.marvelPublicKey}&hash=${BaseConfig.utilities.hash}`, requestOptions);
  },
  GetCharacterSearch(query: string) {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    };

    return Fetch(`${BaseConfig.api.release.user}characters?nameStartsWith=${query}&ts=1&apikey=${BaseConfig.utilities.marvelPublicKey}&hash=${BaseConfig.utilities.hash}`, requestOptions);
  },

};
