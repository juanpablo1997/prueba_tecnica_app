import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './slices/statusSlice';
import expenseReducer from './slices/expenseSlice';

const store = configureStore({
  reducer: {
    status: statusReducer,
    expenses: expenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
