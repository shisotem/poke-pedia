export type Pokemon = {
  name: string;
  url: string;
};

type PokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export const getAllPokemon = async (url: string): Promise<PokemonResponse> => {
  const response = await fetch(url);
  const data: PokemonResponse = await response.json();
  return data;
};

export type PokemonData = {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
};

export const getPokemon = async (url: string): Promise<PokemonData> => {
  const response = await fetch(url);
  const data: PokemonData = await response.json();
  return data;
};
