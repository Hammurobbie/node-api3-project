import React from "react";
import axios from "axios";

const CharacterCard = props => {
  const handleDelete = id => {
    axios
      .delete(`https://api-hosting-test.herokuapp.com/users/${id}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err.message));
  };

  return (
    <div>
      <h1>{props.user.name}</h1>
      <button
        onClick={() =>
          props.charProps.history.push(`/edit-user/${props.data.id}`)
        }
      >
        edit
      </button>
      <button onClick={() => handleDelete(props.user.id)}>delete</button>
    </div>
  );
};

export default CharacterCard;
