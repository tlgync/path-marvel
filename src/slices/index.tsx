import { combineReducers } from '@reduxjs/toolkit';
import charactersReducer from './Characters';
import comicsReducer from './Comics';

const rootReducer = combineReducers({
  characters: charactersReducer,
  comics: comicsReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
