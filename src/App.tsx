import { useEffect, useState } from "react";
import "./App.css";
import {
  getAllPokemon,
  getPokemon,
  Pokemon,
  PokemonData,
} from "./utils/pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  const [nextUrl, setNextUrl] = useState("");

  const loadPokemon = async (data: Pokemon[]): Promise<void> => {
    const _pokemonData = await Promise.all(
      data.map(async (pokemon: Pokemon): Promise<PokemonData> => {
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
      setNextUrl(response.next);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const handleNextPage = async () => {
    setLoading(true);
    const response = await getAllPokemon(nextUrl);
    await loadPokemon(response.results);
    setNextUrl(response.next);
    setLoading(false);
  };

  const handlePrevPage = async () => {};

  return (
    <>
      <Navbar />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
          <div className="btn">
            <button onClick={handlePrevPage}>Prev</button>
            <button onClick={handleNextPage}>Next</button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
