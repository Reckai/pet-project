import React from 'react';
import { fetchIssues } from '../../redux/issuesSlice/asyncAction';
import { useAppDispatch } from '../../redux/store';
import { SelectUrl } from '../../redux/searchSlice/selectors';
import { useSelector } from 'react-redux';

type Props = {};

const Button = (props: Props) => {
  const dispatch = useAppDispatch();
  const url = useSelector(SelectUrl);
  const getIssues = async () => {
    dispatch(fetchIssues(url));
  };
  return (
    <div>
      <button onClick={getIssues} type="submit">
        Load Issues
      </button>
    </div>
  );
};

export default Button;
