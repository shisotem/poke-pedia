import { FC } from "react";
import { PokemonData } from "../../utils/pokemon";
import "./Card.css";

interface CardProps {
  pokemon: PokemonData;
}

const Card: FC<CardProps> = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img
          src={pokemon.sprites.front_default}
          alt={`image of ${pokemon.name}`}
        />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>Types</div>
        {pokemon.types.map((type, i) => {
          return (
            <div key={i}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">Weight: {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">Height: {pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">Abilities: {pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
