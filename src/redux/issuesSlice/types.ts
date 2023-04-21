export enum IssueState {
  TODO = 'open',
  IN_PROGRESS = 'in progress',
  DONE = 'closed',
  
}
export interface IIssue {
  title: string;
  number: number;
  state: IssueState;
  created_at: string;
  user: {
    login: string;
  };
  comments: number;
}
export interface IIssuesArray {
  opened: IIssue[];
  inProgress: IIssue[];
  closed: IIssue[];
}