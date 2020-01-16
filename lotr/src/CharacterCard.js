import React from "react";
import axios from "axios";

const CharacterCard = props => {
  const handleDelete = id => {
    axios
      .delete(`https://api-hosting-test.herokuapp.com/users/${id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>bio: {props.data.bio}</p>
      <button>edit</button>
      <button onClick={() => handleDelete(props.data.id)}>delete</button>
    </div>
  );
};

export default CharacterCard;
