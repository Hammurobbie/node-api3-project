import React, { useState } from "react";
import axios from "axios";

const EditUser = props => {
  const [formInput, setFormInput] = useState({
    name: ""
  });
  console.log(formInput);
  console.log(props);

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .put(
        `https://api-hosting-test.herokuapp.com/users/${props.match.params.id}`,
        formInput
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.message));

    props.history.push("/");
  };

  const handleChanges = e => {
    setFormInput({ name: e.target.value });
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" onChange={handleChanges} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditUser;
