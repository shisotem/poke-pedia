import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon, Pokemon } from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  
  const loadPokemon = async (data: Pokemon[]): Promise<void> => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon: Pokemon): Promise<any> => {
        const pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await getAllPokemon(initialURL);
      await loadPokemon(response.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  console.log(pokemonData);

  return <>{loading ? <h1>Loading...</h1> : <h1>Data loaded!</h1>}</>;
}

export default App;
