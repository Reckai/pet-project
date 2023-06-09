import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IIssue } from "./types";


export const fetchIssues = createAsyncThunk<IIssue[], string>(
  'issues/fetchIssues',
  async (url:string) => {
  
    let apiUrl = '';
    const githubUrl = 'https://api.github.com/repos/<username>/<repo>/issues?state=all';
    const regex = /^https?:\/\/github.com\/([^/]+)\/([^/]+)$/;
    const match = url.match(regex);
    if(match){
      const username = match[1];
      const repo = match[2];

      apiUrl = githubUrl.replace('<username>', username).replace('<repo>', repo);
    }
    const {data} = await axios.get<IIssue[]>(`${apiUrl}`);

    
   return data;
  },)