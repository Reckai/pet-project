import { PayloadAction, createSlice  } from '@reduxjs/toolkit';
import {  CardState, IIssuesState,IssueState } from './types';
import { fetchIssues } from './asyncAction';
const initialState: IIssuesState  = {
boards:[
  {id:0,
  title: IssueState.TODO,
  cards:[
  ]
  },
  {
  id:1,
  title: IssueState.IN_PROGRESS,
  cards:[]
  },
  {
  id:2,
  title: IssueState.DONE,
  cards:[]
  }
]
}

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers:{
    setBoards: (state, action: PayloadAction<IIssuesState>) => {
     state.boards = action.payload.boards;
    },
    moveCard: (state, action: PayloadAction<{fromBoard: number, toBoard: number, card: CardState}>) => {      
      const { fromBoard, toBoard, card } = action.payload;
      if(fromBoard === toBoard) return;
     state.boards[fromBoard].cards = state.boards[fromBoard].cards.filter((c) => c.id !== card.id);
     state.boards[toBoard].cards.push({id: state.boards[toBoard].cards.length , issue: card.issue});
     
    },
    moveItems(state, action: PayloadAction<{dragIndex: number, dropIndex: number, boardId: number}>){
  
    
      const     { dragIndex, dropIndex, boardId} = action.payload;

      
      const dragCardIndex = state.boards[boardId].cards.findIndex((card) => card.id === dragIndex)
      const dropCardIndex = state.boards[boardId].cards.findIndex((card) => card.id === dropIndex)
     
       state.boards[boardId].cards[dropCardIndex] = state.boards[boardId].cards.splice(dragCardIndex, 1, state.boards[boardId].cards[dropCardIndex])[0];

    }},
  






  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      const openIssues = action.payload.filter((issue) => issue.state === state.boards[0].title);
      const inProgressIssues = action.payload.filter((issue) => issue.state === state.boards[1].title);
      const closedIssues = action.payload.filter((issue) => issue.state === state.boards[2].title);
      const allIds = state.boards.map((board) => board.cards.map((card) => card.id)).flat();
      let MaxId =  allIds.length > 0 ? Math.max(...allIds) : 0 

      openIssues.forEach((issue) => {
        
        state.boards[0].cards.push({id:MaxId,issue})
       MaxId = MaxId + 1;

      });
      MaxId = 0;
      inProgressIssues.forEach((issue) => {  
       
        state.boards[1].cards.push({id:MaxId ,issue})
        MaxId = MaxId + 1;
      });
      MaxId = 0;
      closedIssues.forEach((issue) => {
        
        
        state.boards[2].cards.push({id:MaxId,issue})
        MaxId = MaxId + 1;
      });
    });
   builder.addCase(fetchIssues.rejected, (state, action) => {
      console.log('rejected', action.payload);
    },);
    builder.addCase(fetchIssues.pending, (state, action) => {
      state.boards.forEach((issue) => {
        issue.cards = [];
      } );
    },);
    
  },});


  export const { moveCard, moveItems, setBoards} = issuesSlice.actions;
  export default issuesSlice.reducer;
  