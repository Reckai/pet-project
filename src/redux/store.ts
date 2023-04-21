import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import Issues from './issuesSlice/slice'
import Search from './searchSlice/searchSlice'

export const store = configureStore({
  reducer: {
    Issues,
    Search,
    
  },
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch