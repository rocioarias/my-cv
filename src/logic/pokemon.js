import React from "react";
import axios from "axios";
import "../visual/pokemonCard.css";
import "../visual/windows.css";
import { useState, useEffect } from "react";

function Pokemon({lng}) {
    const [pokemonData, setPokemonData] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState("1");

    useEffect(() => {
        getPokemon(selectedPokemon);
    }, [selectedPokemon]);

    const getPokemon = async (pok) => {
        const pokemons = [];
        const requests = [
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pok}`),
            axios.get(`https://pokeapi.co/api/v2/pokemon/${parseInt(pok) + 1}`),
            axios.get(`https://pokeapi.co/api/v2/pokemon/${parseInt(pok) + 2}`)
        ];

        try {
            const responses = await Promise.all(requests);
            responses.forEach((response, index) => {
                pokemons[index] = response.data;
            });
            setPokemonData(pokemons);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSelectChange = (event) => {
        setSelectedPokemon(event.target.value);
    };

    return (
        <article>
            <h2>{lng === 'en' ? "Pokemons and their evolutions" : "Pokemones y sus evoluciones"}</h2>
            <select value={selectedPokemon} onChange={handleSelectChange}>
                <option value="1">Bulbasur</option>
                <option value="4">Charmander</option>
                <option value="7">Squirtle</option>
            </select>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
        {pokemonData && (
          <>
            {pokemonData.map((pokemon, index) => (
              <div className="pokemon-card mx-2 my-2" key={index}>
                <>
                  <img
                    className="pokemon-card-image"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                  <h1 className="name">{pokemon.name}</h1>
                </>
              </div>
            ))}
          </>
        )}
      </div>
    </article>
  );
}

export default Pokemon;
