import { configureStore } from '@reduxjs/toolkit';

// reducer
import cartReducer from './feature/cart/cartSlice';
import filterReducer from './feature/filter/filterSlice';
import { API } from './api';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(API.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
