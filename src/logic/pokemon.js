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
            <div className="row pt-2">
                {pokemonData && (
                    <div style={{ display: "flex",alignItems: "center" }}>
                        <div className="col-sm">
                            <div className="pokemon-card">
                                <>
                                    <img
                                        className="pokemon-card-image"
                                        src={pokemonData[0].sprites.front_default}
                                        alt={pokemonData[0].name}
                                    />
                                    <h1 className="name">{pokemonData[0].name}</h1>
                                </>
                            </div>
                        </div>
                        <div className="col-sm px-1">
                            <div className="pokemon-card">
                                <>
                                    <img
                                        className="pokemon-card-image"
                                        src={pokemonData[1].sprites.front_default}
                                        alt={pokemonData[1].name}
                                    />
                                    <h1 className="name">{pokemonData[1].name}</h1>
                                </>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="pokemon-card">
                                <>
                                    <img
                                        className="pokemon-card-image"
                                        src={pokemonData[2].sprites.front_default}
                                        alt={pokemonData[2].name}
                                    />
                                    <h1 className="name">{pokemonData[2].name}</h1>
                                </>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </article>
    );
}

export default Pokemon;