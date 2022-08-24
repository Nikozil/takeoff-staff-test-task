import { createSelector } from '@reduxjs/toolkit';
import { filterList } from 'helpers/common-functions';
import { RootState } from 'redux/store';

export const selectList = (state: RootState) => state.contacts?.list;
export const selectIsLoading = (state: RootState) => state.contacts?.isLoading;
export const selectSearch = (state: RootState) => state.contacts?.search;

export const selectFilteredList = createSelector(
  [selectSearch, selectList],
  filterList
);
