import { Fetch } from '../components/Fetch';
import { BaseConfig } from '../config/BaseConfig';

export const ComicsService = {

  GetAllComics() {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: '*/*',
      },
    };

    return Fetch(`http://gateway.marvel.com/v1/public/comics?limit=100&offset=0&ts=1&apikey=${BaseConfig.utilities.marvelPublicKey}&hash=${BaseConfig.utilities.hash}`, requestOptions);
  },

};
