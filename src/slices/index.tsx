import { combineReducers } from '@reduxjs/toolkit';
import characterDetailReducer from './CharacterDetail';
import charactersReducer from './Characters';
import comicsReducer from './Comics';

const rootReducer = combineReducers({
  characters: charactersReducer,
  comics: comicsReducer,
  characterDetail: characterDetailReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
