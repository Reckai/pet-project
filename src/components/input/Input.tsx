import React, { ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import styles from './Input.module.scss';
import { useAppDispatch } from '../../redux/store';
import { setUrl } from '../../redux/searchSlice/searchSlice';

const Input = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState('');
  const updateSearchValue = React.useCallback(
    debounce((e) => {
      dispatch(setUrl(e));
    }, 275),
    [],
  );
  const setsearchvalue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter URL"
        value={value}
        onChange={(e) => setsearchvalue(e)}
      />
    </div>
  );
};

export default Input;
