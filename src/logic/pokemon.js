import React from "react";
import axios from "axios";
import "../visual/pokemonCard.css";
import { useState, useEffect } from "react";
function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/1").then((response) => {
            setPokemonData(response.data);
        });
    };

    return (
        <div className="pokemon-card">
            {pokemonData && (
                <>
                    <img className="pokemon-card-image"
                        src={pokemonData.sprites.front_default}
                        alt={pokemonData.name}
                    />
                    <h2 className="name">{pokemonData.name}</h2>
                    <p className="type">Height: {pokemonData.height}</p>
                    <p className="type">Weight: {pokemonData.weight}</p>
                </>
            )}
        </div>
    );
}

export default Pokemon;