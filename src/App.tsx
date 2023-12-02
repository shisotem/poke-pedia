import { useEffect } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    const fetchPokemonData = async () => {
      // get all pokemon data
      const response = await getAllPokemon(initialURL);
      console.log(response);
    };
    fetchPokemonData();
  }, []);

  return <></>;
}

export default App;
