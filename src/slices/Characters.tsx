import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Service } from '../services';
import { AppDispatch, AppThunk } from '../store';
import { IResult } from '../types/CharactersType';

export type CharactersState = {
    loading: boolean;
    hasErrors: boolean;
    data: IResult[];
    cloneData: IResult[];
    limit: number
};
//
export const initialState: CharactersState = {
  loading: false,
  hasErrors: false,
  data: [],
  cloneData: [],
  limit: 20,
};
// A slice
const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    // addUser: (state, action: PayloadAction<IUser>) => {
    //   state.datas.unshift(action.payload);
    // },
    startLoading: state => {
      state.loading = true;
    },

    // action.payload dedigimiz donen data
    getCharacters: (state, action: PayloadAction<IResult[]>) => {
      state.data = action.payload;
      state.cloneData = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    searchCharacters: (state, action: PayloadAction<IResult[]>) => {
      state.data = action.payload;
    },
    getCharactersFailure: state => {
      state.loading = false;
      // handling Errors
      state.hasErrors = true;
    },
    incrementLimit: state => {
      state.limit += 10;
    },
  },
});

// Actions generated from the slice
const {
  startLoading,
  getCharacters,
  getCharactersFailure,
  incrementLimit,
} = charactersSlice.actions;

// export user selector to get the slice in any component
export const charactersSelector = (state: RootState) => state.characters;
// export The reducer
const charactersReducer = charactersSlice.reducer;
export default charactersReducer;
// Actions
export const getAllCharacters = (limit: number): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  Service.Characters.GetAllCharacters(limit).then(res => {
    if (res && res.status === 'Ok') {
      dispatch(getCharacters(res.data.results));
    } else {
      dispatch(getCharactersFailure());
    }
  });
};
export const searchCharacter = (query: string): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  Service.Characters.GetCharacterSearch(query).then(res => {
    if (res && res.status === 'Ok') {
      dispatch(getCharacters(res.data.results));
    } else {
      dispatch(getCharactersFailure());
    }
  });
};
export const incrementLimits = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(incrementLimit());
};
