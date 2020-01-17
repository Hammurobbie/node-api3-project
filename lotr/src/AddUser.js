import React, { useState } from "react";
import axios from "axios";

const AddUser = props => {
  const [formInput, setFormInput] = useState({
    name: ""
  });
  console.log(formInput);

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .post("https://api-hosting-test.herokuapp.com/users/", formInput)
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
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="name" onChange={handleChanges} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
