type Pokemon = {
  name: string;
  url: string;
};

type PokemonResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

export const getAllPokemon = async (url: string): Promise<PokemonResponse> => {
  const response = await fetch(url);
  const data: PokemonResponse = await response.json();
  return data;
};
