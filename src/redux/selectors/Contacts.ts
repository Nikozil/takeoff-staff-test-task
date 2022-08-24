import { RootState } from 'redux/store';

export const selectList = (state: RootState) => state.contacts?.list;
export const selectIsLoading = (state: RootState) => state.contacts?.isLoading;
