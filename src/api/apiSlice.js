
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonByName: builder.query({
      query: name => `pokemon/${name}`,
    }),
    getPokemonList: builder.query({
      query: () => 'pokemon',
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokeApi;

export default pokeApi.reducer;
