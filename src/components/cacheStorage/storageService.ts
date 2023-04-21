import storage from "./cacheStorage";
import { IIssuesState } from "../../redux/issuesSlice/types";






export const saveState = (url:string,state: IIssuesState) => {
  
    storage.setItem(url, JSON.stringify(state.boards));
  

}

export const isSaved = (url:string): boolean => {
 return !!storage.getItem(url);
}

export const extractSaved = (url:string): IIssuesState => {

  const storedObject = storage.getItem(url)
  if(!storedObject) return {boards:[]}
  
  
  const boards = JSON.parse(storedObject)
  return {boards}
} 

