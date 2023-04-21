import React from 'react';
import { fetchIssues } from '../../redux/issuesSlice/asyncAction';
import { useAppDispatch } from '../../redux/store';
import { SelectUrl } from '../../redux/searchSlice/selectors';
import { useSelector } from 'react-redux';
import { extractSaved, isSaved, saveState } from '../cacheStorage/storageService';
import { setBoards } from '../../redux/issuesSlice/slice';
import { selectIssuesData } from '../../redux/issuesSlice/selectors';
import { setMatches } from '../../redux/searchSlice/searchSlice';

const Button: React.FC = () => {
  const dispatch = useAppDispatch();
  const { url } = useSelector(SelectUrl);
  const boardsData = useSelector(selectIssuesData);
  const [urlN, setUrl] = React.useState('');

  const getIssues = () => {
    dispatch(fetchIssues(url));
  };
  const checkUrl = () => {
    const regex = /^https?:\/\/github.com\/([^/]+)\/([^/]+)$/;
    const match = url.match(regex);
    if (match) {
      if (url !== urlN && isSaved(url)) {
        saveState(urlN, boardsData);
        const data = extractSaved(url);
        dispatch(setBoards(data));
        setUrl(url);
      } else if (url !== urlN && !isSaved(url)) {
        saveState(urlN, boardsData);
        getIssues();
        setUrl(url);
      }
      dispatch(setBoards(boardsData));
      dispatch(setMatches({ username: match[1], repo: match[2] }));
    } else {
      alert('Please enter a valid URL');
    }
  };
  const onClick = () => {
    checkUrl();
  };

  return (
    <div>
      <button onClick={onClick} type="submit">
        Load Issues
      </button>
    </div>
  );
};

export default Button;
