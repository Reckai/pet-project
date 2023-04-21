import { RootState } from '../store';

export const selectOpenIssuesData = (state: RootState) => state.Issues.opened;
export const selectInProgressIssuesData = (state: RootState) => state.Issues.inProgress;
export const selectClosedIssuesData = (state: RootState) => state.Issues.closed;