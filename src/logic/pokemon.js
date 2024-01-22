import React from "react";
import axios from "axios";
import "../visual/pokemonCard.css";
import "../visual/windows.css";
import { useState, useEffect } from "react";

function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null);
    const [selectedPokemon, setSelectedPokemon] = useState("ditto");

    useEffect(() => {
        getPokemon(selectedPokemon);
    }, [selectedPokemon]);

    const getPokemon = async (pok) => {
         axios.get(`https://pokeapi.co/api/v2/pokemon/${pok}`).then((response) => {
            setPokemonData(response.data);
        });
    };

    const handleSelectChange = (event) => {
        setSelectedPokemon(event.target.value);
    };

    return (
        <article>
            <h2>Pokemon </h2>
            <select value={selectedPokemon} onChange={handleSelectChange}>
                            <option value="1">Bulbasur</option>
                            <option value="4">Charmander</option>
                            <option value="7">Squirtle</option>
            </select>
            <div className="row py-4">
                
                {pokemonData && (
                <>                
                <div className="col-sm">
                    <div className="pokemon-card">
                            
                                <>
                                    <img
                                        className="pokemon-card-image"
                                        src={pokemonData.sprites.front_default}
                                        alt={pokemonData.name}
                                    />
                                    <h1 className="name">{pokemonData.name}</h1>
                                </>
                            
                    </div>
                </div>
                <div className="col-sm">
                    <div className="pokemon-card">
                            
                                <>
                                    <img
                                        className="pokemon-card-image"
                                        // src={getPokemon(pokemonData.id + 1).data}
                                        alt={"hi"}
                                    />
                                    <h1 className="name" >{pokemonData.name}</h1>
                                </>
                            
                    </div>
                </div>
                <div className="col-sm">
                    <div className="pokemon-card">
                                <>
                                    <img
                                        className="pokemon-card-image"
                                        src={pokemonData.sprites.front_default}
                                        alt={pokemonData.name}
                                    />
                                    <h1 className="name">{pokemonData.name}</h1>
                                </>
                            
                    </div>
                </div>
                </>
                
                    
                )}
                
                <div className="col-sm"></div>
            </div>
        </article>
    );
}

export default Pokemon;