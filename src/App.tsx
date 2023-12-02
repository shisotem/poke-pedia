import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // get all pokemon data
      const response = await getAllPokemon(initialURL);
      console.log(response);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  return <>{loading ? <h1>Loading...</h1> : <h1>Data loaded!</h1>}</>;
}

export default App;
