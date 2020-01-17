import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { fetchUsers } from "./actions";
import { connect } from "react-redux";

const CharacterList = props => {
  console.log(props);

  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <div>
      <button onClick={() => props.history.push("/add-user")}>Add User</button>
      {props.users.map(char => (
        <CharacterCard key={char.id} charProps={props} user={char} />
      ))}
    </div>
  );
};

export default connect(
  state => {
    return {
      isFetching: state.isFetching,
      error: state.error,
      users: state.users
    };
  },
  { fetchUsers }
)(CharacterList);
