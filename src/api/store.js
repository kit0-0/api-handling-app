
import { configureStore } from '@reduxjs/toolkit';
import { pokeApi } from './apiSlice'; 

export const store = configureStore({
  reducer: {
    [pokeApi.reducerPath]: pokeApi.reducer, 
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokeApi.middleware),
});
