/* eslint-disable import/no-cycle */

import { CharactersService } from './CharactersService';
import { ComicsService } from './ComicsService';

export const Service = {
  Characters: CharactersService,
  Comics: ComicsService,

};
