import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Service } from '../services';
import { AppDispatch, AppThunk } from '../store';
import { IResult } from '../types/CharactersType';

export type CharacterDetailState = {
    detailLoading: boolean;
    detailHasErrors: boolean;
    detailData: IResult[];
};
//
export const initialState: CharacterDetailState = {
  detailLoading: false,
  detailHasErrors: false,
  detailData: [],
};
// A slice
const characterDetailSlice = createSlice({
  name: 'characterDetail',
  initialState,
  reducers: {
    // addUser: (state, action: PayloadAction<IUser>) => {
    //   state.datas.unshift(action.payload);
    // },
    startLoading: state => {
      state.detailLoading = true;
    },

    // action.payload dedigimiz donen data
    getCharacter: (state, action: PayloadAction<IResult[]>) => {
      state.detailData = action.payload;
      state.detailLoading = false;
      state.detailHasErrors = false;
    },
    getCharacterFailure: state => {
      state.detailLoading = false;
      // handling Errors
      state.detailHasErrors = true;
    },
  },
});

// Actions generated from the slice
const {
  startLoading,
  getCharacter,
  getCharacterFailure,
} = characterDetailSlice.actions;

// export user selector to get the slice in any component
export const characterDetailSelector = (state: RootState) => state.characterDetail;
// export The reducer
const characterDetailReducer = characterDetailSlice.reducer;
export default characterDetailReducer;
// Actions
export const getCharacterDetail = (id: string): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  Service.Characters.GetCharacterById(id).then(res => {
    if (res && res.status === 'Ok') {
      dispatch(getCharacter(res.data.results));
    } else {
      dispatch(getCharacterFailure());
    }
  });
};
