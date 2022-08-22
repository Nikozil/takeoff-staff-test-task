import { configureStore } from '@reduxjs/toolkit';
import reducers from '../reducers';

const store = configureStore({
  reducer: reducers,
});

export type AppStateType = ReturnType<typeof store.getState>;

export default store;
