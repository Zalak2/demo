import React,{useState} from 'react'
import axios from "axios"

const RandomJoke = () => {
    const [joke,setJoke]=useState("");
    const fetchJoke=()=>{
        axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((response)=>{
            const{setup,punchline}=response.data;
            setJoke(`${setup}  ${punchline}`);
        })
        .catch((error)=>{
            console.error(error);
        });
    };
  return (
    <div><h3>RandomJoke</h3>
    <button onClick={fetchJoke}>Joke</button>
    <p>{joke}</p>
    </div>
  )
}
export default RandomJoke