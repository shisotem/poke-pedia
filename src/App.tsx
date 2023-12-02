import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon, Pokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";

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

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="pokemonCardContainer">
          {pokemonData.map((pokemon, i) => {
            return <Card key={i} pokemon={pokemon} />;
          })}
        </div>
      )}
    </>
  );
}

export default App;
