import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IIssue, IssueState, IIssuesArray } from './types';
import { fetchIssues } from './asyncAction';
const initialState:IIssuesArray  = {
  opened: [],
  inProgress: [],
  closed: [],
}

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
  setOpenIssues: (state, action: PayloadAction<IIssue[]>) => {
    state.opened = action.payload;
  },
  setINProgressIssues: (state, action: PayloadAction<IIssue[]>) => {
    state.inProgress = action.payload; },
  setClosedIssues: (state, action: PayloadAction<IIssue[]>) => {
    state.closed = action.payload;},
    moveItem: (state, action: PayloadAction<{number: number, toColumn: IIssue[]}>) => {

    },
  },
  

  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.opened = action.payload.filter((issue) => issue.state === IssueState.TODO);
      state.inProgress = action.payload.filter((issue) => issue.state === IssueState.IN_PROGRESS);
      state.closed = action.payload.filter((issue) => issue.state === IssueState.DONE);
    });
   builder.addCase(fetchIssues.rejected, (state, action) => {
      console.log('rejected', action.payload);
       state.opened  = [];
       state.closed = [];
       state.inProgress = [];
   },);
    
  },});


  export const { setOpenIssues } = issuesSlice.actions;
  export default issuesSlice.reducer;
  