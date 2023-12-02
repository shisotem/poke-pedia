import { FC } from "react";
import { PokemonData } from "../../utils/pokemon";

interface CardProps {
  pokemon: PokemonData;
}

const Card: FC<CardProps> = ({ pokemon }) => {
  return <div>Card</div>;
};

export default Card;
