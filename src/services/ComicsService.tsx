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

    return Fetch(`${BaseConfig.api.release.user}comics?limit=100&offset=0&ts=1&apikey=${BaseConfig.utilities.marvelPublicKey}&hash=${BaseConfig.utilities.hash}`, requestOptions);
  },

};
