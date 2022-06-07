import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';

const urlAPI = 'https://pokeapi.co/api/v2/pokemon';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemon1, setPokemon1] = useState([])

  const getFech = async () =>{
    try {
      const queryFetch = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
      )
      const queryFetchParse = await queryFetch.json()
      setPokemon1(queryFetchParse.results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetch(urlAPI)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data.results))
      .then (getFech())
  }, []);


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {pokemon.map((poke) => (
        <h2 key={poke.name}> {poke.name} </h2>
      ))}
      <div style={{color:"blue"}}>
      {pokemon1.map((poke) => (
        <h2 key={poke.name}> {poke.name} </h2>
      ))}
      </div>
    </div>
  );
}
