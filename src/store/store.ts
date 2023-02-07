import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tikerSlice from '../components/tiker/tikerSlice';

export const store = configureStore({
  reducer: {
    tiker: tikerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
