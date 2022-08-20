import React from 'react';
import PokeCard from "../pokeCard/pokeCard";
const PokemonList = ({ data }) => {
    return (
        <>
            {
                data.length > 0 && data.map((poke) => {
                    return (
                        <PokeCard key={poke.name} pokemon={poke.details}/>
                    )
                })
            }
        </>
    )
}

export default PokemonList;