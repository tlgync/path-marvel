import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Service } from '../services';
import { AppDispatch, AppThunk } from '../store';
import { IComicsResult } from '../types/ComicsType';

export type ComicsState = {
    comicsLoading: boolean;
    comicsHasErrors: boolean;
    comicsData: IComicsResult[]
};
//
export const initialState: ComicsState = {
  comicsLoading: false,
  comicsHasErrors: false,
  comicsData: [],
};
// A slice
const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    startLoading: state => {
      state.comicsLoading = true;
    },
    getComics: (state, action: PayloadAction<IComicsResult[]>) => {
      state.comicsData = action.payload;
      state.comicsLoading = false;
      state.comicsHasErrors = false;
    },
    getComicsFailure: state => {
      state.comicsLoading = false;
      // handling Errors
      state.comicsHasErrors = true;
    },
  },
});

// Actions generated from the slice
const {
  startLoading,
  getComics,
  getComicsFailure,
} = comicsSlice.actions;

// export comics selector to get the slice in any component
export const comicsSelector = (state: RootState) => state.comics;
// export The reducer
const comicsReducer = comicsSlice.reducer;
export default comicsReducer;
// Actions
export const getComicsDetail = (id:string): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  Service.Characters.GetCharacterComics(id).then((res:any) => {
    if (res && res.status === 'Ok') {
      dispatch(getComics(res.data.results));
    } else {
      dispatch(getComicsFailure());
    }
  });
};
