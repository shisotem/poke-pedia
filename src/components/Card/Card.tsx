import { FC } from "react";
import { Pokemon } from "../../utils/pokemon";

interface CardProps {
  pokemon: Pokemon;
}

const Card: FC<CardProps> = ({ pokemon }) => {
  return <div>Card</div>;
};

export default Card;
