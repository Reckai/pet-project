import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TParams } from '../issuesSlice/asyncAction';

const initialState: TParams = {
  url: '',
};

const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers:{
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    clearUrl: (state) => {
      state.url = '';
    } 
  },});
  export const {setUrl, clearUrl} = searchSlice.actions;
  export default searchSlice.reducer;