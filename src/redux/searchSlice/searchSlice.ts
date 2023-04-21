import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TParams = {
  url: string,
  match: {
    username: string,
    repo: string,
  }
}
const initialState: TParams = {
  url: '',
  match: {
    username: '',
    repo: '',
  }
};

const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers:{
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
      
      
    },
    setMatches: (state, action: PayloadAction<{username: string, repo: string}>) => {
      state.match = action.payload;
    }
  },});
  export const {setUrl, setMatches} = searchSlice.actions;
  export default searchSlice.reducer;