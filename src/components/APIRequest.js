
import React, { useState } from 'react';
import { useGetPokemonByNameQuery ,useGetPokemonListQuery} from '../api/apiSlice';
import LoadingIndicator from './Loading';
import ErrorMessage from './Error';

const APIRequest = () => {
    const [pokemonName, setPokemonName] = useState('');
    const { data: pokemonList, error: pokemonListError, isLoading: isLoadingPokemonList } = useGetPokemonListQuery();
    const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);
  
    const handleChange = e => {
      setPokemonName(e.target.value);
    };
  
    const handleSelectSuggestion = suggestion => {
      setPokemonName(suggestion);
    };
  
    const renderSuggestions = () => {
      if (isLoadingPokemonList) return <div>Loading suggestions...</div>;
      if (pokemonListError) return <div>Error fetching suggestions</div>;
  
      return (
        <ul>
          {pokemonList.results.map(pokemon => (
            <li key={pokemon.name} onClick={() => handleSelectSuggestion(pokemon.name)}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      );
    };
  
    return (
      <div>
        <input type="text" value={pokemonName} onChange={handleChange} />
        {pokemonName && renderSuggestions()}
        <button disabled={pokemonName.trim() === ''} onClick={() => setPokemonName(pokemonName.trim().toLowerCase())}>Search</button>
        {isLoading && <LoadingIndicator />}
        {error && <ErrorMessage error="Failed to fetch data" />}
        {data && (
          <div>
            <h2>{data.name}</h2>
            <img src={data.sprites?.front_default} alt={data.name} /> 
          </div>
        )}
      </div>
    );
  };
  

export default APIRequest;
