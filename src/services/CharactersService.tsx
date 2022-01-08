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

    return Fetch(`http://gateway.marvel.com/v1/public/characters?limit=${limits}&offset=0&ts=1&apikey=${BaseConfig.utilities.marvelPublicKey}&hash=${BaseConfig.utilities.hash}`, requestOptions);
  },

};
