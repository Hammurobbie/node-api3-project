import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CharacterCard from "./CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-hosting-test.herokuapp.com/users")
      .then(res => {
        console.log(res.data);
        setCharacters(res.data);
        console.log(characters);
      })
      .catch(err => console.log(err.message));
  }, [characters]);

  return (
    <div className="App">
      {characters.map(char => (
        <CharacterCard key={char.id} data={char} />
      ))}
    </div>
  );
}

export default App;
